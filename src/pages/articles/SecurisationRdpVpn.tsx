import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Monitor, Shield, Lock, CheckCircle } from "lucide-react";

const SecurisationRdpVpn = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sécuriser les accès distants RDP et VPN en entreprise : guide PME 2026",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sécuriser les accès distants RDP et VPN en entreprise : guide PME 2026"
        description="RDP exposé sur Internet, VPN mal configuré : comment sécuriser les accès distants en PME. 12 mesures concrètes, alternatives Zero Trust, monitoring et obligations NIS2."
        canonical="/actualites/securisation-acces-distants-rdp-vpn-pme"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Technique</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Sécuriser les accès distants <span className="text-gradient">RDP et VPN</span> : guide PME 2026
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le RDP (Remote Desktop Protocol) exposé sur Internet est l'une des premières portes d'entrée des ransomwares. Le VPN mal configuré est la deuxième. En 2025, plus de 60 % des incidents ransomware ayant touché des PME françaises ont débuté par un accès distant compromis. Ce guide vous donne les mesures concrètes pour fermer ces vecteurs d'attaque.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi RDP est-il si dangereux ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le port RDP (3389/TCP) est scanné en permanence sur Internet par des groupes criminels. En quelques secondes, un serveur RDP exposé est découvert et attaqué. Les vecteurs d'exploitation sont multiples :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    { attack: "Brute force", desc: "Attaques automatisées qui testent des millions de combinaisons login/mot de passe jusqu'à trouver le bon" },
                    { attack: "Credential stuffing", desc: "Réutilisation de credentials volés lors d'autres violations de données (LinkedIn, etc.)" },
                    { attack: "BlueKeep / DejaBlue", desc: "Vulnérabilités critiques (CVE-2019-0708, CVE-2019-1181) permettant l'exécution de code sans authentification" },
                    { attack: "Man-in-the-Middle", desc: "Interception du trafic RDP non chiffré ou avec certificat auto-signé non vérifié" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-4 border border-red-500/20">
                      <h3 className="font-heading font-semibold text-red-400 text-sm mb-1">{item.attack}</h3>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="card-glass rounded-xl p-5 border border-red-500/30 bg-red-500/5">
                  <p className="text-muted-foreground text-sm">
                    <strong className="text-red-400">Chiffre clé :</strong> Shodan recense en permanence plusieurs millions d'instances RDP exposées directement sur Internet. En France, plusieurs dizaines de milliers de serveurs sont accessibles directement sur le port 3389 — dont une majorité appartenant à des PME. Chaque jour, des groupes ransomware comme LockBit ou Black Basta exploitent ces accès pour s'introduire dans les réseaux.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">12 mesures pour sécuriser RDP en PME</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "Ne jamais exposer RDP directement sur Internet", desc: "C'est la règle numéro 1. Placez toujours le RDP derrière un VPN ou un bastion. Si RDP est accessible sur le port 3389 depuis Internet, fermez ce port immédiatement en firewall." },
                    { num: "2", title: "Utiliser un bastion (Remote Desktop Gateway)", desc: "Un serveur RD Gateway expose uniquement HTTPS (443) et gère l'authentification avant de relayer la connexion vers le serveur cible. Les connexions RDP ne traversent jamais directement Internet." },
                    { num: "3", title: "Activer le MFA sur tous les accès RDP", desc: "Un login/mot de passe ne suffit pas. Ajoutez le MFA via Duo Security, Microsoft Authenticator, ou une solution intégrée au RD Gateway. Un credential volé ne permet plus l'accès sans le second facteur." },
                    { num: "4", title: "Restreindre les comptes autorisés à utiliser RDP", desc: "Limitez le groupe 'Remote Desktop Users' au strict nécessaire. Les comptes d'administration globale (Domain Admin) ne doivent jamais être autorisés à se connecter en RDP depuis l'extérieur." },
                    { num: "5", title: "Activer Network Level Authentication (NLA)", desc: "NLA oblige l'authentification avant l'établissement de la session RDP, réduisant la surface d'attaque. C'est un paramètre de stratégie de groupe (GPO) simple à activer." },
                    { num: "6", title: "Changer le port RDP par défaut (sécurité par l'obscurité)", desc: "Changer le port 3389 vers un port non standard réduit considérablement le volume de scans automatisés. Ce n'est pas une mesure suffisante seule, mais elle élimine 95 % du bruit de scan." },
                    { num: "7", title: "Configurer un verrouillage de compte après X tentatives", desc: "5 tentatives échouées en 15 minutes = verrouillage 30 minutes. Cette politique rend le brute force classique impossible tout en restant acceptable pour les utilisateurs légitimes." },
                    { num: "8", title: "Activer les logs d'audit des connexions RDP", desc: "Activez les journaux de sécurité Windows pour les connexions réussies ET échouées. Centralisez dans un SIEM ou un outil de log management pour détecter les tentatives d'accès anormales." },
                    { num: "9", title: "Appliquer les patches Windows en priorité absolue", desc: "Les vulnérabilités RDP comme BlueKeep permettent l'exécution de code sans authentification. Une politique de patch management stricte (patches critiques sous 72h) est non négociable." },
                    { num: "10", title: "Utiliser des comptes dédiés au télétravail", desc: "Créez des comptes AD spécifiques pour les connexions distantes, avec des droits limités. En cas de compromission, l'attaquant ne dispose que de droits restreints." },
                    { num: "11", title: "Segmenter le réseau accessible depuis RDP", desc: "Un utilisateur en RDP ne doit accéder qu'aux ressources nécessaires à son travail. Utilisez des VLANs et des ACLs pour limiter les déplacements latéraux depuis un poste compromis." },
                    { num: "12", title: "Superviser les sessions actives en temps réel", desc: "Un EDR moderne (Microsoft Defender for Business, SentinelOne, CrowdStrike) détecte les comportements anormaux post-connexion : exécution de scripts, téléchargement de ransomware, chiffrement de fichiers." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5 flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-primary/20 text-primary font-heading font-bold text-xs flex items-center justify-center shrink-0">{item.num}</div>
                      <div>
                        <h3 className="font-heading font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">VPN : les risques spécifiques et comment les mitiger</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le VPN est plus sûr que le RDP exposé, mais présente ses propres risques en 2026 :
                </p>
                <div className="space-y-4">
                  {[
                    {
                      risk: "Vulnérabilités critiques dans les appliances VPN",
                      detail: "Fortinet, Pulse Secure/Ivanti, Citrix Gateway, Palo Alto GlobalProtect ont tous subi des CVE critiques en 2023-2025 permettant l'accès sans authentification. Un VPN non patché est aussi dangereux qu'un RDP exposé.",
                      mesure: "Patchez les appliances VPN en priorité absolue (sous 24h pour les CVE critiques). Abonnez-vous aux bulletins de sécurité du fabricant.",
                    },
                    {
                      risk: "Pas de MFA sur le VPN",
                      detail: "Un VPN protégé uniquement par login/mot de passe reste vulnérable au credential stuffing et au phishing. Les credentials VPN sont parmi les plus recherchés sur les forums cybercriminels.",
                      mesure: "Activez le MFA sur l'authentification VPN. La plupart des solutions (Fortinet, OpenVPN, WireGuard) supportent TOTP ou FIDO2.",
                    },
                    {
                      risk: "Split tunneling non contrôlé",
                      detail: "Le split tunneling permet aux utilisateurs de router une partie du trafic hors VPN. Si mal configuré, un poste infecté peut communiquer avec l'attaquant tout en étant connecté au réseau interne.",
                      mesure: "Auditez votre configuration split tunneling. En cas de doute, forcez tout le trafic dans le tunnel VPN.",
                    },
                    {
                      risk: "Pas de contrôle de conformité des postes",
                      detail: "Un poste personnel non géré peut se connecter au VPN avec un système non patché, sans antivirus, ou déjà compromis.",
                      mesure: "Implémentez une vérification d'état (posture check) avant autorisation VPN : OS à jour, antivirus actif, chiffrement disque activé.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold text-orange-400 text-sm mb-2">{item.risk}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{item.detail}</p>
                      <p className="text-muted-foreground text-sm"><strong className="text-primary">Mesure :</strong> {item.mesure}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">L'alternative : Zero Trust Network Access (ZTNA)</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le ZTNA (Zero Trust Network Access) remplace progressivement le VPN traditionnel dans les organisations matures. Principe : l'accès est accordé application par application, après vérification de l'identité, du contexte et de la conformité du poste — plutôt qu'un accès global au réseau interne.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {[
                    { title: "Avantages ZTNA vs VPN", items: ["Accès granulaire app par app", "Vérification continue de la conformité", "Pas d'accès latéral sur le réseau", "Meilleure expérience utilisateur", "Logs d'accès détaillés par application"] },
                    { title: "Solutions ZTNA pour PME", items: ["Cloudflare Access (gratuit jusqu'à 50 users)", "Tailscale (mesh VPN Zero Trust)", "Microsoft Entra Private Access", "Zscaler Private Access", "Cisco Secure Access (ex-Duo BeyondTrust)"] },
                  ].map((col, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold mb-3 text-sm">{col.title}</h3>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        {col.items.map((item, j) => <li key={j}>• {item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Auditez la sécurité de vos accès distants</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts évaluent votre configuration RDP, VPN et accès distants : exposition sur Internet, configuration MFA, gestion des comptes, journalisation. Rapport avec plan de remédiation priorisé. À partir de 1 800 € HT.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un audit des accès distants
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

export default SecurisationRdpVpn;
