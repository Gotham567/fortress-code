import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Lock, Shield, CheckCircle, FileText } from "lucide-react";

const Article32RgpdSecurite = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Article 32 RGPD : mesures techniques de sécurité obligatoires pour votre entreprise",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Article 32 RGPD : mesures techniques de sécurité obligatoires pour votre entreprise"
        description="Article 32 RGPD décrypté : quelles mesures techniques sont obligatoires, comment les choisir selon le risque, ce que la CNIL vérifie lors des contrôles et les sanctions en cas d'insuffisance."
        canonical="/actualites/article-32-rgpd-mesures-techniques-securite"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">RGPD</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Article 32 RGPD : mesures <span className="text-gradient">techniques obligatoires</span> pour protéger les données
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                L'article 32 du RGPD impose au responsable de traitement et au sous-traitant de mettre en œuvre "des mesures techniques et organisationnelles appropriées" pour garantir un niveau de sécurité adapté au risque. Ce texte volontairement général est à l'origine de plus de 40 % des sanctions CNIL liées à la sécurité. Décryptage pratique de ce qu'il exige réellement.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Ce que dit exactement l'article 32</h2>
                </div>
                <div className="card-glass rounded-xl p-6 border-l-4 border-primary mb-6">
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "Le responsable du traitement et le sous-traitant mettent en œuvre les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque, compte tenu de l'état des connaissances, des coûts de mise en œuvre et de la nature, de la portée, du contexte et des finalités du traitement ainsi que des risques, dont le degré de probabilité et de gravité varie, que présente le traitement pour les droits et libertés des personnes physiques."
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">— Article 32.1, RGPD</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le texte cite quatre mesures à titre d'exemple (liste non exhaustive) :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {[
                    "Pseudonymisation et chiffrement des données personnelles",
                    "Moyens assurant la confidentialité, intégrité, disponibilité et résilience des systèmes",
                    "Capacité à rétablir la disponibilité des données en cas d'incident (PRA)",
                    "Processus de test, d'évaluation et d'appréciation régulière de l'efficacité des mesures",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 card-glass rounded-lg p-3">
                      <Lock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les mesures techniques attendues en pratique</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La CNIL et les autorités européennes ont progressivement précisé leurs attentes. Ces mesures sont désormais considérées comme minimales pour tout traitement de données personnelles :
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Chiffrement des données",
                      desc: "Chiffrement des bases de données contenant des données personnelles (AES-256 minimum), chiffrement des sauvegardes, chiffrement des données en transit (TLS 1.2+), chiffrement des terminaux (BitLocker, FileVault). La CNIL sanctionne régulièrement l'absence de chiffrement des données sensibles.",
                    },
                    {
                      title: "Gestion des accès et authentification forte",
                      desc: "Principe du moindre privilège (comptes avec uniquement les droits nécessaires), MFA sur tous les accès aux données personnelles (notamment les comptes admin et accès à distance), revue régulière des droits d'accès, suppression immédiate des accès lors des départs.",
                    },
                    {
                      title: "Pseudonymisation quand possible",
                      desc: "Remplacer les identifiants directs par des pseudonymes dans les traitements analytiques. Les données pseudonymisées restent des données personnelles mais leur sécurisation est plus facile. La pseudonymisation réduit le risque résiduel en cas de violation.",
                    },
                    {
                      title: "Sauvegardes et plan de reprise",
                      desc: "Sauvegardes régulières testées (règle 3-2-1 minimum), RPO et RTO définis, tests de restauration au moins annuels. La perte irrémédiable de données personnelles par absence de sauvegarde constitue une violation de l'article 32.",
                    },
                    {
                      title: "Journalisation et détection des accès",
                      desc: "Logs d'accès aux données personnelles conservés (qui a accédé, quand, depuis où), alertes sur les comportements anormaux (accès massif, exfiltration), centralisation dans un SIEM pour les traitements sensibles.",
                    },
                    {
                      title: "Tests de sécurité réguliers",
                      desc: "L'article 32.1.d impose des 'processus de test, d'évaluation et d'appréciation régulière'. En pratique : scan de vulnérabilités trimestriel, audit de sécurité annuel, pentest tous les 2-3 ans selon le niveau de risque et les données traitées.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Ce que la CNIL vérifie lors de ses contrôles</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En 2025-2026, la CNIL a intensifié ses contrôles sur la sécurité technique. Les vérifications portent typiquement sur :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Politique de mots de passe (longueur, complexité, renouvellement)",
                    "Présence ou absence de MFA sur les accès sensibles",
                    "Chiffrement des données en base de données et en transit",
                    "Durée de conservation effective vs politique déclarée",
                    "Procédure de gestion et notification des violations de données",
                    "Contrats avec les sous-traitants (clauses RGPD article 28)",
                    "Registre des traitements et sa complétude",
                    "Formation et sensibilisation des équipes",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 card-glass rounded-lg p-3">
                      <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="card-glass rounded-xl p-5 border border-red-500/30 bg-red-500/5">
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-red-400">Sanctions récentes :</strong> La CNIL a sanctionné des entreprises pour stockage de mots de passe en clair (500 000 €), absence de chiffrement des données de santé (1,5 M€), maintien d'accès après départ de salariés (250 000 €). La sécurité insuffisante est systématiquement un facteur aggravant lors d'une violation de données notifiée.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Démontrer la conformité à l'article 32 (accountability)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le RGPD repose sur le principe d'accountability : c'est à vous de prouver que vos mesures sont appropriées. Les preuves acceptées par la CNIL incluent :
                </p>
                <div className="space-y-3">
                  {[
                    { doc: "Rapport d'audit de sécurité ou de pentest récent", detail: "Idéalement moins de 2 ans, avec plan de remédiation suivi et justifications des points non corrigés" },
                    { doc: "Politique de sécurité des SI (PSSI) documentée", detail: "Approuvée par la direction, communiquée aux équipes, mise à jour régulièrement" },
                    { doc: "Analyse d'impact relative à la protection des données (AIPD)", detail: "Obligatoire pour les traitements à risque élevé, avec mesures proportionnées au risque identifié" },
                    { doc: "Registre des incidents de sécurité", detail: "Même les incidents mineurs non notifiés, avec les mesures prises et les raisons de la non-notification CNIL" },
                    { doc: "Contrats sous-traitants conformes article 28", detail: "Avec les clauses de sécurité, de droit d'audit et de notification des violations" },
                    { doc: "Preuves de formation et sensibilisation des équipes", detail: "Attestations de formations à la sécurité et au RGPD, résultats des tests de phishing internes" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-heading font-semibold text-sm">{item.doc}</span>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Évaluez votre conformité à l'article 32 RGPD</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos auditeurs réalisent une évaluation technique et organisationnelle de vos mesures de sécurité au regard de l'article 32 RGPD : identification des manquements, production d'un rapport utilisable comme preuve d'accountability, plan de remédiation priorisé.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un audit RGPD article 32
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

export default Article32RgpdSecurite;
