import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, PiggyBank, BarChart3, TrendingUp, Calculator, Target } from "lucide-react";

const BudgetCybersecuritePME = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Budget cybersécurité PME 50 salariés : combien investir en 2026 ?",
      "url": "https://securecyber.fr/actualites/budget-cybersecurite-pme-50-salaries",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/budget-cybersecurite-pme-50-salaries" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-28",
      "dateModified": "2026-06-30",
      "image": {
        "@type": "ImageObject",
        "url": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png",
        "width": 1200,
        "height": 630
      },
      "inLanguage": "fr-FR",
      "isPartOf": { "@type": "Blog", "name": "Blog CyberSecure", "url": "https://securecyber.fr/actualites" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://securecyber.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Actualités", "item": "https://securecyber.fr/actualites" },
        { "@type": "ListItem", "position": 3, "name": "Budget cybersécurité PME 50 salariés : combien investir en 2026 ?", "item": "https://securecyber.fr/actualites/budget-cybersecurite-pme-50-salaries" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Budget cybersécurité PME 50 salariés : combien investir en 2026 ?"
        description="Guide complet pour définir le budget cybersécurité d'une PME de 50 salariés : benchmarks, postes prioritaires, ROI, aides BPI France et calcul du coût d'une cyberattaque. Données 2026."
        canonical="/actualites/budget-cybersecurite-pme-50-salaries"
        ogType="article"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Coût & ROI</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Budget cybersécurité <span className="text-gradient">PME 50 salariés</span> : combien investir en 2026 ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Vous dirigez une PME d'une cinquantaine de collaborateurs et vous vous demandez combien vous devez investir en cybersécurité ? C'est la question la plus posée par les dirigeants de PME. La réponse dépend de votre secteur, de vos actifs critiques et de votre exposition réglementaire — mais il existe des repères chiffrés précis pour vous aider à budgéter intelligemment.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Le benchmark : ce que dépensent les PME similaires</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pour une PME de 50 salariés avec un budget IT annuel d'environ 80 000 à 120 000 €, voici les fourchettes de dépenses cybersécurité constatées en France en 2026 :
                </p>

                <div className="card-glass rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Secteur</th>
                        <th className="text-left p-4 font-heading font-semibold">% du budget IT</th>
                        <th className="text-left p-4 font-heading font-semibold">Budget annuel estimé</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Finance / Assurance</td><td className="p-4">15 – 20 %</td><td className="p-4">12 000 – 24 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Santé / Pharma</td><td className="p-4">12 – 18 %</td><td className="p-4">10 000 – 22 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Industrie / Manufacturing</td><td className="p-4">8 – 13 %</td><td className="p-4">6 400 – 16 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4 font-medium">Services / Conseil</td><td className="p-4">7 – 12 %</td><td className="p-4">5 600 – 14 400 €</td></tr>
                      <tr><td className="p-4 font-medium">Commerce / Distribution</td><td className="p-4">5 – 9 %</td><td className="p-4">4 000 – 11 000 €</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  En dessous de 5 000 € par an pour 50 salariés, il est très difficile d'assurer une protection réelle. Ce budget minimal permet tout juste de couvrir un antivirus centralisé, les mises à jour et une sensibilisation basique. Ce n'est pas suffisant face aux menaces actuelles.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les postes de dépenses pour 50 salariés</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pour une PME de 50 salariés avec un budget cybersécurité de 12 000 € à 18 000 € par an (budget médian recommandé), voici comment ventiler vos dépenses :
                </p>

                <div className="space-y-4">
                  {[
                    {
                      poste: "Protection des postes et serveurs (EDR)",
                      budget: "3 000 – 5 000 € / an",
                      detail: "Solution EDR (SentinelOne, Microsoft Defender for Business, CrowdStrike) à 5–8 € par endpoint et par mois pour 50 postes + 5 serveurs. Remplace avantageusement l'antivirus traditionnel. Inclut détection comportementale, réponse automatique et tableau de bord centralisé."
                    },
                    {
                      poste: "Authentification multi-facteurs et IAM",
                      budget: "1 800 – 3 000 € / an",
                      detail: "MFA sur tous les accès (VPN, cloud, applications métier). Azure AD P1 ou Okta à 3–5 € par utilisateur et par mois. Inclut SSO, accès conditionnel et gestion des identités. Mesure au meilleur ROI : bloque 99,9 % des compromissions de comptes selon Microsoft."
                    },
                    {
                      poste: "Sauvegarde et plan de reprise d'activité",
                      budget: "1 500 – 3 000 € / an",
                      detail: "Sauvegarde 3-2-1 avec une copie hors-ligne ou immuable. Veeam, Azure Backup ou Acronis Cyber Backup. Budget inclut stockage cloud et tests de restauration trimestriels. Sans sauvegarde testée, une attaque ransomware peut être fatale pour l'entreprise."
                    },
                    {
                      poste: "Sensibilisation et formation des équipes",
                      budget: "1 500 – 2 500 € / an",
                      detail: "Plateforme de sensibilisation (KnowBe4, Proofpoint, Terranova) à 30–50 € par utilisateur et par an. Inclut formations courtes e-learning et simulations de phishing trimestrielles. Réduit le taux de clic sur les liens malveillants de 25 % à moins de 5 % en 6 mois."
                    },
                    {
                      poste: "Audit et pentest annuel",
                      budget: "4 000 – 8 000 € / an",
                      detail: "Pentest réseau ou applicatif ciblé d'une durée de 3 à 5 jours, réalisé par un prestataire qualifié PASSI. Obligatoire ou fortement recommandé sous NIS2 et ISO 27001. Identifie les vulnérabilités avant que les attaquants ne les exploitent."
                    },
                    {
                      poste: "Filtrage web et messagerie",
                      budget: "1 200 – 2 500 € / an",
                      detail: "Filtre anti-spam et anti-phishing avancé (Microsoft Defender for Office 365 P1, Proofpoint Essentials). Filtrage DNS et web (Cisco Umbrella, Cloudflare Gateway). Ces solutions bloquent la majorité des tentatives de phishing et de malware par email."
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="font-heading font-semibold">{item.poste}</h3>
                        <span className="text-primary font-heading font-bold text-sm whitespace-nowrap">{item.budget}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Le coût d'une cyberattaque pour une PME de 50 salariés</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour comprendre pourquoi investir, il faut mesurer ce qu'une attaque coûte vraiment. Pour une PME de 50 salariés, les estimations convergent autour de ces chiffres :
                </p>
                <div className="card-glass rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Type de coût</th>
                        <th className="text-left p-4 font-heading font-semibold">Estimation PME 50 salariés</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50"><td className="p-4">Arrêt d'activité (5 jours en moyenne)</td><td className="p-4 text-red-400">15 000 – 40 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4">Récupération et reconstruction SI</td><td className="p-4 text-red-400">10 000 – 30 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4">Investigation forensique</td><td className="p-4 text-red-400">5 000 – 15 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4">Notification CNIL et communication</td><td className="p-4 text-red-400">2 000 – 8 000 €</td></tr>
                      <tr className="border-b border-border/50"><td className="p-4">Perte de contrats et clients</td><td className="p-4 text-red-400">10 000 – 50 000 €</td></tr>
                      <tr><td className="p-4 font-semibold">Total estimé</td><td className="p-4 text-red-400 font-bold">42 000 – 143 000 €</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Un budget cybersécurité de 12 000 à 18 000 € par an — soit 36 000 à 54 000 € sur 3 ans — face à un risque de sinistre de 42 000 à 143 000 € : le ROI est évident, même en ne considérant qu'une attaque sur 3 ans. Et c'est sans compter que 60 % des PME victimes d'un ransomware déposent le bilan dans les 18 mois suivants.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les aides financières pour réduire votre investissement</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      aide: "Mon Aide Cyber (ANSSI)",
                      desc: "Diagnostic cybersécurité gratuit proposé par des prestataires partenaires ANSSI. Durée : 1 journée. Résultat : rapport de maturité et plan d'action priorisé. Idéal pour démarrer. Disponible sur le site cybermalveillance.gouv.fr."
                    },
                    {
                      aide: "BPI France – Prêt Numérique",
                      desc: "Prêt à taux bonifié pouvant financer les investissements numériques incluant la cybersécurité. Montants de 10 000 € à 5 millions €. Accessible aux PME de moins de 250 salariés avec 2 ans d'existence minimum."
                    },
                    {
                      aide: "Régions et DREETS – Aides à l'innovation",
                      desc: "De nombreuses régions proposent des subventions pour la mise à niveau numérique et cybersécurité des PME locales. Renseignez-vous auprès de votre CCI ou DREETS (ex-DIRECCTE). Certains dispositifs couvrent jusqu'à 50 % des dépenses."
                    },
                    {
                      aide: "Crédit d'impôt recherche (CIR) et innovation (CII)",
                      desc: "Si votre démarche cybersécurité inclut une part d'innovation (développement d'outils internes, intégration de solutions nouvelles), une partie des dépenses peut être éligible au CIR ou CII. À évaluer avec votre expert-comptable."
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <h3 className="font-heading font-semibold text-primary mb-2">{item.aide}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <PiggyBank className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Optimiser son budget : le conseil des experts</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si votre budget est contraint, voici l'ordre de priorité absolue recommandé par nos experts pour une PME de 50 salariés :
                </p>
                <ol className="space-y-3">
                  {[
                    "Activer le MFA sur tous les comptes cloud et VPN — investissement minimal, impact maximal",
                    "Déployer un EDR sur postes et serveurs — remplace l'antivirus à coût comparable",
                    "Mettre en place une sauvegarde hors-ligne testée régulièrement",
                    "Former les équipes au phishing — une simulation gratuite révèle votre exposition réelle",
                    "Réaliser un audit technique ciblé sur les accès Internet (VPN, messagerie, site web)",
                    "Souscrire une cyber-assurance — les franchises baissent si vous avez les mesures ci-dessus",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 card-glass rounded-lg p-4">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Obtenez un plan budgétaire personnalisé</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts construisent avec vous un plan cybersécurité adapté à votre budget, votre secteur et vos contraintes réglementaires. Diagnostic gratuit en 30 minutes.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Obtenir un plan budgétaire gratuit
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

export default BudgetCybersecuritePME;
