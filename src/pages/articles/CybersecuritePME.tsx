import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Users, Server, AlertTriangle, CheckCircle } from "lucide-react";

const CybersecuritePME = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cybersécurité PME : par où commencer ?",
      "url": "https://securecyber.fr/actualites/cybersecurite-pme-par-ou-commencer",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/cybersecurite-pme-par-ou-commencer" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-03-01",
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
        { "@type": "ListItem", "position": 3, "name": "Cybersécurité PME : par où commencer ?", "item": "https://securecyber.fr/actualites/cybersecurite-pme-par-ou-commencer" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cybersécurité PME : par où commencer ?"
        description="Guide pratique pour les PME qui veulent débuter en cybersécurité : premières étapes, mesures prioritaires, budget, erreurs à éviter et feuille de route complète."
        canonical="/actualites/cybersecurite-pme-par-ou-commencer"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Page pilier</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-03-01">1 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Cybersécurité PME</span> : par où commencer ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Vous dirigez une PME et vous savez que la cybersécurité est importante, mais vous ne savez pas par où commencer ? Vous n'êtes pas seul : 60% des PME françaises n'ont aucune politique de cybersécurité formalisée, alors qu'elles sont devenues les cibles privilégiées des cybercriminels. Ce guide pratique vous donne une feuille de route claire et actionnable pour sécuriser votre entreprise, étape par étape.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi les PME sont-elles particulièrement vulnérables ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les PME présentent un profil de risque particulier qui en fait des cibles de choix pour les cybercriminels. Contrairement à une idée reçue, les attaquants ne ciblent pas uniquement les grandes entreprises. Les PME sont souvent perçues comme des "fruits à portée de main" : elles détiennent des données de valeur (données clients, propriété intellectuelle, informations financières) tout en disposant de moyens de protection nettement inférieurs à ceux des grands groupes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Selon une étude de l'ANSSI et de la CPME, 43% des cyberattaques en France ciblent les PME. Plus alarmant encore, 60% des PME victimes d'une cyberattaque significative déposent le bilan dans les 18 mois qui suivent. Le coût moyen d'une cyberattaque pour une PME est estimé entre 25 000 et 50 000 euros, sans compter les pertes indirectes (perte de clients, atteinte à la réputation, interruption d'activité).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les facteurs de vulnérabilité les plus fréquents chez les PME sont : l'absence de responsable sécurité dédié, le manque de sensibilisation des collaborateurs, des systèmes non mis à jour, l'absence de sauvegardes testées, des mots de passe faibles et réutilisés, et l'absence de plan de réponse à incident. La bonne nouvelle, c'est que la majorité de ces facteurs peuvent être corrigés avec des mesures simples et peu coûteuses.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les 10 premières mesures à mettre en place</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Inutile de viser la perfection d'emblée. Commencez par ces dix mesures fondamentales qui couvrent les risques les plus critiques et les vecteurs d'attaque les plus courants. Ces actions peuvent être mises en œuvre rapidement, souvent sans investissement important.
                </p>

                <div className="space-y-4">
                  {[
                    { n: "1", title: "Inventorier vos actifs informatiques", desc: "Vous ne pouvez pas protéger ce que vous ne connaissez pas. Dressez la liste exhaustive de vos équipements (postes, serveurs, équipements réseau), logiciels, comptes cloud et données sensibles. Identifiez pour chaque actif son niveau de criticité pour votre activité. Cet inventaire est la base de toute démarche de sécurité." },
                    { n: "2", title: "Mettre en place des sauvegardes régulières et testées", desc: "La sauvegarde est votre filet de sécurité ultime, notamment contre les ransomwares. Appliquez la règle 3-2-1 : trois copies de vos données, sur deux supports différents, dont une hors site (ou hors ligne). Et surtout, testez régulièrement la restauration ! Une sauvegarde qui ne fonctionne pas au moment critique n'est d'aucune utilité." },
                    { n: "3", title: "Appliquer les mises à jour de sécurité sans délai", desc: "Les vulnérabilités logicielles non corrigées sont l'un des vecteurs d'intrusion les plus exploités. Configurez les mises à jour automatiques sur tous vos systèmes (Windows, macOS, applications métier, navigateurs). Pour les serveurs et équipements critiques, testez les mises à jour en environnement de pré-production avant déploiement." },
                    { n: "4", title: "Renforcer l'authentification", desc: "Imposez des mots de passe robustes (12 caractères minimum, complexes et uniques) et déployez l'authentification multi-facteurs (MFA) sur tous les accès critiques : messagerie, VPN, applications cloud, accès administrateur. La MFA bloque 99,9% des attaques par compromission de compte selon Microsoft." },
                    { n: "5", title: "Sensibiliser vos collaborateurs", desc: "L'humain reste le maillon faible de la chaîne de sécurité. Organisez des sessions de sensibilisation régulières sur les risques de phishing, les bonnes pratiques de mots de passe, l'utilisation sécurisée du Wi-Fi et la gestion des données sensibles. Complétez par des exercices de simulation de phishing pour mesurer les progrès." },
                    { n: "6", title: "Installer et configurer un antivirus/EDR", desc: "Déployez une solution de protection sur tous les postes de travail et serveurs. Les solutions EDR (Endpoint Detection and Response) modernes offrent une protection bien supérieure aux antivirus traditionnels en détectant les comportements suspects en temps réel. Assurez-vous que les définitions sont mises à jour automatiquement." },
                    { n: "7", title: "Segmenter votre réseau", desc: "Ne laissez pas tous vos équipements sur le même réseau. Séparez au minimum le réseau Wi-Fi invité du réseau interne, isolez les serveurs critiques, et limitez les communications inter-segments au strict nécessaire. Un pare-feu correctement configuré entre les segments empêchera un attaquant de se propager facilement dans tout votre réseau." },
                    { n: "8", title: "Chiffrer les données sensibles", desc: "Activez le chiffrement de disque sur tous les postes portables (BitLocker sur Windows, FileVault sur Mac). Un ordinateur portable perdu ou volé contenant des données non chiffrées peut constituer une violation de données au sens du RGPD, avec obligation de notification à la CNIL et aux personnes concernées." },
                    { n: "9", title: "Formaliser une politique de sécurité minimale", desc: "Rédigez un document simple définissant les règles de sécurité de l'entreprise : politique de mots de passe, utilisation acceptable des équipements, procédure en cas d'incident, gestion des accès des prestataires et des départs de collaborateurs. Faites-le signer par tous les employés et mettez-le à jour annuellement." },
                    { n: "10", title: "Préparer un plan de réponse à incident", desc: "Que ferez-vous le jour où vous serez victime d'une cyberattaque ? Définissez à l'avance les rôles (qui prend les décisions ?), les contacts d'urgence (prestataire cyber, assureur, avocat, CNIL), les procédures d'isolation des systèmes compromis et de communication de crise. Un plan de réponse, même simple, réduit considérablement le temps de réaction et l'impact de l'incident." }
                  ].map((item) => (
                    <div key={item.n} className="card-glass rounded-xl p-6 flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-heading font-bold text-sm">{item.n}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Quel budget prévoir pour la cybersécurité ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La question du budget est souvent le premier frein pour les PME. Pourtant, les recommandations des experts convergent : il est conseillé de consacrer entre 5% et 10% du budget informatique à la cybersécurité. Pour une PME de 50 salariés avec un budget IT annuel de 150 000€, cela représente entre 7 500 et 15 000€ par an.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ce budget peut être réparti intelligemment : les mesures d'hygiène de base (mises à jour, sauvegardes, MFA) sont souvent gratuites ou peu coûteuses. Les investissements plus importants (solution EDR, audit/pentest annuel, sensibilisation) peuvent être étalés dans le temps. Et il faut mettre ces chiffres en perspective avec le coût moyen d'une cyberattaque (25 000 à 50 000€ pour une PME) : la prévention reste infiniment moins chère que la remédiation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour les PME aux budgets les plus contraints, des aides existent : le dispositif "Mon Aide Cyber" de l'ANSSI propose un premier diagnostic gratuit, certaines CCI et régions offrent des subventions pour des audits de cybersécurité, et France Num accompagne la transformation numérique sécurisée des TPE-PME.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les obligations réglementaires pour les PME</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Même sans être soumise à des réglementations sectorielles, toute PME qui traite des données personnelles est concernée par le RGPD, qui impose la mise en place de "mesures techniques et organisationnelles appropriées" pour protéger les données. En cas de violation de données, l'entreprise doit notifier la CNIL dans les 72 heures et, dans certains cas, informer les personnes concernées.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La directive NIS2, transposée en droit français en 2024, élargit considérablement le nombre d'entreprises soumises à des obligations de cybersécurité. Si votre PME opère dans un secteur considéré comme "essentiel" ou "important" (énergie, transport, santé, numérique, alimentation, gestion des déchets, services postaux, fabrication...) et dépasse certains seuils de taille ou de chiffre d'affaires, vous êtes probablement concerné. Les obligations incluent la mise en place de mesures de gestion des risques, la notification des incidents significatifs et la responsabilité de la direction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ne pas se conformer à ces réglementations expose l'entreprise à des sanctions financières importantes, mais aussi à une responsabilité personnelle des dirigeants. Il est donc essentiel de vérifier si votre entreprise est concernée par NIS2 et de prendre les mesures nécessaires.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Feuille de route cybersécurité pour PME</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Voici une feuille de route progressive sur 12 mois pour structurer votre démarche de cybersécurité :
                </p>

                <div className="space-y-6">
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Mois 1-3 : Les fondamentaux</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                      <li>Inventaire des actifs et données sensibles</li>
                      <li>Mise en place de sauvegardes 3-2-1 avec tests de restauration</li>
                      <li>Déploiement de la MFA sur les accès critiques</li>
                      <li>Politique de mots de passe renforcée</li>
                      <li>Première session de sensibilisation des collaborateurs</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Mois 4-6 : Le renforcement</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                      <li>Déploiement d'une solution EDR sur tous les postes</li>
                      <li>Segmentation réseau de base</li>
                      <li>Chiffrement des postes portables</li>
                      <li>Formalisation de la politique de sécurité</li>
                      <li>Premier audit cybersécurité externe (pentest périmètre externe)</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Mois 7-9 : La consolidation</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                      <li>Remédiation des vulnérabilités identifiées lors de l'audit</li>
                      <li>Mise en place d'une supervision de sécurité (logs centralisés)</li>
                      <li>Exercice de simulation de phishing</li>
                      <li>Plan de continuité d'activité (PCA) simplifié</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-primary">Mois 10-12 : La maturité</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                      <li>Plan de réponse à incident formalisé et testé</li>
                      <li>Audit de contrôle post-remédiation</li>
                      <li>Évaluation de la conformité réglementaire (RGPD, NIS2)</li>
                      <li>Bilan annuel et planification de l'année suivante</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Besoin d'un accompagnement cybersécurité pour votre PME ?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts accompagnent les PME et ETI à chaque étape de leur démarche de cybersécurité, du premier audit à la mise en conformité NIS2. Demandez un diagnostic personnalisé.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un diagnostic
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

export default CybersecuritePME;
