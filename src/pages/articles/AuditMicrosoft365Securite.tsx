import { Shield, CheckCircle, AlertTriangle, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";

const AuditMicrosoft365Securite = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Audit sécurité Microsoft 365 pour PME : méthode, points de contrôle et remédiation",
    description:
      "Guide complet pour auditer la sécurité de Microsoft 365 en PME : Secure Score, Conditional Access, Exchange Online Protection, Entra ID, MFA, DLP et conformité NIS2 et RGPD.",
    datePublished: "2026-06-28",
    author: { "@type": "Organization", name: "CyberSecure" },
  };

  return (
    <>
      <SEOHead
        title="Audit sécurité Microsoft 365 PME : méthode complète et points de contrôle 2026"
        description="Guide complet pour auditer la sécurité de Microsoft 365 en PME : Secure Score, Conditional Access, Exchange Online Protection, Entra ID, MFA, DLP et conformité NIS2 et RGPD."
        canonical="https://cybersecure-pme.fr/actualites/audit-microsoft-365-securite-pme"
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
                Microsoft 365 Security
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Audit sécurité Microsoft 365 pour PME : méthode, points de contrôle et remédiation
              </h1>
              <p className="text-muted-foreground text-sm mb-6">
                28 juin 2026 · 14 min de lecture
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Microsoft 365 est le système d'information de la majorité des PME françaises. Messagerie, collaboration, stockage, visioconférence — toute l'activité y transite. C'est aussi l'une des surfaces d'attaque les plus ciblées : compromissions de comptes Office 365, Business Email Compromise (BEC), exfiltration via SharePoint, ransomwares se propageant via OneDrive. Un audit de sécurité M365 régulier est devenu indispensable.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pourquoi auditer la sécurité de Microsoft 365 ?
              </h2>
              <p className="text-muted-foreground mb-4">
                Les configurations par défaut de Microsoft 365 ne sont pas des configurations sécurisées. Microsoft fait le choix de la facilité d'utilisation lors du provisionnement d'un tenant. Résultat : de nombreuses PME opèrent avec des paramètres dangereux dont elles ignorent l'existence.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {[
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "MFA non activé", desc: "40% des comptes M365 en PME n'ont pas de MFA activé (source Microsoft Security Intelligence)" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Legacy authentication active", desc: "Les protocoles anciens (IMAP, POP3, SMTP basic auth) contournent les politiques MFA" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Partage externe non contrôlé", desc: "SharePoint et OneDrive configurés pour permettre le partage avec n'importe qui via un lien" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Audit logs désactivés", desc: "Sans logs d'audit, impossible de détecter une compromission ou de reconstituer un incident" },
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
                Microsoft Secure Score : le point de départ
              </h2>
              <p className="text-muted-foreground mb-4">
                Le Secure Score est disponible dans le portail Microsoft Defender (security.microsoft.com). Il évalue votre configuration M365 sur 100 points et liste les actions de remédiation avec leur impact. C'est le point de départ de tout audit M365.
              </p>
              <p className="text-muted-foreground mb-4">
                Un Secure Score inférieur à 50/100 est un signal d'alarme. La médiane des PME françaises se situe entre 35 et 55/100. Un Secure Score supérieur à 75/100 indique une configuration robuste. Attention : le Secure Score mesure la configuration, pas la maturité globale de la sécurité — il peut être élevé avec une mauvaise gestion des identités ou des alertes non traitées.
              </p>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 mb-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Actions Secure Score prioritaires</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Activer MFA pour tous les administrateurs (+9 points)</li>
                      <li>• Activer MFA pour tous les utilisateurs (+8 points)</li>
                      <li>• Bloquer l'authentification héritée (+7 points)</li>
                      <li>• Activer Microsoft Defender pour Office 365 (+6 points)</li>
                      <li>• Restreindre le partage externe SharePoint (+5 points)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Les 8 domaines à auditer dans Microsoft 365
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">1. Microsoft Entra ID (Azure AD) — Gestion des identités</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>MFA activé pour tous les comptes (y compris les comptes de service)</li>
                <li>Conditional Access : politiques de blocage des pays à risque, des appareils non-conformes, des connexions hors horaires</li>
                <li>Suppression des comptes inactifs (ex-employés) — vérifier tous les comptes non connectés depuis plus de 90 jours</li>
                <li>Revue des rôles administrateurs : pas plus de 2-5 Global Admins, rôles délégués au minimum nécessaire</li>
                <li>Privileged Identity Management (PIM) : élévation des droits à la demande pour les rôles sensibles</li>
                <li>Activation de la protection de l'identité (Identity Protection) pour détecter les connexions à risque</li>
                <li>Blocage de l'authentification héritée (legacy authentication) via Conditional Access</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2. Exchange Online — Messagerie</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>SPF, DKIM et DMARC correctement configurés pour votre domaine (protection anti-usurpation)</li>
                <li>Microsoft Defender for Office 365 : anti-phishing, anti-malware, Safe Links, Safe Attachments</li>
                <li>Règles de flux de messagerie (transport rules) : pas de règles de redirection automatique vers des adresses externes</li>
                <li>Audit des accès mailbox par des applications tierces (OAuth apps)</li>
                <li>Désactivation de l'IMAP/POP3 si non utilisé</li>
                <li>Journalisation des connexions et actions sur les boîtes mail (Audit Logging)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">3. SharePoint Online et OneDrive — Stockage et collaboration</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Paramètres de partage externe : interdire "Anyone with a link" pour les données sensibles</li>
                <li>Durée d'expiration des liens de partage externe (recommandé : 30 jours max)</li>
                <li>Sensitivity labels (étiquettes de confidentialité) : classification des documents</li>
                <li>Alertes sur les téléchargements massifs (exfiltration potentielle)</li>
                <li>Audit des sites SharePoint et des accès externes</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">4. Microsoft Teams — Collaboration</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Politique de création de Teams : limiter la création aux administrateurs pour éviter la prolifération</li>
                <li>Accès invités (guest access) : auditer les invités actifs et supprimer les accès obsolètes</li>
                <li>Canaux externes : restreindre la fédération aux domaines partenaires connus</li>
                <li>Enregistrement des réunions : politique de rétention et stockage</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">5. Microsoft Purview — DLP et conformité</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Politiques DLP (Data Loss Prevention) : détecter et bloquer l'envoi de données sensibles (IBAN, numéros de carte, données de santé, RIB)</li>
                <li>Étiquettes de rétention : automatiser la conservation et la suppression des données selon les obligations RGPD</li>
                <li>eDiscovery et audit : capacité à rechercher et exporter des données en cas d'incident</li>
                <li>Compliance Manager : tableau de bord de conformité RGPD, NIS2, ISO 27001</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">6. Appareils et endpoints — Intune/Defender</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Microsoft Intune : MDM/MAM — les appareils accédant à M365 doivent être enrôlés et conformes</li>
                <li>Microsoft Defender for Endpoint : EDR sur tous les postes Windows</li>
                <li>Conditional Access lié à la conformité des appareils : bloquer l'accès aux appareils non-gérés</li>
                <li>Chiffrement BitLocker activé sur tous les postes Windows</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">7. Applications tierces (OAuth) — Risque de Shadow IT</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Inventaire de toutes les applications OAuth connectées à votre tenant M365 (via Entra ID → Enterprise Applications)</li>
                <li>Audit des permissions accordées : beaucoup d'apps demandent "Read all mail" ou "Full access to files"</li>
                <li>Politique de consentement : désactiver le consentement utilisateur autonome, passer par un workflow d'approbation admin</li>
                <li>Suppression des applications non utilisées ou non approuvées</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">8. Logging et supervision — Microsoft Sentinel</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Unified Audit Log activé (obligatoire, vérifier qu'il est bien activé et la durée de rétention)</li>
                <li>Alertes sur les activités suspectes : connexions depuis des pays à risque, suppression massive de fichiers, création de règles de redirection mail</li>
                <li>Microsoft Sentinel (SIEM cloud) : pour les PME ayant besoin d'une supervision centralisée</li>
                <li>Intégration avec le SOC managé si disponible</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Checklist d'audit M365 en 20 points
              </h2>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="grid gap-3">
                  {[
                    "MFA activé pour 100% des comptes (utilisateurs et admins)",
                    "Authentification héritée bloquée (Conditional Access)",
                    "SPF, DKIM, DMARC configurés et valides",
                    "Defender for Office 365 activé (Safe Links + Safe Attachments)",
                    "Comptes inactifs (>90 jours) identifiés et désactivés",
                    "Nombre de Global Admins ≤ 5, comptes dédiés (non utilisés pour le mail)",
                    "PIM (Privileged Identity Management) activé pour les rôles sensibles",
                    "Partage externe SharePoint/OneDrive restreint (pas de lien anonyme pour données sensibles)",
                    "Expiration des liens de partage externe configurée",
                    "Politiques DLP actives pour détecter les données sensibles",
                    "Étiquettes de confidentialité déployées",
                    "Inventaire des applications OAuth et révocation des accès non nécessaires",
                    "Unified Audit Log activé (rétention ≥ 90 jours, 1 an recommandé avec E3/E5)",
                    "Alertes de sécurité configurées dans Microsoft Defender",
                    "Politique de création de Teams contrôlée",
                    "Accès invités Teams audités et nettoyés",
                    "Microsoft Intune : appareils enrôlés et conformes",
                    "Conditional Access lié à la conformité des appareils",
                    "Chiffrement BitLocker activé sur les postes Windows",
                    "Procédure de réponse aux incidents M365 documentée",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Licences M365 et niveau de sécurité
              </h2>
              <p className="text-muted-foreground mb-4">
                Le niveau de sécurité atteignable dans M365 dépend largement de la licence. Voici un aperçu :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Licence</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Fonctionnalités sécurité incluses</th>
                      <th className="text-left py-2 text-foreground font-semibold">Manquant</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 text-muted-foreground font-mono text-xs">Microsoft 365 Business Basic</td>
                      <td className="py-2 pr-4 text-muted-foreground text-xs">MFA, Entra ID basique, Exchange Online Protection</td>
                      <td className="py-2 text-muted-foreground text-xs">Defender for Office 365, DLP, Intune, Conditional Access avancé</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-muted-foreground font-mono text-xs">Microsoft 365 Business Premium</td>
                      <td className="py-2 pr-4 text-muted-foreground text-xs">+ Defender for Business, Intune, Conditional Access, DLP basique, Azure AD P1</td>
                      <td className="py-2 text-muted-foreground text-xs">Defender for Endpoint P2, PIM, Identity Protection, Sentinel</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-muted-foreground font-mono text-xs">Microsoft 365 E3</td>
                      <td className="py-2 pr-4 text-muted-foreground text-xs">+ Azure AD P1, DLP complet, Purview basique, eDiscovery</td>
                      <td className="py-2 text-muted-foreground text-xs">Defender for Endpoint P2, PIM, Sentinel (add-on), CASB</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-muted-foreground font-mono text-xs">Microsoft 365 E5</td>
                      <td className="py-2 pr-4 text-muted-foreground text-xs">+ Defender for Office P2, Azure AD P2 (PIM, Identity Protection), Sentinel inclus, CASB (Defender for Cloud Apps)</td>
                      <td className="py-2 text-muted-foreground text-xs">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Recommandation pour les PME :</strong> Microsoft 365 Business Premium (environ 20-22 €/utilisateur/mois) offre le meilleur rapport sécurité/prix pour les entreprises de moins de 300 utilisateurs. Il inclut Intune, Conditional Access et Defender for Business, qui couvrent 80% des besoins de sécurité d'une PME.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Conformité NIS2 et RGPD via Microsoft 365
              </h2>
              <p className="text-muted-foreground mb-4">
                Un tenant M365 correctement configuré peut couvrir une partie significative des obligations NIS2 et RGPD :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>NIS2 article 21 — Mesures de sécurité :</strong> MFA, chiffrement (BitLocker, TLS), gestion des accès (Entra ID), journalisation (Unified Audit Log), continuité (Exchange Online SLA 99,9%)</li>
                <li><strong>NIS2 — Détection :</strong> Defender XDR, Microsoft Sentinel pour la détection des incidents</li>
                <li><strong>RGPD article 32 — Sécurité des traitements :</strong> Chiffrement au repos et en transit, contrôle d'accès, pseudonymisation possible via Purview, logs pour la traçabilité</li>
                <li><strong>RGPD — Durées de conservation :</strong> Étiquettes de rétention Purview pour automatiser la suppression des données</li>
                <li><strong>RGPD — DPO et documentation :</strong> Compliance Manager fournit un tableau de bord de conformité RGPD</li>
              </ul>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong>Important :</strong> M365 est un outil, pas une conformité clé en main. Microsoft est sous-traitant au sens RGPD : vous devez signer un DPA (Data Processing Agreement) avec Microsoft, documenter les transferts hors UE et configurer les paramètres de résidence des données. Les fonctionnalités de sécurité de M365 doivent être activées et configurées — elles ne le sont pas par défaut.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Comment réaliser un audit M365 : approche en 5 étapes
              </h2>
              <ol className="space-y-4 text-muted-foreground">
                <li><strong>1. Inventaire et Secure Score :</strong> Récupérer le Secure Score actuel, inventorier les licences, les utilisateurs, les rôles administrateurs et les applications OAuth connectées.</li>
                <li><strong>2. Audit des identités :</strong> Revue des comptes Entra ID, vérification du MFA, audit des Conditional Access policies, identification des comptes inactifs et des droits excessifs.</li>
                <li><strong>3. Audit de la messagerie :</strong> Vérification SPF/DKIM/DMARC, configuration Exchange Online Protection et Defender for Office 365, règles de transport suspectes.</li>
                <li><strong>4. Audit de la collaboration :</strong> Paramètres de partage SharePoint/OneDrive, gouvernance Teams, accès invités, applications tierces.</li>
                <li><strong>5. Rapport et remédiation :</strong> Rapport des écarts avec score de risque, plan de remédiation priorisé, recommandations de licence si nécessaire, suivi du Secure Score post-remédiation.</li>
              </ol>
            </section>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-8">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Audit Microsoft 365 par nos experts certifiés</h3>
                  <p className="text-sm text-muted-foreground">
                    CyberSecure réalise des audits complets de sécurité Microsoft 365 pour les PME : revue des identités Entra ID, configuration Defender, conformité NIS2 et RGPD, rapport détaillé et plan de remédiation. Nos experts sont certifiés Microsoft Security. Devis gratuit sous 48h.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      <NewsletterSection />
      <FooterSection />
    </>
  );
};

export default AuditMicrosoft365Securite;
