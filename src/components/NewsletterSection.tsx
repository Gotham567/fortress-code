import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Email invalide", description: "Veuillez entrer une adresse email valide.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("newsletter_subscribers" as any).insert({ email: email.trim().toLowerCase() } as any);
      if (error) {
        if (error.code === "23505") {
          toast({ title: "Déjà inscrit", description: "Cet email est déjà abonné à notre newsletter." });
        } else {
          throw error;
        }
      } else {
        setSuccess(true);
        setEmail("");
      }
    } catch {
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding border-t border-border" id="contact" aria-label="Newsletter cybersécurité">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Abonnez-vous à notre <span className="text-gradient">newsletter</span> cybersécurité
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Recevez nos actualités, guides pratiques, alertes de sécurité et invitations aux événements directement dans votre boîte mail.
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-primary"
            >
              <CheckCircle className="h-6 w-6" />
              <p className="font-heading font-semibold">Merci ! Vous êtes inscrit à notre newsletter.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                aria-label="Adresse email pour la newsletter"
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground flex-1"
                required
                disabled={loading}
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "S'abonner"}
              </Button>
            </form>
          )}

          <p className="text-muted-foreground text-xs mt-4">
            Consultez notre <Link to="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> pour plus d'informations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
