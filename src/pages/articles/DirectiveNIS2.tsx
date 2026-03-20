import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Building2, AlertTriangle, FileCheck, Scale, Clock, CheckCircle2 } from "lucide-react";

const DirectiveNIS2 = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Directive NIS2 : ce que les PME et ETI doivent savoir en 2026",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-03-18",
    "dateModified": "2026-03-18"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Directive NIS2 : guide complet pour les PME et ETI"
        description="Tout savoir sur la directive NIS2 : entreprises concernées, obligations de cybersécurité, sanctions, calendrier de mise en conformité et plan d'action pour les PME et ETI."
        canonical="/actualites/directive-nis2-guide-pme-eti"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Article</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-03-18">18 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Directive <span className="text-gradient">NIS2</span> : ce que les PME et ETI doivent savoir
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Entrée en application en octobre 2024, la directive européenne NIS2 (Network and Information Security) élargit considérablement le périmètre des entreprises soumises à des obligations de cybersécurité. Là où NIS1 ne concernait qu'environ 500 entités en France, NIS2 en touche potentiellement plus de <strong>15 000</strong>, dont de nombreuses PME et ETI. Voici tout ce qu'il faut savoir pour anticiper et se mettre en conformité.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Qu'est-ce que la directive NIS2 ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NIS2 est la refonte de la directive européenne NIS de 2016. Son objectif : harmoniser et renforcer le niveau de cybersécurité à l'échelle de l'Union européenne face à l'augmentation exponentielle des cybermenaces. Elle impose des exigences renforcées en matière de gestion des risques, de notification des incidents et de gouvernance de la sécurité.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Contrairement à NIS1 qui ciblait uniquement les opérateurs de services essentiels (énergie, transport, santé), NIS2 étend son champ à 18 secteurs d'activité et introduit deux catégories d'entités : les <strong>entités essentielles</strong> et les <strong>entités importantes</strong>. Cette distinction détermine le niveau de supervision et les sanctions applicables.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En France, la transposition en droit national est assurée par l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information), qui sera l'autorité compétente pour superviser la mise en conformité et sanctionner les manquements.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Votre entreprise est-elle concernée ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La directive s'applique selon deux critères croisés : le <strong>secteur d'activité</strong> et la <strong>taille de l'entreprise</strong>. Sont concernées les entreprises de plus de 50 salariés ou réalisant plus de 10 millions d'euros de chiffre d'affaires dans l'un des secteurs suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Secteurs hautement critiques</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-1.5">
                    <li>• Énergie (électricité, gaz, pétrole, hydrogène)</li>
                    <li>• Transports (aérien, ferroviaire, maritime, routier)</li>
                    <li>• Banque et infrastructures des marchés financiers</li>
                    <li>• Santé (hôpitaux, laboratoires, industrie pharma)</li>
                    <li>• Eau potable et eaux usées</li>
                    <li>• Infrastructure numérique (DNS, cloud, datacenters)</li>
                    <li>• Administration publique</li>
                    <li>• Espace</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Autres secteurs critiques</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-1.5">
                    <li>• Services postaux et d'expédition</li>
                    <li>• Gestion des déchets</li>
                    <li>• Fabrication de produits chimiques</li>
                    <li>• Industrie agroalimentaire</li>
                    <li>• Fabrication (dispositifs médicaux, électronique, machines, véhicules)</li>
                    <li>• Fournisseurs numériques (marketplaces, moteurs de recherche, réseaux sociaux)</li>
                    <li>• Recherche</li>
                  </ul>
                </div>
              </div>
              <div className="card-glass rounded-xl p-5 border-primary/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong className="text-foreground">Attention :</strong> même si votre PME ne figure pas directement dans ces secteurs, vous pouvez être concerné en tant que <strong>sous-traitant ou fournisseur</strong> d'une entité régulée. Les grandes entreprises soumises à NIS2 devront évaluer la sécurité de leur chaîne d'approvisionnement, ce qui se traduira par des exigences contractuelles envers leurs prestataires.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les obligations concrètes de NIS2</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La directive impose un ensemble de mesures de gestion des risques que les entreprises doivent mettre en œuvre de manière proportionnée à leur taille et à leur exposition aux risques :
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { title: "Analyse de risques et politiques de sécurité", desc: "Mettre en place une politique de sécurité des systèmes d'information (PSSI), réaliser des analyses de risques régulières et définir des mesures de sécurité adaptées. Cela inclut la classification des actifs, l'identification des menaces et la mise en place de contrôles proportionnés." },
                  { title: "Gestion des incidents", desc: "Détecter, analyser et gérer les incidents de sécurité. Notification obligatoire à l'ANSSI sous 24h pour une alerte précoce, sous 72h pour un rapport détaillé, et sous 1 mois pour un rapport final. L'absence de notification peut entraîner des sanctions distinctes." },
                  { title: "Continuité d'activité", desc: "Garantir la résilience des services essentiels avec des plans de continuité et de reprise d'activité (PCA/PRA), des sauvegardes testées régulièrement et des procédures de gestion de crise documentées." },
                  { title: "Sécurité de la chaîne d'approvisionnement", desc: "Évaluer et gérer les risques liés aux fournisseurs et prestataires. Cela signifie auditer la sécurité de vos partenaires critiques, intégrer des clauses de sécurité dans les contrats et surveiller les accès accordés aux tiers." },
                  { title: "Sécurité dans l'acquisition et le développement", desc: "Intégrer la sécurité dès la conception des systèmes (security by design), gérer les vulnérabilités avec une politique de mise à jour rigoureuse et réaliser des tests de sécurité (pentests, audits de code)." },
                  { title: "Formation et sensibilisation", desc: "Former les dirigeants et les collaborateurs aux enjeux de cybersécurité. NIS2 impose spécifiquement que les organes de direction suivent une formation en cybersécurité et valident les mesures prises — la responsabilité ne peut plus être déléguée entièrement au DSI." },
                  { title: "Chiffrement et contrôle d'accès", desc: "Mettre en œuvre des politiques de chiffrement des données, d'authentification forte (MFA) et de gestion des accès basée sur le principe du moindre privilège." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 4 - Sanctions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Sanctions en cas de non-conformité</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                NIS2 introduit un régime de sanctions significatif, inspiré du RGPD, qui fait peser un risque financier réel sur les entreprises non conformes :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-destructive">Entités essentielles</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Jusqu'à <strong>10 millions d'euros</strong> ou <strong>2% du chiffre d'affaires annuel mondial</strong> (le montant le plus élevé). L'ANSSI dispose en outre de pouvoirs de supervision renforcés : audits, inspections sur site, et possibilité de suspendre temporairement l'activité d'un dirigeant.
                  </p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-destructive">Entités importantes</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Jusqu'à <strong>7 millions d'euros</strong> ou <strong>1,4% du chiffre d'affaires annuel mondial</strong> (le montant le plus élevé). La supervision est réactive (sur signalement ou après incident), plutôt que proactive comme pour les entités essentielles.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Au-delà des sanctions financières, la directive prévoit la <strong>responsabilité personnelle des dirigeants</strong>. Les organes de direction peuvent être tenus responsables du non-respect des obligations de cybersécurité, ce qui constitue un changement majeur par rapport au cadre précédent.
              </p>
            </motion.section>

            {/* Section 5 - Plan d'action */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan d'action en 6 étapes pour les PME</h2>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Évaluer votre éligibilité", desc: "Déterminez si votre entreprise entre dans le périmètre de NIS2 en croisant votre secteur d'activité avec les critères de taille. Si vous êtes fournisseur d'une entité régulée, anticipez les exigences contractuelles à venir." },
                  { step: "2", title: "Réaliser un audit de maturité cyber", desc: "Évaluez votre niveau actuel de sécurité par rapport aux exigences de NIS2. Un audit de maturité identifie les écarts et priorise les actions. C'est le point de départ indispensable pour un plan de mise en conformité réaliste." },
                  { step: "3", title: "Formaliser votre gouvernance", desc: "Nommez un responsable sécurité (RSSI interne ou externalisé), créez ou mettez à jour votre PSSI, et assurez l'implication des dirigeants via une formation dédiée. Documentez les rôles et responsabilités." },
                  { step: "4", title: "Mettre en place les mesures techniques", desc: "Déployez les mesures prioritaires : MFA, sauvegardes 3-2-1, segmentation réseau, EDR, gestion des vulnérabilités, chiffrement des données sensibles. Priorisez en fonction de votre analyse de risques." },
                  { step: "5", title: "Préparer la gestion d'incidents", desc: "Définissez un processus de détection, qualification et notification des incidents. Préparez les modèles de notification pour l'ANSSI (alerte 24h, rapport 72h, rapport final 1 mois). Testez votre procédure avec un exercice de crise." },
                  { step: "6", title: "Auditer et améliorer en continu", desc: "Planifiez des audits réguliers (pentest, audit de configuration), maintenez une veille réglementaire, et adaptez vos mesures au fil de l'évolution des menaces. La conformité NIS2 est un processus continu, pas un projet ponctuel." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary text-sm">{item.step}</span>
                    </div>
                    <div className="card-glass rounded-xl p-5 flex-1">
                      <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 6 - Timeline */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Calendrier et échéances clés</h2>
              </div>
              <div className="card-glass rounded-xl p-6">
                <div className="space-y-6">
                  {[
                    { date: "Janvier 2023", event: "Entrée en vigueur de la directive NIS2 au niveau européen" },
                    { date: "Octobre 2024", event: "Date limite de transposition en droit national par les États membres" },
                    { date: "2025-2026", event: "Publication des décrets d'application en France, enregistrement des entités auprès de l'ANSSI" },
                    { date: "2026-2027", event: "Contrôles et premières sanctions possibles par l'ANSSI" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-heading text-sm font-semibold text-foreground">{item.date}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <div className="card-glass rounded-2xl p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-3">Besoin d'un accompagnement NIS2 ?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto mb-6">
                  CyberSecure accompagne les PME et ETI dans leur mise en conformité NIS2 : audit de maturité, formalisation de la PSSI, mise en place des mesures techniques et organisationnelles, préparation aux notifications d'incidents.
                </p>
                <Link to="/contact">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-3 rounded-lg transition-colors">
                    Demander un diagnostic NIS2
                  </button>
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

export default DirectiveNIS2;
