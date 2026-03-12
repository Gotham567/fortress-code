import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
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
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="votre@email.com"
              aria-label="Adresse email pour la newsletter"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground flex-1"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8">
              S'abonner
            </Button>
          </div>
          <p className="text-muted-foreground text-xs mt-4">
            Consultez notre <Link to="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</Link> pour plus d'informations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
