import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Search, Server, Network, Globe, Smartphone, Code, ShieldCheck, FileSearch, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { icon: Search, title: "Tests d'intrusion (pentest)", desc: "Tests en boîte noire, grise ou blanche pour identifier les vulnérabilités exploitables de vos applications et infrastructures. Nos pentesteurs certifiés OSCP et OSEP simulent des attaques réelles pour évaluer votre niveau de sécurité." },
  { icon: Server, title: "Audit de configuration", desc: "Vérification de la conformité des configurations de vos serveurs, équipements réseau, bases de données et services cloud selon les référentiels CIS Benchmarks et bonnes pratiques ANSSI." },
  { icon: Network, title: "Audit d'architecture réseau", desc: "Analyse de la conception de votre architecture réseau et systèmes pour détecter les failles structurelles, cloisonnement insuffisant et points de défaillance uniques." },
  { icon: Globe, title: "Audit d'applications web", desc: "Évaluation approfondie de la sécurité de vos applications web selon le Top 10 OWASP : injection SQL, XSS, CSRF, gestion des sessions et contrôle d'accès." },
  { icon: Smartphone, title: "Audit de sécurité mobile", desc: "Analyse de sécurité de vos applications iOS et Android, incluant le reverse engineering, l'analyse du stockage local et des communications réseau." },
  { icon: Code, title: "Revue de code source", desc: "Analyse statique et manuelle du code source pour identifier les vulnérabilités applicatives : injections, fuites de données, mauvaise gestion des secrets et des erreurs." },
  { icon: ShieldCheck, title: "Audit organisationnel ISO 27001", desc: "Évaluation de votre organisation, processus et politiques de sécurité selon les normes ISO 27001/27002, avec plan d'action priorisé pour la mise en conformité." },
  { icon: FileSearch, title: "Red Team — Simulation d'attaque avancée", desc: "Simulation d'attaque réaliste combinant intrusion physique, ingénierie sociale (phishing, vishing) et exploitation technique pour tester votre résilience globale." },
];

const faq = [
  { q: "Qu'est-ce qu'un test d'intrusion (pentest) ?", a: "Un test d'intrusion est une évaluation de sécurité où nos experts simulent des cyberattaques réelles contre vos systèmes pour identifier les vulnérabilités avant qu'un attaquant ne les exploite. Il peut être réalisé en boîte noire (sans information), grise (informations partielles) ou blanche (accès complet au code source)." },
  { q: "Pourquoi choisir un prestataire qualifié PASSI pour vos audits ?", a: "La qualification PASSI, délivrée par l'ANSSI, garantit que le prestataire respecte des exigences strictes en matière de compétences techniques, de méthodologie et de confidentialité. C'est un gage de qualité reconnu par les organismes publics et les entreprises soumises à des réglementations (LPM, NIS2, DORA)." },
  { q: "Combien de temps dure un audit de sécurité ?", a: "La durée dépend du périmètre : un pentest web simple peut prendre 5 jours, un audit d'architecture réseau complet 2 à 3 semaines. Nous adaptons la durée à vos besoins et contraintes opérationnelles." },
  { q: "Quelle est la différence entre un audit et un Red Team ?", a: "Un audit cible un périmètre défini avec une méthodologie structurée. Un exercice Red Team simule une attaque réaliste sans périmètre prédéfini, combinant techniques physiques, sociales et numériques pour tester votre résilience globale." },
];

const Audit = () => {
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

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Audit de sécurité informatique",
    "provider": { "@type": "Organization", "name": "CyberSecure" },
    "description": "Audits de sécurité qualifiés PASSI : pentest, audit de configuration, audit d'architecture, revue de code, Red Team.",
    "areaServed": "FR",
    "serviceType": "Cybersecurity Audit"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit cybersécurité & pentest entreprise PME ETI"
        description="Audit cybersécurité et pentest entreprise pour PME et ETI. Cabinet qualifié PASSI, certifié ISO 27001. Tests d'intrusion, audit de configuration, Red Team. Lyon & Paris."
        canonical="/audit"
        jsonLd={[faqJsonLd, serviceJsonLd]}
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
                Services d'audit en cybersécurité
              </p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">Audit</span> de sécurité & tests d'intrusion
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Qualifiés PASSI par l'ANSSI et certifiés ISO 27001, nous réalisons des audits techniques et organisationnels pour évaluer et renforcer la sécurité de votre système d'information. Nos consultants certifiés (OSCP, OSEP, CEH) interviennent sur l'ensemble du périmètre : réseau, applicatif, cloud et organisationnel.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Que vous soyez une ETI, un grand compte ou un organisme public, nos audits vous permettent de répondre aux exigences réglementaires (NIS2, DORA, LPM, RGS) tout en identifiant concrètement les risques qui pèsent sur votre SI.
              </p>
            </motion.div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Nos prestations d'<span className="text-gradient">audit</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="card-glass rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <s.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Internal links section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 card-glass rounded-2xl p-8 md:p-12"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Pourquoi réaliser un audit de sécurité ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un audit de sécurité informatique permet d'identifier les vulnérabilités de votre système d'information avant qu'elles ne soient exploitées par un attaquant. C'est une démarche proactive indispensable dans un contexte de menaces croissantes (ransomware, APT, phishing). Combiné à un <Link to="/conseil" className="text-primary hover:underline">accompagnement en conseil cybersécurité</Link>, il constitue la base d'une stratégie de sécurité efficace. En cas d'incident avéré, notre <Link to="/cert" className="text-primary hover:underline">CERT intervient 24/7</Link> pour contenir et remédier.
              </p>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Questions fréquentes sur l'<span className="text-gradient">audit de sécurité</span>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-16"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-10">
                  Demander un devis d'audit
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

export default Audit;
