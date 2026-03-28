import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, FileWarning, Scale, CheckCircle2, Eye, AlertTriangle, Database } from "lucide-react";

const ConformiteRGPD = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Conformité RGPD et cybersécurité : le guide pratique pour les PME",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-03-20",
    "dateModified": "2026-03-20",
    "description": "Guide complet sur la conformité RGPD et cybersécurité : obligations, mesures techniques, sanctions, DPO et plan de mise en conformité pour les PME."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Conformité RGPD et cybersécurité : guide PME"
        description="Conformité RGPD et cybersécurité pour les PME : obligations légales, mesures techniques à mettre en place, sanctions encourues, rôle du DPO et plan d'action en 10 étapes."
        canonical="/actualites/conformite-rgpd-cybersecurite-guide-pme"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-03-20">20 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Conformité RGPD</span> et cybersécurité : deux faces d'une même obligation
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Depuis 2018, le Règlement Général sur la Protection des Données (RGPD) impose à toute entreprise traitant des données personnelles de mettre en place des <strong>mesures de sécurité adaptées</strong>. Pour les PME, la frontière entre conformité RGPD et cybersécurité est souvent floue. Ce guide clarifie les obligations, les mesures techniques concrètes et les sanctions encourues, avec un plan d'action pragmatique.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">RGPD et cybersécurité : pourquoi c'est lié ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                L'article 32 du RGPD impose aux responsables de traitement de mettre en œuvre des <strong>« mesures techniques et organisationnelles appropriées »</strong> pour garantir un niveau de sécurité adapté au risque. Concrètement, la conformité RGPD est impossible sans une politique de cybersécurité solide.
              </p>
              <div className="card-glass rounded-xl p-6 mb-6">
                <h3 className="font-heading text-sm font-semibold mb-4 text-primary">Ce que le RGPD exige en matière de sécurité (Art. 32)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Pseudonymisation et chiffrement des données</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Confidentialité, intégrité et disponibilité des systèmes</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Capacité de restauration des données en cas d'incident</li>
                  </ul>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Procédures de test et d'évaluation régulières</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Notification des violations sous 72 heures</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> Documentation de toutes les mesures prises</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                En d'autres termes, <strong>une violation de données due à une faille de sécurité est aussi une violation du RGPD</strong>. C'est pourquoi la CNIL recommande de traiter cybersécurité et protection des données comme un seul et même chantier.
              </p>
            </motion.section>

            {/* Section 2 - Sanctions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <FileWarning className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les sanctions : ce que risque réellement une PME</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les amendes RGPD ne sont pas réservées aux géants de la tech. En 2025, la CNIL a prononcé <strong>147 sanctions</strong>, dont 40 % contre des PME et ETI. Le montant moyen pour une PME se situe entre <strong>10 000 et 150 000 €</strong>.
              </p>
              <div className="card-glass rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Sanctions financières</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• <strong>Jusqu'à 20 M€</strong> ou <strong>4 % du CA mondial</strong></li>
                      <li>• Amendes proportionnées à la taille de l'entreprise</li>
                      <li>• Cumul possible avec les sanctions pénales</li>
                      <li>• Publication des décisions (name & shame)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Exemples récents (PME)</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      <li>• Cabinet médical : <strong>75 000 €</strong> (données patients non chiffrées)</li>
                      <li>• E-commerce : <strong>50 000 €</strong> (fuite de 15 000 comptes clients)</li>
                      <li>• Agence immobilière : <strong>20 000 €</strong> (données locataires non sécurisées)</li>
                      <li>• Éditeur SaaS : <strong>125 000 €</strong> (API non sécurisée)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Au-delà de l'amende, les conséquences commerciales sont souvent plus lourdes : <strong>perte de contrats publics, résiliation de partenariats, défiance des clients</strong>. La conformité RGPD est devenue un critère de sélection pour les appels d'offres et les due diligence.
              </p>
            </motion.section>

            {/* Section 3 - Mesures techniques */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 12 mesures techniques indispensables</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La CNIL a publié un guide technique détaillant les mesures attendues. Voici les 12 mesures prioritaires pour une PME, classées par niveau de criticité :
              </p>
              <div className="space-y-3">
                {[
                  { priority: "Critique", items: ["Chiffrement des données sensibles (AES-256 au repos, TLS 1.3 en transit)", "Authentification forte (MFA) pour tous les accès aux données personnelles", "Sauvegardes chiffrées et testées régulièrement (règle 3-2-1)"] },
                  { priority: "Élevé", items: ["Gestion des droits d'accès (principe du moindre privilège)", "Journalisation et surveillance des accès aux données", "Mises à jour et correctifs de sécurité dans les 72h", "Chiffrement des postes de travail et appareils mobiles"] },
                  { priority: "Important", items: ["Politique de mots de passe conforme aux recommandations CNIL 2024", "Segmentation réseau entre données personnelles et autres systèmes", "Procédure de suppression sécurisée des données (effacement, broyage)", "Tests d'intrusion annuels sur les systèmes traitant des données personnelles", "Plan de réponse aux incidents intégrant la notification CNIL sous 72h"] },
                ].map((group, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Priorité {group.priority}</h3>
                    <ul className="text-muted-foreground text-sm space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 4 - Le DPO */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">DPO : faut-il en désigner un ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le Délégué à la Protection des Données (DPO) est obligatoire dans certains cas. Même quand il ne l'est pas, sa désignation est fortement recommandée par la CNIL pour les PME traitant des données sensibles.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">DPO obligatoire si :</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Organisme public ou autorité publique</li>
                    <li>• Suivi régulier et systématique de personnes à grande échelle</li>
                    <li>• Traitement de données sensibles à grande échelle (santé, biométrie, etc.)</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Options pour les PME</h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• <strong>DPO interne</strong> : salarié formé (coût : formation + temps dédié)</li>
                    <li>• <strong>DPO externalisé</strong> : prestataire spécialisé (1 500 – 5 000 €/an)</li>
                    <li>• <strong>DPO mutualisé</strong> : partagé entre plusieurs PME</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Le DPO et le RSSI (ou <Link to="/actualites/rssi-externalise-guide" className="text-primary hover:underline">RSSI externalisé</Link>) sont complémentaires : le DPO veille à la conformité juridique, le RSSI à la sécurité technique. Dans les PME, ces deux rôles peuvent être assurés par le même prestataire externe pour optimiser les coûts.
              </p>
            </motion.section>

            {/* Section 5 - Plan d'action */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan de mise en conformité en 10 étapes</h2>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Cartographier vos traitements de données", desc: "Recensez tous les traitements de données personnelles : fichiers clients, paie, vidéosurveillance, newsletter, etc. Utilisez le modèle de registre CNIL." },
                  { step: "2", title: "Identifier les bases légales", desc: "Pour chaque traitement, identifiez la base légale : consentement, contrat, obligation légale, intérêt légitime. Documentez vos choix." },
                  { step: "3", title: "Auditer la sécurité actuelle", desc: "Réalisez un audit cybersécurité ciblé sur les systèmes traitant des données personnelles. Identifiez les écarts avec les recommandations CNIL." },
                  { step: "4", title: "Mettre en place les mesures techniques", desc: "Déployez les 12 mesures techniques prioritaires : chiffrement, MFA, sauvegardes, gestion des accès, journalisation." },
                  { step: "5", title: "Rédiger les documents obligatoires", desc: "Politique de confidentialité, mentions d'information, registre des traitements, contrats sous-traitant (Art. 28), AIPD si nécessaire." },
                  { step: "6", title: "Organiser la gestion des droits", desc: "Mettez en place une procédure pour répondre aux demandes d'accès, rectification, effacement et portabilité dans le délai d'un mois." },
                  { step: "7", title: "Former les collaborateurs", desc: "Sensibilisez toutes les équipes aux bonnes pratiques RGPD et cybersécurité. Formez spécifiquement les équipes qui manipulent des données sensibles." },
                  { step: "8", title: "Préparer la gestion des violations", desc: "Rédigez une procédure de notification : détection, évaluation de la gravité, notification CNIL sous 72h, communication aux personnes concernées." },
                  { step: "9", title: "Auditer vos sous-traitants", desc: "Vérifiez la conformité RGPD de vos prestataires IT, hébergeurs, SaaS. Mettez à jour les contrats avec les clauses de l'article 28." },
                  { step: "10", title: "Planifier les revues périodiques", desc: "Programmez un audit de conformité annuel, une mise à jour du registre trimestrielle et un test d'intrusion annuel." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <span className="bg-primary/10 text-primary font-heading font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{item.step}</span>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 6 - Notification violation */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Violation de données : la procédure de notification</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En cas de violation de données personnelles, le RGPD impose une procédure stricte. Le non-respect des délais de notification est l'un des motifs de sanction les plus fréquents.
              </p>
              <div className="card-glass rounded-xl p-6">
                <div className="space-y-4">
                  {[
                    { time: "0 – 4h", action: "Détection et containment : identifier la violation, limiter la propagation, préserver les preuves" },
                    { time: "4 – 24h", action: "Évaluation : nature des données, nombre de personnes, gravité, risques pour les droits et libertés" },
                    { time: "24 – 48h", action: "Décision de notification : si risque pour les personnes → notification CNIL obligatoire" },
                    { time: "< 72h", action: "Notification CNIL : via le téléservice en ligne, avec toutes les informations disponibles" },
                    { time: "Sans délai", action: "Si risque élevé : notification individuelle des personnes concernées (email, courrier)" },
                    { time: "Post-incident", action: "Documentation complète, retour d'expérience, mise à jour des mesures de sécurité" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-primary font-heading font-semibold text-sm w-20 flex-shrink-0">{item.time}</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="card-glass rounded-xl p-8 text-center border-primary/20">
                <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-3">Besoin d'un accompagnement RGPD & cybersécurité ?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos consultants certifiés vous accompagnent dans votre mise en conformité RGPD avec une approche intégrée cybersécurité : audit, mesures techniques, documentation et formation de vos équipes.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un audit RGPD
                </Link>
              </div>
            </motion.section>

            {/* Articles connexes */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <h2 className="font-heading text-xl font-bold mb-6">Articles connexes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/actualites/directive-nis2-guide-pme-eti" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Directive NIS2 : guide PME</h3>
                  <p className="text-muted-foreground text-xs">Obligations de cybersécurité pour les entreprises</p>
                </Link>
                <Link to="/actualites/audit-cybersecurite-obligatoire" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Audit cybersécurité obligatoire</h3>
                  <p className="text-muted-foreground text-xs">NIS2, DORA, RGPD : qui est concerné ?</p>
                </Link>
                <Link to="/actualites/rssi-externalise-guide" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">RSSI externalisé</h3>
                  <p className="text-muted-foreground text-xs">Externaliser la sécurité de votre SI</p>
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

export default ConformiteRGPD;
