import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Activity, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const ScanVulnerabilitesReseau = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Scan de vulnérabilités réseau pour PME : guide complet 2026 (Nessus, OpenVAS, CVSS)",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Scan de vulnérabilités réseau pour PME : guide complet 2026 (Nessus, OpenVAS, CVSS)"
        description="Tout savoir sur le scan de vulnérabilités réseau pour PME : différence interne/externe, outils Nessus/OpenVAS/Qualys, lecture CVSS, fréquence recommandée et passage au pentest."
        canonical="/actualites/scan-vulnerabilites-reseau-pme"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Technique</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Scan de vulnérabilités réseau pour PME : <span className="text-gradient">guide complet 2026</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Un scan de vulnérabilités réseau est souvent la première étape concrète d'une démarche de cybersécurité. En quelques heures, il révèle les failles connues sur votre infrastructure : ports ouverts non nécessaires, services obsolètes, certificats expirés, mots de passe par défaut. Ce guide vous explique comment ça marche et comment en exploiter les résultats.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Scan interne vs scan externe : quelle différence ?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading font-semibold text-primary mb-3">Scan externe</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Simulé depuis Internet, sans accès au réseau interne. Identifie ce qu'un attaquant externe peut voir et exploiter : services exposés, versions logicielles vulnérables, certificats TLS expirés, formulaires web.
                    </p>
                    <p className="text-muted-foreground text-xs font-semibold">Périmètre typique :</p>
                    <ul className="text-muted-foreground text-xs mt-1 space-y-1">
                      <li>• IP publiques de l'entreprise</li>
                      <li>• Noms de domaine (site web, mail, VPN)</li>
                      <li>• Services cloud exposés (API, buckets)</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading font-semibold text-primary mb-3">Scan interne</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Réalisé depuis l'intérieur du réseau, simulant la position d'un employé malveillant ou d'un malware déjà présent. Identifie les systèmes non patchés, les partages réseau exposés, les services d'administration accessibles.
                    </p>
                    <p className="text-muted-foreground text-xs font-semibold">Périmètre typique :</p>
                    <ul className="text-muted-foreground text-xs mt-1 space-y-1">
                      <li>• Serveurs internes et postes de travail</li>
                      <li>• Active Directory et contrôleurs de domaine</li>
                      <li>• Équipements réseau (switches, routeurs)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Un scan complet couvre les deux périmètres. La pratique montre que les vulnérabilités internes sont souvent plus nombreuses et plus critiques que celles exposées sur Internet, car les équipes focalisent naturellement leur attention sur le périmètre externe.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les outils de scan : comparatif</h2>
                </div>
                <div className="card-glass rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Outil</th>
                        <th className="text-left p-4 font-heading font-semibold">Type</th>
                        <th className="text-left p-4 font-heading font-semibold">Points forts</th>
                        <th className="text-left p-4 font-heading font-semibold">Coût</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Nessus (Tenable)</td>
                        <td className="p-4">Commercial</td>
                        <td className="p-4">Référence marché, 170 000+ plugins CVE, reporting complet</td>
                        <td className="p-4">~3 000 €/an (Essentials : 16 IPs gratuit)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Qualys VMDR</td>
                        <td className="p-4">SaaS</td>
                        <td className="p-4">Vue cloud centralisée, scoring QDS, intégration ITSM</td>
                        <td className="p-4">5 000 à 15 000 €/an selon volume</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Rapid7 InsightVM</td>
                        <td className="p-4">Commercial</td>
                        <td className="p-4">Prioritisation par risque réel, intégration SOAR</td>
                        <td className="p-4">4 000 à 12 000 €/an</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">OpenVAS (Greenbone)</td>
                        <td className="p-4">Open source</td>
                        <td className="p-4">Gratuit, nombreux plugins CVE, communauté active</td>
                        <td className="p-4">Gratuit (compétences requises)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Nmap + NSE scripts</td>
                        <td className="p-4">Open source</td>
                        <td className="p-4">Découverte réseau + détection services, très flexible</td>
                        <td className="p-4">Gratuit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm">
                  Pour une PME sans équipe sécurité interne, la meilleure option est souvent de faire réaliser le scan par un prestataire externe avec Nessus ou Qualys. Les outils open source comme OpenVAS demandent des compétences pour être bien exploités et génèrent davantage de faux positifs sans configuration précise.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Lire et prioriser les résultats avec CVSS</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un scan produit typiquement des centaines de vulnérabilités. La priorisation utilise le score CVSS v3.1 (Common Vulnerability Scoring System) de 0 à 10 :
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { level: "Critique", range: "9.0 – 10.0", color: "text-red-400", border: "border-red-500/30 bg-red-500/5", action: "Patcher en urgence (< 24h)" },
                    { level: "Élevé", range: "7.0 – 8.9", color: "text-orange-400", border: "border-orange-500/30 bg-orange-500/5", action: "Patcher rapidement (< 7 jours)" },
                    { level: "Moyen", range: "4.0 – 6.9", color: "text-yellow-400", border: "border-yellow-500/30 bg-yellow-500/5", action: "Planifier (< 30 jours)" },
                    { level: "Faible", range: "0.1 – 3.9", color: "text-green-400", border: "border-green-500/30 bg-green-500/5", action: "Traiter selon les moyens" },
                  ].map((item, i) => (
                    <div key={i} className={`card-glass rounded-xl p-4 border ${item.border}`}>
                      <p className={`font-heading font-bold text-sm ${item.color}`}>{item.level}</p>
                      <p className="text-muted-foreground text-xs mt-1">Score : {item.range}</p>
                      <p className="text-muted-foreground text-xs mt-2 font-medium">{item.action}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le score CVSS mesure la sévérité théorique. Pour affiner la priorisation, combinez-le avec :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>EPSS (Exploit Prediction Scoring System) :</strong> probabilité que la vulnérabilité soit exploitée dans les 30 prochains jours</li>
                  <li><strong>Catalogue KEV de la CISA :</strong> liste des vulnérabilités déjà exploitées activement dans des attaques réelles</li>
                  <li><strong>Criticité de l'actif exposé :</strong> une vulnérabilité CVSS 7 sur un serveur de paie est plus urgente que sur un serveur de développement</li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Scan de vulnérabilités vs pentest : les différences clés</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold mb-3 text-primary">Scan de vulnérabilités</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>✓ Automatisé, rapide (quelques heures)</li>
                      <li>✓ Couvre tout le périmètre défini</li>
                      <li>✓ Peu coûteux, peut être récurrent</li>
                      <li>✗ Ne confirme pas l'exploitabilité réelle</li>
                      <li>✗ Faux positifs possibles</li>
                      <li>✗ Ne teste pas la logique métier</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold mb-3 text-primary">Pentest</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>✓ Confirme l'exploitabilité réelle</li>
                      <li>✓ Teste les enchaînements d'attaques</li>
                      <li>✓ Évalue l'impact réel (accès aux données)</li>
                      <li>✗ Plus coûteux (5 000 à 30 000 €)</li>
                      <li>✗ Périmètre limité par le temps alloué</li>
                      <li>✗ Moins fréquent (annuel ou bisannuel)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  La bonne pratique combine les deux : scan trimestriel pour détecter les nouvelles vulnérabilités au fil du temps, pentest annuel ou après changements majeurs pour confirmer l'exploitabilité et tester la logique applicative.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Quelle fréquence pour les scans de vulnérabilités ?</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { freq: "Mensuel ou en continu", ctx: "Entreprises avec équipe sécurité interne, entités NIS2 ou DORA, environnements critiques", approach: "Solutions VMDR (Qualys, Rapid7, Tenable.io) avec agents déployés sur les systèmes" },
                    { freq: "Trimestriel", ctx: "PME avec exposition Internet significative, traitement de données sensibles, secteur réglementé", approach: "Scan piloté par un prestataire externe ou solution MSSP" },
                    { freq: "Semestriel", ctx: "PME standard sans contraintes réglementaires spécifiques, infrastructure stable", approach: "Prestataire externe ou solution on-premise Nessus/OpenVAS" },
                    { freq: "À chaque changement majeur", ctx: "Après déploiement, migration cloud, acquisition, ouverture d'un nouveau périmètre", approach: "Scan ciblé sur le périmètre modifié, résultats comparés à la baseline" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold text-primary text-sm mb-1">{item.freq}</h3>
                      <p className="text-muted-foreground text-sm mb-1"><strong>Contexte :</strong> {item.ctx}</p>
                      <p className="text-muted-foreground text-xs"><strong>Approche :</strong> {item.approach}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Réalisez votre premier scan de vulnérabilités réseau</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos équipes réalisent des scans de vulnérabilités internes et externes avec Nessus Professional, avec production d'un rapport priorisé CVSS et plan de remédiation. Résultats sous 48h. À partir de 1 500 € HT pour un périmètre PME standard.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un scan de vulnérabilités
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

export default ScanVulnerabilitesReseau;
