import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Calendar } from "lucide-react";

const VulnerabilitesCritiques = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "CVE et gestion des vulnérabilités critiques : prioriser et remédier en 2026",
      "url": "https://securecyber.fr/actualites/vulnerabilites-critiques-cve-gestion",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/vulnerabilites-critiques-cve-gestion" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-20",
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
        { "@type": "ListItem", "position": 3, "name": "CVE et gestion des vulnérabilités critiques : prioriser et remédier en 2026", "item": "https://securecyber.fr/actualites/vulnerabilites-critiques-cve-gestion" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="CVE et vulnérabilités critiques : gestion et priorisation 2026"
        description="Méthode complète de gestion des vulnérabilités : CVE, CVSS 3.1, EPSS, catalogue KEV CISA, SLA de remédiation, outils de scan et conformité NIS2 pour les PME et ETI."
        canonical="/actualites/vulnerabilites-critiques-cve-gestion"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Gestion des vulnérabilités</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-20">20 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">CVE et vulnérabilités critiques</span> : prioriser et remédier en 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                En 2025, plus de 29 000 CVE ont été publiées — soit 80 vulnérabilités par jour. Face à ce flux continu, les équipes sécurité doivent prioriser intelligemment plutôt que de tout patcher. Voici la méthode structurée pour gérer les vulnérabilités critiques et satisfaire aux exigences NIS2.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Le triptyque CVSS + EPSS + KEV</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong className="text-foreground">CVSS 3.1</strong> (Common Vulnerability Scoring System) note la sévérité de 0 à 10 : critique (9–10), élevé (7–8.9), moyen (4–6.9), faible (&lt;4). Mais le CVSS mesure la sévérité théorique, pas la probabilité d'exploitation réelle.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'<strong className="text-foreground">EPSS</strong> (Exploit Prediction Scoring System) de FIRST.org prédit la probabilité qu'une vulnérabilité soit exploitée dans les 30 jours suivants. Combiner CVSS + EPSS réduit de 87 % le volume de patches à traiter en urgence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le <strong className="text-foreground">catalogue KEV de la CISA</strong> liste les vulnérabilités activement exploitées dans la nature (1 200+ entrées). Toute CVE présente dans le KEV doit être patchée en urgence, quel que soit son score CVSS.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">SLA de remédiation recommandés</h2>
              <div className="space-y-4">
                <div className="card-glass rounded-lg p-5">
                  <p className="font-heading font-bold text-foreground mb-1">KEV CISA ou CVSS ≥ 9.0</p>
                  <p className="text-muted-foreground text-sm">Patch sous 24 à 72 heures. Mesure compensatoire immédiate si impossible (isolation réseau, désactivation du service).</p>
                </div>
                <div className="card-glass rounded-lg p-5">
                  <p className="font-heading font-bold text-foreground mb-1">CVSS 7.0–8.9 + EPSS &gt; 0.1</p>
                  <p className="text-muted-foreground text-sm">Patch sous 7 jours. Priorité haute dans le backlog de l'équipe IT.</p>
                </div>
                <div className="card-glass rounded-lg p-5">
                  <p className="font-heading font-bold text-foreground mb-1">CVSS 4.0–6.9</p>
                  <p className="text-muted-foreground text-sm">Patch sous 30 à 90 jours selon l'EPSS et le contexte d'exposition (système exposé sur Internet vs interne).</p>
                </div>
                <div className="card-glass rounded-lg p-5">
                  <p className="font-heading font-bold text-foreground mb-1">CVSS &lt; 4.0</p>
                  <p className="text-muted-foreground text-sm">Best effort. Intégré au cycle trimestriel ou annuel de maintenance.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Outils de scan de vulnérabilités</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Tenable.io / Nessus</strong> : référence du marché, intègre EPSS et KEV, couverture complète (réseau, web, cloud, OT).</li>
                <li><strong className="text-foreground">Qualys VMDR</strong> : priorisation automatique par risque, intégration ITSM (ServiceNow, JIRA), reporting de conformité.</li>
                <li><strong className="text-foreground">OpenVAS / Greenbone</strong> : solution open source pour les PME, scanner réseau complet, interface web GSAD.</li>
                <li><strong className="text-foreground">Wiz / Orca Security</strong> : spécialisés cloud (AWS, Azure, GCP), découverte sans agent, intégration CI/CD.</li>
                <li><strong className="text-foreground">Trivy</strong> : open source, conteneurs Docker, IaC, dépendances applicatives — parfait pour les environnements DevSecOps.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Conformité NIS2 et gestion des vulnérabilités</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'article 21 de la directive NIS2 impose aux entités essentielles et importantes de mettre en place des <strong className="text-foreground">politiques de gestion des vulnérabilités documentées</strong>. Les preuves à fournir en cas d'inspection ANSSI incluent :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Politique de gestion des vulnérabilités avec SLA formalisés et approuvés par la direction.</li>
                <li>• Registre des vulnérabilités actives avec état de remédiation et date de clôture.</li>
                <li>• Rapports de conformité patch produits trimestriellement (% patchés dans les SLA).</li>
                <li>• Résultats des scans de vulnérabilités périodiques et actions correctives.</li>
                <li>• Documentation des risques acceptés avec justification et signature du RSSI.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Gérer les systèmes non patchables</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certains systèmes (serveurs legacy, OT/IoT, applications critiques sans fenêtre de maintenance) ne peuvent pas être patchés immédiatement. Les mesures compensatoires obligatoires :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong className="text-foreground">Segmentation réseau</strong> : isoler les actifs vulnérables dans des VLAN dédiés avec ACLs strictes.</li>
                <li>• <strong className="text-foreground">Virtual patching</strong> : WAF ou IPS pour bloquer l'exploitation de la vulnérabilité sans modifier le système.</li>
                <li>• <strong className="text-foreground">Monitoring renforcé</strong> : règles SIEM spécifiques pour détecter toute tentative d'exploitation.</li>
                <li>• <strong className="text-foreground">Document d'acceptation de risque</strong> : formalisé, daté, signé par le responsable métier et le RSSI.</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default VulnerabilitesCritiques;
