import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Globe } from "lucide-react";

const ReconnaissanceOsint = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reconnaissance OSINT en ethical hacking : outils et cadre légal en France",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-16",
    "dateModified": "2026-06-16",
    "description": "Phase de reconnaissance OSINT lors d'un pentest : Shodan, Maltego, theHarvester, Recon-ng, WHOIS, DNS, réseaux sociaux, framework légal en France et périmètre d'autorisation."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Reconnaissance OSINT en ethical hacking : outils et cadre légal"
        description="Phase de reconnaissance OSINT lors d'un pentest : Shodan, Maltego, theHarvester, Recon-ng, WHOIS, DNS, réseaux sociaux, framework légal en France et périmètre d'autorisation."
        canonical="/actualites/reconnaissance-osint-ethical-hacking"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Ethical Hacking</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-16">16 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Reconnaissance OSINT</span> en ethical hacking : outils et cadre légal
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                La reconnaissance est la première phase de tout pentest. Elle consiste à collecter le maximum d'informations sur la cible depuis des sources publiques (OSINT) sans interagir directement avec ses systèmes. Maîtrisée, elle permet d'identifier les vecteurs d'attaque les plus prometteurs avant même de lancer un seul scan.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Cadre légal de la reconnaissance</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En France, la reconnaissance OSINT dans le cadre d'un pentest est encadrée par le Code pénal (art. 323-1 à 323-7). La collecte d'informations publiquement disponibles est légale, mais l'accès non autorisé à des systèmes ne l'est pas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Prérequis indispensables</strong> : une <strong className="text-foreground">lettre d'autorisation signée</strong> définissant précisément le périmètre (domaines, plages IP, systèmes) et la période d'engagement. Sans ce document, même une reconnnaissance passive peut exposer le testeur à des poursuites. Certains prestataires font signer une convention d'audit homologuée ANSSI/PASSI.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Les 5 catégories de sources OSINT</h2>
              </div>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">1. Infrastructure réseau et DNS</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cartographier l'infrastructure publique de la cible : enregistrements DNS (A, MX, NS, TXT, SPF, DMARC), plages IP WHOIS, ASN, certificats TLS (Certificate Transparency via crt.sh), sous-domaines via brute-force passif.
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">theHarvester</strong> : emails, sous-domaines, IPs depuis Google, Bing, Shodan, certspotter.</li>
                <li>• <strong className="text-foreground">Amass</strong> (OWASP) : découverte de sous-domaines via OSINT passif et brute-force.</li>
                <li>• <strong className="text-foreground">dnsx / MassDNS</strong> : résolution DNS massivement parallèle.</li>
                <li>• <strong className="text-foreground">crt.sh</strong> : recherche dans les logs Certificate Transparency pour trouver des sous-domaines.</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">2. Moteurs de recherche de périphériques connectés</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Identifier les systèmes exposés sur Internet avant même de les scanner directement.
              </p>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">Shodan</strong> : indexe les bannieres des services exposés (HTTP, SSH, RDP, FTP, Elasticsearch). Recherche : <code>org:"Entreprise SA" port:3389</code>.</li>
                <li>• <strong className="text-foreground">Censys</strong> : similaire à Shodan, meilleure couverture des certificats TLS.</li>
                <li>• <strong className="text-foreground">FOFA</strong> : moteur de recherche chinois avec données complémentaires à Shodan.</li>
                <li>• <strong className="text-foreground">GreyNoise</strong> : distingue les scanners massifs du trafic ciblé.</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">3. Fuites de données et credentials</h3>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">Have I Been Pwned API</strong> : recherche des adresses emails du domaine dans des fuites connues.</li>
                <li>• <strong className="text-foreground">DeHashed</strong> : base de données de 15+ milliards d'identifiants compromis.</li>
                <li>• <strong className="text-foreground">Intelligence X</strong> : archive de données passées (Pastebin, darknet, fuites).</li>
                <li>• <strong className="text-foreground">Trufflehog / GitLeaks</strong> : recherche de secrets dans les dépôts GitHub publics de l'entreprise.</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">4. Renseignements sur les personnes (HUMINT/SOCMINT)</h3>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">LinkedIn</strong> : organigramme, technologies utilisées (mentions dans les offres d'emploi), compétences des équipes IT.</li>
                <li>• <strong className="text-foreground">Hunter.io</strong> : format des adresses email de l'entreprise, emails de dirigeants.</li>
                <li>• <strong className="text-foreground">Maltego</strong> : corrélation graphique de toutes les données OSINT (personnes, domaines, IPs, réseaux sociaux).</li>
              </ul>

              <h3 className="font-heading text-xl font-bold mt-6 mb-3">5. Code source et fichiers publics</h3>
              <ul className="space-y-1 text-muted-foreground mb-4">
                <li>• <strong className="text-foreground">GitHub Dorks</strong> : recherche de secrets dans les repos publics (<code>org:entreprise password</code>).</li>
                <li>• <strong className="text-foreground">Google Dorks</strong> : recherche de fichiers sensibles exposés (<code>site:entreprise.fr filetype:xls</code>).</li>
                <li>• <strong className="text-foreground">Wayback Machine</strong> : pages web archivées pouvant révéler d'anciens portails, API ou technologies.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Frameworks OSINT intégrés</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Recon-ng</strong> : framework modulaire Python, similaire à Metasploit pour l'OSINT, 100+ modules.</li>
                <li><strong className="text-foreground">SpiderFoot</strong> : automatise 200+ sources OSINT, interface web, génère des rapports.</li>
                <li><strong className="text-foreground">OSINT Framework</strong> (osintframework.com) : répertoire interactif de toutes les sources OSINT par catégorie.</li>
                <li><strong className="text-foreground">Kali Linux / Parrot OS</strong> : distributions avec tous les outils préinstallés.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Ce que révèle une bonne reconnaissance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                À l'issue d'une phase OSINT bien menée, le pentesteur dispose généralement de :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• La cartographie complète des domaines, sous-domaines et plages IP exposés.</li>
                <li>• La liste des technologies utilisées (serveurs web, CMS, langages, CDN).</li>
                <li>• Des identifiants potentiellement compromis d'employés.</li>
                <li>• Des secrets accidentellement exposés dans du code source public.</li>
                <li>• Des cibles à tester en priorité (VPN, portails d'administration, API).</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ces informations guident les phases suivantes du pentest (scanning, énumération, exploitation) et permettent de concentrer les efforts sur les vecteurs d'attaque les plus réalistes.
              </p>
            </section>
          </div>
        </article>
      </main>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default ReconnaissanceOsint;
