import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";

const terms = [
  { term: "Pentest", def: "Test d'intrusion visant à identifier les vulnérabilités d'un système en simulant une attaque réelle." },
  { term: "PASSI", def: "Prestataire d'Audit de la Sécurité des Systèmes d'Information, qualification délivrée par l'ANSSI." },
  { term: "ISO 27001", def: "Norme internationale définissant les exigences pour un système de management de la sécurité de l'information (SMSI)." },
  { term: "CERT", def: "Computer Emergency Response Team — équipe de réponse aux incidents de sécurité informatique." },
  { term: "Forensique", def: "Analyse post-incident permettant de comprendre l'origine, l'étendue et l'impact d'une cyberattaque." },
  { term: "RSSI", def: "Responsable de la Sécurité des Systèmes d'Information, en charge de la politique de sécurité d'une organisation." },
  { term: "Surface d'attaque", def: "Ensemble des points d'entrée potentiels qu'un attaquant pourrait exploiter pour compromettre un système." },
  { term: "DORA", def: "Digital Operational Resilience Act — règlement européen sur la résilience opérationnelle numérique du secteur financier." },
  { term: "RGS", def: "Référentiel Général de Sécurité, cadre réglementaire français pour la sécurité des systèmes d'information publics." },
  { term: "OSCP / OSEP", def: "Certifications offensives délivrées par Offensive Security, attestant de compétences avancées en tests d'intrusion." },
];

const Glossaire = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Glossaire</span> cybersécurité
            </h1>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Les termes essentiels de la cybersécurité expliqués simplement.
            </p>

            <div className="space-y-6">
              {terms.map((t, i) => (
                <motion.div
                  key={t.term}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.term}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.def}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Glossaire;
