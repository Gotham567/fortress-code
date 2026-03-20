import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Shield, Eye, Monitor, BarChart3, AlertTriangle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  { icon: Eye, title: "Cartographie de votre surface d'attaque", desc: "Identification exhaustive de tous vos actifs exposés sur Internet : domaines, sous-domaines, adresses IP, services, applications web et API. Mise à jour continue du périmètre." },
  { icon: Monitor, title: "Surveillance continue 24/7", desc: "Monitoring permanent de votre périmètre externe avec détection automatique de nouvelles expositions, vulnérabilités et changements de configuration." },
  { icon: BarChart3, title: "Tableaux de bord & reporting", desc: "Visualisation claire de votre posture de sécurité avec indicateurs de risque, suivi des remédiations et rapports exportables pour la direction." },
  { icon: AlertTriangle, title: "Alertes et recommandations expertes", desc: "Notifications en temps réel et plan d'action priorisé par nos experts pour chaque vulnérabilité détectée. Accompagnement à la remédiation." },
];

const faq = [
  { q: "Qu'est-ce que la gestion de surface d'attaque (ASM) ?", a: "L'Attack Surface Management (ASM) est une approche continue de découverte, d'analyse et de surveillance de tous les actifs numériques d'une organisation exposés sur Internet. Contrairement à un audit ponctuel, l'ASM offre une vision en temps réel de votre exposition aux menaces." },
  { q: "Quelle est la différence avec un scan de vulnérabilités classique ?", a: "AlgoLightHouse va au-delà du simple scan automatisé : il combine technologie de pointe et expertise humaine. Nos analystes vérifient chaque alerte, éliminent les faux positifs et fournissent des recommandations contextualisées avec un plan d'action priorisé." },
  { q: "Combien de temps faut-il pour cartographier ma surface d'attaque ?", a: "La cartographie initiale est réalisée sous 48 à 72 heures. AlgoLightHouse découvre automatiquement vos domaines, sous-domaines, IP exposées, services et technologies utilisées. La surveillance continue prend ensuite le relais avec des mises à jour en temps réel." },
  { q: "AlgoLightHouse remplace-t-il un pentest ?", a: "Non, les deux approches sont complémentaires. AlgoLightHouse assure une surveillance continue de votre exposition externe entre les audits. Le pentest, lui, teste en profondeur l'exploitabilité des vulnérabilités. Nous recommandons de combiner les deux pour une couverture optimale." },
  { q: "Quelles technologies sont surveillées ?", a: "AlgoLightHouse couvre l'ensemble de votre exposition : serveurs web, API, applications SaaS, services cloud (AWS, Azure, GCP), serveurs mail, DNS, certificats SSL/TLS, ports ouverts et shadow IT. Toute ressource accessible depuis Internet est identifiée et surveillée." },
];

const AlgoLightHouse = () => {
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
        title="AlgoLightHouse — Gestion de surface d'attaque externe"
        description="AlgoLightHouse by CyberSecure : surveillance continue de votre surface d'attaque externe, cartographie des actifs exposés, détection de vulnérabilités et recommandations d'experts. Service managé 24/7."
        canonical="/algolighthouse"
        jsonLd={faqJsonLd}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Surveillance de surface d'attaque
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                algo<span className="text-gradient">LightHouse</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
                Pilotez et maîtrisez votre surface d'attaque externe grâce à notre service managé combinant technologie et expertise humaine.
              </p>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
                AlgoLightHouse identifie en continu vos actifs exposés sur Internet, détecte les vulnérabilités et vous fournit des recommandations actionables. Un complément idéal à vos <Link to="/audit" className="text-primary hover:underline">audits de sécurité ponctuels</Link>.
              </p>
            </motion.div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Fonctionnalités <span className="text-gradient">clés</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-glass rounded-xl p-8 hover:border-primary/50 transition-all group">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Questions fréquentes sur <span className="text-gradient">AlgoLightHouse</span>
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

            <div className="text-center mt-16">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8">
                  Demander une démo gratuite
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default AlgoLightHouse;
