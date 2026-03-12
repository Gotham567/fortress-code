import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Mentions <span className="text-gradient">légales</span>
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Éditeur du site</h2>
                <p>AlgoSecure SAS<br />Siège social : Lyon, France<br />SIRET : [À compléter]<br />Directeur de la publication : [À compléter]</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Hébergement</h2>
                <p>Le site est hébergé par Lovable Cloud.<br />Adresse : [À compléter]</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Propriété intellectuelle</h2>
                <p>L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Contact</h2>
                <p>Pour toute question, vous pouvez nous contacter via notre formulaire de contact ou par téléphone au 04 26 78 24 86.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default MentionsLegales;
