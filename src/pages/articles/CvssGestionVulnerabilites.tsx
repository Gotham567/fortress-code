import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart2 } from "lucide-react";

const CvssGestionVulnerabilites = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Score CVSS 3.1 et 4.0 : comprendre et prioriser la remédiation des vulnérabilités",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-08",
    "dateModified": "2026-06-08",
    "description": "Guide complet sur CVSS 3.1 et CVSS 4.0 : métriques de base, temporelles et environnementales, différences entre les versions, combinaison avec EPSS et KEV pour une priorisation optimale."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Score CVSS 3.1 et 4.0 : prioriser la remédiation des vulnérabilités"
        description="Guide complet CVSS 3.1 et CVSS 4.0 : métriques de base, temporelles, environnementales et supplémentaires, limites du CVSS seul, combinaison avec EPSS et catalogue KEV CISA."
        canonical="/actualites/cvss-priorisation-vulnerabilites-guide"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-06-08">8 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Score CVSS 3.1 et 4.0</span> : comprendre et prioriser la remédiation
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le CVSS (Common Vulnerability Scoring System) est le standard international pour évaluer la sévérité des vulnérabilités logicielles. Mais un score de 9.8 ne signifie pas nécessairement que vous devez tout arrêter pour patcher — il faut comprendre ce que mesure réellement le CVSS et comment le combiner avec d'autres données pour prioriser intelligemment.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BarChart2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">CVSS 3.1 : les métriques en détail</h2>
              </div>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Métriques de base (Base Score)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Le score de base évalue les caractéristiques intrinsèques d'une vulnérabilité :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Attack Vector (AV)</strong> : Network (N) = accès depuis Internet, Adjacent (A) = réseau local, Local (L) = accès physique/session, Physical (P) = contact physique.</li>
                <li><strong className="text-foreground">Attack Complexity (AC)</strong> : Low (L) = reproductible facilement, High (H) = conditions spécifiques requises.</li>
                <li><strong className="text-foreground">Privileges Required (PR)</strong> : None (N) = aucun, Low (L) = utilisateur basique, High (H) = admin.</li>
                <li><strong className="text-foreground">User Interaction (UI)</strong> : None (N) = aucune action utilisateur, Required (R) = un utilisateur doit agir.</li>
                <li><strong className="text-foreground">Scope (S)</strong> : Unchanged (U) = impact limité au composant vulnérable, Changed (C) = impact sur d'autres composants.</li>
                <li><strong className="text-foreground">CIA Impact</strong> : Confidentiality, Integrity, Availability — chacun noté None/Low/High.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Une CVE avec AV:N/AC:L/PR:N/UI:N (réseau, faible complexité, sans authentification, sans interaction) et CIA High/High/High obtiendra un score critique proche de 10.
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Métriques temporelles (Temporal Score)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Modulent le score de base en fonction de facteurs qui évoluent dans le temps :
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">Exploit Code Maturity (E)</strong> : Unproven / POC / Functional / High — existence d'un exploit public.</li>
                <li>• <strong className="text-foreground">Remediation Level (RL)</strong> : Official Fix / Temporary Fix / Workaround / Unavailable.</li>
                <li>• <strong className="text-foreground">Report Confidence (RC)</strong> : Unknown / Reasonable / Confirmed.</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Métriques environnementales (Environmental Score)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permettent d'adapter le score au contexte spécifique de votre organisation : importance du système affecté pour votre activité (Modified CIA), exigences de sécurité propres à votre secteur. Une CVE critique sur un système non exposé et non critique peut être traité en basse priorité dans votre contexte.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">CVSS 4.0 : les nouveautés</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CVSS 4.0 (publié en novembre 2023) introduit plusieurs améliorations majeures :
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Nomenclature des scores</strong> : CVSS-B (Base), CVSS-BT (Base + Threat), CVSS-BE (Base + Environmental), CVSS-BTE (complet).</li>
                <li><strong className="text-foreground">Threat Metrics</strong> : le score temporel devient "Threat Score" avec Exploit Maturity (Attacked / POC / Unreported).</li>
                <li><strong className="text-foreground">Métriques supplémentaires</strong> : Safety (impact sur la sécurité des personnes — ICS/OT), Automatable (possibilité d'automatiser l'exploitation — ver informatique).</li>
                <li><strong className="text-foreground">Provider et Consumer scores</strong> : l'éditeur fournit le score de base ; l'utilisateur l'affine avec les métriques environnementales.</li>
                <li><strong className="text-foreground">Granularité améliorée</strong> : 4 niveaux de CIA impact (None/Low/Medium/High) vs 3 en CVSS 3.1.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Les limites du CVSS et comment les dépasser</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le CVSS mesure la <strong className="text-foreground">sévérité intrinsèque</strong>, pas le <strong className="text-foreground">risque réel</strong> pour votre organisation. Une CVE CVSS 9.8 sur un logiciel que vous n'utilisez pas est un risque nul. Pour dépasser ces limites :
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">EPSS</strong> (Exploit Prediction Scoring System) : ajoute la probabilité d'exploitation réelle dans les 30 jours. Disponible via l'API FIRST.org ou intégré dans Tenable/Qualys.</li>
                <li><strong className="text-foreground">KEV CISA</strong> : confirmation qu'une vulnérabilité est activement exploitée. C'est le signal d'alarme le plus fort, quel que soit le CVSS.</li>
                <li><strong className="text-foreground">Contexte d'exposition</strong> : une CVE sur un système exposé sur Internet est 10× plus urgente que sur un système interne.</li>
                <li><strong className="text-foreground">Criticité de l'actif</strong> : une CVE moyenne sur un serveur de paiement est plus prioritaire qu'une CVE critique sur un système de test.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Formule de priorisation recommandée</h2>
              <div className="card-glass rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Score de priorité = <strong className="text-foreground">(CVSS Base × EPSS × Exposition) + KEV_Bonus × Criticité_Actif</strong>
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Exposition : 1 (interne), 2 (DMZ), 3 (exposé Internet)</li>
                  <li>• KEV_Bonus : +2 si présent dans le catalogue KEV</li>
                  <li>• Criticité_Actif : 1 (standard), 1.5 (important), 2 (critique)</li>
                  <li>• Seuil d'urgence : score &gt; 15 → patch sous 72h ; &gt; 10 → sous 7 jours ; &gt; 5 → sous 30 jours</li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </main>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default CvssGestionVulnerabilites;
