import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Package, Shield, CheckCircle, FileText } from "lucide-react";

const CyberResilienceActPme = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cyber Resilience Act (CRA) : obligations pour les PME éditeurs et fabricants en France",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cyber Resilience Act (CRA) : obligations pour les PME éditeurs et fabricants en France"
        description="Cyber Resilience Act expliqué pour les PME françaises : qui est concerné (éditeurs logiciels, fabricants IoT), obligations de sécurité, marquage CE, délais et sanctions. Applicable dès 2026."
        canonical="/actualites/cyber-resilience-act-obligations-pme-france"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Réglementation</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Cyber Resilience Act : obligations pour les PME <span className="text-gradient">éditeurs et fabricants</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le Cyber Resilience Act (CRA), publié au Journal Officiel de l'UE en novembre 2024, est entré partiellement en vigueur. Il impose des exigences de cybersécurité obligatoires pour tous les produits comportant des éléments numériques vendus dans l'UE : logiciels, applications mobiles, firmware, objets connectés (IoT). Pour les PME françaises éditrices ou fabricantes, les délais approchent. Voici ce qu'il faut savoir.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Qui est concerné par le CRA ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le CRA s'applique à tous les <strong>fabricants et éditeurs</strong> qui mettent sur le marché de l'UE des "produits comportant des éléments numériques" (PEN). Concrètement, vous êtes concerné si vous :
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { type: "Éditeurs de logiciels", ex: "Applications desktop, SaaS, applications mobiles iOS/Android, plugins, bibliothèques open source commerciales" },
                    { type: "Fabricants d'objets connectés (IoT)", ex: "Caméras IP, routeurs, serrures connectées, capteurs industriels, wearables, jouets connectés" },
                    { type: "Fabricants d'équipements réseau", ex: "Switches, pare-feux, points d'accès WiFi, NAS, modems grand public" },
                    { type: "Éditeurs d'OS et de firmware", ex: "Systèmes d'exploitation, firmware d'équipements industriels, hyperviseurs" },
                    { type: "Intégrateurs de composants numériques", ex: "Fabricants qui intègrent du software ou du matériel tiers dans leurs produits finaux" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-4">
                      <h3 className="font-heading font-semibold text-sm mb-1">{item.type}</h3>
                      <p className="text-muted-foreground text-xs">{item.ex}</p>
                    </div>
                  ))}
                </div>
                <div className="card-glass rounded-xl p-5 border border-green-500/30 bg-green-500/5">
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-green-400">Exemptions importantes :</strong> Les services SaaS "purs" (où le logiciel n'est pas livré en tant que produit mais fourni comme service) ne sont pas directement couverts par le CRA, mais par NIS2 si l'entité est concernée. Les produits développés uniquement pour usage interne et non mis sur le marché sont également exemptés.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les 4 catégories de produits et leurs obligations</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le CRA classe les produits en catégories selon leur risque cybersécurité, avec des obligations croissantes :
                </p>
                <div className="space-y-4">
                  {[
                    {
                      cat: "Catégorie par défaut",
                      risk: "Risque faible",
                      color: "text-green-400",
                      bg: "border-green-500/20",
                      ex: "La grande majorité des logiciels et produits IoT grand public",
                      oblig: "Auto-évaluation de conformité par le fabricant. Documentation technique, déclaration de conformité UE, marquage CE.",
                    },
                    {
                      cat: "Classe I",
                      risk: "Risque moyen",
                      color: "text-yellow-400",
                      bg: "border-yellow-500/20",
                      ex: "Navigateurs, gestionnaires de mots de passe, antivirus, VPN, hyperviseurs de Classe I, OS mobiles",
                      oblig: "Auto-évaluation possible avec application d'un standard européen harmonisé, ou évaluation par un organisme notifié.",
                    },
                    {
                      cat: "Classe II",
                      risk: "Risque élevé",
                      color: "text-orange-400",
                      bg: "border-orange-500/20",
                      ex: "Hyperviseurs Classe II, cartes à puce, TPM, systèmes de contrôle industriels (ICS) en réseau",
                      oblig: "Évaluation obligatoire par un organisme tiers notifié (certification tierce partie).",
                    },
                    {
                      cat: "Produits critiques",
                      risk: "Risque critique",
                      color: "text-red-400",
                      bg: "border-red-500/20",
                      ex: "Systèmes TIC des infrastructures critiques, équipements militaires (hors périmètre CRA si secteur défense)",
                      oblig: "Certification européenne de cybersécurité au titre du règlement ENISA/EUCC obligatoire.",
                    },
                  ].map((item, i) => (
                    <div key={i} className={`card-glass rounded-xl p-5 border ${item.bg}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`font-heading font-bold text-sm ${item.color}`}>{item.cat}</span>
                        <span className="text-muted-foreground text-xs">• {item.risk}</span>
                      </div>
                      <p className="text-muted-foreground text-xs mb-2"><strong>Exemples :</strong> {item.ex}</p>
                      <p className="text-muted-foreground text-xs"><strong>Obligation :</strong> {item.oblig}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les obligations concrètes du CRA</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Sécurité by design", desc: "Concevoir le produit sans vulnérabilités connues exploitables, avec une surface d'attaque minimale et une configuration sécurisée par défaut. Pas de credentials par défaut universels." },
                    { title: "Mise à jour de sécurité pendant 5 ans", desc: "Fournir des mises à jour de sécurité gratuitement pendant 5 ans après la mise sur le marché (ou la durée de vie attendue si inférieure). Informer les utilisateurs des vulnérabilités." },
                    { title: "Notification des vulnérabilités sous 24h", desc: "Signaler à l'ENISA et à l'autorité nationale toute vulnérabilité activement exploitée dans les 24 heures après découverte. Rapport complet sous 72 heures." },
                    { title: "Documentation technique et déclaration CE", desc: "Rédiger et maintenir une documentation technique complète, établir une déclaration de conformité UE, apposer le marquage CE avant mise sur le marché." },
                    { title: "Gestion sécurisée des mises à jour", desc: "Mécanisme de mise à jour automatique sécurisé avec vérification d'intégrité, possibilité de rollback, notification des utilisateurs des mises à jour critiques." },
                    { title: "Protection des données de configuration", desc: "Chiffrement des données au repos et en transit, stockage sécurisé des credentials, capacité d'effacement sécurisé des données utilisateur." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-4">
                      <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Calendrier et sanctions</h2>
                </div>
                <div className="card-glass rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Date</th>
                        <th className="text-left p-4 font-heading font-semibold">Obligation</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium text-green-400">Novembre 2024</td>
                        <td className="p-4">Entrée en vigueur du CRA, début de la période de transition</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium text-yellow-400">Septembre 2026</td>
                        <td className="p-4">Obligations de notification des vulnérabilités applicables</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-red-400">Décembre 2027</td>
                        <td className="p-4">Toutes les obligations du CRA applicables (marquage CE, conformité produit)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { type: "Amendes pour non-conformité produit", amount: "Jusqu'à 15 M€ ou 2,5 % du CA mondial" },
                    { type: "Non-respect des obligations de notification", amount: "Jusqu'à 10 M€ ou 2 % du CA mondial" },
                    { type: "Informations incorrectes aux autorités", amount: "Jusqu'à 5 M€ ou 1 % du CA mondial" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-4">
                      <p className="text-muted-foreground text-xs mb-1">{item.type}</p>
                      <p className="text-red-400 font-heading font-bold text-sm">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Plan de préparation CRA pour PME éditrices</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Inventorier vos produits et déterminer leur classe", desc: "Listez tous vos produits commercialisés dans l'UE comportant des éléments numériques. Déterminez leur classe CRA (défaut, I, II ou critique) selon les critères de la réglementation." },
                    { step: "2", title: "Réaliser un audit de sécurité produit", desc: "Évaluez la sécurité de chaque produit au regard des exigences CRA : modélisation des menaces, analyse des vulnérabilités connues, revue de code, tests d'intrusion. Documentez les résultats." },
                    { step: "3", title: "Mettre en place un SBOM (Software Bill of Materials)", desc: "Le CRA recommande fortement le SBOM — inventaire de tous les composants logiciels d'un produit. Cela facilite la détection rapide des vulnérabilités dans des dépendances tierces (scénario Log4Shell)." },
                    { step: "4", title: "Structurer le processus de gestion des vulnérabilités", desc: "Mettez en place un programme de divulgation des vulnérabilités (VDP), un canal de réception des signalements (security@votreentreprise.fr), et une procédure de notification ENISA sous 24h." },
                    { step: "5", title: "Préparer la documentation technique et la déclaration CE", desc: "Rédigez la documentation technique CRA (description du produit, analyse de risque, résultats des tests, mesures de sécurité). Préparez la déclaration de conformité UE à signer avant décembre 2027." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6 flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                      <div>
                        <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Préparez votre conformité CRA dès maintenant</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Décembre 2027 approche. Nos experts accompagnent les éditeurs et fabricants français dans leur préparation au CRA : audit de sécurité produit, mise en place du SBOM, procédure de notification des vulnérabilités et documentation technique.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un audit de conformité CRA
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

export default CyberResilienceActPme;
