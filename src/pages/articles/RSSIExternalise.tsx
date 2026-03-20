import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, UserCheck, TrendingUp, CircleDollarSign, ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

const RSSIExternalise = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "RSSI externalisé : pourquoi et comment externaliser votre sécurité",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-03-15",
    "dateModified": "2026-03-15"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="RSSI externalisé : guide complet pour les PME et ETI"
        description="RSSI externalisé ou vCISO : pourquoi externaliser la fonction de responsable sécurité, quand y recourir, comment choisir son prestataire et quels résultats attendre."
        canonical="/actualites/rssi-externalise-guide"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <article className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/actualites" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-heading text-sm mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Retour aux actualités
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Article</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-03-15">15 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">RSSI externalisé</span> : pourquoi et comment externaliser votre sécurité
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                En France, 78% des PME n'ont pas de responsable dédié à la cybersécurité. Pourtant, les réglementations (NIS2, RGPD, DORA) et la multiplication des cyberattaques rendent cette fonction indispensable. Le RSSI externalisé — aussi appelé vCISO (virtual Chief Information Security Officer) — offre une solution accessible et efficace. Voici un guide complet pour comprendre ce modèle et en tirer le meilleur parti.
              </p>
            </motion.div>

            {/* Qu'est-ce qu'un RSSI externalisé */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Qu'est-ce qu'un RSSI externalisé ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Un RSSI externalisé est un expert en cybersécurité qui assume la fonction de Responsable de la Sécurité des Systèmes d'Information pour votre entreprise, à temps partiel ou sur une base contractuelle. Il intervient typiquement entre 2 et 8 jours par mois, selon la taille et la maturité de l'organisation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Contrairement à un consultant ponctuel qui intervient sur une mission précise, le RSSI externalisé s'inscrit dans la durée. Il connaît votre organisation, vos métiers, votre infrastructure et vos enjeux spécifiques. Il participe aux comités de direction, pilote la stratégie de sécurité et constitue l'interlocuteur de référence pour toutes les questions de cybersécurité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Son rôle couvre l'ensemble du spectre : gouvernance de la sécurité, gestion des risques, conformité réglementaire, supervision technique, sensibilisation des équipes, gestion de crise et relation avec les autorités (ANSSI, CNIL).
              </p>
            </motion.section>

            {/* Pourquoi externaliser */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Pourquoi externaliser plutôt que recruter ?</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">La pénurie de talents</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Le marché de la cybersécurité fait face à un déficit mondial de 3,4 millions de professionnels. En France, un RSSI expérimenté commande un salaire de 80 000 à 130 000€ brut annuel. Pour une PME, recruter et fidéliser un tel profil est un défi considérable, tant sur le plan financier que sur l'attractivité du poste.
                  </p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">L'expertise pluridisciplinaire</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un RSSI externalisé intervient dans plusieurs organisations simultanément. Cette diversité d'expériences lui confère une vision large des menaces, des bonnes pratiques sectorielles et des solutions techniques. Il apporte un benchmark naturel et des retours d'expérience issus de contextes variés, un avantage impossible à obtenir avec un profil interne isolé.
                  </p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">La flexibilité et la montée en charge</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    L'intervention peut être calibrée selon vos besoins réels : 2 jours par mois en régime de croisière, montée en charge pendant un projet de mise en conformité NIS2, présence renforcée après un incident. Cette souplesse est impossible avec un poste salarié à temps plein.
                  </p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">L'indépendance et l'objectivité</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un RSSI externe n'a pas les biais d'un collaborateur interne qui peut être en conflit d'intérêt avec la DSI ou hésiter à remonter des problèmes à la direction. Son regard extérieur et son indépendance lui permettent de poser des diagnostics francs et de prioriser les actions sans considérations politiques internes.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Coût */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <CircleDollarSign className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Combien coûte un RSSI externalisé ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le coût varie selon le volume d'intervention, la complexité du SI et le niveau de maturité cyber existant. Voici les ordres de grandeur constatés sur le marché français :
              </p>
              <div className="card-glass rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Formule</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Volume</th>
                      <th className="text-left p-4 font-heading font-semibold text-foreground">Coût annuel</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="p-4">Essentiel</td>
                      <td className="p-4">2 jours/mois</td>
                      <td className="p-4">24 000 – 36 000€</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">Standard</td>
                      <td className="p-4">4 jours/mois</td>
                      <td className="p-4">48 000 – 72 000€</td>
                    </tr>
                    <tr>
                      <td className="p-4">Premium</td>
                      <td className="p-4">8 jours/mois</td>
                      <td className="p-4">96 000 – 120 000€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                À comparer avec le coût total d'un RSSI salarié : entre 110 000 et 180 000€ par an (salaire + charges + formation continue + outils). Sans compter le risque de départ dans un marché ultra-concurrentiel où le turnover moyen des RSSI est de 2,5 ans.
              </p>
            </motion.section>

            {/* Missions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les missions concrètes d'un RSSI externalisé</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Gouvernance & stratégie", items: ["Définition de la PSSI", "Comité de sécurité mensuel", "Reporting à la direction", "Tableau de bord des risques"] },
                  { title: "Conformité réglementaire", items: ["Mise en conformité NIS2/DORA", "Registre RGPD & PIA", "Préparation aux audits", "Veille réglementaire"] },
                  { title: "Technique & opérationnel", items: ["Pilotage des audits & pentests", "Supervision de la sécurité", "Gestion des vulnérabilités", "Validation des architectures"] },
                  { title: "Humain & organisation", items: ["Sensibilisation des équipes", "Formation des développeurs", "Exercices de phishing simulé", "Gestion de crise & PCA/PRA"] },
                ].map((block, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-sm font-semibold mb-3 text-primary">{block.title}</h3>
                    <ul className="text-muted-foreground text-sm leading-relaxed space-y-1.5">
                      {block.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Comment choisir */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Comment choisir son RSSI externalisé ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tous les prestataires ne se valent pas. Voici les critères essentiels à évaluer avant de confier votre sécurité à un partenaire externe :
              </p>
              <div className="space-y-4">
                {[
                  { title: "Qualifications et certifications", desc: "Privilégiez un prestataire qualifié PASSI par l'ANSSI et certifié ISO 27001. Vérifiez les certifications individuelles des consultants : CISSP, CISM, OSCP. Ces qualifications garantissent un niveau d'expertise vérifiable et une méthodologie éprouvée." },
                  { title: "Expérience sectorielle", desc: "Un RSSI externalisé qui connaît votre secteur (industrie, santé, finance, services numériques) comprendra plus vite vos enjeux métier, vos contraintes réglementaires spécifiques et les menaces propres à votre environnement." },
                  { title: "Capacité de réponse à incident", desc: "Assurez-vous que le prestataire dispose d'une capacité de réponse à incident (CERT) pour intervenir en urgence si nécessaire. Le RSSI externalisé doit pouvoir mobiliser rapidement des compétences forensiques et de gestion de crise." },
                  { title: "Indépendance vis-à-vis des éditeurs", desc: "Méfiez-vous des prestataires qui sont aussi revendeurs de solutions de sécurité : leur objectivité dans le choix des outils pourrait être biaisée. Un cabinet indépendant recommandera les solutions les plus adaptées à vos besoins réels, pas celles qui lui rapportent des marges." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <div className="card-glass rounded-2xl p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-3">Besoin d'un RSSI externalisé ?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto mb-6">
                  CyberSecure propose un service de RSSI externalisé adapté aux PME et ETI : gouvernance, conformité, pilotage technique et sensibilisation. Cabinet indépendant, qualifié PASSI et certifié ISO 27001.
                </p>
                <Link to="/contact">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-3 rounded-lg transition-colors">
                    Échanger avec un expert
                  </button>
                </Link>
              </div>
            </motion.section>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default RSSIExternalise;
