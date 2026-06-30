import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Euro, ShieldOff, Scale, CheckCircle } from "lucide-react";

const SanctionsNIS2 = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Sanctions NIS2 : que risque une entreprise non conforme en France ?",
      "url": "https://securecyber.fr/actualites/sanctions-nis2-non-conformite-entreprise",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/sanctions-nis2-non-conformite-entreprise" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-06-28",
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
        { "@type": "ListItem", "position": 3, "name": "Sanctions NIS2 : que risque une entreprise non conforme en France ?", "item": "https://securecyber.fr/actualites/sanctions-nis2-non-conformite-entreprise" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sanctions NIS2 : que risque une entreprise non conforme en France ?"
        description="Montants des sanctions NIS2, critères d'application, entreprises concernées et plan d'action pour éviter les amendes. Guide complet sur les risques de non-conformité NIS2 pour les PME et ETI françaises."
        canonical="/actualites/sanctions-nis2-non-conformite-entreprise"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Réglementation</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Sanctions <span className="text-gradient">NIS2</span> : que risque une entreprise non conforme en France ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                La directive NIS2 introduit un régime de sanctions parmi les plus sévères jamais appliqués en matière de cybersécurité en Europe. Pour les entreprises françaises concernées, la non-conformité peut coûter jusqu'à 10 millions d'euros ou 2 % du chiffre d'affaires mondial. Mais au-delà des amendes, c'est la responsabilité personnelle des dirigeants qui est engagée. Tour d'horizon complet des risques.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Euro className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les montants des sanctions NIS2</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  La directive NIS2 (article 34) distingue deux catégories d'entités avec des plafonds de sanctions différents :
                </p>

                <div className="card-glass rounded-xl overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-heading font-semibold">Catégorie</th>
                        <th className="text-left p-4 font-heading font-semibold">Amende maximale</th>
                        <th className="text-left p-4 font-heading font-semibold">Plafond CA</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Entités essentielles (EE)</td>
                        <td className="p-4 text-red-400 font-bold">10 000 000 €</td>
                        <td className="p-4">2 % du CA mondial</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Entités importantes (EI)</td>
                        <td className="p-4 text-orange-400 font-bold">7 000 000 €</td>
                        <td className="p-4">1,4 % du CA mondial</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  La sanction s'applique au montant le plus élevé entre le plafond fixe et le pourcentage du chiffre d'affaires. Une ETI avec 50 millions d'euros de CA classée entité essentielle peut donc se voir infliger jusqu'à 1 million d'euros d'amende (2 % × 50 M€), ou jusqu'à 10 millions si le CA mondial est supérieur à 500 millions d'euros.
                </p>

                <div className="card-glass rounded-xl p-6 border border-red-500/30 bg-red-500/5 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-red-400 mb-2">Important : sanctions cumulables avec le RGPD</p>
                      <p className="text-muted-foreground text-sm">Un incident de sécurité impliquant des données personnelles peut déclencher simultanément une amende NIS2 et une amende RGPD (jusqu'à 4 % du CA ou 20 M€). Les deux régimes sont distincts et cumulables.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Quelles entreprises sont concernées ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NIS2 élargit considérablement le périmètre de NIS1 en passant de quelques centaines d'entités à plusieurs milliers. En France, l'ANSSI estime à <strong>plus de 15 000 entités</strong> concernées. Vous êtes potentiellement concerné si :
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { cat: "Entités essentielles (EE)", desc: "Énergie, transport, banque, infrastructures des marchés financiers, santé, eau potable, eaux usées, infrastructure numérique, gestion des services TIC, administration publique, espace. Plus de 250 salariés OU plus de 50 M€ de CA et 43 M€ de bilan." },
                    { cat: "Entités importantes (EI)", desc: "Services postaux, gestion des déchets, produits chimiques, denrées alimentaires, fabrication (dispositifs médicaux, informatique, électronique, machines, automobiles), fournisseurs numériques, recherche. Entre 50 et 250 salariés OU entre 10 et 50 M€ de CA." },
                    { cat: "Sous-traitants de grands comptes", desc: "Même en dessous des seuils, les PME sous-traitantes d'une entité NIS2 peuvent être contractuellement soumises aux mêmes exigences de sécurité via les clauses de leur donneur d'ordre." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold text-primary mb-2">{item.cat}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldOff className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Quels manquements sont sanctionnés ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NIS2 (article 21) liste les mesures de gestion du risque dont l'absence ou l'insuffisance constitue un manquement sanctionnable :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Absence de politique de sécurité des systèmes d'information (PSSI)",
                    "Pas de gestion des incidents de sécurité documentée",
                    "Absence de plan de continuité et de reprise d'activité",
                    "Sécurité insuffisante de la chaîne d'approvisionnement",
                    "Absence de tests réguliers (audits, pentests)",
                    "Pas de formation cybersécurité pour les collaborateurs et dirigeants",
                    "Chiffrement insuffisant des données sensibles",
                    "Absence de MFA sur les accès critiques",
                    "Non-notification d'un incident sous 24h à l'ANSSI",
                    "Défaut de déclaration initiale d'enregistrement NIS2",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 card-glass rounded-lg p-3">
                      <ShieldOff className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">La responsabilité personnelle des dirigeants</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'une des grandes nouveautés de NIS2 est la <strong>responsabilité personnelle des dirigeants</strong>. L'article 20 impose aux organes de direction d'approuver les mesures de gestion des risques cyber et de superviser leur mise en œuvre. En cas de manquement grave, les États membres peuvent imposer :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Une <strong>interdiction temporaire d'exercer des fonctions de direction</strong> pour les dirigeants responsables</li>
                  <li>Une <strong>déclaration publique</strong> identifiant la personne responsable et le manquement commis</li>
                  <li>Des <strong>sanctions pécuniaires personnelles</strong> en complément des amendes frappant l'entité</li>
                  <li>Une <strong>obligation de formation</strong> en cybersécurité pour les dirigeants</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Cette disposition change radicalement la donne : la cybersécurité n'est plus seulement un sujet technique — c'est une responsabilité juridique personnelle du PDG, DG ou gérant. La délégation à un RSSI ne suffit pas ; les dirigeants doivent démontrer qu'ils ont personnellement supervisé et validé les mesures de sécurité.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Plan d'action pour éviter les sanctions</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { step: "1", title: "Déterminer si vous êtes concerné", desc: "Vérifiez votre secteur, votre taille et votre CA par rapport aux seuils NIS2. En cas de doute, consultez l'ANSSI ou un prestataire qualifié. Ne pas s'enregistrer quand on y est obligé est en soi un manquement sanctionnable." },
                    { step: "2", title: "S'enregistrer auprès de l'ANSSI", desc: "NIS2 impose une auto-déclaration à l'autorité nationale compétente. En France, le portail de notification ANSSI permet cet enregistrement. Délai : dans les mois suivant la transposition, attendue fin 2024 / début 2025." },
                    { step: "3", title: "Réaliser un audit de conformité NIS2", desc: "Faites évaluer l'écart entre votre posture actuelle et les exigences NIS2 par un prestataire qualifié PASSI. Cet audit produira une feuille de route priorisée. Prévoir 5 000 à 15 000 € selon la taille de l'entité." },
                    { step: "4", title: "Mettre en place la gouvernance", desc: "Validez formellement une PSSI en conseil d'administration ou COMEX. Nommez un RSSI (interne ou externalisé). Documentez la supervision par les dirigeants via des comptes rendus de réunion mentionnant les décisions cyber." },
                    { step: "5", title: "Mettre en œuvre les mesures techniques", desc: "Priorisez MFA, EDR, sauvegardes immuables, chiffrement des données sensibles, segmentation réseau et gestion des correctifs. Ces mesures constituent le socle minimal attendu par les autorités de contrôle." },
                    { step: "6", title: "Préparer la notification d'incidents", desc: "NIS2 impose une alerte préliminaire sous 24h, une notification sous 72h et un rapport final sous 1 mois. Rédigez des procédures internes de gestion et notification d'incidents avant qu'un incident ne survienne." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6 flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                      <div>
                        <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Évaluez votre conformité NIS2 gratuitement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts réalisent un diagnostic NIS2 initial gratuit pour identifier si votre entreprise est concernée et évaluer vos principaux écarts de conformité.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Demander un diagnostic NIS2 gratuit
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

export default SanctionsNIS2;
