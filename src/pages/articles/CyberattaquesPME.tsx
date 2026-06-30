import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Mail, Lock, Globe, Server, Wifi, Bug, Users, Database, CreditCard } from "lucide-react";

const CyberattaquesPME = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Les 10 cyberattaques les plus fréquentes sur les PME",
      "url": "https://securecyber.fr/actualites/10-cyberattaques-frequentes-pme",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/10-cyberattaques-frequentes-pme" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-02-15",
      "dateModified": "2026-06-30",
      "image": {
        "@type": "ImageObject",
        "url": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5393a1ce-90f4-4e06-84ab-2dee3e5dd962/id-preview-bc576449--9bd8c65b-b20f-4747-8f8a-63d66528046c.lovable.app-1773318218871.png",
        "width": 1200,
        "height": 630
      },
      "inLanguage": "fr-FR",
      "isPartOf": { "@type": "Blog", "name": "Blog CyberSecure", "url": "https://securecyber.fr/actualites" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://securecyber.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Actualités", "item": "https://securecyber.fr/actualites" },
        { "@type": "ListItem", "position": 3, "name": "Les 10 cyberattaques les plus fréquentes sur les PME", "item": "https://securecyber.fr/actualites/10-cyberattaques-frequentes-pme" }
      ]
    }
  ];

  const attacks = [
    { icon: Mail, title: "1. Le phishing (hameçonnage)", desc: "Le phishing reste la menace numéro un pour les PME. Il s'agit d'emails, SMS ou messages frauduleux qui imitent une communication légitime (banque, fournisseur, administration, collègue) pour inciter la victime à cliquer sur un lien malveillant, ouvrir une pièce jointe infectée ou divulguer des informations sensibles (identifiants, coordonnées bancaires).", impact: "Selon l'ANSSI, 90% des cyberattaques commencent par un email de phishing. Pour les PME, les campagnes de phishing ciblé (spear phishing) sont particulièrement dangereuses car elles utilisent des informations spécifiques à l'entreprise (nom du dirigeant, projets en cours, noms de fournisseurs) pour gagner en crédibilité. Un seul clic peut suffire à compromettre l'ensemble du réseau.", protection: "Sensibilisation régulière des collaborateurs avec exercices de simulation, déploiement d'une solution anti-phishing, activation de la MFA sur tous les comptes, mise en place de SPF/DKIM/DMARC sur les domaines de messagerie." },
    { icon: Lock, title: "2. Le ransomware (rançongiciel)", desc: "Le ransomware est un logiciel malveillant qui chiffre les données de l'entreprise et exige une rançon pour les déchiffrer. Les variantes les plus récentes pratiquent la 'double extorsion' : en plus de chiffrer les données, les attaquants les exfiltrent et menacent de les publier si la rançon n'est pas payée.", impact: "Le coût moyen d'une attaque par ransomware pour une PME est estimé entre 25 000€ et 200 000€ (incluant l'interruption d'activité, la restauration des systèmes, les frais juridiques et la perte de clients). 60% des PME victimes d'un ransomware déposent le bilan dans les 18 mois. Les secteurs les plus touchés sont la santé, l'éducation et les collectivités.", protection: "Sauvegardes 3-2-1 testées régulièrement, segmentation réseau pour limiter la propagation, solution EDR sur tous les postes, restriction des droits administrateur, plan de réponse à incident spécifique aux ransomwares. Ne jamais payer la rançon : cela ne garantit pas la récupération des données et finance les criminels." },
    { icon: Users, title: "3. L'arnaque au président (BEC)", desc: "Le Business Email Compromise (BEC) ou 'arnaque au président' est une fraude par ingénierie sociale dans laquelle l'attaquant se fait passer pour le dirigeant de l'entreprise ou un partenaire de confiance pour demander un virement urgent et confidentiel. Les versions modernes utilisent parfois des deepfakes audio pour imiter la voix du dirigeant.", impact: "Les pertes moyennes d'une arnaque au président sont de 130 000€ selon le FBI. En France, certaines PME ont perdu plusieurs millions d'euros. L'attaque est d'autant plus efficace qu'elle cible les personnes habilitées à réaliser des virements et crée un sentiment d'urgence et de confidentialité qui empêche la vérification.", protection: "Procédure de double validation pour tout virement inhabituel, sensibilisation spécifique des services financiers, vérification systématique par un canal différent (appel téléphonique au numéro habituel), mise en place de plafonds de virement sans validation hiérarchique." },
    { icon: Globe, title: "4. L'exploitation de vulnérabilités non corrigées", desc: "Les cybercriminels exploitent les vulnérabilités connues dans les logiciels et équipements pour s'introduire dans les réseaux d'entreprise. Les 'zero-day' (vulnérabilités inconnues) font la une des journaux, mais la majorité des attaques exploitent des failles pour lesquelles un correctif existe déjà mais n'a pas été appliqué.", impact: "Selon une étude de Ponemon Institute, 60% des compromissions exploitent des vulnérabilités connues pour lesquelles un patch était disponible. Les équipements les plus ciblés sont les VPN, les pare-feux, les serveurs Exchange et les applications web. Un délai de 48 heures entre la publication d'un patch critique et son exploitation par les attaquants est désormais courant.", protection: "Politique de patch management rigoureuse, mises à jour automatiques quand possible, scan de vulnérabilités régulier, inventaire à jour des actifs et versions logicielles, veille en vulnérabilités sur les technologies critiques." },
    { icon: Wifi, title: "5. L'attaque via le Wi-Fi", desc: "Les réseaux Wi-Fi mal configurés constituent un vecteur d'intrusion souvent sous-estimé. Un attaquant à proximité des locaux peut tenter de casser la clé Wi-Fi, créer un point d'accès jumeau (evil twin), ou exploiter un réseau Wi-Fi invité non isolé pour accéder au réseau interne de l'entreprise.", impact: "Une fois connecté au réseau Wi-Fi interne, l'attaquant peut intercepter les communications non chiffrées, scanner le réseau à la recherche de vulnérabilités, et se déplacer latéralement vers les systèmes critiques. Dans les espaces de coworking ou les zones partagées, le risque est particulièrement élevé.", protection: "Utilisation du WPA3 ou WPA2-Enterprise avec certificats, isolation complète du réseau Wi-Fi invité, segmentation réseau, surveillance des points d'accès non autorisés (rogue AP detection), utilisation d'un VPN pour les connexions sensibles." },
    { icon: Database, title: "6. La fuite de données par menace interne", desc: "La menace interne peut être intentionnelle (collaborateur malveillant, ancien employé mécontent) ou accidentelle (erreur de manipulation, envoi d'email au mauvais destinataire, clé USB perdue). Les employés qui quittent l'entreprise constituent un risque particulier s'ils conservent des accès aux systèmes.", impact: "Les fuites de données internes représentent environ 30% des incidents de sécurité. Elles sont souvent plus difficiles à détecter que les attaques externes car elles sont commises par des utilisateurs légitimes avec des accès autorisés. Le coût peut inclure des sanctions RGPD, des pertes commerciales et une atteinte à la réputation.", protection: "Politique du moindre privilège (chaque collaborateur n'accède qu'aux données nécessaires à sa fonction), revue régulière des droits d'accès, procédure de départ incluant la révocation immédiate de tous les accès, solution DLP (Data Loss Prevention), journalisation des accès aux données sensibles." },
    { icon: Server, title: "7. L'attaque par déni de service (DDoS)", desc: "L'attaque DDoS (Distributed Denial of Service) consiste à submerger un serveur ou un service de requêtes pour le rendre indisponible. Les PME qui dépendent de leur site web ou de services en ligne pour leur activité sont particulièrement vulnérables. Les attaques DDoS sont devenues accessibles (DDoS-as-a-Service) et peu coûteuses pour les attaquants.", impact: "L'interruption d'un site e-commerce ou d'un service critique peut coûter entre 5 000 et 40 000€ par heure de downtime. Au-delà du coût financier direct, l'indisponibilité prolongée d'un service dégrade la confiance des clients et peut entraîner des pénalités contractuelles (SLA).", protection: "Solution anti-DDoS (CDN comme Cloudflare, solution dédiée), redondance des infrastructures, plan de communication de crise, capacité d'absorption du trafic, architecture scalable." },
    { icon: Bug, title: "8. Le malware via les supports amovibles", desc: "Les clés USB, disques durs externes et autres supports amovibles peuvent être vecteurs de malwares. L'attaque par 'USB dropping' (déposer des clés USB piégées dans le parking ou l'accueil de l'entreprise) reste étonnamment efficace. Certains malwares se propagent automatiquement via les supports USB connectés.", impact: "Un malware introduit via un support amovible peut se propager silencieusement dans le réseau interne, contournant ainsi les protections périmétriques (pare-feu, filtrage web). Il peut servir de point d'entrée pour un ransomware, un cheval de Troie d'accès distant (RAT), ou un outil d'exfiltration de données.", protection: "Politique de contrôle des supports amovibles (désactivation des ports USB ou contrôle des périphériques autorisés), solution EDR capable de scanner les supports à la connexion, sensibilisation des collaborateurs sur les risques des clés USB inconnues." },
    { icon: CreditCard, title: "9. La compromission de la supply chain", desc: "Les attaquants ciblent de plus en plus les fournisseurs et prestataires comme vecteur d'entrée vers leurs clients. Un prestataire informatique compromis peut servir de porte d'entrée vers les réseaux de dizaines de PME clientes. L'attaque SolarWinds en 2020 a démontré l'ampleur des dégâts possibles à grande échelle.", impact: "Les PME sont souvent des maillons dans une chaîne d'approvisionnement plus large. Si un de vos fournisseurs est compromis et dispose d'accès à votre réseau (VPN, accès distant), l'attaquant peut pivoter vers votre infrastructure. Inversement, si vous êtes compromis, vos clients peuvent être impactés, ce qui engage votre responsabilité.", protection: "Évaluation de la sécurité des fournisseurs critiques, limitation et surveillance des accès accordés aux prestataires (accès temporaires, MFA, supervision), clauses de sécurité dans les contrats, segmentation des accès tiers." },
    { icon: AlertTriangle, title: "10. Le cryptojacking", desc: "Le cryptojacking consiste à utiliser les ressources informatiques de l'entreprise (serveurs, postes de travail) pour miner des cryptomonnaies à l'insu des victimes. L'attaquant installe un logiciel de minage via un malware, un script web ou en exploitant une vulnérabilité sur un serveur exposé.", impact: "Bien que moins destructeur que le ransomware, le cryptojacking entraîne une surconsommation électrique significative, une dégradation des performances, une usure prématurée du matériel et surtout, il indique que l'attaquant a un accès à votre infrastructure qu'il pourrait utiliser à d'autres fins plus destructrices.", protection: "Solution EDR détectant les processus de minage, surveillance de la consommation CPU anormale, blocage des domaines de mining pools connus, mises à jour des systèmes, analyse régulière des processus en cours d'exécution sur les serveurs." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Les 10 cyberattaques les plus fréquentes sur les PME"
        description="Découvrez les 10 types de cyberattaques les plus courantes ciblant les PME : phishing, ransomware, arnaque au président, et comment s'en protéger efficacement."
        canonical="/actualites/10-cyberattaques-frequentes-pme"
        ogType="article"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Article</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-02-15">15 Fév 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Les 10 <span className="text-gradient">cyberattaques</span> les plus fréquentes sur les PME
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les PME sont devenues les cibles privilégiées des cybercriminels : 43% des cyberattaques en France les visent directement. Connaître les menaces les plus courantes est la première étape pour s'en protéger. Voici les 10 types d'attaques les plus fréquents avec leur impact réel et les mesures de protection adaptées aux PME.
              </p>

              <div className="space-y-10">
                {attacks.map((attack, i) => (
                  <section key={i} className="mb-2">
                    <div className="flex items-center gap-3 mb-4">
                      <attack.icon className="h-6 w-6 text-primary" />
                      <h2 className="font-heading text-xl md:text-2xl font-bold">{attack.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{attack.desc}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="card-glass rounded-xl p-5">
                        <h3 className="font-heading text-sm font-semibold mb-2 text-destructive">Impact</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{attack.impact}</p>
                      </div>
                      <div className="card-glass rounded-xl p-5">
                        <h3 className="font-heading text-sm font-semibold mb-2 text-primary">Protection</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{attack.protection}</p>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <section className="card-glass rounded-xl p-8 text-center mt-12">
                <h2 className="font-heading text-2xl font-bold mb-4">Évaluez votre niveau de protection</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts réalisent des audits cybersécurité et des tests d'intrusion pour identifier vos vulnérabilités face à ces menaces et vous fournir un plan d'action concret.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un audit
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

export default CyberattaquesPME;
