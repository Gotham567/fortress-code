import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const bureaux = [
  { ville: "Lyon (siège)", adresse: "40 rue de Bruxelles, 69009 Lyon" },
  { ville: "Paris", adresse: "8 rue de Hanovre, 75002 Paris" },
  { ville: "Saint-Étienne", adresse: "3 rue Javelin Pagnon, 42000 Saint-Étienne" },
  { ville: "Grenoble", adresse: "17 rue Jean Prévost, 38000 Grenoble" },
  { ville: "Annecy", adresse: "21 avenue de Genève, 74000 Annecy" },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    societe: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.prenom || !formData.email || !formData.societe || !formData.message) {
      toast({ title: "Champs manquants", description: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact", { body: formData });
      if (error) throw error;
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
      setFormData({ nom: "", prenom: "", email: "", telephone: "", societe: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const contactJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://securecyber.fr/contact",
      "name": "Contact CyberSecure — Devis audit cybersécurité",
      "description": "Contactez CyberSecure pour un devis d'audit, un accompagnement en cybersécurité ou une urgence CERT. Bureaux à Lyon, Paris, Saint-Étienne, Grenoble et Annecy.",
      "url": "https://securecyber.fr/contact",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://securecyber.fr/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://securecyber.fr/contact" }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "CyberSecure",
      "telephone": "+33769323019",
      "email": "contact@cybersecure.fr",
      "url": "https://securecyber.fr",
      "address": [
        { "@type": "PostalAddress", "streetAddress": "40 rue de Bruxelles", "addressLocality": "Lyon", "postalCode": "69009", "addressCountry": "FR" },
        { "@type": "PostalAddress", "streetAddress": "8 rue de Hanovre", "addressLocality": "Paris", "postalCode": "75002", "addressCountry": "FR" },
        { "@type": "PostalAddress", "streetAddress": "3 rue Javelin Pagnon", "addressLocality": "Saint-Étienne", "postalCode": "42000", "addressCountry": "FR" },
        { "@type": "PostalAddress", "streetAddress": "17 rue Jean Prévost", "addressLocality": "Grenoble", "postalCode": "38000", "addressCountry": "FR" },
        { "@type": "PostalAddress", "streetAddress": "21 avenue de Genève", "addressLocality": "Annecy", "postalCode": "74000", "addressCountry": "FR" }
      ],
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00" }
      ],
      "priceRange": "€€€"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact — Demandez un devis cybersécurité"
        description="Contactez CyberSecure pour un devis d'audit, un accompagnement en cybersécurité ou une urgence CERT. Bureaux à Lyon, Paris, Saint-Étienne, Grenoble et Annecy."
        canonical="/contact"
        jsonLd={contactJsonLd}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                Contactez-<span className="text-gradient">nous</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Une question sur nos services d'<Link to="/audit" className="text-primary hover:underline">audit</Link>, de <Link to="/conseil" className="text-primary hover:underline">conseil</Link> ou besoin d'une intervention urgente de notre <Link to="/cert" className="text-primary hover:underline">CERT</Link> ? Nos experts sont à votre écoute.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
                <div className="card-glass rounded-2xl p-8 md:p-10">
                  <h2 className="font-heading text-xl font-bold text-foreground mb-6">Envoyez-nous un message</h2>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input id="nom" placeholder="Votre nom" className="bg-secondary border-border" value={formData.nom} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input id="prenom" placeholder="Votre prénom" className="bg-secondary border-border" value={formData.prenom} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email professionnel *</Label>
                        <Input id="email" type="email" placeholder="votre@entreprise.com" className="bg-secondary border-border" value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone</Label>
                        <Input id="telephone" type="tel" placeholder="04 XX XX XX XX" className="bg-secondary border-border" value={formData.telephone} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="societe">Société *</Label>
                      <Input id="societe" placeholder="Nom de votre entreprise" className="bg-secondary border-border" value={formData.societe} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre besoin *</Label>
                      <Textarea id="message" placeholder="Décrivez votre projet, le périmètre à auditer ou votre besoin en cybersécurité..." rows={5} className="bg-secondary border-border" value={formData.message} onChange={handleChange} />
                    </div>
                    <Button type="submit" size="lg" disabled={isLoading} className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold w-full sm:w-auto px-10">
                      {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Envoi en cours...</>) : "Envoyer le message"}
                    </Button>
                  </form>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-6">
                <div className="card-glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-heading font-semibold text-foreground">Téléphone</h3>
                  </div>
                  <a href="tel:0769323019" className="text-muted-foreground hover:text-primary transition-colors">07 69 32 30 19</a>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-heading font-semibold text-foreground">Email</h3>
                  </div>
                  <a href="mailto:contact@cybersecure.fr" className="text-muted-foreground hover:text-primary transition-colors">contact@cybersecure.fr</a>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-heading font-semibold text-foreground">Horaires</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Lun-Ven : 9h - 18h</p>
                  <p className="text-primary text-sm font-medium mt-1">CERT : 24h/24, 7j/7</p>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-heading font-semibold text-foreground">Nos bureaux en France</h3>
                  </div>
                  <div className="space-y-3">
                    {bureaux.map((b) => (
                      <div key={b.ville}>
                        <p className="text-foreground text-sm font-medium">{b.ville}</p>
                        <p className="text-muted-foreground text-xs">{b.adresse}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Contact;
