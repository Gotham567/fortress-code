import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cloud, ShieldCheck, Mail, Calendar, FileLock2, Users, AlertTriangle, CheckCircle2, Settings } from "lucide-react";

const SecuriteMicrosoft365 = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sécuriser Microsoft 365 : guide complet pour les PME",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-13",
    "dateModified": "2026-04-13",
    "description": "Guide pratique pour sécuriser Microsoft 365 : 15 mesures essentielles, configuration d'Entra ID, Defender, Purview, MFA, accès conditionnel et erreurs à éviter."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sécuriser Microsoft 365 : guide complet pour les PME"
        description="Guide expert pour sécuriser Microsoft 365 : 15 mesures essentielles, MFA, accès conditionnel, Defender, Purview, gestion des partages externes et plan d'action en 30 jours."
        canonical="/actualites/securiser-microsoft-365-pme"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-04-13">13 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Sécuriser Microsoft 365</span> : guide complet pour les PME
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Microsoft 365 héberge aujourd'hui les <strong>emails, fichiers, échanges Teams et données les plus sensibles</strong> de plus de 90 % des PME françaises. Pourtant, une étude Vectra AI montre que <strong>72 % des compromissions cloud en 2024 visaient un tenant Microsoft 365 mal configuré</strong>. Ce guide rassemble les 15 mesures techniques indispensables pour sécuriser votre environnement Microsoft 365, sans nécessiter de licence Enterprise E5.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Pourquoi Microsoft 365 est-il une cible prioritaire ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un compte Microsoft 365 compromis donne accès aux mails, à OneDrive, SharePoint, Teams, et souvent à des applications tierces via SSO. Les attaquants ciblent particulièrement :
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed space-y-2 ml-6 mb-6">
                <li>• Les <strong>tokens d'authentification</strong> volés (attaque AiTM, Adversary in the Middle) qui contournent même le MFA classique</li>
                <li>• Les <strong>règles de boîte mail malveillantes</strong> (auto-forward, suppression silencieuse) installées après compromission</li>
                <li>• Les <strong>partages SharePoint/OneDrive trop ouverts</strong> indexés par Google ou exposés à « Tout le monde »</li>
                <li>• Les <strong>applications OAuth tierces</strong> abusivement consenties par les utilisateurs (illicit consent grant)</li>
                <li>• Les <strong>arnaques au président par email</strong> (BEC) ciblant les services finance et RH</li>
              </ul>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">15 mesures essentielles à activer</h2>
              </div>
              <div className="space-y-4">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-3 text-primary">Identité &amp; authentification</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• <strong>1.</strong> Activer le <strong>MFA pour 100 % des utilisateurs</strong>, en privilégiant Microsoft Authenticator avec « number matching » ou clés FIDO2</li>
                    <li>• <strong>2.</strong> Désactiver l'authentification héritée (POP, IMAP, SMTP basic) via <em>Security Defaults</em> ou Conditional Access</li>
                    <li>• <strong>3.</strong> Mettre en place des <strong>politiques d'accès conditionnel</strong> : blocage des géolocalisations à risque, exigence d'appareil conforme, MFA obligatoire pour les administrateurs</li>
                    <li>• <strong>4.</strong> Activer <strong>Privileged Identity Management (PIM)</strong> ou la rotation des comptes admin avec activation à la demande</li>
                    <li>• <strong>5.</strong> Réduire le nombre d'<strong>administrateurs globaux à 2-4 maximum</strong>, avec comptes dédiés non utilisés au quotidien</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-3 text-primary">Protection email &amp; collaboration</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• <strong>6.</strong> Configurer <strong>SPF, DKIM et DMARC en quarantine puis reject</strong> sur tous vos domaines</li>
                    <li>• <strong>7.</strong> Activer <strong>Microsoft Defender for Office 365</strong> (Safe Links, Safe Attachments, anti-phishing avancé)</li>
                    <li>• <strong>8.</strong> Mettre en place une bannière « email externe » et bloquer la création automatique de règles de transfert externe</li>
                    <li>• <strong>9.</strong> Restreindre les partages SharePoint/OneDrive : interdire « Tout le monde », forcer expiration des liens, audit régulier</li>
                    <li>• <strong>10.</strong> Bloquer le <strong>consentement utilisateur aux applications OAuth tierces</strong> non vérifiées par Microsoft</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-3 text-primary">Données, terminaux &amp; supervision</h3>
                  <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <li>• <strong>11.</strong> Déployer <strong>Intune (MDM/MAM)</strong> pour gérer les terminaux et appliquer le chiffrement BitLocker</li>
                    <li>• <strong>12.</strong> Activer <strong>Microsoft Purview</strong> : étiquettes de sensibilité, DLP sur Exchange/SharePoint/Teams</li>
                    <li>• <strong>13.</strong> Augmenter la <strong>rétention des logs Audit Unified à 1 an minimum</strong> (180 jours par défaut)</li>
                    <li>• <strong>14.</strong> Connecter les logs M365 à un <strong>SIEM/XDR</strong> (Microsoft Sentinel ou équivalent) avec règles de détection</li>
                    <li>• <strong>15.</strong> Configurer une <strong>sauvegarde tierce</strong> (Veeam, Druva, Barracuda) : Microsoft ne garantit pas la restauration en cas de ransomware ou suppression malveillante</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Quelle licence pour quel niveau de sécurité ?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Business Basic / Standard", d: "Sécurité minimale : MFA, Security Defaults, anti-spam EOP de base. Convient aux TPE de moins de 20 personnes peu exposées. Compléter avec un EDR tiers." },
                  { t: "Business Premium (recommandé PME)", d: "Inclut Entra ID P1 (accès conditionnel), Intune, Defender for Business, Purview limité. Le meilleur ratio sécurité/prix : 22 €/utilisateur/mois." },
                  { t: "E3 + Defender add-ons", d: "Pour ETI : ajout de Defender for Office 365 P2, Defender for Endpoint P2, gestion fine des étiquettes de sensibilité." },
                  { t: "E5 / E5 Security", d: "Sécurité maximale : Sentinel, PIM, Defender for Cloud Apps (CASB), Purview complet, Insider Risk. Pour ETI matures et secteurs régulés." },
                ].map((s, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading text-base font-semibold mb-2 text-primary">{s.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <FileLock2 className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Plan d'action en 30 jours</h2>
              </div>
              <div className="space-y-4">
                {[
                  { t: "Semaine 1 — Audit éclair", d: "Score Microsoft Secure Score, inventaire des comptes admin, recensement des règles de transfert mail externes, audit des partages SharePoint." },
                  { t: "Semaine 2 — Identité", d: "Déploiement MFA universel, accès conditionnel basique, suppression de l'authentification héritée, nettoyage des comptes orphelins." },
                  { t: "Semaine 3 — Protection email", d: "Configuration SPF/DKIM/DMARC, activation Defender for Office 365, blocage des forwards externes automatiques, formation utilisateurs." },
                  { t: "Semaine 4 — Données & supervision", d: "Restriction partages externes, déploiement Intune, mise en place sauvegarde tierce, connexion des logs au SIEM." },
                ].map((s, i) => (
                  <div key={i} className="card-glass rounded-xl p-5 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">{i + 1}</div>
                    <div>
                      <h3 className="font-heading text-base font-semibold mb-1">{s.t}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Erreurs fréquentes à éviter</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Croire que Microsoft sauvegarde vos données : la responsabilité est partagée, vous devez gérer vos backups",
                  "Laisser le MFA optionnel sur les administrateurs ou les comptes de service",
                  "Conserver l'authentification héritée pour « ne pas casser un vieux service »",
                  "Autoriser le partage anonyme externe par défaut sur SharePoint/OneDrive",
                  "Ne jamais auditer les applications OAuth consenties par les utilisateurs",
                  "Sous-estimer la sécurité de Teams (invités externes, applications, partages)",
                ].map((m, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{m}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles complémentaires</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/zero-trust-architecture-guide-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Zero Trust : guide d'implémentation</h3>
                  <p className="text-muted-foreground text-xs">Microsoft 365 est la pierre angulaire d'une architecture Zero Trust.</p>
                </Link>
                <Link to="/actualites/spear-phishing-bec-guide-protection-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Spear-phishing &amp; BEC : se protéger</h3>
                  <p className="text-muted-foreground text-xs">Les attaques email ciblées qui frappent Microsoft 365.</p>
                </Link>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card-glass glow-border rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Auditez votre tenant Microsoft 365</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Profitez d'un audit gratuit de 15 minutes pour identifier les principales failles de configuration de votre tenant Microsoft 365 et obtenir un plan de remédiation priorisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/lakaoub/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Calendar className="h-4 w-4" /> Réserver un audit gratuit
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-primary/40 text-primary hover:bg-primary/10 font-heading font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Mail className="h-4 w-4" /> Nous contacter
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

export default SecuriteMicrosoft365;
