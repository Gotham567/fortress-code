import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, Building, Shield, FileCheck, AlertCircle, HelpCircle } from "lucide-react";

const AuditObligatoire = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Audit cybersécurité obligatoire : qui est concerné ?",
      "url": "https://securecyber.fr/actualites/audit-cybersecurite-obligatoire",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/audit-cybersecurite-obligatoire" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-02-05",
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
        { "@type": "ListItem", "position": 3, "name": "Audit cybersécurité obligatoire : qui est concerné ?", "item": "https://securecyber.fr/actualites/audit-cybersecurite-obligatoire" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit cybersécurité obligatoire : qui est concerné ?"
        description="Audit cybersécurité obligatoire en France : découvrez les réglementations (NIS2, DORA, RGPD, LPM), les secteurs concernés, les sanctions et comment se mettre en conformité."
        canonical="/actualites/audit-cybersecurite-obligatoire"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-02-05">5 Fév 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Audit cybersécurité</span> obligatoire : qui est concerné ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le cadre réglementaire européen et français en matière de cybersécurité s'est considérablement renforcé ces dernières années. Plusieurs textes imposent désormais des obligations d'audit et de tests de sécurité à un nombre croissant d'entreprises. Êtes-vous concerné ? Quelles sont vos obligations exactes ? Ce guide fait le point complet sur les réglementations en vigueur et à venir.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">La directive NIS2 : le grand élargissement</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La directive NIS2 (Network and Information Security 2), transposée en droit français en 2024, est le texte qui a le plus élargi le périmètre des entreprises soumises à des obligations de cybersécurité. Elle remplace la directive NIS1 de 2016 et concerne désormais un nombre beaucoup plus important d'organisations.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Qui est concerné ?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NIS2 s'applique à deux catégories d'entités dans 18 secteurs d'activité :
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="card-glass rounded-xl p-5">
                    <h4 className="font-heading text-base font-semibold mb-2">Entités essentielles</h4>
                    <p className="text-muted-foreground text-sm mb-2">Secteurs critiques :</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-2">
                      <li>Énergie (électricité, gaz, pétrole, hydrogène)</li>
                      <li>Transport (aérien, ferroviaire, maritime, routier)</li>
                      <li>Santé (hôpitaux, laboratoires, fabricants de dispositifs médicaux)</li>
                      <li>Eau potable et eaux usées</li>
                      <li>Infrastructure numérique (DNS, cloud, data centers)</li>
                      <li>Administration publique</li>
                      <li>Espace</li>
                      <li>Banques et infrastructures de marchés financiers</li>
                    </ul>
                  </div>
                  <div className="card-glass rounded-xl p-5">
                    <h4 className="font-heading text-base font-semibold mb-2">Entités importantes</h4>
                    <p className="text-muted-foreground text-sm mb-2">Secteurs couverts :</p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-2">
                      <li>Services postaux et d'expédition</li>
                      <li>Gestion des déchets</li>
                      <li>Fabrication de produits chimiques</li>
                      <li>Industrie alimentaire</li>
                      <li>Fabrication (dispositifs médicaux, électronique, machines, véhicules)</li>
                      <li>Services numériques (marketplaces, moteurs de recherche, réseaux sociaux)</li>
                      <li>Recherche</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les critères de taille sont : plus de 50 salariés OU plus de 10 millions d'euros de chiffre d'affaires annuel. Cependant, certaines entités sont concernées quelle que soit leur taille (fournisseurs de services DNS, registres de noms de domaine, prestataires de services de confiance).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En France, on estime que NIS2 concerne environ 15 000 à 20 000 entités, contre seulement 500 pour NIS1. Si votre PME opère dans l'un de ces secteurs et dépasse les seuils de taille, vous êtes très probablement concerné.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Quelles obligations d'audit ?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NIS2 impose aux entités concernées de mettre en place des "mesures de gestion des risques en matière de cybersécurité" proportionnées. Ces mesures incluent explicitement : les politiques d'analyse des risques et de sécurité des systèmes d'information, la gestion des incidents, la continuité d'activité, la sécurité de la chaîne d'approvisionnement, les politiques de test et d'audit.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si le texte ne prescrit pas une fréquence d'audit spécifique, il impose une obligation de résultat en matière de gestion des risques qui implique nécessairement des évaluations régulières. Les autorités de contrôle (ANSSI en France) pourront exiger des audits et les réaliser elles-mêmes. Les sanctions peuvent atteindre 10 millions d'euros ou 2% du CA mondial pour les entités essentielles, et 7 millions d'euros ou 1,4% du CA pour les entités importantes.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Le règlement DORA : le secteur financier</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le règlement DORA (Digital Operational Resilience Act), entré en application le 17 janvier 2025, impose des exigences spécifiques de résilience numérique au secteur financier européen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Entités concernées :</strong> banques, assurances, sociétés de gestion, établissements de paiement, plateformes de trading, prestataires de services crypto, mais aussi leurs prestataires informatiques critiques (cloud, éditeurs de logiciels, infogérants).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Obligations d'audit spécifiques :</strong> DORA impose explicitement la réalisation de tests de pénétration fondés sur la menace (TLPT - Threat-Led Penetration Testing) au moins tous les trois ans pour les entités les plus significatives. Ces tests doivent être réalisés par des testeurs qualifiés et indépendants, suivant le cadre TIBER-EU. De plus, DORA exige des tests de résilience réguliers incluant des scans de vulnérabilités, des tests d'intrusion et des tests de continuité d'activité.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si votre PME est un prestataire informatique du secteur financier (infogérance, développement logiciel, hébergement cloud), vous pouvez être directement impacté par DORA à travers les exigences que vos clients vous imposeront en matière de sécurité et d'auditabilité.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Le RGPD : l'obligation sous-estimée</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le RGPD ne mentionne pas explicitement le terme "audit cybersécurité", mais son article 32 impose la mise en place de "mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque". L'article 32 mentionne spécifiquement la nécessité d'une "procédure visant à tester, à analyser et à évaluer régulièrement l'efficacité des mesures techniques et organisationnelles pour assurer la sécurité du traitement".
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En pratique, cette obligation implique la réalisation régulière d'audits de sécurité et de tests d'intrusion, en particulier pour les systèmes qui traitent des données personnelles sensibles ou à grande échelle. La CNIL, dans ses contrôles, vérifie de plus en plus la réalité des mesures de sécurité techniques et organisationnelles, y compris l'existence d'audits récents.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Qui est concerné ?</strong> Toute entreprise qui traite des données personnelles, c'est-à-dire... quasiment toutes les entreprises. Les sanctions RGPD peuvent atteindre 20 millions d'euros ou 4% du chiffre d'affaires mondial, ce qui en fait la réglementation la plus lourde en termes de sanctions financières.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">La LPM et les OIV : les opérateurs vitaux</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La Loi de Programmation Militaire (LPM) française impose des obligations de sécurité renforcées aux Opérateurs d'Importance Vitale (OIV). Ces organisations, dont la liste est classifiée, opèrent dans des secteurs vitaux pour la nation (énergie, télécommunications, santé, transport, alimentation, finances...).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les OIV sont tenus de réaliser des audits de sécurité réguliers par des prestataires qualifiés PASSI par l'ANSSI. Ces audits couvrent spécifiquement les Systèmes d'Information d'Importance Vitale (SIIV) et doivent être réalisés à une fréquence déterminée par l'ANSSI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Si votre PME est sous-traitante d'un OIV et que vous avez accès à ses SIIV, vous pouvez être soumis à des exigences d'audit indirectes par votre donneur d'ordres. De nombreux OIV imposent désormais à leurs fournisseurs critiques des niveaux de sécurité alignés sur leurs propres obligations.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Réglementations sectorielles</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En plus des réglementations transversales, certains secteurs ont leurs propres exigences :
                </p>
                <div className="space-y-4">
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Santé (HDS)</h3>
                    <p className="text-muted-foreground leading-relaxed">Les hébergeurs de données de santé doivent être certifiés HDS (Hébergeur de Données de Santé), certification qui impose des audits réguliers. Les établissements de santé sont soumis à des obligations croissantes en matière de cybersécurité via le programme CaRE (Cybersécurité accélération et Résilience des Établissements).</p>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">PCI-DSS (paiement par carte)</h3>
                    <p className="text-muted-foreground leading-relaxed">Toute entreprise qui traite, stocke ou transmet des données de cartes bancaires doit se conformer au standard PCI-DSS, qui impose des tests d'intrusion au minimum annuels et des scans de vulnérabilités trimestriels réalisés par des prestataires certifiés (ASV/QSA).</p>
                  </div>
                  <div className="card-glass rounded-xl p-6">
                    <h3 className="font-heading text-lg font-semibold mb-2">Défense (CMMC)</h3>
                    <p className="text-muted-foreground leading-relaxed">Les entreprises qui travaillent avec le secteur de la défense (y compris comme sous-traitants) sont soumises à des exigences de sécurité spécifiques qui incluent des évaluations régulières de la posture de sécurité.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Comment savoir si vous êtes concerné ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour déterminer si votre entreprise est soumise à des obligations d'audit cybersécurité, posez-vous ces questions :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Votre entreprise opère-t-elle dans l'un des 18 secteurs couverts par NIS2 ?</li>
                  <li>Avez-vous plus de 50 salariés ou plus de 10 millions d'euros de CA ?</li>
                  <li>Êtes-vous prestataire informatique d'entreprises du secteur financier ?</li>
                  <li>Traitez-vous des données de cartes bancaires ?</li>
                  <li>Hébergez-vous ou traitez-vous des données de santé ?</li>
                  <li>Êtes-vous sous-traitant d'un OIV ou d'un opérateur de services essentiels ?</li>
                  <li>Traitez-vous des données personnelles à grande échelle ?</li>
                  <li>Vos clients ou partenaires exigent-ils des audits de sécurité ?</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Si vous avez répondu oui à l'une de ces questions, vous avez très probablement des obligations d'audit cybersécurité. Même si vous n'êtes pas directement visé par un texte réglementaire, l'article 32 du RGPD impose à toute entreprise traitant des données personnelles de tester régulièrement ses mesures de sécurité.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Vérifiez vos obligations réglementaires</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts vous aident à identifier les réglementations applicables à votre entreprise et à mettre en place les audits nécessaires pour être en conformité.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Vérifier ma conformité
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

export default AuditObligatoire;
