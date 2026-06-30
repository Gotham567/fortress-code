import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Award, FileCheck, AlertCircle, ThumbsUp, Search } from "lucide-react";

const ChoisirPrestataire = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Comment choisir son prestataire en cybersécurité ?",
      "url": "https://securecyber.fr/actualites/choisir-prestataire-cybersecurite",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/choisir-prestataire-cybersecurite" },
      "author": { "@type": "Organization", "name": "CyberSecure", "url": "https://securecyber.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "CyberSecure",
        "url": "https://securecyber.fr",
        "logo": { "@type": "ImageObject", "url": "https://securecyber.fr/favicon.png", "width": 512, "height": 512 }
      },
      "datePublished": "2026-03-05",
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
        { "@type": "ListItem", "position": 3, "name": "Comment choisir son prestataire en cybersécurité ?", "item": "https://securecyber.fr/actualites/choisir-prestataire-cybersecurite" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Comment choisir son prestataire cybersécurité"
        description="Guide complet pour choisir son prestataire en cybersécurité : qualifications PASSI, certifications, critères de sélection, questions à poser et pièges à éviter pour les PME."
        canonical="/actualites/choisir-prestataire-cybersecurite"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Page pilier</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-03-05">5 Mars 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Comment choisir son <span className="text-gradient">prestataire en cybersécurité</span> ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Choisir le bon prestataire en cybersécurité est une décision stratégique pour votre entreprise. Entre les qualifications officielles, les certifications individuelles, les spécialisations et les méthodologies, il n'est pas toujours facile de s'y retrouver. Ce guide vous donne toutes les clés pour faire le bon choix.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les qualifications et certifications à vérifier</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La première étape pour choisir un prestataire en cybersécurité est de vérifier ses qualifications. En France, l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information) a mis en place un système de qualification rigoureux qui permet d'identifier les prestataires de confiance. Ces qualifications sont le fruit d'un processus d'évaluation approfondi qui vérifie les compétences techniques, les méthodologies employées et la qualité des prestations délivrées.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">La qualification PASSI</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La qualification PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information) est la référence en matière d'audit de sécurité en France. Elle est délivrée par l'ANSSI après un processus d'évaluation rigoureux portant sur cinq portées : audit d'architecture, audit de configuration, audit de code source, tests d'intrusion et audit organisationnel. Un prestataire qualifié PASSI a démontré sa capacité à réaliser des audits de qualité selon des méthodologies éprouvées, avec des auditeurs compétents et dans un cadre déontologique strict.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pour les entreprises soumises à des réglementations strictes (OIV, OSE au sens de NIS2), le recours à un prestataire qualifié PASSI est obligatoire pour certains types d'audits. Mais même sans obligation réglementaire, cette qualification constitue un gage de qualité et de sérieux pour toute PME qui souhaite s'assurer de la fiabilité de son prestataire.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-8 mb-3">Les certifications individuelles des consultants</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Au-delà des qualifications de l'entreprise, les certifications individuelles des consultants sont un indicateur important de leur niveau de compétence. Parmi les certifications les plus reconnues dans le domaine du pentest et de l'audit cybersécurité :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4">
                  <li><strong>OSCP (Offensive Security Certified Professional)</strong> : la référence en pentest, nécessitant de réussir un examen pratique de 24 heures. Un consultant certifié OSCP a démontré sa capacité à identifier et exploiter des vulnérabilités dans des conditions réelles.</li>
                  <li><strong>CEH (Certified Ethical Hacker)</strong> : certification EC-Council couvrant les techniques de hacking éthique. Moins exigeante techniquement que l'OSCP mais offrant une bonne base théorique.</li>
                  <li><strong>CISSP (Certified Information Systems Security Professional)</strong> : certification de référence pour les profils managériaux et architectes sécurité, couvrant huit domaines de la cybersécurité.</li>
                  <li><strong>ISO 27001 Lead Auditor</strong> : certification pour les auditeurs spécialisés dans les systèmes de management de la sécurité de l'information (SMSI).</li>
                  <li><strong>GPEN, GWAPT, GCIH (SANS/GIAC)</strong> : certifications spécialisées de très haut niveau technique, particulièrement reconnues dans le domaine du pentest et de la réponse à incident.</li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les critères essentiels de sélection</h2>
                </div>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">1. L'expérience dans votre secteur d'activité</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chaque secteur a ses spécificités en matière de cybersécurité : réglementations propres (DORA pour la finance, HDS pour la santé), risques spécifiques, types d'infrastructures et de données à protéger. Un prestataire ayant déjà travaillé avec des entreprises de votre secteur comprendra plus rapidement vos enjeux et pourra vous apporter des retours d'expérience pertinents. Demandez des références clients dans votre domaine d'activité et n'hésitez pas à les contacter pour recueillir leur avis.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">2. La transparence méthodologique</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un bon prestataire doit être capable d'expliquer clairement sa méthodologie : quels référentiels utilise-t-il ? Comment structure-t-il ses rapports ? Quelle est sa démarche de qualification des vulnérabilités ? Un prestataire qui reste vague sur sa méthodologie ou qui s'appuie uniquement sur des outils automatisés sans analyse humaine approfondie n'offrira pas la qualité attendue. Les meilleurs prestataires s'appuient sur des référentiels reconnus (OWASP, PTES, OSSTMM, NIST) tout en adaptant leur approche au contexte spécifique de chaque client.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">3. La qualité des livrables</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le rapport d'audit est le livrable principal d'une mission de cybersécurité. Il doit être clair, structuré et actionnable. Demandez à voir un exemple de rapport anonymisé avant de vous engager. Un bon rapport contient : un résumé exécutif compréhensible par la direction, une description détaillée de chaque vulnérabilité avec preuves d'exploitation, une classification par criticité (CVSS), des recommandations de remédiation concrètes et priorisées, et un plan d'action synthétique.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">4. La capacité d'accompagnement post-audit</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L'audit n'est que la première étape. Le véritable enjeu est la remédiation des vulnérabilités identifiées. Vérifiez que le prestataire propose un accompagnement post-audit : assistance à la mise en œuvre des recommandations, audit de contrôle pour vérifier l'efficacité des correctifs, et disponibilité pour répondre aux questions techniques de vos équipes. Un prestataire qui livre un rapport et disparaît n'est pas un bon partenaire de sécurité.
                </p>

                <h3 className="font-heading text-xl font-semibold mt-6 mb-3">5. La réactivité et la disponibilité</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En cybersécurité, la réactivité peut faire la différence entre un incident contenu et une crise majeure. Évaluez la capacité du prestataire à intervenir rapidement en cas d'urgence : dispose-t-il d'une équipe de réponse à incident (CERT/CSIRT) ? Quels sont ses délais d'intervention ? Est-il disponible 24/7 ? Pour une PME, il est rassurant de savoir que son prestataire peut intervenir rapidement en cas de cyberattaque, même en dehors des heures ouvrées.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les pièges à éviter</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Les offres trop bon marché", desc: "Un pentest à 500€ n'est pas un vrai pentest. Il s'agit probablement d'un simple scan automatisé sans analyse humaine. Le tarif jour d'un pentester qualifié se situe entre 800€ et 1500€ HT. Si le prix est significativement inférieur, la qualité de la prestation sera nécessairement compromise." },
                    { title: "Les résultats uniquement automatisés", desc: "Méfiez-vous des prestataires qui se contentent de lancer un scanner de vulnérabilités et de vous livrer le rapport brut. Un véritable audit nécessite une analyse humaine approfondie pour valider les vulnérabilités, éliminer les faux positifs, tester les enchaînements de failles et évaluer l'impact réel sur votre activité." },
                    { title: "L'absence de cadrage précis", desc: "Un prestataire qui commence les tests sans avoir formalisé un périmètre précis, des règles d'engagement et un mandat d'autorisation manque de rigueur. Ce document est indispensable tant sur le plan méthodologique que juridique." },
                    { title: "Le manque de confidentialité", desc: "Les informations collectées lors d'un audit sont extrêmement sensibles. Assurez-vous que le prestataire dispose de procédures strictes de protection des données d'audit : chiffrement des communications et des livrables, clauses de confidentialité renforcées, destruction des données après la mission." }
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les questions à poser lors de l'évaluation</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lors de vos échanges avec les prestataires potentiels, voici une liste de questions pertinentes à poser pour évaluer leur sérieux et leur compétence :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                  <li>Êtes-vous qualifié PASSI par l'ANSSI ? Sur quelles portées ?</li>
                  <li>Quelles certifications individuelles détiennent vos consultants qui interviendront sur notre mission ?</li>
                  <li>Pouvez-vous nous fournir des références clients dans notre secteur d'activité ?</li>
                  <li>Quelle méthodologie et quels référentiels utilisez-vous pour vos audits ?</li>
                  <li>Pouvez-vous nous montrer un exemple de rapport anonymisé ?</li>
                  <li>Comment classifiez-vous les vulnérabilités ? Utilisez-vous le score CVSS ?</li>
                  <li>Proposez-vous un accompagnement post-audit pour la remédiation ?</li>
                  <li>Réalisez-vous des audits de contrôle après remédiation ?</li>
                  <li>Disposez-vous d'une assurance responsabilité civile professionnelle couvrant les activités d'audit ?</li>
                  <li>Comment gérez-vous la confidentialité des données collectées pendant l'audit ?</li>
                  <li>Quels sont vos délais d'intervention en cas d'urgence ?</li>
                  <li>Disposez-vous d'un CERT/CSIRT pour la réponse à incident ?</li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Construire un partenariat de long terme</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La cybersécurité n'est pas un projet ponctuel mais une démarche continue. Plutôt que de changer de prestataire à chaque mission, il est souvent plus efficace de construire un partenariat de long terme avec un prestataire de confiance qui connaît votre infrastructure, vos enjeux et votre culture d'entreprise.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un partenariat durable permet au prestataire de suivre l'évolution de votre posture de sécurité dans le temps, d'identifier les tendances et les récurrences, et de vous accompagner de manière proactive face aux nouvelles menaces. Il facilite également la communication et la réactivité en cas d'incident, car les équipes se connaissent déjà et peuvent intervenir plus efficacement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cependant, il est recommandé de faire appel occasionnellement à un second prestataire pour un regard neuf. Cette pratique de "second opinion" permet d'éviter les angles morts et de confronter les résultats de votre prestataire habituel à un œil extérieur.
                </p>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">CyberSecure, votre partenaire cybersécurité de confiance</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Qualifié PASSI, notre équipe de consultants certifiés accompagne les PME et ETI dans leur démarche de sécurisation. Discutons de vos besoins.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Nous contacter
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

export default ChoisirPrestataire;
