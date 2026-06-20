import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nom, prenom, email, telephone, societe, message } = await req.json();

    if (!nom || !prenom || !email || !societe || !message) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ nom, prenom, email, telephone, societe, message });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Erreur lors de l'enregistrement" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send notification email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CyberSecure <onboarding@resend.dev>",
            to: ["vraih1915@gmail.com"],
            subject: `[CyberSecure] Nouveau message de ${prenom} ${nom}`,
            html: `
              <h2>Nouveau message depuis le formulaire de contact</h2>
              <p><strong>Nom :</strong> ${nom}</p>
              <p><strong>Prénom :</strong> ${prenom}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Téléphone :</strong> ${telephone || "Non renseigné"}</p>
              <p><strong>Société :</strong> ${societe}</p>
              <hr/>
              <p><strong>Message :</strong></p>
              <p>${message}</p>
            `,
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error("Resend email send failed:", errText);
        } else {
          console.log("Email sent successfully via Resend");
        }
      } catch (emailErr) {
        console.error("Resend email send error:", emailErr);
      }
    } else {
      console.error("RESEND_API_KEY not configured");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Erreur serveur" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
