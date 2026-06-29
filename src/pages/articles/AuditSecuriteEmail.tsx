import { Shield, CheckCircle, AlertTriangle, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";

const AuditSecuriteEmail = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Audit sécurité messagerie email entreprise : méthode complète 2026",
    description:
      "Audit de sécurité de la messagerie d'entreprise : SPF, DKIM, DMARC, Exchange/Microsoft 365, Google Workspace, anti-phishing, Business Email Compromise (BEC), et conformité NIS2 RGPD.",
    datePublished: "2026-06-28",
    author: { "@type": "Organization", name: "CyberSecure" },
  };

  return (
    <>
      <SEOHead
        title="Audit sécurité messagerie email entreprise : SPF DKIM DMARC BEC 2026"
        description="Audit de sécurité de la messagerie d'entreprise : SPF, DKIM, DMARC, Exchange Online, Google Workspace, anti-phishing, BEC, et détection des règles de forwarding malveillantes."
        canonical="https://cybersecure-pme.fr/actualites/audit-securite-messagerie-email-entreprise"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary mb-4">
                Email Security
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Audit sécurité messagerie email entreprise : méthode complète 2026
              </h1>
              <p className="text-muted-foreground text-sm mb-6">
                28 juin 2026 · 13 min de lecture
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La messagerie email reste le vecteur d'attaque n°1 en entreprise. Phishing, Business Email Compromise (BEC), usurpation de domaine, ransomware par pièce jointe — plus de 90% des cyberattaques commencent par un email. Pourtant, la sécurité de la messagerie reste souvent négligée. Voici comment réaliser un audit complet de votre infrastructure email.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pourquoi auditer la sécurité de sa messagerie ?
              </h2>
              <p className="text-muted-foreground mb-4">
                La messagerie est la surface d'attaque la plus exposée de toute organisation. Les statistiques sont éloquentes : 91% des cyberattaques débutent par un phishing, les pertes liées au BEC (Business Email Compromise) dépassent 3 milliards de dollars par an dans le monde, et la grande majorité des ransomwares sont délivrés par email.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {[
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "SPF/DKIM/DMARC mal configurés", desc: "Permet à n'importe qui d'usurper votre domaine pour envoyer des emails frauduleux en votre nom" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Règles de forwarding malveillantes", desc: "Des attaquants créent des règles de redirection automatique vers des adresses externes après avoir compromis un compte" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Legacy authentication active", desc: "IMAP/POP3/SMTP Basic Auth contournent le MFA et permettent des attaques par force brute sur les comptes" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "OAuth apps non contrôlées", desc: "Applications tierces avec accès total à la messagerie peuvent exfiltrer tous les emails silencieusement" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Audit SPF, DKIM et DMARC
              </h2>
              <p className="text-muted-foreground mb-4">
                SPF, DKIM et DMARC sont les trois mécanismes d'authentification des emails. Un audit de messagerie commence toujours par la vérification de ces enregistrements DNS.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">SPF (Sender Policy Framework)</h3>
              <p className="text-muted-foreground mb-4">
                Le SPF liste dans un enregistrement DNS TXT les serveurs autorisés à envoyer des emails au nom de votre domaine. Erreurs fréquentes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>SPF absent — aucune protection contre l'usurpation du domaine</li>
                <li>Politique trop permissive (v=spf1 +all) — autorise tous les serveurs</li>
                <li>Plus de 10 lookups DNS (limite SPF) — l'enregistrement est invalide</li>
                <li>Oubli des services tiers (CRM, outil marketing, ERP) qui envoient des emails</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">DKIM (DomainKeys Identified Mail)</h3>
              <p className="text-muted-foreground mb-4">
                DKIM ajoute une signature cryptographique aux emails. Le destinataire vérifie la signature via la clé publique dans le DNS. Points à vérifier :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>DKIM activé et correctement configuré sur le serveur de messagerie</li>
                <li>Longueur de clé DKIM ≥ 2048 bits (les clés 1024 bits sont insuffisantes)</li>
                <li>Rotation régulière des clés DKIM (recommandée tous les 6 mois)</li>
                <li>DKIM activé sur tous les services tiers envoyant des emails (Salesforce, HubSpot, Mailchimp)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">DMARC (Domain-based Message Authentication)</h3>
              <p className="text-muted-foreground mb-4">
                DMARC définit la politique à appliquer aux emails qui échouent les vérifications SPF/DKIM, et envoie des rapports d'agrégation. C'est l'étape finale de la protection anti-usurpation :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>p=none :</strong> Mode monitoring — aucun email n'est rejeté, rapports envoyés</li>
                <li><strong>p=quarantine :</strong> Les emails suspects vont en spam</li>
                <li><strong>p=reject :</strong> Les emails usurpateurs sont rejetés (recommandé)</li>
              </ul>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 mb-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Objectif recommandé</p>
                    <p className="text-xs text-muted-foreground">
                      Passer à p=reject avec un taux d'alignement de 100% sur vos envois légitimes. Utiliser les rapports DMARC (DMARC Analyzer, PowerDMARC, Dmarcly) pour identifier et corriger les sources d'envoi non conformes avant de passer en reject.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Audit de la configuration Exchange Online / Google Workspace
              </h2>
              <p className="text-muted-foreground mb-4">
                Au-delà du DNS, la configuration de la plateforme de messagerie elle-même est critique.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Points de contrôle Exchange Online (Microsoft 365)</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Blocage de l'authentification héritée (IMAP, POP3, SMTP Basic Auth) via Conditional Access</li>
                <li>Désactivation du forwarding automatique vers des domaines externes (transport rule)</li>
                <li>Anti-spam, anti-phishing, Safe Links, Safe Attachments (Defender for Office 365 Plan 1 minimum)</li>
                <li>Audit logs activés sur toutes les boîtes mail (Exchange Auditing)</li>
                <li>Revue des règles de messagerie des administrateurs (règles cachées créées par des attaquants)</li>
                <li>Politiques de rétention et de suppression des emails conformes RGPD</li>
                <li>Vérification des accès Full Access sur les boîtes mail partagées</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Points de contrôle Google Workspace</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>DKIM configuré depuis la console Admin Google Workspace</li>
                <li>Alertes de sécurité Gmail activées (connexions suspectes, forwarding)</li>
                <li>Contrôle des applications tierces autorisées via l'API Gmail OAuth</li>
                <li>Google Workspace Vault activé pour l'archivage légal et la gestion des preuves</li>
                <li>Restrictions des partages Drive avec des utilisateurs externes</li>
                <li>Revue des autorisations des apps Google marketplace</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Détection du Business Email Compromise (BEC)
              </h2>
              <p className="text-muted-foreground mb-4">
                Le BEC est l'une des attaques les plus coûteuses. L'attaquant compromet ou usurpe un email dirigeant pour demander un virement frauduleux ou une modification de RIB fournisseur. Les signaux d'alerte à investiguer dans un audit :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Présence de règles de boîte mail cachées (InboxRules) redigeant des emails spécifiques vers un dossier inconnu ou une adresse externe</li>
                <li>Accès à la boîte mail depuis des adresses IP inhabituelles ou des pays non représentés dans l'entreprise</li>
                <li>Délégations de boîte mail non documentées (Full Access, SendAs, SendOnBehalf)</li>
                <li>Applications OAuth avec accès mail non reconnues par la DSI</li>
                <li>Emails envoyés en dehors des horaires habituels (nuit, week-end) depuis des comptes dirigeants</li>
                <li>Modifications récentes des données de profil email (nom d'affichage, réponse automatique)</li>
              </ul>

              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-5 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Indicateur critique : règles de forwarding cachées</p>
                    <p className="text-xs text-muted-foreground">
                      Dans les attaques BEC documentées, les attaquants créent systématiquement des règles de boîte mail qui redirigent les emails contenant des mots-clés (virement, facturation, RIB, paiement) vers un dossier masqué. Cette règle persiste même après le changement de mot de passe si le compte n'est pas entièrement nettoyé.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Formation anti-phishing et sensibilisation
              </h2>
              <p className="text-muted-foreground mb-4">
                Les contrôles techniques ne suffisent pas — la défense humaine est essentielle. L'audit de sécurité de la messagerie inclut généralement une évaluation de la sensibilisation des équipes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Simulation de phishing :</strong> Envoi d'emails de phishing simulés pour mesurer le taux de clic et identifier les collaborateurs à former en priorité (Microsoft Attack Simulator, KnowBe4, Proofpoint Security Awareness)</li>
                <li><strong>Formation ciblée :</strong> Formation spécifique BEC pour les équipes financières, comptabilité, direction — cibles prioritaires des attaques</li>
                <li><strong>Procédure de vérification des virements :</strong> Mise en place d'un processus de double vérification pour tout ordre de virement, changement de RIB fournisseur ou demande urgente de paiement</li>
                <li><strong>Signalement facilitée :</strong> Bouton "Signaler un phishing" dans Outlook/Gmail pour permettre aux utilisateurs de remonter les emails suspects</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Obligations réglementaires NIS2 et RGPD sur la messagerie
              </h2>
              <p className="text-muted-foreground mb-4">
                La sécurité de la messagerie est directement concernée par NIS2 et le RGPD :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>NIS2 article 21 :</strong> Politiques de sécurité des systèmes d'information incluant la messagerie — MFA, chiffrement, gestion des incidents email</li>
                <li><strong>RGPD article 32 :</strong> Chiffrement des communications contenant des données personnelles — chiffrement TLS 1.2+ obligatoire pour les emails en transit</li>
                <li><strong>Violation de données :</strong> Une compromission de boîte mail contenant des données personnelles est une violation RGPD à notifier à la CNIL dans les 72h</li>
                <li><strong>Durée de conservation :</strong> La politique de rétention des emails doit respecter les durées légales et être documentée dans le registre des traitements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Livrables d'un audit messagerie
              </h2>
              <p className="text-muted-foreground mb-4">
                Un audit de sécurité messagerie réalisé par CyberSecure produit les livrables suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Rapport d'analyse SPF/DKIM/DMARC avec plan de déploiement DMARC p=reject</li>
                <li>Audit de configuration Exchange Online ou Google Workspace avec scoring</li>
                <li>Rapport d'investigation BEC (règles de messagerie, délégations, OAuth apps)</li>
                <li>Plan de remédiation priorisé par niveau de risque (critique, élevé, moyen)</li>
                <li>Résultats du test de phishing simulé avec taux de clic par département</li>
                <li>Recommandations de formation anti-phishing ciblées</li>
              </ul>
            </section>

          </motion.div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </>
  );
};

export default AuditSecuriteEmail;
