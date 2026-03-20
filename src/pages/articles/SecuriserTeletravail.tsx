import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Laptop, Wifi, Lock, Eye, Users, Settings, ShieldCheck, CheckCircle2 } from "lucide-react";

const SecuriserTeletravail = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sécuriser le télétravail : 12 mesures essentielles pour les entreprises",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-03-12",
    "dateModified": "2026-03-12"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sécuriser le télétravail : 12 mesures pour les entreprises"
        description="Guide complet pour sécuriser le télétravail en entreprise : VPN, MFA, gestion des appareils, sensibilisation et politique de sécurité. 12 mesures concrètes pour les PME."
        canonical="/actualites/securiser-teletravail-entreprise"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-03-12">12 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Sécuriser le <span className="text-gradient">télétravail</span> : 12 mesures essentielles
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le télétravail s'est durablement installé dans les entreprises françaises : 47% des salariés du secteur privé y recourent au moins un jour par semaine. Cette transformation des modes de travail a considérablement élargi la surface d'attaque des organisations. Les connexions depuis des réseaux domestiques, l'usage d'appareils personnels et la dispersion géographique des équipes créent des vulnérabilités que les cybercriminels exploitent activement. Voici 12 mesures concrètes pour sécuriser le travail à distance.
              </p>
            </motion.div>

            {/* Réseau et accès */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Sécuriser les connexions réseau</h2>
              </div>

              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">1. Déployer un VPN d'entreprise</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Le VPN (Virtual Private Network) chiffre l'intégralité du trafic entre le poste du collaborateur et le réseau de l'entreprise. C'est la première brique de sécurité du télétravail. Optez pour une solution professionnelle avec authentification par certificat, pas un VPN grand public.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <strong>Point d'attention :</strong> le VPN doit être configuré en split tunneling intelligent — le trafic professionnel passe par le VPN tandis que le trafic personnel (streaming, navigation personnelle) sort directement, pour ne pas saturer la bande passante de l'entreprise.
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">2. Adopter une architecture Zero Trust</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Le modèle Zero Trust part du principe qu'aucune connexion n'est fiable par défaut, même depuis le réseau interne. Chaque accès à une ressource est vérifié individuellement : identité de l'utilisateur, état de santé de l'appareil, localisation, horaire, et comportement habituel. Ce modèle est particulièrement adapté au télétravail car il ne fait pas de distinction entre « intérieur » et « extérieur » du réseau. Des solutions comme Azure AD Conditional Access ou Google BeyondCorp permettent d'implémenter cette approche progressivement.
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">3. Sécuriser le Wi-Fi domestique</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Les box Internet domestiques sont rarement configurées de manière optimale. Fournissez à vos collaborateurs un guide de sécurisation : mise à jour du firmware de la box, activation du WPA3 (ou WPA2 minimum), changement du mot de passe par défaut, désactivation du WPS, isolation du réseau IoT. Envisagez de fournir un point d'accès Wi-Fi dédié pour les collaborateurs qui manipulent des données sensibles.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Authentification */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Renforcer l'authentification</h2>
              </div>

              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">4. Imposer la MFA sur tous les services</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    L'authentification multi-facteurs (MFA) est le contrôle de sécurité le plus efficace contre le vol d'identifiants : elle bloque 99,9% des attaques automatisées selon Microsoft. En télétravail, où les mots de passe sont plus exposés (phishing, shoulder surfing dans les espaces publics), la MFA n'est pas une option mais une nécessité. Déployez-la sur tous les services : messagerie, VPN, applications métier, outils collaboratifs. Préférez les clés FIDO2 ou les applications d'authentification (Microsoft Authenticator, Google Authenticator) aux SMS, plus vulnérables.
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">5. Gérer les mots de passe avec un gestionnaire</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    En télétravail, la tentation de réutiliser des mots de passe ou de les noter est encore plus forte. Déployez un gestionnaire de mots de passe d'entreprise (Bitwarden, 1Password Business, Dashlane Business) qui génère, stocke et remplit automatiquement des mots de passe uniques et complexes. Centralisez le partage sécurisé des identifiants d'équipe et assurez-vous que les mots de passe personnels restent séparés des professionnels.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Appareils */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Maîtriser les appareils</h2>
              </div>

              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">6. Fournir des équipements professionnels</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Le BYOD (Bring Your Own Device) est un cauchemar pour la sécurité : vous ne maîtrisez ni la configuration, ni les mises à jour, ni les logiciels installés sur les appareils personnels. Fournissez des laptops d'entreprise pré-configurés avec chiffrement du disque (BitLocker/FileVault), EDR, VPN pré-installé et restrictions d'installation de logiciels. Le surcoût est largement compensé par la réduction du risque.
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">7. Déployer un MDM/EMM</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un outil de Mobile Device Management (MDM) ou Enterprise Mobility Management (EMM) comme Microsoft Intune, Jamf ou VMware Workspace ONE vous permet de gérer à distance l'ensemble de votre flotte : déploiement de mises à jour, configuration des politiques de sécurité, inventaire logiciel, et surtout effacement à distance en cas de perte ou vol d'un appareil. Indispensable dès que vous avez plus de 10 postes en télétravail.
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">8. Automatiser les mises à jour</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    En télétravail, les postes ne passent plus régulièrement par le réseau interne pour recevoir les mises à jour du WSUS ou SCCM. Configurez les mises à jour automatiques du système d'exploitation et des applications critiques via le cloud (Windows Update for Business, Autopatch). Imposez un délai maximum de 48h pour l'application des patches critiques et surveillez la conformité via votre MDM.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Données */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Protéger les données</h2>
              </div>

              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">9. Classifier et contrôler l'accès aux données</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Toutes les données n'ont pas le même niveau de sensibilité. Classifiez vos données (public, interne, confidentiel, secret) et appliquez des contrôles d'accès proportionnés. Les données les plus sensibles (RH, finance, R&D, données clients) ne devraient être accessibles qu'à travers des environnements sécurisés (bureau virtuel, application web avec DLP) et jamais stockées en local sur les postes de travail.
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">10. Sauvegarder les données des postes distants</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Les télétravailleurs produisent des données localement qui ne sont pas toujours synchronisées avec les serveurs de l'entreprise. Déployez une solution de sauvegarde cloud des postes (OneDrive, Google Drive professionnel avec politiques de rétention, ou solution dédiée comme Veeam Backup for Office 365). Testez régulièrement la restauration et sensibilisez les collaborateurs à ne pas stocker de données uniquement en local.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Humain */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Sensibiliser et accompagner</h2>
              </div>

              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">11. Former spécifiquement au télétravail</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Les formations de sensibilisation classiques ne couvrent pas les risques spécifiques du travail à distance : réseaux Wi-Fi publics, partage de l'espace de travail avec la famille, conversations professionnelles dans les transports, appels Teams dans des lieux publics. Créez un module de formation dédié avec des mises en situation concrètes. Complétez par des exercices de phishing simulé ciblant les scénarios de télétravail (faux email IT demandant de mettre à jour le VPN, faux message Teams du manager).
                  </p>
                </div>

                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">12. Définir une charte de télétravail sécurisé</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Formalisez les règles dans une charte signée par chaque collaborateur en télétravail : interdiction de travailler sur un réseau Wi-Fi public sans VPN, verrouillage systématique du poste en cas d'absence, interdiction du stockage local de données sensibles, obligation de signaler immédiatement tout incident suspect, règles de visioconférence (floutage de l'arrière-plan pour les réunions confidentielles, utilisation du casque). Cette charte doit être pragmatique et applicable, pas un document juridique illisible.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Checklist */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Checklist de sécurité télétravail</h2>
              </div>
              <div className="card-glass rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "VPN d'entreprise déployé et obligatoire",
                    "MFA activée sur tous les services",
                    "Chiffrement des disques (BitLocker/FileVault)",
                    "EDR installé sur tous les postes",
                    "MDM pour la gestion à distance",
                    "Mises à jour automatisées",
                    "Gestionnaire de mots de passe",
                    "Sauvegarde cloud des postes",
                    "Classification des données",
                    "Formation spécifique télétravail",
                    "Charte de télétravail signée",
                    "Procédure de signalement d'incident",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <div className="card-glass rounded-2xl p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-xl font-bold mb-3">Besoin d'un audit de votre dispositif de télétravail ?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto mb-6">
                  CyberSecure réalise des audits spécifiques du télétravail : tests d'intrusion sur les accès distants, évaluation de la configuration VPN, vérification de la sécurité des postes nomades et recommandations sur mesure.
                </p>
                <Link to="/contact">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 py-3 rounded-lg transition-colors">
                    Demander un audit télétravail
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

export default SecuriserTeletravail;
