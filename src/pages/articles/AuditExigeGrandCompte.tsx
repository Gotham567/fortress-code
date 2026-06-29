import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, FileCheck, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const AuditExigeGrandCompte = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Audit cyber exigé par un client grand compte : comment répondre à cette exigence ?",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-28",
    "dateModified": "2026-06-28"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit cyber exigé par client grand compte : comment y répondre ?"
        description="Votre client grand compte vous demande un audit cybersécurité ou un questionnaire de sécurité ? Découvrez comment répondre, quelles certifications montrer, quels délais prévoir et comment transformer cette exigence en avantage concurrentiel."
        canonical="/actualites/audit-cyber-exige-client-grand-compte"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Par profil acheteur</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-28">28 Juin 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Audit cyber exigé par un <span className="text-gradient">client grand compte</span> : comment répondre ?
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                De plus en plus de grands comptes — grandes entreprises, ETI, administrations, industriels — imposent à leurs sous-traitants et fournisseurs des exigences de cybersécurité formalisées. Questionnaire de sécurité, audit par le client, rapport de pentest, certification... Face à ces demandes, les PME sous-traitantes sont souvent démunies. Ce guide vous explique comment y répondre efficacement et en faire un avantage concurrentiel.
              </p>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi les grands comptes imposent ces exigences</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ce durcissement des exigences envers les sous-traitants a plusieurs origines convergentes :
                </p>
                <div className="space-y-4 mb-6">
                  {[
                    { titre: "NIS2 et la sécurité de la chaîne d'approvisionnement", desc: "La directive NIS2 (article 21.2d) impose aux entités essentielles et importantes de gérer les risques de sécurité liés à leurs fournisseurs et sous-traitants. Cette obligation se répercute contractuellement sur leurs prestataires." },
                    { titre: "Les incidents via la supply chain", desc: "Des attaques majeures (SolarWinds, Kaseya, MOVEit) ont montré que compromettre un sous-traitant permet d'accéder au grand compte. Les RSSI des grandes entreprises ont reçu instruction de sécuriser leur écosystème." },
                    { titre: "Les audits CNIL et les exigences RGPD", desc: "Si votre client traite des données personnelles et que vous y avez accès, vous êtes son sous-traitant RGPD. Il doit vérifier que vous offrez des garanties suffisantes (article 28 RGPD). L'audit cybersécurité est un moyen de le vérifier." },
                    { titre: "Les exigences des assureurs cyber", desc: "Les assureurs cyber exigent désormais que les assurés vérifient la sécurité de leurs sous-traitants. Votre grand compte répercute ces exigences sur vous pour protéger sa prime d'assurance." },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-5">
                      <h3 className="font-heading font-semibold mb-2">{item.titre}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Les 4 formes d'exigences les plus courantes</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      forme: "1. Le questionnaire de sécurité (SSAQ / SIG / questionnaire maison)",
                      description: "Le plus courant. Le grand compte vous envoie un questionnaire de 50 à 200 questions sur votre organisation, vos processus et vos mesures techniques. Exemples : SIG Lite (SANS), questionnaires TISAX (automobile), questionnaires maison des grandes banques ou industriels.",
                      quoi: [
                        "Répondez honnêtement — les incohérences sont détectées lors des audits de suivi",
                        "Pour les questions sur lesquelles vous n'êtes pas encore conformes, indiquez votre plan d'action et l'échéance",
                        "Demandez au RSSI de votre client ce qui est vraiment prioritaire pour lui",
                      ]
                    },
                    {
                      forme: "2. L'audit par le client ou son prestataire",
                      description: "Le grand compte mandate un auditeur (interne ou externe) pour venir évaluer votre sécurité sur site. Durée : 1 à 3 jours. Périmètre : souvent ciblé sur les données ou systèmes du client que vous traitez.",
                      quoi: [
                        "Préparez une documentation complète : PSSI, inventaire des accès, procédures",
                        "Faites réaliser votre propre audit interne avant pour identifier et corriger les points faibles",
                        "Désignez un interlocuteur dédié qui connaît votre organisation de sécurité",
                      ]
                    },
                    {
                      forme: "3. La demande de rapport de pentest ou d'audit tiers",
                      description: "Le grand compte vous demande de lui fournir le rapport d'un audit récent (moins de 12 mois) réalisé par un prestataire indépendant et qualifié. Il peut exiger la mention PASSI (Prestataire d'Audit de la Sécurité des Systèmes d'Information).",
                      quoi: [
                        "Faites réaliser un audit par un prestataire qualifié PASSI — c'est souvent une condition sine qua non",
                        "Vérifiez que votre rapport couvre le périmètre qui intéresse votre client",
                        "Partagez uniquement un résumé exécutif sécurisé — pas le rapport complet avec tous les détails techniques",
                      ]
                    },
                    {
                      forme: "4. L'exigence de certification",
                      description: "Certains clients, notamment dans l'industrie (TISAX), la défense (homologation), la santé (HDS) ou la finance (SOC 2) exigent une certification reconnue. C'est l'exigence la plus structurante mais aussi la plus valorisante.",
                      quoi: [
                        "ISO 27001 : certification internationale, reconnue par tous les grands comptes, 6 à 18 mois pour l'obtenir",
                        "TISAX : obligatoire pour les fournisseurs de l'industrie automobile allemande",
                        "SOC 2 Type II : requis par de nombreux clients américains et startups tech",
                        "Un RSSI externalisé peut piloter l'obtention de ces certifications",
                      ]
                    },
                  ].map((item, i) => (
                    <div key={i} className="card-glass rounded-xl p-6">
                      <h3 className="font-heading font-semibold mb-3">{item.forme}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <div>
                        <p className="text-xs font-heading text-primary uppercase mb-2">Comment répondre :</p>
                        <ul className="space-y-1">
                          {item.quoi.map((q, qi) => (
                            <li key={qi} className="text-muted-foreground text-sm flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-primary mt-1 shrink-0" />
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Que risque-t-on en cas de non-conformité ?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La réponse varie selon la contractualisation, mais les risques sont réels :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li><strong>Perte du contrat :</strong> le grand compte peut conditionner le renouvellement ou la signature à la conformité cybersécurité</li>
                  <li><strong>Exclusion des appels d'offres :</strong> dans les secteurs réglementés (défense, santé, finance), la non-conformité peut entraîner une disqualification directe</li>
                  <li><strong>Responsabilité contractuelle :</strong> si un incident chez vous impacte le grand compte, la clause de sécurité du contrat vous expose à des pénalités ou demandes d'indemnisation</li>
                  <li><strong>Audit de conformité imposé :</strong> le client peut se réserver le droit de faire auditer votre sécurité à ses frais, mais à vos risques si des lacunes sont trouvées</li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Transformer l'exigence en avantage concurrentiel</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les PME les plus malins ne subissent pas ces exigences — elles les anticipent et en font un argument commercial. Quelques exemples concrets :
                </p>
                <div className="space-y-3">
                  {[
                    "Mentionner dans vos propositions commerciales que vous êtes certifié ISO 27001 ou qualifié PASSI différencie immédiatement votre offre",
                    "Proposer proactivement votre rapport d'audit à vos clients sans qu'ils le demandent rassure et accélère la signature",
                    "Un questionnaire de sécurité bien rempli et documenté montre votre professionnalisme — même si vous n'êtes pas parfait sur tous les points",
                    "Les PME sous-traitantes conformes peuvent facturer 5 à 15 % plus cher que leurs concurrents non conformes sur les marchés sensibles",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 card-glass rounded-lg p-4">
                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass rounded-xl p-8 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Répondez à l'exigence de votre grand compte</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                  Nos experts vous aident à répondre aux questionnaires de sécurité, réaliser l'audit demandé par votre client et constituer un dossier de conformité adapté à ses exigences. Délai de réponse rapide.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-colors">
                  Répondre à l'exigence de mon client
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

export default AuditExigeGrandCompte;
