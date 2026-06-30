import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Users, FileSearch, ShieldCheck, Calendar } from "lucide-react";

const BugBountyProgramme = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Bug bounty programme : comment créer et gérer un programme de récompense pour PME",
      "url": "https://securecyber.fr/actualites/bug-bounty-programme-entreprise-guide",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/bug-bounty-programme-entreprise-guide" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-14",
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
        { "@type": "ListItem", "position": 3, "name": "Bug bounty programme : comment créer et gérer un programme de récompense pour PME", "item": "https://securecyber.fr/actualites/bug-bounty-programme-entreprise-guide" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Bug bounty programme : guide pour PME et startups"
        description="Créer un programme bug bounty réussi : définir le scope, fixer les primes, choisir entre HackerOne, YesWeHack ou Intigriti, gérer les rapports. Complémentaire au pentest."
        canonical="/actualites/bug-bounty-programme-entreprise-guide"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Bug Bounty</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-14">14 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Bug bounty</span> programme : guide pour PME et startups
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le bug bounty consiste à inviter des chercheurs en sécurité (hackers éthiques) à tester vos systèmes en échange de récompenses financières proportionnelles à la criticité des failles découvertes. Longtemps réservé aux géants du web (Google, Facebook, Microsoft), ce modèle est désormais accessible aux PME et startups grâce à des plateformes spécialisées. Voici comment créer et gérer votre premier programme.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <FileSearch className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Bug bounty vs pentest : des approches complémentaires</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le bug bounty ne remplace pas le pentest, il le complète. Le pentest est ponctuel, réalisé par une équipe dédiée sur un périmètre défini et dans une durée limitée. Le bug bounty est continu, réalisé par une communauté de chercheurs de profils variés, sans limite de temps. Le pentest est idéal pour une évaluation exhaustive avant une mise en production ou une certification. Le bug bounty est optimal pour une surveillance continue en production, avec un paiement à la performance (on ne paye que pour les failles réellement trouvées).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La recommandation : commencez par un pentest pour atteindre un niveau de maturité suffisant, puis lancez un programme bug bounty pour maintenir cette sécurité dans la durée. Lancer un bug bounty sur un système non audité au préalable expose à recevoir un volume de rapports ingérable.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Choisir sa plateforme bug bounty</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">HackerOne</strong> est le leader mondial avec 1,5 million de chercheurs. Idéal pour les grandes entreprises cherchant une exposition maximale. Frais de plateforme élevés (25-35 % des récompenses versées) mais réseau de hackers validés très large.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">YesWeHack</strong> est l'acteur européen de référence, basé en France. RGPD compliant par design, communauté de 50 000+ chercheurs européens, interface en français, support francophone. Idéal pour les PME et ETI françaises. Modèle flexible : programme public ou privé sur invitation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Intigriti</strong> est la plateforme belge montante, forte communauté européenne, bonne réputation sur la qualité des rapports soumis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pour une première expérience, un programme <strong>privé sur invitation</strong> sur YesWeHack ou Intigriti est recommandé : vous invitez un nombre limité de chercheurs qualifiés, réduisant le volume de rapports et vous donnant le temps de structurer votre processus de triage.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Définir la portée et les règles du programme</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La définition du périmètre (scope) est critique. Soyez précis sur ce qui est <strong>in scope</strong> (domaines et applications testables) et ce qui est <strong>out of scope</strong> (systèmes de production critiques, services tiers, infrastructure cloud partagée). Une portée trop large sur un premier programme est source de chaos. Commencez par votre application web principale ou votre API publique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les règles à définir : types de tests autorisés (exclure les attaques DoS), exigences sur les rapports (preuve de concept obligatoire, description de l'impact), délais de réponse engagés de votre côté (accusé de réception sous 24h, triage sous 72h, correction et paiement dans un délai défini). Les chercheurs font confiance aux programmes qui respectent leurs engagements.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Structurer les récompenses (primes)</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les primes sont généralement structurées par niveau de criticité CVSS : Critique (9.0-10.0) : 2 000 à 10 000 € ; Élevé (7.0-8.9) : 500 à 2 000 € ; Moyen (4.0-6.9) : 100 à 500 € ; Faible (0.1-3.9) : 0 à 100 € (ou hall of fame uniquement). Adaptez ces fourchettes à votre secteur et à la valeur de vos actifs. Un programme fintech ou santé justifie des primes plus élevées qu'un site e-commerce standard.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Budget indicatif pour une PME : prévoyez entre 10 000 et 30 000 € par an pour un programme actif, incluant les récompenses et les frais de plateforme. Ce budget est très inférieur au coût d'un incident lié à une faille non détectée.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Gérer les rapports et la relation avec les chercheurs</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La gestion des rapports requiert une équipe dédiée au triage. Pour chaque rapport reçu : accuser réception immédiatement, évaluer la validité (reproductible ? hors scope ?), évaluer la criticité avec un score CVSS, planifier la correction, notifier le chercheur à chaque étape, et payer rapidement une fois la correction déployée. La transparence et la réactivité fidélisent les meilleurs chercheurs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certains rapports seront des duplicatas ou des faux positifs — traitez-les avec respect. La communauté bug bounty est interconnectée et la réputation de votre programme influence sa visibilité et la qualité des chercheurs qui y participent. Un programme bien géré peut devenir un véritable avantage concurrentiel en matière de sécurité et d'image.
              </p>
            </section>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <time dateTime="2026-06-14">14 Juin 2026</time>
              <span>·</span>
              <span>13 min de lecture</span>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default BugBountyProgramme;
