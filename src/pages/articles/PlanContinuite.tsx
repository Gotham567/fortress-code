import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Server, AlertTriangle, RefreshCw, CheckCircle2, Clock, FileCheck, Database } from "lucide-react";

const PlanContinuite = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "PCA et PRA en cybersécurité : guide complet pour les PME",
      "url": "https://securecyber.fr/actualites/pca-pra-cybersecurite-guide",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/pca-pra-cybersecurite-guide" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-03-25",
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
        { "@type": "ListItem", "position": 3, "name": "PCA et PRA en cybersécurité : guide complet pour les PME", "item": "https://securecyber.fr/actualites/pca-pra-cybersecurite-guide" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="PCA et PRA cybersécurité : guide complet pour les PME"
        description="Plan de Continuité d'Activité (PCA) et Plan de Reprise d'Activité (PRA) : pourquoi c'est essentiel, méthodologie en 8 étapes, tests, coûts et erreurs à éviter pour les PME et ETI."
        canonical="/actualites/pca-pra-cybersecurite-guide"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-03-25">25 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">PCA et PRA</span> en cybersécurité : protéger la continuité de votre entreprise
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                En 2025, <strong>60 % des PME victimes d'une cyberattaque majeure ont cessé leur activité dans les 18 mois suivants</strong> (source : ANSSI). Le Plan de Continuité d'Activité (PCA) et le Plan de Reprise d'Activité (PRA) sont les deux piliers qui permettent à une entreprise de survivre à un incident cyber critique. Ce guide détaille leur conception, leur mise en œuvre et leur maintien opérationnel.
              </p>
            </motion.div>

            {/* Section 1 - Définitions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">PCA et PRA : quelle différence ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ces deux plans sont complémentaires mais répondent à des temporalités différentes. Le <strong>PCA (Plan de Continuité d'Activité)</strong> vise à maintenir les fonctions critiques de l'entreprise <em>pendant</em> un sinistre, tandis que le <strong>PRA (Plan de Reprise d'Activité)</strong> organise le retour à la normale <em>après</em> l'incident.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Plan de Continuité (PCA)</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• Maintien des activités critiques en mode dégradé</li>
                    <li>• Activation immédiate dès la détection de l'incident</li>
                    <li>• Procédures manuelles de secours</li>
                    <li>• Communication de crise interne et externe</li>
                    <li>• Bascule sur les infrastructures de secours</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Plan de Reprise (PRA)</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• Restauration complète du système d'information</li>
                    <li>• Définition du RTO (temps de reprise) et RPO (perte de données acceptable)</li>
                    <li>• Procédures de restauration des sauvegardes</li>
                    <li>• Validation de l'intégrité des données restaurées</li>
                    <li>• Retour d'expérience et amélioration continue</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Un PCA sans PRA est incomplet : vous pouvez maintenir l'activité temporairement, mais sans plan de reprise structuré, le retour à la normale sera chaotique et potentiellement plus coûteux que l'attaque elle-même. Inversement, un PRA sans PCA signifie que votre entreprise est totalement à l'arrêt pendant toute la durée de la restauration.
              </p>
            </motion.section>

            {/* Section 2 - Pourquoi c'est critique */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Pourquoi les PME sont les plus vulnérables</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les grandes entreprises disposent généralement d'équipes dédiées à la gestion de crise. Les PME, en revanche, combinent plusieurs facteurs de risque qui rendent les PCA/PRA d'autant plus essentiels :
              </p>
              <div className="card-glass rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Facteurs de vulnérabilité</h3>
                    <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                      <li>• <strong>Budget limité</strong> : pas de SOC interne ni de RSSI dédié</li>
                      <li>• <strong>Dépendance IT</strong> : 92 % des PME sont dépendantes de leur SI</li>
                      <li>• <strong>Trésorerie fragile</strong> : un arrêt de 5 jours peut être fatal</li>
                      <li>• <strong>Manque de documentation</strong> : procédures souvent informelles</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold mb-3 text-primary">Conséquences d'une absence de plan</h3>
                    <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                      <li>• Perte de CA moyenne : <strong>27 000 €/jour</strong> d'arrêt</li>
                      <li>• Perte de clients : <strong>33 %</strong> changent de fournisseur</li>
                      <li>• Amendes RGPD en cas de fuite de données</li>
                      <li>• Atteinte durable à la réputation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                L'investissement dans un PCA/PRA est minime comparé au coût d'un incident non maîtrisé. Les entreprises qui disposent d'un plan testé et à jour réduisent de <strong>74 %</strong> l'impact financier d'une cyberattaque (source : Ponemon Institute, 2025).
              </p>
            </motion.section>

            {/* Section 3 - Méthodologie en 8 étapes */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Construire votre PCA/PRA en 8 étapes</h2>
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Cartographier les actifs critiques", desc: "Identifiez les applications, données, processus et équipements indispensables à l'activité. Classez-les par niveau de criticité (vital, important, secondaire). Cette étape implique tous les métiers, pas uniquement l'IT." },
                  { step: "2", title: "Analyser les risques et impacts (BIA)", desc: "Le Business Impact Analysis évalue les conséquences d'une interruption pour chaque actif critique : perte financière, impact réglementaire, atteinte à la réputation. Il détermine le RTO (durée maximale d'interruption acceptable) et le RPO (perte de données maximale tolérée)." },
                  { step: "3", title: "Définir les stratégies de continuité", desc: "Pour chaque actif critique, déterminez la solution de secours : site de repli, infrastructure cloud, procédures manuelles dégradées, redondance des systèmes. Le choix dépend du budget et des contraintes de RTO/RPO." },
                  { step: "4", title: "Mettre en place les sauvegardes", desc: "Appliquez la règle 3-2-1-1-0 : 3 copies des données, sur 2 supports différents, dont 1 hors site, 1 copie immuable (air-gapped), et 0 erreur de restauration vérifiée. Testez la restauration régulièrement." },
                  { step: "5", title: "Rédiger les procédures détaillées", desc: "Documentez chaque scénario : qui fait quoi, dans quel ordre, avec quels outils. Les procédures doivent être compréhensibles par une personne non-technique. Incluez les contacts d'urgence et les arbres de décision." },
                  { step: "6", title: "Constituer la cellule de crise", desc: "Désignez les membres de la cellule de crise, leurs suppléants, les canaux de communication de secours (hors email/téléphone habituel qui peuvent être compromis). Prévoyez un lieu de rassemblement physique et virtuel." },
                  { step: "7", title: "Tester et valider le plan", desc: "Réalisez au minimum un exercice de table (simulation théorique) par trimestre et un test réel (failover technique) par semestre. Documentez les résultats et les points d'amélioration." },
                  { step: "8", title: "Maintenir et actualiser", desc: "Le PCA/PRA est un document vivant. Mettez-le à jour à chaque changement d'infrastructure, recrutement clé ou nouveau risque identifié. Planifiez une revue formelle annuelle avec la direction." },
                ].map((item, i) => (
                  <div key={i} className="card-glass rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="bg-primary/10 text-primary font-heading font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{item.step}</span>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Section 4 - RTO/RPO */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">RTO et RPO : les deux métriques clés</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tout PRA repose sur deux indicateurs fondamentaux qui déterminent les investissements nécessaires et le niveau de protection :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">RTO – Recovery Time Objective</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Durée maximale d'interruption acceptable avant que l'impact devienne critique pour l'entreprise.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1.5">
                    <li>• <strong>RTO 0-1h</strong> : haute disponibilité, cluster actif/actif (coût élevé)</li>
                    <li>• <strong>RTO 4h</strong> : réplication asynchrone, failover automatique</li>
                    <li>• <strong>RTO 24h</strong> : restauration depuis sauvegarde récente</li>
                    <li>• <strong>RTO 72h</strong> : restauration manuelle, procédures dégradées</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-primary">RPO – Recovery Point Objective</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Volume maximal de données que l'entreprise peut se permettre de perdre, exprimé en durée.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1.5">
                    <li>• <strong>RPO 0</strong> : réplication synchrone temps réel (coût très élevé)</li>
                    <li>• <strong>RPO 1h</strong> : sauvegarde incrémentale toutes les heures</li>
                    <li>• <strong>RPO 24h</strong> : sauvegarde quotidienne (standard PME)</li>
                    <li>• <strong>RPO 7j</strong> : sauvegarde hebdomadaire (données non critiques)</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Plus le RTO et le RPO sont faibles, plus l'investissement technique est important. L'enjeu est de <strong>trouver le bon équilibre entre le coût de la protection et le coût de l'interruption</strong>. Un BIA bien mené permet de définir ces valeurs de manière objective pour chaque processus métier.
              </p>
            </motion.section>

            {/* Section 5 - Erreurs courantes */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 7 erreurs les plus fréquentes</h2>
              </div>
              <div className="card-glass rounded-xl p-6">
                <ul className="text-muted-foreground leading-relaxed space-y-4">
                  <li><strong>1. Ne jamais tester le plan</strong> — Un PCA/PRA non testé est un document inutile. 43 % des entreprises n'ont jamais réalisé d'exercice de simulation.</li>
                  <li><strong>2. Oublier les sauvegardes hors ligne</strong> — Les ransomwares ciblent en priorité les sauvegardes réseau. Sans copie air-gapped, la restauration est impossible.</li>
                  <li><strong>3. Négliger le facteur humain</strong> — Les procédures techniques sont essentielles mais inutiles si les équipes ne savent pas quoi faire ni qui contacter.</li>
                  <li><strong>4. Sous-estimer les dépendances tierces</strong> — Vos fournisseurs SaaS, hébergeurs et prestataires IT sont des maillons critiques de votre chaîne de continuité.</li>
                  <li><strong>5. Plan trop ambitieux</strong> — Un PRA visant un RTO de 0h pour tous les systèmes sera trop coûteux et jamais implémenté. Priorisez.</li>
                  <li><strong>6. Documentation obsolète</strong> — Un plan datant de 2 ans avec des contacts qui ont quitté l'entreprise et des serveurs qui n'existent plus est pire que pas de plan du tout.</li>
                  <li><strong>7. Ignorer la communication de crise</strong> — Clients, partenaires, autorités (CNIL, ANSSI) doivent être informés dans des délais précis. Ne pas anticiper cette communication génère un surcoût réputationnel considérable.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 6 - Budget */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Quel budget prévoir ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le coût d'un PCA/PRA dépend de la taille de l'entreprise, de la complexité du SI et des objectifs de RTO/RPO. Voici des ordres de grandeur pour une PME de 50 à 200 salariés :
              </p>
              <div className="card-glass rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-primary font-heading font-bold text-2xl mb-1">5 000 – 15 000 €</p>
                    <p className="text-muted-foreground text-sm">Élaboration du PCA/PRA</p>
                    <p className="text-muted-foreground text-xs mt-1">(BIA, rédaction, formation)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-heading font-bold text-2xl mb-1">500 – 3 000 €/mois</p>
                    <p className="text-muted-foreground text-sm">Infrastructure de secours</p>
                    <p className="text-muted-foreground text-xs mt-1">(cloud, sauvegarde, réplication)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-heading font-bold text-2xl mb-1">2 000 – 5 000 €/an</p>
                    <p className="text-muted-foreground text-sm">Maintenance & tests</p>
                    <p className="text-muted-foreground text-xs mt-1">(exercices, mises à jour, audits)</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                À titre de comparaison, le coût moyen d'un ransomware pour une PME en France est de <strong>130 000 €</strong> (rançon, interruption, remédiation, perte de clients). L'investissement dans un PCA/PRA est donc largement rentabilisé dès le premier incident évité ou contenu.
              </p>
            </motion.section>

            {/* CTA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="card-glass rounded-xl p-8 text-center border-primary/20">
                <RefreshCw className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-3">Besoin d'aide pour élaborer votre PCA/PRA ?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos consultants certifiés vous accompagnent dans la conception, la mise en œuvre et les tests de vos plans de continuité et de reprise d'activité. Contactez-nous pour un diagnostic gratuit de votre niveau de résilience.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un diagnostic gratuit
                </Link>
              </div>
            </motion.section>

            {/* Articles connexes */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <h2 className="font-heading text-xl font-bold mb-6">Articles connexes</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/actualites/que-faire-apres-cyberattaque" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Que faire après une cyberattaque ?</h3>
                  <p className="text-muted-foreground text-xs">Guide de réponse à incident pour les PME</p>
                </Link>
                <Link to="/actualites/10-cyberattaques-frequentes-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Les 10 cyberattaques les plus fréquentes</h3>
                  <p className="text-muted-foreground text-xs">Phishing, ransomware, arnaque au président…</p>
                </Link>
                <Link to="/actualites/audit-cybersecurite-guide" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Guide de l'audit cybersécurité</h3>
                  <p className="text-muted-foreground text-xs">Tout savoir sur l'audit de sécurité informatique</p>
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

export default PlanContinuite;
