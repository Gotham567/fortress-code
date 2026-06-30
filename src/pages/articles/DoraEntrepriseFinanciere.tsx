import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Building2, Shield, FileText, CheckCircle } from "lucide-react";

const DoraEntrepriseFinanciere = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "DORA cybersécurité : obligations et mise en conformité pour les entreprises financières",
      "url": "https://securecyber.fr/actualites/dora-cybersecurite-entreprise-financiere",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/dora-cybersecurite-entreprise-financiere" },
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
        { "@type": "ListItem", "position": 3, "name": "DORA cybersécurité : obligations et mise en conformité pour les entreprises financières", "item": "https://securecyber.fr/actualites/dora-cybersecurite-entreprise-financiere" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="DORA cybersécurité : obligations et mise en conformité pour les entreprises financières"
        description="Guide complet DORA pour les entreprises financières : périmètre (banques, fintechs, assurances), 5 piliers, incidents à notifier, tests TLPT et sanctions. Applicable depuis janvier 2025."
        canonical="/actualites/dora-cybersecurite-entreprise-financiere"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Réglementation</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                DORA cybersécurité : obligations pour les <span className="text-gradient">entreprises financières</span>
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le règlement DORA (Digital Operational Resilience Act) est entré en application le 17 janvier 2025. Il impose à l'ensemble du secteur financier européen — banques, fintechs, assurances, gestionnaires d'actifs, prestataires de paiement — des exigences strictes en matière de cybersécurité et de résilience opérationnelle numérique. Voici ce que votre entreprise doit savoir et faire.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Qui est concerné par DORA ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  DORA s'applique à plus de 20 catégories d'entités financières et à leurs prestataires TIC critiques :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    { cat: "Établissements de crédit", ex: "Banques, caisses d'épargne, établissements de crédit spécialisé" },
                    { cat: "Assurances et réassurances", ex: "Entreprises d'assurance, mutuelles, réassureurs" },
                    { cat: "Entreprises d'investissement", ex: "Sociétés de gestion, OPCVM, fonds alternatifs" },
                    { cat: "Prestataires de paiement", ex: "Établissements de monnaie électronique, PSP" },
                    { cat: "Fintechs et crypto-actifs", ex: "Émetteurs de tokens, plateformes PSAN/CASP" },
                    { cat: "Prestataires TIC tiers critiques", ex: "Fournisseurs cloud AWS/Azure/GCP désignés par les autorités" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-4">
                      <h3 className="font-heading font-semibold text-sm mb-1">{item.cat}</h3>
                      <p className="text-muted-foreground text-xs">{item.ex}</p>
                    </div>
                  ))}
                </div>
                <div className="card-glass rounded-xl p-5 border border-amber-500/30 bg-amber-500/5">
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-amber-400">Important :</strong> Les PME du secteur financier (moins de 10 salariés et moins de 2 M€ de bilan) bénéficient d'un cadre simplifié mais ne sont pas totalement exemptées. Elles doivent respecter a minima les piliers gestion des risques TIC et notification des incidents.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les 5 piliers de DORA</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "Gestion des risques TIC",
                      desc: "Cadre de gouvernance avec rôle du conseil d'administration, politique de sécurité SI, cartographie des actifs critiques, gestion des accès, chiffrement, sauvegardes et plan de reprise d'activité. L'organe de direction doit valider et suivre le cadre de risque TIC.",
                    },
                    {
                      num: "2",
                      title: "Gestion et notification des incidents",
                      desc: "Classification des incidents selon leur gravité, notification à l'autorité compétente (ACPR en France pour les banques/assurances, AMF pour les sociétés de gestion) : rapport initial dans les 4 heures, rapport intermédiaire dans les 72 heures, rapport final dans un mois.",
                    },
                    {
                      num: "3",
                      title: "Tests de résilience opérationnelle numérique",
                      desc: "Tests de base annuels (analyses de vulnérabilités, revues de code, tests de scénarios). TLPT (Threat-Led Penetration Testing) tous les 3 ans pour les entités désignées — équivalent des tests TIBER-EU. Réalisés par des prestataires qualifiés.",
                    },
                    {
                      num: "4",
                      title: "Gestion des risques liés aux tiers",
                      desc: "Inventaire de tous les prestataires TIC, évaluation du risque de concentration, clauses contractuelles obligatoires (SLA, droit d'audit, plans de sortie, localisation des données), surveillance renforcée des prestataires critiques désignés par les AES.",
                    },
                    {
                      num: "5",
                      title: "Partage d'informations",
                      desc: "Encouragement à partager les informations sur les cybermenaces et vulnérabilités au sein d'arrangements volontaires entre entités financières. Encadrement juridique pour le partage de données confidentielles.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6 flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center shrink-0">{item.num}</div>
                      <div>
                        <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les incidents à notifier à l'ACPR/AMF</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DORA introduit une classification des incidents TIC majeurs selon 7 critères. Un incident est "majeur" s'il répond à plusieurs de ces seuils :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Nombre de clients ou transactions affectés (seuils fixés par les RTS)",
                    "Durée et étendue de la perturbation",
                    "Impact sur la réputation ou les activités critiques",
                    "Étendue géographique (plusieurs États membres)",
                    "Pertes de données (disponibilité, authenticité, intégrité, confidentialité)",
                    "Criticité des services affectés pour l'économie",
                    "Impact potentiel systémique sur le secteur financier",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 card-glass rounded-lg p-3">
                      <FileText className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  La notification initiale doit intervenir dans les <strong>4 heures après la classification</strong> de l'incident comme majeur, et au plus tard dans les <strong>24 heures après détection</strong>. Cette contrainte impose une chaîne de détection, qualification et escalade très rapide.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Sanctions DORA : jusqu'à 2 % du CA mondial</h2>
                </div>
                <div className="card-glass rounded-xl overflow-hidden mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Type de sanction</th>
                        <th className="text-left p-4 font-heading font-semibold">Montant</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-4">Amendes administratives (entités financières)</td>
                        <td className="p-4 font-bold text-red-400">Jusqu'à 2 % du CA mondial annuel</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4">Sanctions pécuniaires (personnes physiques)</td>
                        <td className="p-4 font-bold text-orange-400">Jusqu'à 1 000 000 €</td>
                      </tr>
                      <tr>
                        <td className="p-4">Prestataires TIC tiers critiques (astreinte journalière)</td>
                        <td className="p-4 font-bold text-yellow-400">Jusqu'à 1 % du CA mondial/jour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground text-sm">
                  En France, l'ACPR supervise les banques et assurances, l'AMF les sociétés de gestion. Ces autorités peuvent également imposer des mesures administratives : suspension des activités, retrait d'agrément, publication de la décision (name & shame).
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Plan de mise en conformité DORA en 6 étapes</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Réaliser un gap analysis DORA", desc: "Évaluer l'écart entre votre posture actuelle et les exigences DORA sur les 5 piliers. Cartographier vos prestataires TIC, vos processus de gestion des incidents et vos pratiques de test existantes." },
                    { step: "2", title: "Impliquer le conseil d'administration", desc: "DORA impose que l'organe de direction approuve et suive le cadre de risque TIC. Mettez en place un reporting cyber régulier au board, documentez les délibérations sur la sécurité numérique." },
                    { step: "3", title: "Mettre à jour les contrats prestataires TIC", desc: "Auditez tous vos contrats avec des fournisseurs de services numériques (cloud, logiciels, infogérance). Les clauses DORA obligatoires incluent : SLA de disponibilité, droit d'audit, plans de continuité, localisation des données, stratégie de sortie." },
                    { step: "4", title: "Mettre en place la chaîne de notification", desc: "Définissez qui détecte, qui qualifie, qui décide de notifier et qui notifie l'autorité. Rédigez des procédures internes et testez-les. La contrainte des 4 heures ne laisse aucune place à l'improvisation." },
                    { step: "5", title: "Planifier le programme de tests", desc: "Définissez un programme annuel de tests de base (pentest, scan de vulnérabilités, tests de reprise). Identifiez si votre entité est dans le périmètre des TLPT triennaux (en général, les entités systémiques)." },
                    { step: "6", title: "Documenter et maintenir", desc: "DORA est un règlement de conformité continue, pas un projet one-shot. Mettez en place des processus de maintenance : revue annuelle du cadre de risque, mise à jour de l'inventaire des prestataires, entraînements à la gestion de crise." },
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
                <h2 className="font-heading text-2xl font-bold mb-4">Audit de conformité DORA pour votre entreprise financière</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts réalisent des gap analysis DORA pour banques, fintechs, assurances et sociétés de gestion : évaluation des 5 piliers, cartographie des prestataires TIC, feuille de route priorisée et accompagnement à la mise en conformité.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un audit DORA
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

export default DoraEntrepriseFinanciere;
