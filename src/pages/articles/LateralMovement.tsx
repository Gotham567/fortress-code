import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Network, ShieldCheck } from "lucide-react";

const LateralMovement = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lateral movement et escalade de privilèges : techniques avancées et défenses",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-10",
    "dateModified": "2026-06-10",
    "description": "Techniques de lateral movement et privilege escalation utilisées par les attaquants (Pass-the-Hash, Kerberoasting, DCOM, WMI) et contre-mesures défensives pour stopper la progression."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Lateral movement et escalade de privilèges : techniques et défenses"
        description="Techniques de lateral movement et privilege escalation (Pass-the-Hash, Kerberoasting, DCOM, WMI, token impersonation) et contre-mesures défensives pour stopper la progression des attaquants."
        canonical="/actualites/lateral-movement-escalade-privileges-defense"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Red Team</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-10">10 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Lateral movement</span> et escalade de privilèges : techniques et défenses
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Après l'accès initial, un attaquant cherche à se déplacer latéralement dans le réseau pour atteindre ses objectifs (données, systèmes critiques, Domain Controllers) et à élever ses privilèges. Comprendre ces techniques est indispensable pour concevoir des défenses efficaces et détecter les compromissions avant qu'elles ne deviennent des incidents majeurs.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Techniques de lateral movement</h2>
              </div>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Pass-the-Hash (PtH)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Après extraction d'un hash NTLM via Mimikatz ou secretsdump, l'attaquant s'authentifie sur d'autres machines sans connaître le mot de passe en clair. Fonctionne avec l'authentification NTLM. Outils : Mimikatz, Impacket psexec, CrackMapExec.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Défense</strong> : Credential Guard (isole les secrets LSASS dans un VTL séparé), Protected Users group, désactivation de NTLM sur les comptes sensibles, LAPS pour les mots de passe admin locaux uniques.
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Pass-the-Ticket (PtT) et Golden/Silver Ticket</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Injection d'un ticket Kerberos (TGT ou TGS) légitime ou forgé pour accéder à des ressources. Le Golden Ticket (forgé depuis le hash krbtgt) donne accès à toutes les ressources du domaine et est valide 10 ans par défaut.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Défense</strong> : rotation régulière du mot de passe krbtgt (double rotation), Protected Users group (empêche la mise en cache des tickets), monitoring des tickets avec durée de vie anormale dans le SIEM.
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Exécution distante (WMI, PsExec, DCOM, WinRM)</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Les protocoles d'administration distante Windows sont couramment détournés pour le lateral movement :
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">WMI</strong> (Windows Management Instrumentation) : exécution de commandes, persistance, extraction d'informations système.</li>
                <li>• <strong className="text-foreground">PsExec</strong> (Sysinternals) : exécution distante via SMB, crée un service temporaire.</li>
                <li>• <strong className="text-foreground">DCOM</strong> (Distributed COM) : invocation d'objets COM pour exécution distante via MMC20, ShellWindows.</li>
                <li>• <strong className="text-foreground">WinRM / PowerShell Remoting</strong> : port 5985/5986, fréquemment utilisé par les attaquants ET les défenseurs.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Défense</strong> : restreindre WMI et WinRM aux seules machines d'administration, firewall host-based, monitoring Event IDs 4648, 4624 (logon type 3), Sysmon event ID 3 (connexions réseau).
              </p>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Abus des partages réseau (SMB)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recherche de shares avec accès écriture (via net view, CrackMapExec spider_plus), dépôt de fichiers malveillants (.lnk capturant des hashes NTLMv2), infection de fichiers partagés. Monitoring : Event ID 5140 (accès aux partages), SMB signing obligatoire pour prévenir le relay NTLM.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Techniques d'escalade de privilèges</h2>
              </div>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Windows Privilege Escalation</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Token Impersonation</strong> : voler le token d'un processus privilégié (SYSTEM, admin) avec SeImpersonatePrivilege. Exploits : JuicyPotato, PrintSpoofer, GodPotato.</li>
                <li><strong className="text-foreground">UAC Bypass</strong> : contourner User Account Control via des binaires auto-elevated ou des clés de registre. Détection : EventID 4616 (changement de privilèges système).</li>
                <li><strong className="text-foreground">DLL Hijacking</strong> : remplacer une DLL recherchée dans un répertoire inscriptible par un payload malveillant.</li>
                <li><strong className="text-foreground">Unquoted Service Paths</strong> : injection dans le chemin d'un service Windows dont le chemin contient des espaces non protégés.</li>
                <li><strong className="text-foreground">Always Install Elevated</strong> : GPO mal configurée permettant l'installation de MSI en tant que SYSTEM.</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Linux Privilege Escalation</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">SUID/SGID binaries</strong> : binaires avec le bit SUID permettant d'exécuter des commandes en tant que root (GTFObins).</li>
                <li><strong className="text-foreground">Sudo misconfiguration</strong> : entrées /etc/sudoers trop permissives (NOPASSWD, wildcards).</li>
                <li><strong className="text-foreground">Kernel exploits</strong> : DirtyCow (CVE-2016-5195), PwnKit (CVE-2021-4034) si le kernel n'est pas à jour.</li>
                <li><strong className="text-foreground">Cron jobs inscriptibles</strong> : scripts exécutés en root mais modifiables par un utilisateur non-privilégié.</li>
                <li><strong className="text-foreground">Capabilities Linux</strong> : capacités accordées à des binaires permettant des actions normalement réservées à root.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Stratégie de détection et défense</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Segmentation réseau</strong> : empêcher les connexions latérales non nécessaires entre postes (workstation isolation). Micro-segmentation pour les serveurs sensibles.</li>
                <li><strong className="text-foreground">Principe de moindre privilège</strong> : aucun compte admin local partagé (LAPS), aucun Domain Admin en session interactive sur les serveurs applicatifs.</li>
                <li><strong className="text-foreground">Détection basée sur les TTPs MITRE ATT&amp;CK</strong> : règles Sigma dans le SIEM pour les patterns T1021 (Remote Services), T1550 (Use Alternate Auth Material), T1055 (Process Injection).</li>
                <li><strong className="text-foreground">Deception technology</strong> : honeypots et honeytokens (faux comptes, faux partages) pour détecter le lateral movement dès qu'il commence.</li>
                <li><strong className="text-foreground">Privileged Access Workstations (PAW)</strong> : postes dédiés pour les tâches d'administration, sans accès Internet, avec contrôle applicatif strict.</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default LateralMovement;
