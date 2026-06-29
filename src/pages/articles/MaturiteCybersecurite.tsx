import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Target, TrendingUp, CheckCircle, Gauge } from "lucide-react";

const MaturiteCybersecurite = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Maturité cybersécurité PME : comment évaluer et améliorer son niveau",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  const niveaux = [
    {
      niveau: 1,
      label: "Initial / Ad hoc",
      couleur: "text-red-400",
      border: "border-red-500/30",
      desc: "Aucune politique formalisée. La sécurité est gérée au cas par cas, souvent après un incident. Pas d'inventaire, pas de responsable désigné, pas de sauvegarde testée.",
      signaux: ["Aucune PSSI ni document de sécurité", "Mots de passe simples et partagés", "Pas de MFA", "Sauvegardes non testées ou inexistantes", "Aucune formation cybersécurité"],
      priorite: "Mettre en place MFA, sauvegardes testées et désigner un responsable."
    },
    {
      niveau: 2,
      label: "Reproductible / Géré",
      couleur: "text-orange-400",
      border: "border-orange-500/30",
      desc: "Des mesures de base existent mais ne sont pas systématisées. La sécurité dépend des individus, pas des processus. Les incidents sont gérés mais sans procédure formalisée.",
      signaux: ["MFA déployé sur certains services seulement", "Antivirus basique sans EDR", "Sauvegardes existantes mais peu testées", "Quelques utilisateurs formés, pas tous", "Mises à jour irrégulières"],
      priorite: "Systématiser et documenter les mesures existantes, déployer un EDR."
    },
    {
      niveau: 3,
      label: "Défini / Proactif",
      couleur: "text-yellow-400",
      border: "border-yellow-500/30",
      desc: "Des politiques et procédures formalisées existent et sont appliquées. Des audits réguliers sont réalisés. La direction est impliquée. C'est le niveau minimal recommandé pour les entités NIS2.",
      signaux: ["PSSI approuvée et diffusée", "MFA généralisé", "EDR sur tous les postes", "Sauvegardes testées trimestriellement", "Pentest annuel", "Formation annuelle de toutes les équipes"],
      priorite: "Ajouter des indicateurs de pilotage et améliorer la détection des incidents."
    },
    {
      niveau: 4,
      label: "Mesuré / Optimisé",
      couleur: "text-blue-400",
      border: "border-blue-500/30",
      desc: "La sécurité est mesurée via des KPI. Les incidents font l'objet de retours d'expérience documentés. La chaîne d'approvisionnement est auditée. La conformité NIS2 est assurée.",
      signaux: ["Tableau de bord de métriques de sécurité", "SOC managé ou SIEM", "Audits des fournisseurs clés", "Tests de crise (exercice PCA)", "Veille de sécurité structurée", "Déclaration NIS2 réalisée"],
      priorite: "Implémenter un programme de threat intelligence et d'amélioration continue."
    },
    {
      niveau: 5,
      label: "Optimisé / Résilient",
      couleur: "text-green-400",
      border: "border-green-500/30",
      desc: "Niveau des grandes organisations. La sécurité est intégrée dans tous les processus métier. Des exercices de simulation d'attaque sont réalisés. La threat intelligence est intégrée dans les processus de décision.",
      signaux: ["Red team exercises / purple team", "Threat intelligence opérationnelle", "Dévsecops intégré", "PCA testé annuellement avec simulation réelle", "Certification ISO 27001 ou SOC 2", "Bug bounty programme"],
      priorite: "Maintenir et innover, anticiper les menaces émergentes."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Maturité cybersécurité PME : évaluer son niveau et progresser"
        description="Comment évaluer la maturité cybersécurité de votre PME ? Les 5 niveaux du modèle de maturité cyber, comment vous situer, et la feuille de route pour progresser. Guide opérationnel 2026 pour dirigeants et RSSI."
        canonical="/actualites/maturite-cybersecurite-pme-comment-evaluer"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Contenu éducatif</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Maturité cybersécurité PME : <span className="text-gradient">comment évaluer son niveau</span> et progresser
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                "Où en sommes-nous en matière de cybersécurité ?" C'est une des questions les plus fréquentes des dirigeants de PME. Le modèle de maturité cybersécurité apporte une réponse structurée : il positionne votre organisation sur une échelle de 1 à 5 et vous indique clairement ce qu'il faut faire pour progresser au niveau suivant.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Gauge className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Le modèle de maturité cybersécurité en 5 niveaux</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Inspiré du CMMI (Capability Maturity Model Integration) et adapté aux frameworks NIST CSF et CIS Controls, ce modèle permet à toute organisation de se situer et de construire une feuille de route progressive. La grande majorité des PME françaises se situent entre le niveau 1 et le niveau 2.
                </p>

                <div className="space-y-4">
                  {niveaux.map((n) => (
                    <div key={n.niveau} className={`card-glass rounded-xl p-6 border ${n.border}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full bg-background border-2 ${n.border} flex items-center justify-center font-heading font-bold text-sm ${n.couleur}`}>{n.niveau}</div>
                        <h3 className={`font-heading font-bold text-lg ${n.couleur}`}>{n.label}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{n.desc}</p>
                      <div className="mb-4">
                        <p className="text-xs font-heading uppercase text-primary mb-2">Signaux caractéristiques :</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {n.signaux.map((s, si) => (
                            <div key={si} className="text-muted-foreground text-xs flex items-start gap-1">
                              <span className={`${n.couleur} mt-0.5`}>•</span> {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-background/50 rounded-lg p-3">
                        <p className="text-xs font-heading uppercase text-primary mb-1">Priorité pour progresser :</p>
                        <p className="text-muted-foreground text-sm">{n.priorite}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Comment évaluer votre niveau de maturité</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Plusieurs méthodes permettent d'évaluer votre maturité cyber :
                </p>
                <div className="space-y-4">
                  {[
                    {
                      methode: "Auto-évaluation (gratuite, 1 heure)",
                      desc: "Répondez à notre checklist de 42 points (voir article dédié). Comptez vos réponses 'fait', 'partiel' et 'à faire'. 30+ points 'fait' → niveau 3 minimum ; 15-29 points → niveau 2 ; moins de 15 → niveau 1.",
                      ideal: "Premier bilan rapide, sans coût"
                    },
                    {
                      methode: "Diagnostic Mon Aide Cyber ANSSI (gratuit, 1 journée)",
                      desc: "Un prestataire partenaire ANSSI évalue votre maturité en une journée et vous remet un rapport avec un score et des recommandations priorisées. Disponible via cybermalveillance.gouv.fr.",
                      ideal: "PME de moins de 50 salariés souhaitant un avis expert gratuit"
                    },
                    {
                      methode: "Audit de maturité par prestataire qualifié (2 000 – 8 000 €, 2-5 jours)",
                      desc: "Un auditeur PASSI évalue votre organisation en profondeur : entretiens, revue documentaire, tests techniques ciblés. Le rapport positionne précisément votre maturité et propose une roadmap sur 12-24 mois.",
                      ideal: "PME voulant un positionnement précis et un plan d'action actionnable"
                    },
                    {
                      methode: "Certification ISO 27001 (10 000 – 40 000 €, 6-18 mois)",
                      desc: "La certification ISO 27001 démontre formellement votre niveau de maturité (équivalent niveau 4-5). C'est l'évaluation la plus reconnue internationalement, exigée par de nombreux grands comptes.",
                      ideal: "ETI ou PME avec obligations contractuelles ou ambitions export"
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <h3 className="font-heading font-semibold">{item.methode}</h3>
                        <span className="text-primary text-xs font-heading">Idéal pour : {item.ideal}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Quel niveau viser pour votre PME ?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { profil: "PME < 20 salariés, secteur non réglementé", objectif: "Niveau 2 minimum", detail: "Les mesures de base (MFA, EDR, sauvegardes) suffisent à réduire drastiquement le risque d'incident." },
                    { profil: "PME 20-100 salariés, secteur non réglementé", objectif: "Niveau 3 recommandé", detail: "Ajoutez gouvernance, audit annuel et formation. Le coût est marginal face au risque d'incident." },
                    { profil: "Entité importante NIS2", objectif: "Niveau 3-4 obligatoire", detail: "NIS2 impose de facto un niveau 3 minimum avec des éléments du niveau 4 (tests, notification d'incidents)." },
                    { profil: "Entité essentielle NIS2 / Secteur réglementé", objectif: "Niveau 4-5 requis", detail: "Santé, finance, énergie, défense : le régulateur attend un niveau de maturité élevé, souvent formalisé par une certification." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <p className="text-xs font-heading text-muted-foreground mb-1">{item.profil}</p>
                      <p className="font-heading font-bold text-primary mb-2">{item.objectif}</p>
                      <p className="text-muted-foreground text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">La feuille de route pour progresser d'un niveau</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Passer d'un niveau à l'autre prend en général de 6 à 18 mois selon votre point de départ et vos ressources. Voici les investissements nécessaires :
                </p>
                <div className="card-glass rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Transition</th>
                        <th className="text-left p-4 font-heading font-semibold">Durée estimée</th>
                        <th className="text-left p-4 font-heading font-semibold">Budget indicatif</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50"><td className="p-4">Niveau 1 → Niveau 2</td><td className="p-4">3 – 6 mois</td><td className="p-4">5 000 – 15 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4">Niveau 2 → Niveau 3</td><td className="p-4">6 – 12 mois</td><td className="p-4">10 000 – 30 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4">Niveau 3 → Niveau 4</td><td className="p-4">12 – 18 mois</td><td className="p-4">25 000 – 70 000 €</td></tr>
                      <tr><td className="p-4">Niveau 4 → Niveau 5</td><td className="p-4">18 – 36 mois</td><td className="p-4">50 000 – 150 000 €</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm mt-3">
                  Ces budgets incluent les outils, les prestations et le temps interne. Un RSSI externalisé peut considérablement accélérer la progression en évitant les erreurs coûteuses.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Évaluez votre maturité cyber en 1 journée</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts réalisent un audit de maturité cybersécurité adapté aux PME, avec un rapport clair, un score de maturité et une feuille de route priorisée sur 12 mois.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Évaluer ma maturité cybersécurité
                </Link>
              </section>
            </motion.div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default MaturiteCybersecurite;
