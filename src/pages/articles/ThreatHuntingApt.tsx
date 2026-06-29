import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Target, Eye, Shield, AlertTriangle, Network } from "lucide-react";

const ThreatHuntingApt = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Threat hunting : détecter les APT avant qu'elles s'activent",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-29",
    "dateModified": "2026-06-29",
    "description": "Le threat hunting proactif détecte les APT et menaces avancées avant qu'elles s'activent. Méthode, outils MITRE ATT&CK, SIEM, EDR et cas pratiques pour PME et ETI."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Threat hunting : détecter les APT avant qu'elles frappent"
        description="Threat hunting proactif pour détecter les APT : méthodologie hypothèse-recherche-validation, MITRE ATT&CK, outils SIEM/EDR, IOC/TTP et cas pratiques pour PME et ETI."
        canonical="/actualites/threat-hunting-apt-detection-proactive"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Threat Hunting</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-29">29 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Threat hunting</span> : détecter les APT avant qu'elles s'activent
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les attaquants APT (Advanced Persistent Threats) passent en moyenne 207 jours dans un réseau avant d'être détectés. Le threat hunting proactif renverse ce rapport de force : au lieu d'attendre les alertes, des analystes humains partent à la recherche active de signes d'intrusion. Voici comment cette approche fonctionne et comment l'adapter aux PME et ETI.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Threat hunting vs monitoring réactif</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le monitoring traditionnel est réactif : un outil génère une alerte, l'équipe l'analyse et répond. Le threat hunting est proactif : l'analyste formule une hypothèse ("et si un attaquant avait compromis un compte administrateur il y a 3 mois ?") et part chercher des preuves de cette compromission dans les logs.
              </p>
              <h3 className="font-heading text-xl font-semibold mb-3">Pourquoi le monitoring seul est insuffisant</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Living off the land :</strong> les attaquants modernes utilisent des outils légitimes (PowerShell, WMI, PsExec) qui ne déclenchent pas d'alertes antivirales classiques</li>
                <li><strong className="text-foreground">Évasion des SIEM :</strong> les règles de détection SIEM couvrent les TTPs connus, pas les variantes inédites des APT</li>
                <li><strong className="text-foreground">Fatigue des alertes :</strong> un SOC moyen reçoit 10 000 alertes/jour ; les vrais incidents se noient dans le bruit</li>
                <li><strong className="text-foreground">Dwell time :</strong> 207 jours de présence moyenne avant détection signifie que des mois de logs doivent être analysés rétrospectivement</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Méthodologie du threat hunting</h2>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Étape 1 : formuler une hypothèse</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toute session de threat hunting commence par une hypothèse concrète, basée sur la threat intelligence ou les TTPs (Tactics, Techniques, Procedures) connus des groupes APT ciblant votre secteur. Exemples d'hypothèses :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Hypothèse 1 :</strong> "Un attaquant a compromis un compte de service non surveillé et effectue du credential dumping via mimikatz"</li>
                <li><strong className="text-foreground">Hypothèse 2 :</strong> "Un C2 (Command & Control) est actif sur notre réseau via des connexions DNS périodiques vers un domaine généré algorithmiquement (DGA)"</li>
                <li><strong className="text-foreground">Hypothèse 3 :</strong> "Une persistence via clés de registre Run a été établie sur un poste de travail"</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Étape 2 : collecter et analyser les données</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Logs Windows :</strong> Security Event Log (4624, 4625, 4688, 4698, 4720), Sysmon (processus, connexions réseau, clés de registre)</li>
                <li><strong className="text-foreground">Logs réseau :</strong> NetFlow, DNS logs, proxy logs, firewall logs</li>
                <li><strong className="text-foreground">Artefacts endpoints :</strong> prefetch files, shimcache, AmCache, BITS jobs, scheduled tasks</li>
                <li><strong className="text-foreground">Memory dumps :</strong> analyse de la RAM pour détecter les processus injectés ou les shellcodes</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Étape 3 : valider ou infirmer l'hypothèse</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'analyste cherche des indicateurs confirmant ou infirmant son hypothèse. Si confirmée, il escalade vers la réponse à incident. Si infirmée, les résultats alimentent de nouvelles hypothèses ou améliorent les règles de détection du SIEM.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">MITRE ATT&CK : le framework de référence</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MITRE ATT&CK est la base de connaissances des TTPs utilisés par les attaquants réels, organisée en 14 tactiques (Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, C2, Exfiltration, Impact) et des centaines de techniques.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">ATT&CK Navigator :</strong> outil de visualisation pour mapper les TTPs observés et identifier les gaps de détection</li>
                <li><strong className="text-foreground">Threat groups :</strong> ATT&CK référence des groupes APT spécifiques (APT28, Lazarus, FIN7) avec leurs TTPs caractéristiques</li>
                <li><strong className="text-foreground">Atomic Red Team :</strong> tests unitaires basés sur ATT&CK pour valider la détection de chaque technique</li>
                <li><strong className="text-foreground">SIGMA rules :</strong> règles de détection open source alignées sur ATT&CK, importables dans les SIEM</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Outils pour le threat hunting</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">SIEM (Splunk, Microsoft Sentinel, Elastic SIEM) :</strong> agrégation des logs, requêtes SPL/KQL, corrélation temporelle</li>
                <li><strong className="text-foreground">EDR (CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint) :</strong> visibilité temps réel des processus, connexions, et capacité de hunting intégrée</li>
                <li><strong className="text-foreground">Velociraptor :</strong> outil open source de DFIR et threat hunting, capable de collecter des artefacts forensiques sur des milliers de machines simultanément</li>
                <li><strong className="text-foreground">Zeek / Suricata :</strong> analyse du trafic réseau pour détecter les C2, exfiltrations et communications anormales</li>
                <li><strong className="text-foreground">OSINT / Threat Intel :</strong> VirusTotal, MISP, OpenCTI pour corréler les IOC avec la threat intelligence externe</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Threat hunting adapté aux PME</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le threat hunting à grande échelle nécessite des ressources importantes. Pour les PME, des approches pragmatiques permettent de bénéficier de la démarche sans un SOC full-time :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Hunting ciblé :</strong> se concentrer sur 3 à 5 hypothèses prioritaires basées sur les menaces connues du secteur, plutôt que sur une analyse exhaustive</li>
                <li><strong className="text-foreground">EDR avec hunting intégré :</strong> des solutions comme Microsoft Defender for Endpoint proposent des capacités de hunting via KQL (Advanced Hunting) accessibles sans SOC dédié</li>
                <li><strong className="text-foreground">MSSP avec hunting :</strong> faire appel à un MSSP proposant des sessions de threat hunting périodiques (trimestrielles ou semestrielles)</li>
                <li><strong className="text-foreground">Exercices Atomic Red Team :</strong> simuler des TTPs communs et vérifier que le SIEM/EDR les détecte — c'est du "reverse hunting"</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Indicateurs IOC vs TTP : quelle différence ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La pyramide de la douleur (Pyramid of Pain) classe les indicateurs selon leur valeur :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Hash de fichiers :</strong> facile à changer pour l'attaquant, faible valeur détective</li>
                <li><strong className="text-foreground">Adresses IP :</strong> peuvent être changées en minutes via un nouveau serveur</li>
                <li><strong className="text-foreground">Domaines :</strong> coûtent quelques dollars à remplacer, mais la rotation prend du temps</li>
                <li><strong className="text-foreground">Artifacts réseau / TTPs :</strong> très difficiles à modifier car liés au modus operandi de l'attaquant — c'est là que le hunting est le plus efficace</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le threat hunting se concentre sur les TTPs (techniques comportementales) plutôt que sur les IOC (indicateurs ponctuels), ce qui lui permet de détecter des attaquants même quand ils changent leurs outils et infrastructures.
              </p>
            </section>

            <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="font-heading text-xl font-bold mb-3">Besoin d'un audit de sécurité ou d'une session de threat hunting ?</h3>
              <p className="text-muted-foreground mb-6">Nos experts certifiés réalisent des sessions de threat hunting ciblées et des audits de maturité détection pour PME et ETI.</p>
              <Link to="/contact" className="btn-primary">Demander un devis gratuit</Link>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ThreatHuntingApt;
