import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Clock, Search, Settings, FileSearch } from "lucide-react";

const GestionVulnerabilitesPatch = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gestion des vulnérabilités et patch management en entreprise",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-29",
    "dateModified": "2026-06-29",
    "description": "Programme complet de gestion des vulnérabilités : CVSS vs EPSS vs KEV, scanners (Tenable Nessus, Qualys, OpenVAS), délais de patching par criticité, patch management Windows/Linux et métriques."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Gestion des vulnérabilités et patch management en entreprise"
        description="Gestion des vulnérabilités : CVSS, EPSS, CISA KEV, scanners Nessus/Qualys/OpenVAS, SLA de patching, patch management Windows (WSUS/Intune) et Linux, et métriques MTTR."
        canonical="/actualites/gestion-vulnerabilites-patch-management-entreprise"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Vulnérabilités</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-29">29 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Gestion des vulnérabilités</span> et patch management en entreprise
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les attaquants exploitent les vulnérabilités connues en moyenne dans les 15 jours suivant la publication d'un CVE. Les entreprises, elles, mettent en moyenne 60 jours à patcher leurs systèmes critiques. Ce gap de 45 jours est la fenêtre d'exploitation. Un programme de gestion des vulnérabilités structuré est l'une des mesures les plus efficaces pour réduire le risque cyber — voici comment le construire.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">CVSS, EPSS et KEV : prioriser les vulnérabilités</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Avec des milliers de nouvelles CVE publiées chaque mois, il est impossible de tout patcher immédiatement. La priorisation est critique.
              </p>
              <h3 className="font-heading text-xl font-semibold mb-3">CVSS (Common Vulnerability Scoring System)</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Score de 0 à 10 basé sur la complexité d'exploitation, les privilèges requis, l'impact sur la CIA (Confidentialité/Intégrité/Disponibilité)</li>
                <li>Limitation majeure : le CVSS mesure la gravité théorique, pas la probabilité d'exploitation réelle. Un CVE CVSS 9.8 sans exploit public disponible peut être moins urgent qu'un CVE CVSS 7.2 activement exploité.</li>
                <li>CVSS v4.0 (2024) ajoute des métriques de sécurité supplémentaires et une meilleure granularité</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">EPSS (Exploit Prediction Scoring System)</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Score de probabilité d'exploitation dans les 30 prochains jours, basé sur le Machine Learning et des données réelles (CTI, activité des scanners, discussions forums)</li>
                <li>Un CVE CVSS 9.8 avec EPSS 0.5% est moins urgent qu'un CVE CVSS 7.0 avec EPSS 85%</li>
                <li>Approche recommandée : combiner CVSS ≥ 7 ET EPSS ≥ 10% pour la priorisation des patches urgents</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">CISA KEV (Known Exploited Vulnerabilities Catalog)</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Liste publiée par la CISA des vulnérabilités avec exploitation active confirmée dans la nature</li>
                <li>Pour les entités fédérales américaines : obligation de patcher les KEV sous 2 semaines. Pour les autres organisations : référence de facto pour les priorités absolues.</li>
                <li>API publique : filtrer l'output de vos scanners pour alerter immédiatement sur toute KEV détectée dans votre SI</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Scanners de vulnérabilités</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Tenable Nessus / Tenable.io :</strong> référence du marché, plus de 100 000 plugins de détection. Scan réseau authentifié et non-authentifié, scan de configuration (CIS Benchmarks), scan des assets cloud. Tenable.io est la version SaaS avec gestion centralisée.</li>
                <li><strong className="text-foreground">Qualys VMDR :</strong> solution SaaS complète (Vulnerability Management, Detection and Response). Agents légers sur les endpoints, scanning réseau, intégration CMDB/ITSM. Prioritization intégrée avec QDS (Qualys Detection Score) combinant CVSS + EPSS + KEV.</li>
                <li><strong className="text-foreground">OpenVAS / Greenbone :</strong> alternative open source à Nessus. Greenbone Community Edition gratuite pour les petites organisations. Moins de plugins mais couvre l'essentiel des vulnérabilités courantes.</li>
                <li><strong className="text-foreground">Rapid7 InsightVM :</strong> scanner avec risk scoring basé sur l'exposition réelle et les données de threat intelligence. Intégration native avec InsightIDR (SIEM) et Metasploit pour validation des exploits.</li>
                <li><strong className="text-foreground">Microsoft Defender Vulnerability Management :</strong> intégré à Defender for Endpoint, couvre les endpoints Windows/Linux/macOS sans agent supplémentaire. Idéal pour les organisations Microsoft 365.</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Scan authentifié vs non-authentifié</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Scan non-authentifié : simule un attaquant sans credentials — détecte les services exposés, banners, vulnérabilités réseau</li>
                <li>Scan authentifié (avec credentials ou agent) : accès aux packages installés, registre Windows, configuration — détecte 5x plus de vulnérabilités. Obligatoire pour un programme de vulnérabilités sérieux.</li>
                <li>Fréquence recommandée : scan complet hebdomadaire, scan continu avec agents pour les assets critiques</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">SLA de patching par criticité</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Définir des SLA (Service Level Agreements) de patching est indispensable pour responsabiliser les équipes IT et mesurer la conformité. Référentiel recommandé :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Critique (CVSS ≥ 9.0 ou KEV) :</strong> patching sous 24 à 72 heures. Pour les systèmes exposés Internet : 24h. Workaround ou isolation immédiate si le patch n'est pas disponible.</li>
                <li><strong className="text-foreground">Haute (CVSS 7.0-8.9) :</strong> patching sous 7 à 14 jours. Prioriser selon l'exposition (assets Internet-facing en premier) et l'EPSS.</li>
                <li><strong className="text-foreground">Moyenne (CVSS 4.0-6.9) :</strong> patching dans le cycle mensuel de patching régulier (30 jours).</li>
                <li><strong className="text-foreground">Faible (CVSS &lt; 4.0) :</strong> patching trimestriel ou lors du prochain cycle de maintenance planifié.</li>
                <li><strong className="text-foreground">Acceptation de risque :</strong> pour les vulnérabilités ne pouvant pas être patchées (systèmes legacy, OT), documenter formellement l'acceptation du risque avec approbation RSSI et direction, et mettre en place des compensating controls.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Patch management Windows et Linux</h2>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Windows</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Microsoft Intune / Autopatch :</strong> gestion des patches Windows en cloud, déploiement automatique par groupes d'appareils, rapports de conformité. Microsoft Autopatch automatise le cycle de patching selon les recommandations Microsoft.</li>
                <li><strong className="text-foreground">WSUS (Windows Server Update Services) :</strong> solution on-premises pour les environnements sans connectivité cloud. Approuver les patches par catégorie, déployer par phase (pilote → production).</li>
                <li><strong className="text-foreground">SCCM / ConfigMgr :</strong> pour les gros parcs Windows, gestion centralisée des déploiements logiciels et patches avec ciblage avancé par collection.</li>
                <li>Stratégie ring deployment : déployer d'abord sur 5% des machines (pilotes), attendre 48h, puis 20%, puis le reste — détecte les régressions avant un déploiement massif.</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Linux</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Unattended Upgrades (Debian/Ubuntu) :</strong> installation automatique des patches de sécurité uniquement, sans les mises à jour de fonctionnalités. Configuration via `/etc/apt/apt.conf.d/50unattended-upgrades`.</li>
                <li><strong className="text-foreground">DNF Automatic / yum-cron (RHEL/CentOS) :</strong> équivalent pour les distributions Red Hat. Configurer en mode `apply` pour les patches de sécurité uniquement.</li>
                <li><strong className="text-foreground">Ansible :</strong> orchestrer les patches sur des centaines de serveurs avec des playbooks, contrôler l'ordre de déploiement et les redémarrages.</li>
                <li><strong className="text-foreground">Canonical Livepatch / RHEL Live Patching :</strong> patches kernel sans redémarrage pour les systèmes haute disponibilité (bases de données, serveurs critiques).</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Métriques et tableau de bord VM</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">MTTR (Mean Time To Remediate) :</strong> temps moyen de correction par sévérité. Objectif : MTTR Critique &lt; 3 jours, Haute &lt; 14 jours.</li>
                <li><strong className="text-foreground">SLA compliance rate :</strong> pourcentage de vulnérabilités corrigées dans les délais définis. Objectif : 95%+ sur les vulnérabilités Critiques/Hautes.</li>
                <li><strong className="text-foreground">Vulnerability debt :</strong> nombre total de vulnérabilités ouvertes par sévérité, suivi dans le temps. Indicateur de la tendance (amélioration ou dégradation).</li>
                <li><strong className="text-foreground">Asset coverage :</strong> pourcentage des assets couverts par les scans. Un scan couvrant 95% des assets est plus efficace qu'un scan parfait sur 60%.</li>
                <li><strong className="text-foreground">Reporting mensuel RSSI :</strong> tableau de bord avec les métriques clés, les actifs les plus exposés, et le plan d'action pour les vulnérabilités hors SLA.</li>
              </ul>
            </section>

            <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="font-heading text-xl font-bold mb-3">Programme de gestion des vulnérabilités clé en main</h3>
              <p className="text-muted-foreground mb-6">Nous déployons et opérons votre programme de vulnerability management : sélection et déploiement du scanner adapté, définition des SLA, intégration avec votre SIEM et votre ITSM, et reporting mensuel pour le RSSI et la direction.</p>
              <Link to="/contact" className="btn-primary">Lancer votre programme VM</Link>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default GestionVulnerabilitesPatch;
