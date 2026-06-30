import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Euro, Gift, Building, MapPin, CheckCircle } from "lucide-react";

const FinancementAuditCyber = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Financement audit cybersécurité PME : toutes les aides disponibles en France",
      "url": "https://securecyber.fr/actualites/financement-audit-cybersecurite-bpi-france-anssi",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://securecyber.fr/actualites/financement-audit-cybersecurite-bpi-france-anssi" },
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
        { "@type": "ListItem", "position": 3, "name": "Financement audit cybersécurité PME : toutes les aides disponibles en France", "item": "https://securecyber.fr/actualites/financement-audit-cybersecurite-bpi-france-anssi" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Financement audit cybersécurité PME : aides BPI France, ANSSI et régions"
        description="Toutes les aides pour financer un audit cybersécurité : Mon Aide Cyber ANSSI (gratuit), prêt BPI France, subventions régionales, co-financement CCI. Guide complet des dispositifs disponibles en 2026 pour les PME françaises."
        canonical="/actualites/financement-audit-cybersecurite-bpi-france-anssi"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Coût & ROI</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Financement audit cybersécurité PME : <span className="text-gradient">toutes les aides disponibles</span> en 2026
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Un audit cybersécurité représente un investissement que de nombreuses PME hésitent à engager. Bonne nouvelle : plusieurs dispositifs publics permettent de réduire significativement son coût, voire d'obtenir un premier diagnostic gratuitement. Tour d'horizon complet des aides accessibles aux PME françaises en 2026.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les dispositifs gratuits (sans coût pour la PME)</h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      nom: "Mon Aide Cyber — ANSSI",
                      cout: "Gratuit",
                      public: "TPE, PME et associations",
                      desc: "Le dispositif phare de l'ANSSI. Un prestataire partenaire réalise un diagnostic cybersécurité d'une journée dans vos locaux, entièrement pris en charge. Résultat : un rapport de maturité avec un score et des recommandations priorisées. Disponible via cybermalveillance.gouv.fr. Attention : délai d'attente possible selon votre région.",
                      conditions: "Aucune condition de taille ou de CA. Ouverts aux indépendants, associations et TPE.",
                      lien: "cybermalveillance.gouv.fr"
                    },
                    {
                      nom: "Diagnostic cyber CCI / CMA",
                      cout: "Gratuit ou tarif réduit",
                      public: "Adhérents CCI ou CMA",
                      desc: "De nombreuses Chambres de Commerce et d'Industrie (CCI) et Chambres des Métiers (CMA) proposent des diagnostics cybersécurité à tarif préférentiel pour leurs adhérents. Certaines régions subventionnent entièrement cette prestation. Renseignez-vous auprès de votre CCI locale.",
                      conditions: "Adhérent à la CCI ou CMA du territoire. Certains programmes ouverts aux non-adhérents.",
                      lien: "cci.fr ou votre CCI locale"
                    },
                    {
                      nom: "Cyber Campus — France Num",
                      cout: "Gratuit",
                      public: "PME et ETI",
                      desc: "France Num (gouvernement) propose des ressources gratuites pour évaluer sa cybersécurité, incluant un auto-diagnostic en ligne et des guides pratiques. Le Cyber Campus (La Défense) organise régulièrement des ateliers et conférences gratuits pour les entreprises franciliennes.",
                      conditions: "Aucune condition spécifique.",
                      lien: "france-num.gouv.fr"
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6 border border-green-500/30">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <h3 className="font-heading font-semibold">{item.nom}</h3>
                        <span className="bg-green-500/20 text-green-400 text-xs font-heading font-bold px-3 py-1 rounded-full">{item.cout}</span>
                      </div>
                      <p className="text-xs text-primary font-heading mb-2">Public : {item.public}</p>
                      <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                      <div className="bg-background/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground"><strong>Conditions :</strong> {item.conditions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">BPI France : financement et prêts dédiés</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      produit: "Prêt Numérique BPI France",
                      montant: "10 000 € à 5 M€",
                      taux: "Taux bonifié (inférieur au marché)",
                      desc: "Le Prêt Numérique finance les investissements de transformation digitale des PME, incluant explicitement la cybersécurité. Il peut couvrir l'achat de solutions, les prestations d'audit et de conseil, et les formations. Durée de remboursement jusqu'à 7 ans avec différé possible.",
                      conditions: "PME et ETI de moins de 5 000 salariés existant depuis au moins 3 ans. Accompagnement par un partenaire bancaire."
                    },
                    {
                      produit: "Garantie BPI France sur prêt bancaire",
                      montant: "Jusqu'à 70 % du prêt garanti",
                      taux: "0,7 % de commission sur l'encours garanti",
                      desc: "Si votre banque est réticente à financer votre projet cyber, BPI France peut garantir votre prêt bancaire à hauteur de 70 %. Cela réduit le risque pour la banque et facilite l'obtention du financement.",
                      conditions: "PME et TPE. Projet d'investissement clairement identifié. Dossier déposé via votre banque partenaire."
                    },
                    {
                      produit: "Diagnostic Cyber Expert BPI (en partenariat)",
                      montant: "Prise en charge partielle",
                      taux: "Variable selon la région",
                      desc: "Dans certaines régions, BPI France cofinance des diagnostics cybersécurité réalisés par des experts agréés. Le reste à charge pour la PME peut être ramené à 20-40 % du coût initial.",
                      conditions: "Selon disponibilité dans votre région. Renseignez-vous auprès de votre agence BPI France régionale."
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6 border border-blue-500/30">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <h3 className="font-heading font-semibold">{item.produit}</h3>
                        <span className="bg-blue-500/20 text-blue-400 text-xs font-heading font-bold px-3 py-1 rounded-full">{item.montant}</span>
                      </div>
                      <p className="text-xs text-primary font-heading mb-2">Taux / conditions financières : {item.taux}</p>
                      <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                      <div className="bg-background/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground"><strong>Éligibilité :</strong> {item.conditions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les aides régionales et locales</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les régions ont massivement investi dans la cybersécurité des PME depuis 2020. Voici quelques exemples de dispositifs régionaux actifs (vérifiez la disponibilité dans votre région) :
                </p>
                <div className="space-y-4">
                  {[
                    {
                      region: "Hauts-de-France",
                      aide: "Dispositif Cybersécurité PME HDF",
                      desc: "La Région Hauts-de-France subventionne jusqu'à 50 % des coûts d'audit cybersécurité pour les PME du territoire, dans la limite de 15 000 €. Programme cofinancé par le FEDER.",
                      contact: "hautsdefrance.fr ou votre CCI"
                    },
                    {
                      region: "Île-de-France",
                      aide: "PM'up et Diag'Num",
                      desc: "La Région Île-de-France propose via le dispositif PM'up un soutien aux investissements de développement incluant la cybersécurité. Diag'Num subventionne les diagnostics numériques incluant la sécurité informatique.",
                      contact: "iledefrance.fr ou votre CCI"
                    },
                    {
                      region: "Bretagne / Grand Ouest",
                      aide: "Cybersécurité Bretagne",
                      desc: "La Région Bretagne et le Pôle d'excellence cyber de Rennes proposent des programmes de diagnostic et d'accompagnement cyber pour les PME bretonnes à tarifs préférentiels.",
                      contact: "pole-excellence-cyber.fr"
                    },
                    {
                      region: "Toutes régions",
                      aide: "Europe Numérique — FEDER",
                      desc: "Les fonds européens FEDER cofinancent la transformation numérique des PME dans toutes les régions françaises. La cybersécurité est une dépense éligible. Consultez votre conseil régional.",
                      contact: "europe.eu ou votre conseil régional"
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary/20 text-primary text-xs font-heading font-bold px-2 py-0.5 rounded">{item.region}</span>
                        <h3 className="font-heading font-semibold text-sm">{item.aide}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{item.desc}</p>
                      <p className="text-xs text-primary">Contact : {item.contact}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Euro className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Cumuler les aides : la stratégie optimale</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ces dispositifs sont en général cumulables. Voici un exemple de stratégie optimale pour une PME de 30 salariés souhaitant réaliser un audit complet (valeur : 12 000 €) :
                </p>
                <div className="space-y-2 mb-4">
                  {[
                    { etape: "Étape 1", action: "Diagnostics Mon Aide Cyber ANSSI", cout: "0 €", economie: "1 000 €" },
                    { etape: "Étape 2", action: "Subvention régionale (ex. Hauts-de-France 50 %)", cout: "6 000 €", economie: "6 000 €" },
                    { etape: "Étape 3", action: "Financement du reste via Prêt Numérique BPI", cout: "6 000 € (remboursé sur 5 ans)", economie: "Trésorerie préservée" },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-lg px-4 py-3 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <div className="flex-1">
                        <span className="text-muted-foreground text-sm">{item.action}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-heading font-bold">{item.cout}</div>
                        <div className="text-xs text-green-400">{item.economie}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  Résultat : un audit cybersécurité d'une valeur de 12 000 € avec un reste à charge minimal de 6 000 €, remboursable sur 5 ans, soit environ 100 €/mois.
                </p>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Démarches pratiques : par où commencer ?</h2>
                </div>
                <ol className="space-y-3">
                  {[
                    "Commencez par le diagnostic Mon Aide Cyber ANSSI (gratuit) pour établir un premier bilan",
                    "Contactez votre CCI régionale pour connaître les dispositifs locaux actifs dans votre département",
                    "Renseignez-vous auprès de BPI France pour le Prêt Numérique (formulaire en ligne sur bpifrance.fr)",
                    "Consultez le site de votre Conseil Régional rubrique 'Aides aux entreprises' → numérique / cybersécurité",
                    "Demandez à votre prestataire cybersécurité s'il peut vous aider à constituer les dossiers de demande d'aide",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 card-glass rounded-lg p-4">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">On vous aide à trouver les financements disponibles</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts connaissent les dispositifs d'aide disponibles dans votre région et vous accompagnent dans la constitution des dossiers. Obtenez un audit cybersécurité avec le meilleur reste à charge possible.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Renseignez-vous sur les aides disponibles
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

export default FinancementAuditCyber;
