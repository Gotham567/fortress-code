import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, FileSearch } from "lucide-react";

const ForensiqueNumerique = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Investigation forensique numérique : collecte, analyse et chaîne de custody",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-12",
    "dateModified": "2026-06-12",
    "description": "Méthodologie d'investigation forensique numérique : collecte de preuves (mémoire RAM, disques, logs), chaîne de custody, outils (Volatility, Autopsy, DFIR.OIR), analyse d'artifacts Windows et Linux."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Investigation forensique numérique : méthodologie et outils 2026"
        description="Méthodologie d'investigation forensique numérique : collecte de preuves légalement admissibles (RAM, disques, logs), chaîne de custody, outils Volatility, Autopsy et analyse d'artifacts."
        canonical="/actualites/investigation-forensique-numerique-guide"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">DFIR</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-12">12 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Investigation forensique numérique</span> : collecte, analyse et chaîne de custody
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                La forensique numérique (Digital Forensics and Incident Response — DFIR) est l'art de collecter, préserver et analyser des preuves numériques pour comprendre ce qui s'est passé lors d'un incident de sécurité et, le cas échéant, les rendre admissibles en justice. Une mauvaise collecte peut rendre des preuves irrecevables.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Principes fondamentaux</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La forensique numérique repose sur trois principes :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Intégrité</strong> : les preuves collectées ne doivent pas être altérées. Toute acquisition se fait sur une copie (image disque) jamais sur l'original.</li>
                <li><strong className="text-foreground">Reproductibilité</strong> : l'analyse doit pouvoir être reproduite par un tiers avec les mêmes résultats.</li>
                <li><strong className="text-foreground">Chaîne de custody</strong> : traçabilité complète de qui a accédé aux preuves, quand et dans quel but — indispensable pour la recevabilité judiciaire.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Ordre de volatilité</strong> (RFC 3227) : collecter dans l'ordre décroissant de volatilité — RAM d'abord (perdue à l'extinction), puis disque, logs réseau, logs système.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Acquisition des preuves</h2>
              </div>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Acquisition mémoire RAM</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                La mémoire vive contient des informations précieuses : processus en cours, connexions réseau actives, clés de chiffrement, malwares fileless. Elle disparaît à l'extinction du système.
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">WinPmem / Magnet RAM Capture</strong> : acquisition RAM sur Windows sans installer de driver.</li>
                <li>• <strong className="text-foreground">LiME (Linux Memory Extractor)</strong> : module kernel pour acquisition RAM sur Linux.</li>
                <li>• Vérifier l'intégrité de l'image avec SHA-256 immédiatement après acquisition.</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Acquisition disque</h3>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">dc3dd / dcfldd</strong> : fork de dd avec vérification d'intégrité et logging intégrés.</li>
                <li>• <strong className="text-foreground">FTK Imager</strong> (gratuit) : acquisition GUI sur Windows, supporte E01, AFF, DD.</li>
                <li>• Utiliser un <strong className="text-foreground">write blocker matériel</strong> pour empêcher toute écriture accidentelle sur l'original.</li>
                <li>• Conserver l'original et travailler uniquement sur des copies vérifiées (hash identique).</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Collecte de logs</h3>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• Logs Windows : Event Log (Security, System, Application), PowerShell, Sysmon.</li>
                <li>• Logs Linux : /var/log/auth.log, /var/log/syslog, journald, audit.log.</li>
                <li>• Logs réseau : NetFlow, pcap, logs pare-feu, proxy, DNS.</li>
                <li>• Logs cloud : CloudTrail (AWS), Activity Log (Azure), Cloud Audit Logs (GCP).</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Analyse forensique</h2>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Analyse mémoire avec Volatility 3</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Volatility est le framework open source de référence pour l'analyse mémoire. Commandes clés :
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <code>windows.pslist</code> : liste des processus actifs avec PID et PPID.</li>
                <li>• <code>windows.netscan</code> : connexions réseau (établies, en écoute).</li>
                <li>• <code>windows.dlllist</code> : DLLs chargées par processus (détection d'injection).</li>
                <li>• <code>windows.malfind</code> : détection de code injecté (shellcode, malware fileless).</li>
                <li>• <code>windows.cmdline</code> : lignes de commande des processus (souvent révélatrices).</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Analyse de disque avec Autopsy</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Autopsy (gratuit, open source) offre une interface graphique pour analyser les images disque :
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• Récupération de fichiers supprimés (carving).</li>
                <li>• Timeline d'activité (MACB : Modified, Accessed, Changed, Born).</li>
                <li>• Analyse des registres Windows (hives : NTUSER.DAT, SAM, SYSTEM, SOFTWARE).</li>
                <li>• Artefacts de navigation web (historique, cookies, cache).</li>
                <li>• Examen des prefetch files (preuves d'exécution de programmes).</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">Artefacts Windows clés pour la forensique</h3>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">Prefetch</strong> : C:\Windows\Prefetch — preuve d'exécution d'un programme avec horodatage.</li>
                <li>• <strong className="text-foreground">Amcache.hve / Shimcache</strong> : historique des exécutables lancés même si supprimés.</li>
                <li>• <strong className="text-foreground">LNK files / JumpLists</strong> : fichiers récemment ouverts, avec chemin original.</li>
                <li>• <strong className="text-foreground">Registry Run keys</strong> : mécanismes de persistance malware classiques.</li>
                <li>• <strong className="text-foreground">Event ID 4624/4625/4648</strong> : connexions réussies, échouées, RunAs.</li>
                <li>• <strong className="text-foreground">Scheduled Tasks</strong> : C:\Windows\System32\Tasks — persistance courante.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Outils de la chaîne DFIR</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">KAPE</strong> (Kroll Artifact Parser and Extractor) : collecte ciblée d'artefacts Windows en quelques minutes.</li>
                <li><strong className="text-foreground">Velociraptor</strong> : agent DFIR déployable à distance, requêtes VQL sur des milliers de machines simultanément.</li>
                <li><strong className="text-foreground">Plaso / log2timeline</strong> : construction de super-timelines multi-sources.</li>
                <li><strong className="text-foreground">Wireshark / tshark</strong> : analyse des captures réseau pcap.</li>
                <li><strong className="text-foreground">CAINE / SANS SIFT</strong> : distributions Linux forensiques avec tous les outils préinstallés.</li>
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

export default ForensiqueNumerique;
