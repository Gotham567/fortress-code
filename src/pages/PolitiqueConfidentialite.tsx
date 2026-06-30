import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Politique de confidentialité & RGPD"
        description="Politique de confidentialité de CyberSecure : collecte de données, finalité du traitement, durée de conservation, droits RGPD et politique de cookies."
        canonical="/politique-confidentialite"
        noIndex={true}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                Politique de <span className="text-gradient">confidentialité</span>
              </h1>
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Collecte des données personnelles</h2>
                  <p>Nous collectons uniquement les données nécessaires au traitement de vos demandes via notre formulaire de contact : nom, prénom, adresse email professionnelle, numéro de téléphone, nom de société et message.</p>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Finalité du traitement</h2>
                  <p>Vos données sont utilisées exclusivement pour répondre à vos demandes de contact, vous fournir des devis personnalisés et vous informer de nos services de cybersécurité. Elles ne sont jamais revendues à des tiers.</p>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Durée de conservation</h2>
                  <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec CyberSecure, conformément aux recommandations de la CNIL.</p>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Vos droits (RGPD)</h2>
                  <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de limitation et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous via notre <Link to="/contact" className="text-primary hover:underline">page de contact</Link>.</p>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Cookies</h2>
                  <p>Ce site n'utilise pas de cookies de suivi, publicitaires ou analytiques. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default PolitiqueConfidentialite;
