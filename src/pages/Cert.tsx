import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Phone, AlertTriangle, HardDrive, Eye, FileWarning, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { icon: AlertTriangle, title: "Réponse à incident de sécurité", desc: "Intervention rapide pour contenir, analyser et remédier aux incidents de sécurité : ransomware, intrusion, fuite de données, compromission de compte." },
  { icon: HardDrive, title: "Analyse forensique numérique", desc: "Investigation numérique approfondie (digital forensics) pour identifier l'origine, le vecteur d'attaque, l'étendue de la compromission et les données exfiltrées." },
  { icon: Eye, title: "Threat Intelligence & veille", desc: "Veille sur les menaces ciblant votre secteur, surveillance de vos actifs exposés sur le dark web et détection de fuites de données." },
  { icon: FileWarning, title: "Gestion de crise cyber", desc: "Accompagnement stratégique et opérationnel pendant la crise : communication interne et externe, coordination avec les autorités (ANSSI, CNIL) et plan de remédiation." },
  { icon: Clock, title: "Astreinte CERT 24h/24 7j/7", desc: "Disponibilité permanente de nos analystes certifiés pour une réponse immédiate en cas d'incident critique, week-ends et jours fériés inclus." },
  { icon: Phone, title: "Hotline dédiée & SLA garanti", desc: "Numéro d'urgence dédié pour les clients sous contrat avec prise en charge garantie sous 4h et mobilisation d'une équipe d'intervention." },
];

const faq = [
  { q: "Que faire en cas de cyberattaque ?", a: "En cas de cyberattaque, les premiers réflexes sont : isoler les systèmes compromis du réseau, ne pas éteindre les machines (pour préserver les traces), contacter votre CERT ou prestataire de réponse à incident, et notifier les autorités compétentes (ANSSI, CNIL en cas de fuite de données personnelles). Notre CERT CyberSecure est joignable 24/7 au 04 26 78 24 86." },
  { q: "Qu'est-ce que l'analyse forensique ?", a: "L'analyse forensique (ou investigation numérique) consiste à collecter, préserver et analyser les preuves numériques suite à un incident de sécurité. Elle permet d'identifier le mode opératoire de l'attaquant, l'étendue de la compromission et les données potentiellement exfiltrées. Les résultats peuvent être utilisés dans le cadre de poursuites judiciaires." },
  { q: "Faut-il un contrat pour bénéficier du CERT ?", a: "Nous intervenons à la fois pour les clients sous contrat (avec SLA garanti et tarifs préférentiels) et en mode ad hoc pour les urgences. Un contrat d'astreinte permet cependant une prise en charge plus rapide avec un numéro dédié et une mobilisation garantie sous 4h." },
];

const Cert = () => {
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
        title="CERT — Réponse à incident & analyse forensique 24/7"
        description="CERT CyberSecure : réponse à incident de sécurité 24/7, analyse forensique, gestion de crise cyber, threat intelligence. Équipe d'urgence cybersécurité à Lyon et Paris."
        canonical="/cert"
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
                CERT CyberSecure — Centre de réponse aux incidents
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                Centre de réponse aux <span className="text-gradient">incidents</span> de sécurité
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Notre CERT (Computer Emergency Response Team) intervient 24h/24 et 7j/7 pour vous accompagner face aux cyberattaques et incidents de sécurité. Nos analystes certifiés assurent une prise en charge rapide et efficace.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Ransomware, compromission de messagerie, fuite de données, attaque DDoS : quelle que soit la nature de l'incident, nous mobilisons une équipe dédiée pour contenir la menace, investiguer et restaurer votre activité. En amont, nos <Link to="/audit" className="text-primary hover:underline">audits de sécurité</Link> permettent de réduire votre exposition aux risques.
              </p>
            </motion.div>

            <div className="card-glass rounded-2xl p-8 md:p-12 mb-12 glow-border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Urgence cybersécurité ? Contactez le CERT
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    En cas d'incident de sécurité, nos analystes prennent en charge votre situation immédiatement : containment, investigation forensique et plan de remédiation. Ne restez pas seul face à une cyberattaque.
                  </p>
                  <a href="tel:0426782486">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                      <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                      04 26 78 24 86
                    </Button>
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-primary">24/7</div>
                  <p className="text-muted-foreground text-sm mt-2">Disponibilité permanente</p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Services du <span className="text-gradient">CERT</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all group"
                >
                  <s.icon className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
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
                Questions fréquentes sur la <span className="text-gradient">réponse à incident</span>
              </h2>
              <div className="space-y-4">
                {faq.map((f, i) => (
                  <div key={i} className="card-glass rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-6 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <h3 className="font-heading font-semibold text-foreground pr-4">{f.q}</h3>
                      <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                      </div>
                    )}
                  </div>
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

export default Cert;
