import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const terms = [
  { term: "Pentest (test d'intrusion)", def: "Évaluation de sécurité où un expert simule des cyberattaques réelles contre un système pour identifier les vulnérabilités exploitables avant qu'un attaquant ne les découvre. Les pentests peuvent être réalisés en boîte noire, grise ou blanche." },
  { term: "PASSI", def: "Prestataire d'Audit de la Sécurité des Systèmes d'Information. Qualification délivrée par l'ANSSI garantissant les compétences techniques, la méthodologie et la confidentialité du prestataire d'audit." },
  { term: "ISO 27001", def: "Norme internationale définissant les exigences pour un système de management de la sécurité de l'information (SMSI). La certification ISO 27001 atteste qu'une organisation applique les meilleures pratiques de sécurité." },
  { term: "CERT (Computer Emergency Response Team)", def: "Équipe de réponse aux incidents de sécurité informatique. Le CERT intervient pour contenir, analyser et remédier aux cyberattaques (ransomware, intrusion, fuite de données)." },
  { term: "Forensique (investigation numérique)", def: "Analyse post-incident permettant de collecter et analyser les preuves numériques pour comprendre l'origine, le mode opératoire, l'étendue et l'impact d'une cyberattaque." },
  { term: "RSSI (Responsable SSI)", def: "Responsable de la Sécurité des Systèmes d'Information. En charge de définir et piloter la politique de sécurité d'une organisation. Peut être internalisé ou externalisé." },
  { term: "Surface d'attaque", def: "Ensemble des points d'entrée potentiels qu'un attaquant pourrait exploiter pour compromettre un système : applications web, API, services réseau, comptes utilisateurs, etc." },
  { term: "DORA (Digital Operational Resilience Act)", def: "Règlement européen sur la résilience opérationnelle numérique du secteur financier. Il impose des obligations en matière de gestion des risques TIC, tests de résilience et reporting d'incidents." },
  { term: "NIS2", def: "Directive européenne Network and Information Security 2, élargissant les obligations de cybersécurité à de nombreux secteurs (énergie, transports, santé, numérique). Entrée en application en 2024." },
  { term: "RGS (Référentiel Général de Sécurité)", def: "Cadre réglementaire français définissant les règles de sécurité applicables aux systèmes d'information des administrations et organismes publics." },
  { term: "OSCP / OSEP", def: "Certifications offensives délivrées par Offensive Security. L'OSCP (Offensive Security Certified Professional) et l'OSEP (Offensive Security Experienced Penetration Tester) attestent de compétences avancées en tests d'intrusion." },
  { term: "Red Team", def: "Exercice de simulation d'attaque réaliste combinant intrusion physique, ingénierie sociale (phishing, vishing) et exploitation technique pour tester la résilience globale d'une organisation." },
];

const Glossaire = () => {
  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Glossaire cybersécurité",
    "description": "Définitions des termes essentiels de la cybersécurité",
    "hasDefinedTerm": terms.map(t => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.def
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Glossaire cybersécurité — Définitions et termes clés"
        description="Glossaire cybersécurité : définitions de pentest, PASSI, ISO 27001, CERT, forensique, RSSI, surface d'attaque, DORA, NIS2, Red Team. Comprendre les termes de la sécurité informatique."
        canonical="/glossaire"
        jsonLd={definedTermJsonLd}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gradient">Glossaire</span> cybersécurité
              </h1>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Les termes essentiels de la cybersécurité expliqués simplement. Ce glossaire vous aide à comprendre le vocabulaire utilisé par les professionnels de la sécurité informatique.
              </p>
              <p className="text-muted-foreground text-base mb-12 leading-relaxed">
                Vous avez besoin d'un <Link to="/audit" className="text-primary hover:underline">audit de sécurité</Link> ou d'un <Link to="/conseil" className="text-primary hover:underline">accompagnement en cybersécurité</Link> ? Nos experts sont à votre disposition pour vous accompagner.
              </p>

              <div className="space-y-6">
                {terms.map((t, i) => (
                  <motion.div
                    key={t.term}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="card-glass rounded-xl p-6 hover:border-primary/30 transition-all"
                  >
                    <h2 className="font-heading text-lg font-semibold text-foreground mb-2">{t.term}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.def}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Glossaire;
