import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Politique de <span className="text-gradient">confidentialité</span>
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Collecte des données</h2>
                <p>Nous collectons uniquement les données nécessaires au traitement de vos demandes via notre formulaire de contact : nom, prénom, email, téléphone, société et message.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Finalité du traitement</h2>
                <p>Vos données sont utilisées exclusivement pour répondre à vos demandes de contact et vous informer de nos services. Elles ne sont jamais revendues à des tiers.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Durée de conservation</h2>
                <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec AlgoSecure.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Vos droits</h2>
                <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à l'adresse indiquée sur notre page de contact.</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Cookies</h2>
                <p>Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default PolitiqueConfidentialite;
