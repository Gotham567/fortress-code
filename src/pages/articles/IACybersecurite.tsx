import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, ShieldAlert, Sparkles, AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import heroImg from "@/assets/articles/ia-cybersecurite.jpg";

const IACybersecurite = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "IA et cybersécurité : opportunités, risques et bonnes pratiques pour les PME",
      "url": "https://securecyber.fr/actualites/ia-cybersecurite-guide-pme",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/ia-cybersecurite-guide-pme" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-05-05",
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
        { "@type": "ListItem", "position": 3, "name": "IA et cybersécurité : opportunités, risques et bonnes pratiques pour les PME", "item": "https://securecyber.fr/actualites/ia-cybersecurite-guide-pme" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="IA et cybersécurité : guide PME 2026 (risques & défense)"
        description="IA défensive, deepfakes, prompt injection, shadow AI, ISO 42001 et AI Act : guide complet pour sécuriser vos usages de l'intelligence artificielle en PME et ETI."
        canonical="/actualites/ia-cybersecurite-guide-pme"
        ogType="article"
        jsonLd={jsonLd}
        ogImage={heroImg}
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-05-05">5 Mai 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">IA et cybersécurité</span> : opportunités, risques et bonnes pratiques
              </h1>
              <img src={heroImg} alt="Intelligence artificielle et cybersécurité" className="w-full rounded-xl mb-8 border border-border/40" width={1280} height={720} />
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                En 2025, <strong>74 % des entreprises françaises ont intégré au moins un outil d'IA générative</strong> (étude Wavestone), mais seulement 18 % ont défini une politique de gouvernance IA. Côté attaquants, l'IA divise par 10 le temps de production d'un email de spear-phishing crédible et permet de cloner une voix en 3 secondes. Ce guide vous présente <strong>les usages défensifs de l'IA, les nouvelles menaces, le cadre réglementaire (AI Act, ISO 42001) et un plan d'action pragmatique</strong> pour les PME et ETI.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">L'IA au service de la défense</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Détection comportementale (EDR/XDR)", d: "Modèles de ML qui apprennent le comportement normal d'un utilisateur ou d'un endpoint et détectent les anomalies (lateral movement, exfiltration)." },
                  { t: "Filtrage anti-phishing avancé", d: "Analyse sémantique des emails (BEC, AiTM) au-delà des règles SPF/DKIM/DMARC. Detection des deepfake audio/vidéo en visio." },
                  { t: "Threat intelligence automatisée", d: "Corrélation d'IOCs, regroupement de campagnes d'attaque, priorisation automatique des CVE selon votre exposition réelle." },
                  { t: "Copilots SOC", d: "Microsoft Security Copilot, Splunk AI : génération automatique de requêtes KQL, résumé d'alertes, suggestions de remédiation." },
                  { t: "Pentest et red team assistés", d: "Génération automatisée de payloads, fuzzing intelligent, simulation d'attaques par agents autonomes." },
                  { t: "Hygiène du code (DevSecOps)", d: "Revue de code par LLM, génération de tests de sécurité, suggestions de correctifs sur vulnérabilités OWASP." },
                ].map((u, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-primary mb-1">{u.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{u.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 7 nouvelles menaces portées par l'IA</h2>
              </div>
              <div className="space-y-3">
                {[
                  { t: "Phishing hyper-personnalisé", d: "Des LLM scrappent LinkedIn et rédigent un email sans faute, calé sur l'actualité de votre entreprise. Le taux de clic explose (×4 selon IBM)." },
                  { t: "Deepfake vocal et vidéo", d: "Arnaque au président version 2025 : faux CEO en visio Teams ordonnant un virement. Premier cas connu : Arup Hong-Kong, 25 M$ détournés en février 2024." },
                  { t: "Prompt injection", d: "Injection de commandes cachées dans un document, un email ou une page web qui détournent votre copilot M365/Gemini pour exfiltrer des données." },
                  { t: "Shadow AI", d: "Vos salariés copient des données confidentielles dans ChatGPT/Claude perso : fuites, perte de propriété intellectuelle, non-conformité RGPD." },
                  { t: "Empoisonnement de modèles (data poisoning)", d: "Si vous fine-tunez un modèle interne, un attaquant peut corrompre les données d'entraînement pour induire des biais ou des back-doors." },
                  { t: "Génération de malware polymorphe", d: "Variants de ransomware générés à la volée pour échapper aux signatures EDR." },
                  { t: "Attaques sur les API d'IA", d: "Vol de clés API LLM (factures explosives), jailbreak, exfiltration de prompts système contenant des secrets." },
                ].map((m, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{m.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Cadre réglementaire : AI Act &amp; ISO 42001</h2>
              </div>
              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">AI Act européen</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Entré en application progressive depuis août 2024. Classifie les systèmes IA en 4 niveaux de risque. Les systèmes "à haut risque" (RH, scoring crédit, biométrie) imposent : documentation technique, gestion des risques, qualité des données, supervision humaine, journalisation. Sanctions jusqu'à 35 M€ ou 7 % du CA mondial.</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">ISO/IEC 42001:2023</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Premier standard international pour un système de management de l'IA (AIMS). Approche analogue à ISO 27001 : gouvernance, analyse de risque, contrôles, amélioration continue. Devient un argument commercial fort en 2026.</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">NIST AI RMF</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Framework américain de référence (Govern, Map, Measure, Manage). Compatible avec l'AI Act et utile pour structurer votre démarche sans certification.</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan d'action IA &amp; sécurité en 8 étapes</h2>
              </div>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                {[
                  "Inventorier les usages IA actuels (Copilot, ChatGPT, Gemini, agents internes) — y compris le shadow AI",
                  "Publier une charte d'utilisation de l'IA (données autorisées/interdites, validation humaine)",
                  "Activer les versions entreprise (Copilot for M365, ChatGPT Enterprise, Gemini Workspace) avec data residency UE",
                  "Bloquer les LLM grand public au niveau du proxy/CASB pour les données sensibles",
                  "Mettre en place une AI Bill of Materials (AI-BOM) : modèles, datasets, providers",
                  "Évaluer chaque cas d'usage IA selon AI Act (risque, transparence, supervision humaine)",
                  "Former les équipes : prompt engineering sécurisé, détection de deepfake, signalement",
                  "Auditer annuellement (red team IA, prompt injection, fuite de données)",
                ].map((s, i) => <li key={i} className="card-glass rounded-xl p-3 text-sm leading-relaxed">{s}</li>)}
              </ol>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">5 erreurs fréquentes à éviter</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Déployer Microsoft 365 Copilot sans avoir nettoyé les permissions SharePoint : Copilot expose massivement des données mal protégées",
                  "Croire qu'un LLM cloud « zero retention » dispense d'un PIA RGPD",
                  "Confier la modération de contenus sensibles à une IA sans supervision humaine",
                  "Stocker des clés API ou secrets dans des prompts ou agents",
                  "Confondre IA défensive et solution miracle : les SOC restent indispensables",
                ].map((e, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{e}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14 card-glass rounded-2xl p-8 text-center glow-border">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Sécurisez vos usages de l'IA</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes pour identifier vos cas d'usage IA à risque, vérifier votre conformité AI Act et prioriser les actions. Sans engagement.
              </p>
              <a href="https://calendly.com/lakaoub/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all">
                Réserver mon audit gratuit
              </a>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles liés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/spear-phishing-bec-guide-protection-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Spear-phishing &amp; BEC</h3>
                  <p className="text-muted-foreground text-sm">Les attaques email dopées à l'IA.</p>
                </Link>
                <Link to="/actualites/securiser-microsoft-365-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Sécuriser Microsoft 365</h3>
                  <p className="text-muted-foreground text-sm">Préparer son tenant avant Copilot.</p>
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

export default IACybersecurite;
