import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, KeyRound, Users, ShieldAlert, Search, CheckCircle2, GitBranch, Mail, Calendar, Layers } from "lucide-react";

const AuditActiveDirectory = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Audit Active Directory : sécuriser le cœur de votre SI",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-05",
    "dateModified": "2026-04-05",
    "description": "Guide complet de l'audit de sécurité Active Directory : méthodologie, outils, vulnérabilités courantes, plan de remédiation et bonnes pratiques pour les PME et ETI."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit Active Directory : guide complet de sécurité"
        description="Audit de sécurité Active Directory : méthodologie, outils (PingCastle, BloodHound, Purple Knight), 10 vulnérabilités les plus fréquentes et plan de remédiation pour les PME."
        canonical="/actualites/audit-active-directory-securite-pme"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-04-05">5 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Audit Active Directory</span> : sécuriser le cœur de votre SI
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                <strong>90 % des cyberattaques majeures impliquent une compromission de l'Active Directory</strong> à un moment ou un autre (source : Mandiant M-Trends 2025). Annuaire central des identités et des permissions, AD est la cible privilégiée des attaquants pour obtenir le contrôle total du système d'information. Pourtant, dans la majorité des PME, AD n'a jamais été audité depuis sa mise en place. Ce guide détaille la méthodologie, les outils et les remédiations d'un audit de sécurité Active Directory.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <KeyRound className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Pourquoi auditer son Active Directory ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Active Directory accumule depuis sa création (souvent 10 à 20 ans) une <strong>dette technique considérable</strong> : comptes orphelins, délégations oubliées, mots de passe faibles, GPO obsolètes, configurations héritées de Windows 2003... Chacune de ces failles peut être exploitée par un attaquant ayant déjà mis le pied dans le réseau pour devenir <strong>Domain Admin en moins de 24 heures</strong>.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="card-glass rounded-xl p-5">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">90 %</div>
                  <p className="text-muted-foreground text-xs">des attaques majeures passent par AD</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">&lt; 24h</div>
                  <p className="text-muted-foreground text-xs">pour devenir Domain Admin sur un AD non sécurisé</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">73 %</div>
                  <p className="text-muted-foreground text-xs">des AD audités ont une note PingCastle &gt; 70/100 (critique)</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 10 vulnérabilités AD les plus fréquentes</h2>
              </div>
              <div className="space-y-3">
                {[
                  { n: "1", t: "Kerberoasting possible", d: "Comptes de service avec SPN et mots de passe faibles : extraction et cassage offline du TGS." },
                  { n: "2", t: "AS-REP Roasting", d: "Comptes avec l'attribut DONT_REQ_PREAUTH activé : récupération du hash sans authentification." },
                  { n: "3", t: "Délégation Kerberos non contrainte", d: "Permet l'usurpation de n'importe quel utilisateur, dont les Domain Admins." },
                  { n: "4", t: "Mots de passe en GPP (cpassword)", d: "Mots de passe administrateurs locaux stockés en clair (clé AES connue) dans SYSVOL." },
                  { n: "5", t: "ADCS mal configuré (ESC1-ESC11)", d: "Templates de certificats permettant l'élévation de privilèges immédiate." },
                  { n: "6", t: "DCSync non restreint", d: "Comptes non-admin disposant de droits Replicating Directory Changes : extraction de tous les hashs." },
                  { n: "7", t: "Comptes administrateurs trop nombreux", d: "Plus de 5 % du parc avec des privilèges admin = surface d'attaque énorme." },
                  { n: "8", t: "krbtgt jamais réinitialisé", d: "Permet aux attaquants de forger des Golden Tickets valables jusqu'à 10 ans." },
                  { n: "9", t: "OS obsolètes (Windows 7/2008/2012)", d: "Vulnérabilités non patchées et techniques d'attaque triviales (PrintNightmare, etc.)." },
                  { n: "10", t: "Absence de tiering administratif", d: "Les comptes Domain Admin se connectent sur des postes standards : exposition aux malwares." },
                ].map((v) => (
                  <div key={v.n} className="card-glass rounded-xl p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-destructive font-heading font-bold text-sm">{v.n}</div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold mb-1">{v.t}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{v.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les outils incontournables d'audit AD</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">PingCastle</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">Outil français de référence (gratuit en version Basic). Génère un rapport HTML complet avec une note de risque /100 et des recommandations priorisées.</p>
                  <p className="text-xs text-primary">Idéal pour : audit annuel récurrent, suivi de remédiation</p>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">BloodHound / SharpHound</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">Cartographie graphique des chemins d'attaque entre tous les objets AD. Permet d'identifier les "shortest path to Domain Admin".</p>
                  <p className="text-xs text-primary">Idéal pour : pentest, comprendre les délégations transitives</p>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">Purple Knight (Semperis)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">Scanner gratuit avec 100+ contrôles spécifiques aux indicateurs d'exposition (IoE) et de compromission (IoC).</p>
                  <p className="text-xs text-primary">Idéal pour : compléter PingCastle, focus IoE/IoC</p>
                </div>
                <div className="card-glass rounded-xl p-6">
                  <h3 className="font-heading text-base font-semibold mb-2 text-primary">ORADAD (ANSSI)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">Outil officiel de l'ANSSI pour l'audit AD selon le référentiel français. Recommandé pour les entités sensibles.</p>
                  <p className="text-xs text-primary">Idéal pour : OIV/OSE/entités essentielles NIS2</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Méthodologie d'audit en 7 étapes</h2>
              </div>
              <div className="space-y-3">
                {[
                  { n: "1", t: "Cadrage et périmètre", d: "Définir les domaines/forêts audités, accès nécessaires (compte standard + lecture LDAP), durée d'intervention." },
                  { n: "2", t: "Collecte technique", d: "Exécution des outils (PingCastle, SharpHound, Purple Knight) en lecture seule. Aucune modification du SI." },
                  { n: "3", t: "Analyse des indicateurs", d: "Étude des configurations sensibles : ACL, GPO, comptes privilégiés, trusts inter-domaines, ADCS." },
                  { n: "4", t: "Cartographie des chemins d'attaque", d: "Identification des chemins permettant à un attaquant d'élever ses privilèges depuis un compte standard." },
                  { n: "5", t: "Test de robustesse des mots de passe", d: "Extraction des hashs (NTDS.dit) en environnement isolé et tests de cassage pour mesurer la qualité réelle." },
                  { n: "6", t: "Rapport et restitution", d: "Document détaillé avec scoring, vulnérabilités classées par criticité et plan de remédiation chiffré." },
                  { n: "7", t: "Accompagnement à la remédiation", d: "Plan d'action sur 6 à 12 mois avec quick wins (1 semaine), mesures court terme et chantiers structurels." },
                ].map((s) => (
                  <div key={s.n} className="card-glass rounded-xl p-4 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">{s.n}</div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold mb-1">{s.t}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Quick wins de sécurisation AD</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Avant même de lancer un audit complet, ces actions réduisent immédiatement la surface d'attaque :
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Réinitialiser le mot de passe krbtgt (deux fois, avec 24h d'écart)",
                  "Activer LAPS pour les administrateurs locaux",
                  "Supprimer tous les comptes inactifs depuis &gt; 90 jours",
                  "Réduire le groupe Domain Admins à 4 comptes maximum",
                  "Activer la protection SMB Signing et désactiver SMBv1",
                  "Mettre en place un tiering administratif (T0/T1/T2)",
                  "Bloquer les délégations Kerberos non contraintes",
                  "Implémenter une politique de mots de passe forts (14+ caractères)",
                  "Activer l'audit des événements 4624, 4672, 4688, 4769",
                  "Désactiver NTLMv1 et restreindre NTLMv2",
                ].map((q, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: q }} />
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Articles complémentaires</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/audit-cybersecurite-guide" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Qu'est-ce qu'un audit cybersécurité ?</h3>
                  <p className="text-muted-foreground text-xs">L'audit AD s'inscrit dans une démarche d'audit globale.</p>
                </Link>
                <Link to="/actualites/edr-xdr-protection-endpoint-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading text-sm font-semibold mb-2 text-primary">EDR vs XDR : quelle protection ?</h3>
                  <p className="text-muted-foreground text-xs">Compléter la sécurisation AD par une détection comportementale.</p>
                </Link>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="card-glass glow-border rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Évaluez la sécurité de votre Active Directory</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Réservez un audit gratuit de 15 minutes pour échanger sur l'état de votre Active Directory et identifier les chantiers prioritaires de sécurisation.
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

export default AuditActiveDirectory;
