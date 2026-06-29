import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Search, FileText, AlertTriangle, CheckCircle } from "lucide-react";

const AuditAvantLeveedeFonds = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Audit cybersécurité avant levée de fonds : ce que les investisseurs regardent",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit cybersécurité avant levée de fonds : ce que les investisseurs vérifient"
        description="Pourquoi un audit cybersécurité est indispensable avant une levée de fonds ? What due diligence cyber attendent les VCs et fonds d'investissement, quels points examinent-ils et comment vous préparer. Guide 2026."
        canonical="/actualites/audit-cybersecurite-avant-levee-de-fonds"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Par profil acheteur</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Audit cybersécurité avant <span className="text-gradient">levée de fonds</span> : ce que les investisseurs vérifient
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                La cybersécurité est devenue un point de due diligence incontournable lors des levées de fonds. Les VC et fonds de private equity ont été trop souvent surpris post-investissement par des incidents cyber coûteux dans leurs participations. Aujourd'hui, beaucoup mandatent des audits cybersécurité avant de signer. Comprendre ce qu'ils recherchent vous permettra de vous préparer — et potentiellement d'augmenter votre valorisation.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi la cybersécurité impacte votre valorisation</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un incident de sécurité peut détruire des années de construction de valeur en quelques jours. Les investisseurs le savent et intègrent le risque cyber dans leur évaluation de plusieurs façons :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { titre: "Décote sur la valorisation", desc: "Des failles critiques non corrigées peuvent justifier une décote de 10 à 30 % sur la valorisation proposée par les fondateurs." },
                    { titre: "Conditions suspensives", desc: "L'investissement peut être conditionné à la correction de vulnérabilités critiques avant le closing." },
                    { titre: "Garanties contractuelles", desc: "Les investisseurs peuvent exiger des garanties sur l'état de sécurité, engageant la responsabilité des fondateurs post-closing." },
                    { titre: "Mise en place d'un RSSI", desc: "Certains fonds exigent le recrutement ou la désignation d'un RSSI (interne ou externalisé) comme condition de l'investissement." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold mb-2">{item.titre}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  À l'inverse, une entreprise qui peut démontrer une maturité cyber solide — gouvernance documentée, audits réguliers, incidents bien gérés — rassure les investisseurs et peut défendre une valorisation plus élevée. La cybersécurité devient un actif immatériel valorisable.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Ce que les investisseurs examinent en due diligence cyber</h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      cat: "Gouvernance et organisation",
                      points: [
                        "Existe-t-il une politique de sécurité (PSSI) formalisée et approuvée par la direction ?",
                        "Y a-t-il un responsable cybersécurité identifié (RSSI, DPO, CTO avec rôle sécurité) ?",
                        "La direction est-elle formée aux enjeux cyber ?",
                        "Des audits cybersécurité ou pentests ont-ils été réalisés ces 12 derniers mois ?",
                        "Des incidents de sécurité ont-ils eu lieu ? Comment ont-ils été gérés ?",
                      ]
                    },
                    {
                      cat: "Protection des données et propriété intellectuelle",
                      points: [
                        "Où sont stockées les données critiques (IP, code source, données clients) ?",
                        "Les données sont-elles chiffrées au repos et en transit ?",
                        "Qui a accès aux données les plus sensibles ? Les accès sont-ils tracés ?",
                        "L'entreprise est-elle en conformité RGPD (registre des traitements, DPO si obligatoire) ?",
                        "Des sauvegardes régulières et testées existent-elles pour les actifs critiques ?",
                      ]
                    },
                    {
                      cat: "Gestion des accès et authentification",
                      points: [
                        "Le MFA est-il activé sur tous les systèmes critiques (cloud, messagerie, VPN) ?",
                        "Les anciens collaborateurs ou prestataires conservent-ils des accès ?",
                        "Les mots de passe sont-ils gérés avec un gestionnaire d'entreprise ?",
                        "Les droits d'administration sont-ils limités aux personnes qui en ont besoin ?",
                      ]
                    },
                    {
                      cat: "Sécurité du code et de l'infrastructure",
                      points: [
                        "Les dépôts de code source sont-ils correctement sécurisés (accès, branches protégées) ?",
                        "Des secrets (API keys, mots de passe) sont-ils présents dans le code source ?",
                        "Les dépendances logicielles sont-elles régulièrement mises à jour (SCA) ?",
                        "L'infrastructure cloud est-elle configurée selon les bonnes pratiques (CIS, AWS Well-Architected) ?",
                        "Des tests de sécurité automatisés sont-ils intégrés dans le pipeline CI/CD ?",
                      ]
                    },
                  ].map((cat, ci) => (
                    <div key={ci} className="card-glass rounded-xl p-6">
                      <h3 className="font-heading font-semibold text-primary mb-3">{cat.cat}</h3>
                      <ul className="space-y-2">
                        {cat.points.map((p, pi) => (
                          <li key={pi} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">→</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les red flags qui font fuir les investisseurs</h2>
                </div>
                <div className="space-y-3">
                  {[
                    "Secrets (API keys, mots de passe, certificats) découverts dans des dépôts Git publics ou privés",
                    "Aucun inventaire des accès : impossible de savoir qui a accès à quoi",
                    "Ex-employés ou ex-prestataires avec accès encore actifs",
                    "Violations de données passées non divulguées ou gérées de façon chaotique",
                    "Aucune sauvegarde testée pour les systèmes de production",
                    "Infrastructure cloud entièrement exposée sur Internet sans segmentation",
                    "Absence totale de politique de gestion des correctifs",
                    "Un seul compte administrateur partagé par toute l'équipe technique",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 card-glass rounded-lg p-3">
                      <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Se préparer à la due diligence cyber : le plan en 6 étapes</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Idéalement, commencez cette préparation <strong>6 à 12 mois avant votre levée de fonds</strong>. Les correctifs prennent du temps et les audits doivent pouvoir être refaits après correction pour démontrer le progrès.
                </p>
                <div className="space-y-4">
                  {[
                    { step: "1", action: "Réaliser un audit cybersécurité indépendant", timing: "J-12 à J-6 mois", detail: "Mandatez un prestataire qualifié PASSI pour évaluer votre posture de sécurité. Cela vous donnera une vision objective avant les investisseurs et vous permettra de traiter les problèmes à temps." },
                    { step: "2", action: "Corriger les vulnérabilités critiques et hautes", timing: "J-9 à J-3 mois", detail: "Concentrez-vous sur les findings critiques et hauts. Les vulnérabilités moyennes et basses peuvent être en plan de remédiation, mais les critiques doivent être corrigées avant le closing." },
                    { step: "3", action: "Préparer la documentation cybersécurité", timing: "J-6 à J-3 mois", detail: "Constituez un dossier : PSSI, registre des actifs, politique de gestion des accès, procédure de gestion des incidents, registre des traitements RGPD. Les investisseurs demanderont ces documents." },
                    { step: "4", action: "Faire un audit de validation post-remédiation", timing: "J-3 à J-1 mois", detail: "Un second audit confirme que les vulnérabilités critiques ont bien été corrigées. Ce rapport de validation est un atout dans la data room." },
                    { step: "5", action: "Préparer les réponses aux questions de due diligence", timing: "J-2 à J-1 mois", detail: "Constituez un questionnaire Q&A avec vos réponses aux questions type des investisseurs. Votre RSSI ou prestataire peut vous aider à formuler des réponses précises et rassurantes." },
                    { step: "6", action: "Mettre en place un RSSI externalisé", timing: "J-6 mois ou avant", detail: "Si vous n'avez pas de RSSI, recruter ou externaliser ce rôle rassure les investisseurs. Un RSSI à temps partagé pour 1 500 à 3 000 €/mois est suffisant pour une startup ou PME en phase de croissance." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6 flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                          <h3 className="font-heading font-semibold">{item.action}</h3>
                          <span className="text-primary text-xs font-heading font-semibold">{item.timing}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">La data room cybersécurité : ce qu'elle doit contenir</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Incluez dans votre data room un dossier cybersécurité avec :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Le rapport du dernier audit cybersécurité (versions complète ou executive summary selon accord NDA)</li>
                  <li>Le rapport de validation post-remédiation (si disponible)</li>
                  <li>La PSSI (Politique de Sécurité des Systèmes d'Information)</li>
                  <li>Le registre des actifs numériques (version simplifiée)</li>
                  <li>La liste des incidents de sécurité des 24 derniers mois et leur traitement</li>
                  <li>Les certifications ou qualifications obtenues (ISO 27001, SOC 2, etc.) si applicable</li>
                  <li>L'attestation de conformité RGPD ou le registre des traitements</li>
                  <li>Les contrats de prestataires cybersécurité (RSSI externalisé, SOC managé, etc.)</li>
                  <li>La politique de sauvegarde et les résultats des derniers tests de restauration</li>
                </ul>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Préparez votre due diligence cyber avec nos experts</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nous accompagnons les startups et PME en phase de levée de fonds pour réaliser leur audit de préparation, corriger les vulnérabilités et constituer un dossier cybersécurité rassurant pour les investisseurs.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Préparer ma due diligence cyber
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

export default AuditAvantLeveedeFonds;
