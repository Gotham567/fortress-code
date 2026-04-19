import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Network, KeyRound, Eye, CheckCircle2, Layers, Calendar, Mail, Compass } from "lucide-react";

const ZeroTrust = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Zero Trust : guide d'implémentation pour les PME et ETI",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "description": "Comprendre et déployer une architecture Zero Trust : principes, piliers, feuille de route en 7 étapes, technologies et erreurs à éviter pour les PME et ETI."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Zero Trust : guide d'implémentation pour PME et ETI"
        description="Architecture Zero Trust expliquée : 5 piliers, feuille de route en 7 étapes, technologies (ZTNA, MFA, micro-segmentation), coûts et erreurs à éviter pour réussir votre projet."
        canonical="/actualites/zero-trust-architecture-guide-pme"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-04-15">15 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Zero Trust</span> : guide d'implémentation pour les PME et ETI
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le modèle <strong>Zero Trust</strong> n'est plus réservé aux grands comptes. Avec la généralisation du télétravail, du cloud et la sophistication des attaques, <strong>83 % des entreprises ont engagé une démarche Zero Trust en 2025</strong> (source : Forrester). Pour les PME et ETI françaises, c'est devenu un cadre incontournable pour réduire la surface d'attaque, contenir les ransomware et répondre aux exigences NIS2. Ce guide pratique vous explique comment passer du concept à une mise en œuvre réaliste.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Qu'est-ce que le Zero Trust ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le <strong>Zero Trust</strong> (« ne jamais faire confiance, toujours vérifier ») est un modèle de sécurité qui supprime la notion de périmètre réseau de confiance. Chaque utilisateur, appareil, application et flux réseau est traité comme potentiellement hostile et doit être <strong>authentifié, autorisé et chiffré en continu</strong>, qu'il soit à l'intérieur ou à l'extérieur du SI.
              </p>
              <div className="card-glass rounded-xl p-6 mb-6 border-l-4 border-primary">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Référentiel officiel :</strong> le NIST a publié le standard <em>SP 800-207</em> (Zero Trust Architecture). En France, l'ANSSI recommande explicitement cette approche dans son guide « Recommandations pour le déploiement sécurisé du télétravail » et dans le cadre de la transposition NIS2.
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 5 piliers du Zero Trust</h2>
              </div>
              <div className="space-y-4">
                {[
                  { n: "1", t: "Identité", d: "Authentification forte (MFA résistant au phishing : passkeys, FIDO2), gestion centralisée des identités (IAM/IdP), contrôle continu des sessions et accès conditionnel basé sur le risque." },
                  { n: "2", t: "Appareils", d: "Inventaire exhaustif, posture de conformité (chiffrement disque, antivirus, patchs), gestion MDM/UEM, et refus d'accès aux terminaux non conformes." },
                  { n: "3", t: "Réseau", d: "Micro-segmentation, suppression des VPN traditionnels au profit de solutions ZTNA (Zero Trust Network Access), inspection chiffrée du trafic et politique de moindre exposition." },
                  { n: "4", t: "Applications & charges de travail", d: "Authentification forte sur chaque application, principe du moindre privilège, sécurisation du cycle DevSecOps et protection des API." },
                  { n: "5", t: "Données", d: "Classification, chiffrement au repos et en transit, étiquetage (sensitivity labels), DLP et contrôle des droits d'usage (Information Rights Management)." },
                ].map((s) => (
                  <div key={s.n} className="card-glass rounded-xl p-5 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">{s.n}</div>
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
                <Compass className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Feuille de route en 7 étapes</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Un projet Zero Trust ne se déploie pas en un week-end. Pour une PME de 50 à 500 collaborateurs, comptez <strong>12 à 24 mois</strong> de transformation par itérations. Voici une feuille de route éprouvée.
              </p>
              <div className="space-y-4">
                {[
                  { n: "1", t: "Cartographier surfaces et flux critiques", d: "Identifier les actifs sensibles (DAAS : Data, Applications, Assets, Services), les flux légitimes et les utilisateurs concernés. Sans cartographie, pas de Zero Trust." },
                  { n: "2", t: "Renforcer l'identité", d: "Déployer un IdP central (Microsoft Entra ID, Okta), généraliser le MFA résistant au phishing, supprimer les comptes partagés et activer l'accès conditionnel." },
                  { n: "3", t: "Sécuriser les terminaux", d: "Déployer un EDR/XDR sur 100 % du parc, MDM/Intune pour les mobiles et politiques de conformité bloquant les appareils non gérés." },
                  { n: "4", t: "Remplacer le VPN par du ZTNA", d: "Migrer vers une solution ZTNA (Zscaler, Cloudflare Access, Microsoft Entra Private Access) qui n'expose que les applications nécessaires, jamais le réseau." },
                  { n: "5", t: "Micro-segmenter", d: "Diviser le réseau interne en zones (administration, production, IoT, invités) avec règles de filtrage strictes entre chaque segment." },
                  { n: "6", t: "Protéger les données", d: "Mettre en place classification, étiquetage automatique, chiffrement et DLP sur Microsoft 365, Google Workspace et les partages de fichiers." },
                  { n: "7", t: "Superviser en continu", d: "Centraliser logs et signaux dans un SIEM/XDR, mesurer les KPI Zero Trust et ajuster les politiques en boucle d'amélioration continue." },
                ].map((s) => (
                  <div key={s.n} className="card-glass rounded-xl p-5 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold">{s.n}</div>
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
                <Network className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Quelles technologies pour quelle taille d'entreprise ?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "PME 20-100 utilisateurs", d: "Microsoft 365 Business Premium (Entra ID + Intune + Defender), MFA via Authenticator + clés FIDO2, ZTNA Cloudflare Access ou Tailscale. Budget : 22 à 35 €/utilisateur/mois." },
                  { t: "ETI 100-500 utilisateurs", d: "Microsoft E5 Security ou équivalent, EDR/XDR managé (Sentinel One, CrowdStrike), ZTNA Zscaler Private Access, micro-segmentation Illumio. Budget : 50 à 90 €/utilisateur/mois." },
                  { t: "Multi-cloud", d: "Couche CASB (Netskope, Microsoft Defender for Cloud Apps), gouvernance des identités machines, SSPM pour SaaS critiques." },
                  { t: "OT / Industriel", d: "Solutions de visibilité OT (Claroty, Nozomi), segmentation IT/OT stricte et bastions d'administration." },
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
                <KeyRound className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Bénéfices mesurables</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Réduction de 60 à 80 % de la surface d'attaque externe",
                  "Confinement automatique des compromissions (limitation du mouvement latéral)",
                  "Suppression des VPN traditionnels et de leurs vulnérabilités récurrentes",
                  "Conformité native NIS2, DORA, ISO 27001 et HDS",
                  "Expérience utilisateur améliorée : SSO universel et accès distant fluide",
                  "Réduction du coût d'incident moyen de 1,76 M$ (étude IBM Cost of a Data Breach 2024)",
                ].map((m, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{m}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">7 erreurs à éviter</h2>
              </div>
              <div className="card-glass rounded-xl p-6">
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-3">
                  <li>• <strong>Acheter un produit « Zero Trust »</strong> sans démarche d'architecture ni cartographie préalable</li>
                  <li>• <strong>Négliger la gouvernance des identités</strong> (comptes orphelins, droits cumulés, comptes de service partagés)</li>
                  <li>• <strong>Conserver le VPN historique</strong> en parallèle du ZTNA, créant deux portes d'entrée à sécuriser</li>
                  <li>• <strong>Oublier les administrateurs</strong> : 80 % des compromissions critiques exploitent un compte privilégié non protégé</li>
                  <li>• <strong>Sous-estimer la conduite du changement</strong> : sans accompagnement, les utilisateurs contournent les contrôles</li>
                  <li>• <strong>Négliger les applications SaaS</strong> hors périmètre IT (Shadow IT) qui restent des angles morts</li>
                  <li>• <strong>Vouloir tout faire en une fois</strong> au lieu d'avancer par cas d'usage prioritaires</li>
                </ul>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles complémentaires</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/edr-xdr-protection-endpoint-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">EDR vs XDR : choisir sa solution</h3>
                  <p className="text-muted-foreground text-xs">Le pilier « endpoints » d'une architecture Zero Trust.</p>
                </Link>
                <Link to="/actualites/audit-active-directory-securite-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Audit Active Directory</h3>
                  <p className="text-muted-foreground text-xs">Sécuriser le socle d'identités, prérequis du Zero Trust.</p>
                </Link>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card-glass glow-border rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Évaluez votre maturité Zero Trust</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Profitez d'un audit gratuit de 15 minutes pour situer votre niveau de maturité Zero Trust, identifier les chantiers prioritaires et obtenir une feuille de route adaptée à votre contexte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/many-cyberconform/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-6 py-3 rounded-lg transition-colors">
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

export default ZeroTrust;
