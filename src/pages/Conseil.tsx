import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Shield, BookOpen, Users, FileText, Lock, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { icon: Shield, title: "Accompagnement RSSI externalisé", desc: "Mise à disposition d'un RSSI externalisé ou en temps partagé pour piloter votre stratégie de cybersécurité, définir la feuille de route et assurer le suivi opérationnel." },
  { icon: FileText, title: "Conformité NIS2, DORA & RGPD", desc: "Accompagnement à la mise en conformité réglementaire : NIS2, DORA pour le secteur financier, LPM, RGS et RGPD. Analyse d'écart et plan d'action priorisé." },
  { icon: Lock, title: "Certification ISO 27001", desc: "Accompagnement complet à la mise en place et certification ISO 27001:2022 de votre système de management de la sécurité de l'information (SMSI)." },
  { icon: BookOpen, title: "Politique de sécurité (PSSI)", desc: "Rédaction de PSSI, chartes informatiques, plans de continuité et de reprise d'activité (PCA/PRA), procédures de gestion des incidents." },
  { icon: GraduationCap, title: "Sensibilisation cybersécurité", desc: "Formations sur mesure et campagnes de sensibilisation (phishing simulé, e-learning) pour renforcer la culture sécurité de vos collaborateurs." },
  { icon: Users, title: "Gouvernance & analyse de risques", desc: "Structuration de la gouvernance SSI, analyse de risques EBIOS RM, schéma directeur de la sécurité et tableaux de bord décisionnels." },
];

const faq = [
  { q: "Qu'est-ce qu'un RSSI externalisé ?", a: "Un RSSI (Responsable de la Sécurité des Systèmes d'Information) externalisé est un expert cybersécurité qui intervient à temps partagé dans votre organisation pour piloter la stratégie de sécurité, sans les coûts d'un recrutement à temps plein. Il définit la politique de sécurité, coordonne les audits et assure la conformité réglementaire." },
  { q: "Comment se préparer à la directive NIS2 ?", a: "La directive NIS2 élargit les obligations de cybersécurité à de nombreux secteurs. La préparation inclut : cartographie des actifs critiques, analyse de risques, mise en place de politiques de sécurité, plans de réponse aux incidents et reporting. Nous réalisons un diagnostic d'écart et un plan d'action adapté à votre contexte." },
  { q: "Combien de temps faut-il pour obtenir la certification ISO 27001 ?", a: "En moyenne, le processus de certification ISO 27001 prend 6 à 18 mois selon la maturité de votre organisation. Cela comprend l'analyse de risques, la mise en place du SMSI, la rédaction documentaire, la formation des équipes et l'audit de certification par un organisme accrédité." },
  { q: "Quel est le coût d'un RSSI externalisé par rapport à un recrutement ?", a: "Un RSSI externalisé coûte en moyenne 2 à 4 fois moins qu'un RSSI salarié à temps plein (70-90k€/an). Nos formules démarrent à quelques jours par mois, ajustables selon vos besoins. Vous bénéficiez d'une expertise senior sans charges sociales, formation continue ni risque de turnover." },
  { q: "Mon entreprise est-elle concernée par NIS2 ou DORA ?", a: "NIS2 s'applique aux entités essentielles et importantes de 18 secteurs (énergie, santé, transport, numérique, agroalimentaire…) dès 50 salariés ou 10 M€ de CA. DORA concerne toutes les entités financières et leurs prestataires IT critiques. Nous réalisons un diagnostic gratuit pour déterminer vos obligations." },
  { q: "La sensibilisation des collaborateurs est-elle vraiment efficace ?", a: "Oui : 91 % des cyberattaques commencent par un e-mail de phishing. Nos campagnes de sensibilisation réduisent le taux de clic sur les e-mails frauduleux de 35 % à moins de 5 % en 6 mois. La formation continue est un levier majeur et un prérequis de conformité ISO 27001 et NIS2." },
];

const Conseil = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Conseil en cybersécurité, RSSI externalisé & conformité"
        description="Conseil en cybersécurité : RSSI externalisé, conformité NIS2 DORA RGPD, certification ISO 27001, gouvernance SSI et sensibilisation. Cabinet indépendant qualifié PASSI à Lyon et Paris."
        canonical="/conseil"
        jsonLd={faqJsonLd}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-16"
            >
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Conseil & accompagnement cybersécurité
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">Conseil</span> en cybersécurité
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie de cybersécurité, de la gouvernance à la conformité réglementaire. Nos consultants expérimentés s'adaptent à votre contexte métier et à vos enjeux spécifiques.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                En complément de nos <Link to="/audit" className="text-primary hover:underline">prestations d'audit</Link>, notre offre conseil couvre l'ensemble du cycle de vie de la sécurité : analyse de risques, politiques, sensibilisation, conformité et pilotage continu.
              </p>
            </motion.div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Nos services de <span className="text-gradient">conseil</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Questions fréquentes sur le <span className="text-gradient">conseil cybersécurité</span>
              </h2>
              <div className="space-y-3">
                {faq.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="card-glass rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <h3 className="font-heading font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">{f.q}</h3>
                      <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={openFaq === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-16"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-10">
                  Prendre rendez-vous
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Conseil;
