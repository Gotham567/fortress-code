import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ChevronDown, Shield, FileText, Ambulance } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "audit",
    label: "Audit & Pentest",
    icon: Shield,
    questions: [
      { q: "Qu'est-ce qu'un test d'intrusion (pentest) ?", a: "Un test d'intrusion est une évaluation de sécurité où nos experts simulent des cyberattaques réelles contre vos systèmes pour identifier les vulnérabilités avant qu'un attaquant ne les exploite. Il peut être réalisé en boîte noire (sans information), grise (informations partielles) ou blanche (accès complet au code source)." },
      { q: "Pourquoi choisir un prestataire qualifié PASSI ?", a: "La qualification PASSI, délivrée par l'ANSSI, garantit que le prestataire respecte des exigences strictes en matière de compétences techniques, de méthodologie et de confidentialité. C'est un gage de qualité reconnu par les organismes publics et les entreprises soumises à des réglementations (LPM, NIS2, DORA)." },
      { q: "Combien de temps dure un audit de sécurité ?", a: "La durée dépend du périmètre : un pentest web simple peut prendre 5 jours, un audit d'architecture réseau complet 2 à 3 semaines. Nous adaptons la durée à vos besoins et contraintes opérationnelles." },
      { q: "Quelle est la différence entre un audit et un Red Team ?", a: "Un audit cible un périmètre défini avec une méthodologie structurée. Un exercice Red Team simule une attaque réaliste sans périmètre prédéfini, combinant techniques physiques, sociales et numériques pour tester votre résilience globale." },
      { q: "Quel est le coût d'un audit cybersécurité ?", a: "Le coût varie selon la complexité et le périmètre : de 3 000 € pour un pentest ciblé à 25 000 € et plus pour un audit complet multi-périmètre. Nous proposons des devis personnalisés après un cadrage précis de vos besoins." },
      { q: "À quelle fréquence faut-il réaliser un audit ?", a: "Nous recommandons un pentest au minimum annuel, et après chaque changement majeur de votre SI (migration cloud, nouvelle application, fusion-acquisition). Les référentiels comme ISO 27001 et la directive NIS2 imposent des évaluations régulières." },
      { q: "Que contient le rapport d'audit ?", a: "Nos rapports incluent un résumé exécutif pour la direction, un détail technique de chaque vulnérabilité avec preuve d'exploitation, une classification par criticité (CVSS), des recommandations de remédiation priorisées et un plan d'action." },
    ],
  },
  {
    id: "conseil",
    label: "Conseil & Conformité",
    icon: FileText,
    questions: [
      { q: "Qu'est-ce qu'un RSSI externalisé ?", a: "Un RSSI externalisé est un expert cybersécurité qui intervient à temps partagé dans votre organisation pour piloter la stratégie de sécurité, sans les coûts d'un recrutement à temps plein. Il définit la politique de sécurité, coordonne les audits et assure la conformité réglementaire." },
      { q: "Comment se préparer à la directive NIS2 ?", a: "La directive NIS2 élargit les obligations de cybersécurité à de nombreux secteurs. La préparation inclut : cartographie des actifs critiques, analyse de risques, mise en place de politiques de sécurité, plans de réponse aux incidents et reporting." },
      { q: "Combien de temps pour obtenir la certification ISO 27001 ?", a: "En moyenne, le processus de certification ISO 27001 prend 6 à 18 mois selon la maturité de votre organisation. Cela comprend l'analyse de risques, la mise en place du SMSI, la rédaction documentaire et l'audit de certification." },
      { q: "Quel est le coût d'un RSSI externalisé ?", a: "Un RSSI externalisé coûte en moyenne 2 à 4 fois moins qu'un RSSI salarié à temps plein (70-90k€/an). Nos formules démarrent à quelques jours par mois, ajustables selon vos besoins." },
      { q: "Mon entreprise est-elle concernée par NIS2 ou DORA ?", a: "NIS2 s'applique aux entités essentielles et importantes de 18 secteurs dès 50 salariés ou 10 M€ de CA. DORA concerne toutes les entités financières et leurs prestataires IT critiques. Nous réalisons un diagnostic gratuit pour déterminer vos obligations." },
      { q: "La sensibilisation des collaborateurs est-elle efficace ?", a: "Oui : 91 % des cyberattaques commencent par un e-mail de phishing. Nos campagnes réduisent le taux de clic sur les e-mails frauduleux de 35 % à moins de 5 % en 6 mois." },
    ],
  },
  {
    id: "cert",
    label: "CERT & Réponse à incident",
    icon: Ambulance,
    questions: [
      { q: "Qu'est-ce qu'un CERT ?", a: "Un CERT (Computer Emergency Response Team) est une équipe spécialisée dans la réponse aux incidents de cybersécurité. Notre CERT intervient 24/7 pour contenir les attaques, investiguer et restaurer vos systèmes." },
      { q: "Quel est le délai d'intervention en cas de cyberattaque ?", a: "Notre CERT garantit une prise en charge sous 2 heures maximum, 24h/24, 7j/7. Un analyste qualifié est mobilisé immédiatement pour évaluer la situation et lancer les premières mesures de containment." },
      { q: "Faut-il un contrat préalable pour bénéficier du CERT ?", a: "Notre CERT peut intervenir en urgence sans contrat préalable. Toutefois, un contrat de réponse à incident (retainer) garantit des délais d'intervention prioritaires et un tarif préférentiel." },
      { q: "Que faire si mon entreprise est victime d'un ransomware ?", a: "Ne payez jamais la rançon. Isolez les systèmes infectés, préservez les preuves et contactez immédiatement notre CERT. Nous assurons l'investigation forensique, la négociation si nécessaire, la restauration des données et le durcissement post-incident." },
    ],
  },
];

const allQuestions = categories.flatMap((c) =>
  c.questions.map((q) => ({ ...q, category: c.label }))
);

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredQuestions =
    activeCategory === "all"
      ? allQuestions
      : allQuestions.filter((q) => q.category === categories.find((c) => c.id === activeCategory)?.label);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ cybersécurité — Audit, pentest, conformité NIS2, RSSI"
        description="Retrouvez les réponses à toutes vos questions sur la cybersécurité : audit, pentest, conformité NIS2, RSSI externalisé, réponse à incident et gestion de surface d'attaque."
        canonical="/faq"
        jsonLd={faqJsonLd}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-12"
            >
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Centre d'aide
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Questions <span className="text-gradient">fréquentes</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Tout ce que vous devez savoir sur nos services de cybersécurité.
                Une question spécifique ?{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  Contactez-nous
                </Link>
                .
              </p>
            </motion.div>

            {/* Category filters */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              <button
                onClick={() => { setActiveCategory("all"); setOpenFaq(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                Toutes ({allQuestions.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setActiveCategory(c.id); setOpenFaq(null); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeCategory === c.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <c.icon className="h-4 w-4" />
                  {c.label}
                </button>
              ))}
            </motion.div>

            {/* Questions */}
            <div className="space-y-3">
              {filteredQuestions.map((f, i) => (
                <motion.div
                  key={`${activeCategory}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glass rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {f.q}
                      </h3>
                      {activeCategory === "all" && (
                        <span className="text-xs text-muted-foreground mt-1 inline-block">
                          {f.category}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={
                      openFaq === i
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 card-glass rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Nos experts sont disponibles pour répondre à toutes vos questions et vous accompagner dans votre démarche de cybersécurité.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8 py-3 rounded-lg transition-colors"
              >
                Contactez-nous
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FAQ;
