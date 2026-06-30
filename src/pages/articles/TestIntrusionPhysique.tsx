import { Shield, CheckCircle, AlertTriangle, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";

const TestIntrusionPhysique = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "",
      "url": "https://securecyber.frhttps://cybersecure-pme.fr/actualites/test-intrusion-physique-social-engineering",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.frhttps://cybersecure-pme.fr/actualites/test-intrusion-physique-social-engineering" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-01-01",
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
        { "@type": "ListItem", "position": 3, "name": "", "item": "https://securecyber.frhttps://cybersecure-pme.fr/actualites/test-intrusion-physique-social-engineering" }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Test d'intrusion physique et social engineering : méthode complète 2026"
        description="Comment réaliser un test d'intrusion physique et social engineering : tailgating, badge cloning, pretexting, vishing — évaluer la sécurité humaine et physique de votre entreprise."
        canonical="https://cybersecure-pme.fr/actualites/test-intrusion-physique-social-engineering"
        ogType="article"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <article className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary mb-4">
                Red Team
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Test d'intrusion physique et social engineering : méthode et portée
              </h1>
              <p className="text-muted-foreground text-sm mb-6">
                28 juin 2026 · 11 min de lecture
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les tests d'intrusion classiques se concentrent sur les réseaux et applications. Mais la sécurité d'une organisation dépend aussi de ses défenses physiques et de la vigilance de ses collaborateurs. Le test d'intrusion physique (physical pentest) et le social engineering évaluent ces dimensions souvent négligées — avec des résultats surprenants.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pourquoi tester la sécurité physique et humaine ?
              </h2>
              <p className="text-muted-foreground mb-4">
                Un attaquant sophistiqué ne cherche pas toujours le chemin le plus compliqué. Si le réseau est bien protégé mais qu'un employé peut être convaincu par téléphone de divulguer ses identifiants, ou que n'importe qui peut entrer dans les locaux en suivant un employé, les investissements en cybersécurité technique perdent de leur valeur.
              </p>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {[
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Tailgating omniprésent", desc: "Dans 80% des tests physiques, un auditeur non autorisé réussit à entrer dans les locaux lors de la première tentative" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Vishing efficace", desc: "60% des employés contactés par téléphone par un faux support IT divulguent leur mot de passe" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Clés USB trouvées", desc: "Dans les tests USB drop, 45% des employés branchent une clé USB trouvée dans les locaux" },
                  { icon: <AlertTriangle className="h-5 w-5" />, title: "Documents non déchiquetés", desc: "Les poubelles d'entreprise contiennent souvent des documents confidentiels non détruits" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Techniques de test d'intrusion physique
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">Tailgating (filature)</h3>
              <p className="text-muted-foreground mb-4">
                Le tailgating consiste à suivre un employé autorisé pour franchir un accès contrôlé (tourniquet, porte magnétique, sas de sécurité) sans badger. L'auditeur joue un rôle plausible (livreur, prestataire, nouvel employé) et exploite la politesse naturelle des personnes qui tiennent la porte. C'est la technique la plus fiable pour contourner les contrôles d'accès physiques.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Badge cloning (clonage de badge)</h3>
              <p className="text-muted-foreground mb-4">
                Les badges RFID basse fréquence (125 kHz, protocoles HID Prox, EM4100) peuvent être clonés à distance avec un lecteur portable (Proxmark3) approché à moins de 10 cm. Les badges haute fréquence (13,56 MHz, Mifare Classic, DESFire) sont plus résistants mais Mifare Classic est vulnérable au cracking. L'auditeur peut capturer l'UID d'un badge dans un ascenseur ou une file d'attente, puis cloner ce badge.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Lockpicking et bypass physique</h3>
              <p className="text-muted-foreground mb-4">
                Les portes à serrures mécaniques conventionnelles peuvent être ouvertes par crochetage (lockpicking) en quelques secondes par un auditeur formé. Les portes électromagnétiques avec fail-open peuvent souvent être ouvertes en coupant l'alimentation. Les faux plafonds permettent parfois de contourner des cloisons en béton. Ces techniques sont documentées et utilisées par les auditeurs avec le cadre légal approprié.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">USB Drop (dépôt de clé USB piégée)</h3>
              <p className="text-muted-foreground mb-4">
                Des clés USB sont déposées dans les zones accessibles (parking, hall d'entrée, cafétéria). Une clé USB piégée (BadUSB) peut exécuter automatiquement du code lors de la connexion — même sans que l'employé n'ouvre de fichier. Le test mesure le taux de connexion des clés trouvées.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Techniques de social engineering
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">Vishing (Voice Phishing)</h3>
              <p className="text-muted-foreground mb-4">
                Le vishing est un appel téléphonique frauduleux. L'auditeur se fait passer pour le support IT, un prestataire, un dirigeant ou un auditeur externe pour obtenir des informations sensibles ou des accès. Les prétextes courants : "Je prépare votre migration M365 et j'ai besoin de vos identifiants", "Votre compte a été compromis, je dois vérifier votre identité", "Je suis votre nouveau DSI, donnez-moi accès au serveur."
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Pretexting (mise en scène)</h3>
              <p className="text-muted-foreground mb-4">
                Le pretexting est la création d'un scénario plausible pour obtenir des informations. L'auditeur peut se présenter physiquement comme un technicien de maintenance, un auditeur externe mandaté par la direction, ou un inspecteur. Il exploite l'autorité perçue et l'urgence pour contourner les procédures.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Phishing ciblé (Spear Phishing)</h3>
              <p className="text-muted-foreground mb-4">
                Contrairement au phishing de masse, le spear phishing est personnalisé. L'auditeur utilise les informations publiques (LinkedIn, site web, réseaux sociaux) pour créer des emails parfaitement crédibles ciblant des individus spécifiques. Les cibles privilégiées : PDG, DAF, responsables RH, responsables IT.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">OSINT (Open Source Intelligence)</h3>
              <p className="text-muted-foreground mb-4">
                Avant tout test de social engineering, l'auditeur réalise une phase OSINT intensive : LinkedIn (organigramme, noms et fonctions), site web (numéros directs, adresses emails), moteur de recherche (documents exposés, emails d'entreprise), réseaux sociaux (habitudes, déplacements). Ces informations alimentent des scénarios d'attaque très ciblés.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cadre légal et modalités
              </h2>
              <p className="text-muted-foreground mb-4">
                Le test d'intrusion physique et le social engineering nécessitent une autorisation écrite explicite et précise de la direction :
              </p>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 mb-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Éléments obligatoires dans l'autorisation</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Périmètre géographique précis (sites autorisés)</li>
                      <li>• Techniques autorisées et exclues (ex : lockpicking oui, dégradation non)</li>
                      <li>• Équipes informées vs. non informées (test en aveugle ou non)</li>
                      <li>• Numéro d'urgence de contact en cas d'interpellation par la sécurité</li>
                      <li>• Procédure d'arrêt immédiat si un incident réel survient</li>
                      <li>• Clause de confidentialité renforcée sur les résultats</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                L'auditeur doit toujours avoir sur lui l'autorisation signée (lettre de mission) et le numéro d'un contact client pouvant confirmer la mission en cas d'interpellation. En cas d'incident grave (blessure, arrestation), la mission s'arrête immédiatement.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Livrables et bénéfices attendus
              </h2>
              <p className="text-muted-foreground mb-4">
                Un test d'intrusion physique et social engineering réalisé par CyberSecure produit :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Rapport détaillé des scénarios testés, résultats obtenus et preuves (photos, captures)</li>
                <li>Cartographie des vulnérabilités physiques (accès, badges, serveurs exposés)</li>
                <li>Analyse des vecteurs humains exploités avec recommandations de formation</li>
                <li>Plan de remédiation : contrôles d'accès, formation mandrip, procédures de vérification</li>
                <li>Formation de sensibilisation pour les équipes concernées</li>
                <li>Retest de vérification 3 mois après la mise en œuvre des corrections</li>
              </ul>
              <p className="text-muted-foreground">
                Le test physique/social engineering est souvent l'exercice de sécurité le plus percutant auprès des dirigeants — voir concrètement qu'un auditeur a pu entrer dans les locaux ou obtenir un mot de passe par téléphone crée une prise de conscience immédiate qui accélère les investissements en sécurité.
              </p>
            </section>

          </motion.div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </>
  );
};

export default TestIntrusionPhysique;
