import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Shield, Users, Eye, AlertTriangle, Settings } from "lucide-react";

const SecuriteEntraId = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sécuriser Microsoft Entra ID : audit et bonnes pratiques 2026",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-29",
    "dateModified": "2026-06-29",
    "description": "Audit et durcissement de Microsoft Entra ID (Azure AD) : MFA, Conditional Access, PIM, protection des comptes admin, détection des compromissions et outils d'audit recommandés."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sécuriser Microsoft Entra ID : audit et bonnes pratiques 2026"
        description="Audit Microsoft Entra ID (Azure AD) : MFA obligatoire, Conditional Access, Privileged Identity Management (PIM), détection compromissions, BloodHound et Purple Knight."
        canonical="/actualites/securite-microsoft-entra-id-audit"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Microsoft</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-29">29 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Sécuriser <span className="text-gradient">Microsoft Entra ID</span> : audit et bonnes pratiques 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Microsoft Entra ID (anciennement Azure Active Directory) est le système d'identité central de millions d'organisations. Il gère l'authentification à Microsoft 365, Azure, et des milliers d'applications SaaS. Sa compromission équivaut à la prise de contrôle totale de votre environnement numérique. Les attaques sur Entra ID se sont multipliées avec l'explosion du travail hybride — voici comment auditer et durcir votre tenant.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Attaques courantes sur Entra ID</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Password spray :</strong> tenter un mot de passe commun (Printemps2024!) sur des milliers de comptes pour éviter le verrouillage. Très efficace contre les comptes sans MFA.</li>
                <li><strong className="text-foreground">Adversary-in-the-Middle (AiTM) :</strong> phishing qui intercepte le token de session après authentification MFA (EvilProxy, Evilginx2). Bypass du MFA classique.</li>
                <li><strong className="text-foreground">Consent grant attack :</strong> une application OAuth malveillante demande des permissions sur le tenant via un lien de phishing. L'utilisateur consent et l'attaquant a accès à ses mails/fichiers.</li>
                <li><strong className="text-foreground">Service principal abuse :</strong> exploitation de service principals avec des secrets qui n'expirent jamais et des permissions excessives (Global Admin, Owner sur subscriptions)</li>
                <li><strong className="text-foreground">Token theft :</strong> vol de tokens d'accès depuis des endpoints exposés, des logs applicatifs, ou via un malware sur le poste</li>
                <li><strong className="text-foreground">Legacy authentication :</strong> protocoles IMAP/POP3/SMTP qui ne supportent pas le MFA, utilisés pour bypasser les Conditional Access policies</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">MFA et Conditional Access : la base</h2>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">MFA obligatoire pour tous les utilisateurs</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Activer Security Defaults (paramètre de base gratuit) ou des Conditional Access policies (nécessite P1/P2)</li>
                <li>Privilégier l'application Microsoft Authenticator (push notifications) plutôt que les SMS (SIM swapping)</li>
                <li>Pour les comptes les plus sensibles : clés FIDO2 (YubiKey) qui résistent au phishing et au AiTM</li>
                <li>Bloquer les authentifications legacy (IMAP/POP3/SMTP) via une Conditional Access policy "Block legacy authentication"</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Conditional Access policies essentielles</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">MFA pour tous les utilisateurs :</strong> politique de base, s'applique à toutes les applications</li>
                <li><strong className="text-foreground">MFA renforcé pour les admins :</strong> MFA + poste conforme (Compliant device) pour tout accès admin</li>
                <li><strong className="text-foreground">Blocage des pays à risque :</strong> bloquer les connexions depuis des pays non utilisés (Corée du Nord, Russie, etc.)</li>
                <li><strong className="text-foreground">Named Locations :</strong> définir les IP de l'entreprise comme "trusted locations" pour adapter les politiques</li>
                <li><strong className="text-foreground">Session controls :</strong> limiter la durée des sessions, forcer la réévaluation pour les accès à des applications sensibles</li>
                <li><strong className="text-foreground">Risky sign-ins :</strong> politique basée sur le risque Entra ID Protection pour demander un MFA ou bloquer les connexions à risque élevé</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Privileged Identity Management (PIM)</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PIM (nécessite Entra ID P2) est le mécanisme de gestion des accès privilégiés Just-In-Time pour Entra ID. Son principe : les administrateurs n'ont pas de rôles admin permanents — ils les activent temporairement quand ils en ont besoin.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Éliminer les Global Admin permanents :</strong> convertir tous les Global Admin en "Eligible" (activable) plutôt que "Active" (permanent). En cas de compromission du compte, l'attaquant n'a pas les droits admin directement.</li>
                <li><strong className="text-foreground">Durée d'activation limitée :</strong> configurer une durée maximale d'activation (ex. 1h pour Global Admin, 4h pour Exchange Admin)</li>
                <li><strong className="text-foreground">Justification obligatoire :</strong> l'administrateur doit saisir une raison pour chaque activation de rôle</li>
                <li><strong className="text-foreground">Approbation :</strong> certains rôles critiques peuvent nécessiter l'approbation d'un autre administrateur avant activation</li>
                <li><strong className="text-foreground">Alertes et revue d'accès :</strong> notification à chaque activation, revue trimestrielle des éligibilités PIM</li>
                <li><strong className="text-foreground">Breakglass accounts :</strong> 2 comptes Global Admin d'urgence (non soumis à PIM, avec FIDO2) stockés en lieu sûr hors ligne pour récupérer l'accès au tenant en cas de problème PIM</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Entra ID Protection : détection des compromissions</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Entra ID Protection (inclus dans P2) détecte automatiquement les signes de compromission via le Machine Learning Microsoft :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Détections de risque utilisateur :</strong> credentials leakés (darkweb), connexions anormales, activité suspecte</li>
                <li><strong className="text-foreground">Détections de risque de connexion :</strong> connexion depuis Tor, IP anonymisateur, voyage impossible (connexion Paris + Tokyo dans la même heure)</li>
                <li><strong className="text-foreground">Risk-based Conditional Access :</strong> forcer un MFA renforcé ou bloquer automatiquement les connexions à risque élevé</li>
                <li><strong className="text-foreground">Workbooks et rapports :</strong> tableaux de bord dans Azure Monitor pour suivre les risques et les tendances</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Outils d'audit Entra ID</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Purple Knight (Semperis) :</strong> outil gratuit d'audit de sécurité Entra ID et Active Directory on-premises. Détecte les mauvaises configurations, les comptes privilégiés exposés et les backdoors potentiels.</li>
                <li><strong className="text-foreground">BloodHound (Community Edition) :</strong> analyse les chemins d'attaque dans Entra ID et Active Directory. Visualise comment un attaquant peut se déplacer d'un compte standard vers Global Admin.</li>
                <li><strong className="text-foreground">Microsoft Secure Score :</strong> tableau de bord natif mesurant la maturité sécurité du tenant avec des recommandations priorisées.</li>
                <li><strong className="text-foreground">Hawk / Microsoft Graph :</strong> outils d'investigation forensique pour analyser les logs Entra ID et détecter des signes de compromission (consent grants suspects, règles de redirection mail, etc.)</li>
                <li><strong className="text-foreground">ScubaGear (CISA) :</strong> outil open source d'audit de la configuration Microsoft 365 et Entra ID selon les benchmarks gouvernementaux américains, adaptable aux standards européens.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Checklist d'audit Entra ID prioritaire</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Moins de 5 Global Admin permanents — idéalement 0 hors breakglass</li>
                <li>PIM activé et configuré pour tous les rôles admin</li>
                <li>MFA obligatoire pour tous les utilisateurs (pas d'exception)</li>
                <li>Legacy authentication bloquée (Conditional Access policy)</li>
                <li>Entra ID Protection activé avec risk-based policies</li>
                <li>Audit logs conservés au moins 90 jours (180 jours recommandé)</li>
                <li>Revue des consent grants et des service principals avec des permissions élevées</li>
                <li>Self-Service Password Reset (SSPR) configuré avec méthodes d'authentification sécurisées</li>
                <li>Named Locations et Trusted IP configurés</li>
                <li>Breakglass accounts testés et monitored via des alertes</li>
              </ul>
            </section>

            <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="font-heading text-xl font-bold mb-3">Audit Microsoft Entra ID pour votre organisation</h3>
              <p className="text-muted-foreground mb-6">Nos experts Microsoft certifiés réalisent un audit complet de votre tenant Entra ID avec rapport de remédiation priorisé et accompagnement à la mise en conformité.</p>
              <Link to="/contact" className="btn-primary">Demander un audit Entra ID</Link>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default SecuriteEntraId;
