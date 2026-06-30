import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, FileSearch, Shield, AlertTriangle, Clock, Lock } from "lucide-react";

const IncidentResponseForensique = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Forensique après cyberattaque : collecte de preuves et chaîne de custody",
      "url": "https://securecyber.fr/actualites/forensique-numerique-apres-cyberattaque-preuves",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/forensique-numerique-apres-cyberattaque-preuves" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-29",
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
        { "@type": "ListItem", "position": 3, "name": "Forensique après cyberattaque : collecte de preuves et chaîne de custody", "item": "https://securecyber.fr/actualites/forensique-numerique-apres-cyberattaque-preuves" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Forensique après cyberattaque : collecte de preuves et chaîne de custody"
        description="Forensique numérique après cyberattaque : ordre de volatilité RFC 3227, collecte RAM et disques, chaîne de custody, outils (Volatility, Autopsy, DFIR-ORC) et coordination ANSSI/BEFTI."
        canonical="/actualites/forensique-numerique-apres-cyberattaque-preuves"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Forensique</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-29">29 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Forensique</span> après cyberattaque : collecte de preuves et chaîne de custody
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Après une cyberattaque, la réaction instinctive est de tout éteindre et de reinstaller. C'est souvent la pire décision si vous voulez comprendre ce qui s'est passé, poursuivre les responsables ou activer votre assurance cyber. La forensique numérique (DFIR — Digital Forensics and Incident Response) permet de collecter des preuves légalement recevables tout en maîtrisant l'incident. Voici la méthode.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi préserver les preuves en premier</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trois raisons majeures justifient de ne pas éteindre immédiatement les systèmes compromis :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Poursuites judiciaires :</strong> sans preuves numériques collectées selon les règles de l'art, il est impossible de porter plainte efficacement. Le procureur et le juge d'instruction exigeront des preuves recevables.</li>
                <li><strong className="text-foreground">Assurance cyber :</strong> les assureurs exigent une investigation forensique pour valider la demande d'indemnisation. Sans preuves de l'attaque et de son impact, la couverture peut être refusée.</li>
                <li><strong className="text-foreground">Compréhension de l'attaque :</strong> identifier le vecteur d'intrusion initial et l'étendue de la compromission est indispensable pour s'assurer que l'attaquant est bien éradiqué avant la reprise d'activité. Une restauration trop rapide sans analyse peut réintroduire la porte dérobée.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">L'ordre de volatilité (RFC 3227)</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les données numériques ont des durées de vie très différentes. La RFC 3227 définit l'ordre de collecte des preuves selon leur volatilité (de la plus volatile à la plus stable) :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">1. Registres processeurs et cache CPU :</strong> disparaissent à l'extinction — collecte uniquement possible via des outils spécialisés sur système actif</li>
                <li><strong className="text-foreground">2. Mémoire RAM :</strong> contient les processus actifs, connexions réseau ouvertes, clés de chiffrement, et artefacts d'attaque. Durée de vie : jusqu'à l'extinction.</li>
                <li><strong className="text-foreground">3. Connexions réseau actives :</strong> `netstat`, liste des connexions établies, ports ouverts, sockets</li>
                <li><strong className="text-foreground">4. Processus en cours d'exécution :</strong> liste des processus avec PID, parent, ligne de commande, utilisateur</li>
                <li><strong className="text-foreground">5. Disques et système de fichiers :</strong> fichiers créés/modifiés récemment, clés de registre, journaux d'événements Windows</li>
                <li><strong className="text-foreground">6. Logs distants :</strong> SIEM, serveurs de logs centralisés — les plus stables et les plus fiables</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le principe : collecter dans cet ordre, de la plus volatile à la plus stable, avant toute extinction de machine.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Collecte de la mémoire RAM</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La capture de la RAM (memory dump) est souvent la collecte forensique la plus précieuse. Elle peut révéler :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>Processus malveillants injectés dans des processus légitimes (process hollowing)</li>
                <li>Shellcodes et payloads chargés en mémoire uniquement (fileless malware)</li>
                <li>Clés de chiffrement utilisées par un ransomware</li>
                <li>Credentials en mémoire (hashes NTLM, tokens Kerberos)</li>
                <li>Communications réseau actives et historique des requêtes DNS</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Outils de capture RAM</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">WinPmem (Windows) :</strong> outil gratuit pour capturer la RAM sur Windows, produit un fichier .raw</li>
                <li><strong className="text-foreground">LiME (Linux) :</strong> module kernel permettant de capturer la RAM sur Linux vers un fichier ou via le réseau</li>
                <li><strong className="text-foreground">Magnet RAM Capture :</strong> outil commercial gratuit pour Windows, facile d'utilisation</li>
                <li><strong className="text-foreground">FTK Imager Lite :</strong> peut capturer la RAM en plus des disques, depuis une clé USB</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Outils d'analyse forensique</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Volatility Framework :</strong> outil open source de référence pour l'analyse de dumps mémoire. Plugins pour extraire les processus, connexions réseau, registre, artifacts malveillants. Supporte Windows, Linux et macOS.</li>
                <li><strong className="text-foreground">Autopsy / The Sleuth Kit :</strong> plateforme open source d'analyse de disques. Permet de récupérer des fichiers supprimés, d'analyser la timeline des accès, et de rechercher des artefacts spécifiques.</li>
                <li><strong className="text-foreground">FTK (AccessData) :</strong> suite commerciale complète de forensique numérique pour les investigations complexes avec des volumes de données importants.</li>
                <li><strong className="text-foreground">DFIR-ORC (ANSSI) :</strong> outil open source de l'ANSSI pour la collecte automatisée d'artefacts forensiques sur des parcs Windows à grande échelle. Idéal pour les incidents touchant plusieurs centaines de postes.</li>
                <li><strong className="text-foreground">Plaso / Log2Timeline :</strong> construction automatique d'une timeline forensique complète à partir de multiples sources (logs Windows, artefacts, logs réseau).</li>
                <li><strong className="text-foreground">KAPE (Kroll Artifact Parser) :</strong> collecte rapide d'artefacts forensiques prédéfinis (Browser history, Windows Event Logs, Prefetch, Shimcache) selon des cibles configurables.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Chaîne de custody : rendre les preuves légalement recevables</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La chaîne de custody (chain of custody) documente qui a collecté quoi, quand, comment, et qui a eu accès aux preuves. Sans elle, les preuves numériques peuvent être rejetées par un tribunal :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Hash de vérification :</strong> calculer le hash SHA-256 (ou SHA-512) de chaque image forensique au moment de sa collecte. Tout accès ultérieur doit vérifier que le hash n'a pas changé.</li>
                <li><strong className="text-foreground">Registre de custody :</strong> document papier ou numérique signé listant : date/heure de collecte, collecteur identifié, équipement collecté (n° de série), lieu de stockage, et tous les accès subséquents</li>
                <li><strong className="text-foreground">Stockage sécurisé :</strong> les images forensiques doivent être stockées dans un environnement non modifiable (write blocker lors de la collecte, WORM storage, accès contrôlé et tracé)</li>
                <li><strong className="text-foreground">Collecte par un expert qualifié :</strong> pour une utilisation judiciaire, faire appel à un expert forensique certifié (CHFI, GCFE) ou à une société DFIR reconnue</li>
                <li><strong className="text-foreground">Documentation horodatée :</strong> toutes les actions pendant l'investigation doivent être documentées avec timestamp (utiliser `script` sous Linux ou un outil de documentation forensique)</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Coordination avec les autorités</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">ANSSI :</strong> pour les entités NIS2, notifier l'ANSSI sous 24h et partager les IOC. L'ANSSI peut déployer ses équipes CERT-FR en soutien.</li>
                <li><strong className="text-foreground">CNIL :</strong> si des données personnelles ont été compromises, notification obligatoire sous 72h (RGPD).</li>
                <li><strong className="text-foreground">Plainte pénale :</strong> déposer plainte auprès du BEFTI (Brigade d'Enquêtes sur les Fraudes aux Technologies de l'Information) pour les cyberattaques économiques, ou auprès de la DGSI pour les attaques d'origine étatique.</li>
                <li><strong className="text-foreground">Cyber:24 (IC3 FR) :</strong> la plateforme gouvernementale cybermalveillance.gouv.fr permet le signalement et oriente vers des prestataires de réponse à incident.</li>
                <li><strong className="text-foreground">Assureur cyber :</strong> notifier immédiatement l'assureur cyber — la plupart des polices exigent une notification dans les 48-72h pour maintenir la couverture.</li>
              </ul>
            </section>

            <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="font-heading text-xl font-bold mb-3">Réponse à incident et forensique numérique</h3>
              <p className="text-muted-foreground mb-6">Notre CERT intervient en moins de 4h, 24/7. Confinement de la menace, investigation forensique complète et rapport légalement recevable pour votre assureur et les autorités.</p>
              <Link to="/contact" className="btn-primary">Contacter le CERT 24/7</Link>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default IncidentResponseForensique;
