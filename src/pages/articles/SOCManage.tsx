import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Activity, Clock, ShieldCheck, CheckCircle2, AlertTriangle, Calendar, Users } from "lucide-react";
import heroImg from "@/assets/articles/soc-mdr-manage.jpg";

const SOCManage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SOC managé et MDR : guide pour les PME et ETI",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-20",
    "dateModified": "2026-04-20",
    "description": "Tout comprendre sur le SOC managé (MSSP) et le MDR : différences, services inclus, prix, critères de choix et plan d'externalisation pour les PME et ETI."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SOC managé & MDR : guide complet PME et ETI"
        description="SOC managé vs MDR : définitions, services inclus (SIEM, EDR, threat hunting, SOAR), prix moyens, critères de choix et plan d'externalisation pour PME et ETI."
        canonical="/actualites/soc-manage-mdr-guide-pme"
        jsonLd={jsonLd}
        ogImage={heroImg}
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Guide</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-04-20">20 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">SOC managé et MDR</span> : guide pour les PME et ETI
              </h1>

              <img src={heroImg} alt="Centre opérationnel de sécurité (SOC)" className="w-full rounded-xl mb-8 border border-border/40" width={1280} height={720} />

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Selon l'ANSSI, <strong>le délai moyen de détection d'une intrusion en France est de 197 jours</strong> et seulement <strong>1 PME sur 10 dispose d'une supervision sécurité 24/7</strong>. Recruter une équipe SOC interne (analystes N1, N2, N3, threat hunter, ingénieur SIEM) coûte 600 000 à 1 M€ par an : hors de portée pour une PME ou une ETI. C'est pourquoi <strong>le SOC managé et le MDR explosent en 2025</strong>. Ce guide vous explique les différences, les services à exiger, les prix réels et les critères de choix.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">SOC, SOC managé, MDR : quelles différences ?</h2>
              </div>
              <div className="space-y-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">SOC interne</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Équipe et outils déployés en interne (SIEM, EDR, SOAR). Maîtrise totale mais coût annuel ≥ 600 k€ et difficulté de recrutement (pénurie d'analystes).</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">SOC managé (MSSP)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Externalisation de la supervision. Le prestataire opère son SIEM, ingère vos logs (firewall, AD, M365, EDR), détecte et notifie les alertes 24/7. Périmètre large mais souvent <strong>réactif</strong> : à vous de mener l'investigation et la réponse.</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">MDR (Managed Detection &amp; Response)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Évolution premium du SOC managé : centré sur l'<strong>EDR/XDR</strong> + threat hunting humain proactif + <strong>actions de remédiation à distance</strong> (isolation d'un poste, kill process, blocage d'IP). Plus rapide, plus efficace contre les ransomware modernes.</p>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">XDR managé</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Variante MDR couvrant aussi cloud, identités (Azure AD), email et OT. Vision unifiée multi-domaines, recommandé pour les ETI matures.</p>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Que doit inclure un bon SOC managé ?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Supervision 24/7/365 (y compris jours fériés)",
                  "SIEM avec règles de corrélation à jour (MITRE ATT&CK)",
                  "Intégration EDR/XDR sur les endpoints",
                  "Threat intelligence (IOCs, TTPs, secteur d'activité)",
                  "Threat hunting proactif (au moins mensuel)",
                  "SOAR pour automatiser la triage et la réponse",
                  "Délais d'engagement contractuels (MTTD < 15 min, MTTR < 1 h pour les critiques)",
                  "Rapports mensuels et comité de pilotage trimestriel",
                  "Réponse à incident incluse ou en retainer",
                  "Souveraineté : SOC opéré en France/UE, données hébergées en UE",
                ].map((s, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Combien coûte un SOC managé ou un MDR en 2026 ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les prix dépendent du modèle (par utilisateur, par endpoint, par EPS – events per second), du périmètre et du niveau de service. Voici des fourchettes réalistes observées sur le marché français en 2025-2026 :
              </p>
              <div className="card-glass rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-primary/10">
                    <tr className="text-left">
                      <th className="p-4 font-heading font-semibold">Taille entreprise</th>
                      <th className="p-4 font-heading font-semibold">SOC managé</th>
                      <th className="p-4 font-heading font-semibold">MDR / XDR</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border/40"><td className="p-4">PME 20–50 postes</td><td className="p-4">15–30 k€/an</td><td className="p-4">20–40 k€/an</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">PME 50–200 postes</td><td className="p-4">30–80 k€/an</td><td className="p-4">40–100 k€/an</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">ETI 200–1000 postes</td><td className="p-4">80–250 k€/an</td><td className="p-4">120–350 k€/an</td></tr>
                    <tr className="border-t border-border/40"><td className="p-4">ETI &gt; 1000 postes</td><td className="p-4">250 k€+ /an</td><td className="p-4">350 k€+ /an</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4 italic">À comparer au coût moyen d'une cyberattaque pour une PME française : 330 k€ (rapport Hiscox 2024).</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 8 critères pour choisir son SOC managé</h2>
              </div>
              <div className="space-y-3">
                {[
                  { t: "Qualification PASSI / PDIS", d: "Idéal : prestataire qualifié PDIS (Prestataire de Détection d'Incidents de Sécurité) par l'ANSSI, gage d'exigence." },
                  { t: "SOC opéré en France ou UE", d: "Souveraineté des données et conformité RGPD/NIS2. Vérifier la localisation physique des analystes." },
                  { t: "Couverture 24/7/365 réelle", d: "Méfiance vis-à-vis du « 24/7 best effort » avec un seul analyste de garde la nuit." },
                  { t: "Engagements de service (SLA)", d: "MTTD, MTTR contractuels, pénalités en cas de manquement." },
                  { t: "Capacité de réponse à incident (CSIRT)", d: "Équipe DFIR dédiée mobilisable en moins de 4 h, retainer inclus ou optionnel." },
                  { t: "Technologies utilisées", d: "SIEM (Splunk, Sentinel, Elastic), EDR/XDR (CrowdStrike, SentinelOne, Defender), SOAR. Compatibilité avec votre stack." },
                  { t: "Reporting et transparence", d: "Portail client, accès aux logs bruts, rapports lisibles pour le COMEX." },
                  { t: "Références et taille du SOC", d: "Nombre d'analystes, nombre de clients supervisés, secteurs d'activité similaires au vôtre." },
                ].map((c, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{c.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 5 erreurs à éviter</h2>
              </div>
              <div className="space-y-3">
                {[
                  "Choisir uniquement sur le prix : un SOC low-cost = bruit ininterprétable et faux négatifs",
                  "Oublier d'inclure le cloud (AWS, Azure, M365) dans le périmètre",
                  "Négliger le run interne : un SOC managé ne remplace pas un RSSI",
                  "Ne pas tester via un exercice red team / purple team avant signature",
                  "Démarrer sans phase de tuning (3 à 6 mois de calibration nécessaire)",
                ].map((e, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{e}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14 card-glass rounded-2xl p-8 text-center glow-border">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Discutons de votre besoin de supervision</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes pour évaluer si un SOC managé ou un MDR est adapté à votre contexte, et identifier les questions clés à poser à vos prestataires. Sans engagement.
              </p>
              <a
                href="https://calendly.com/lakaoub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all"
              >
                Réserver mon échange gratuit
              </a>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles liés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/edr-xdr-protection-endpoint-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">EDR vs XDR</h3>
                  <p className="text-muted-foreground text-sm">Brique technique au cœur du MDR.</p>
                </Link>
                <Link to="/actualites/que-faire-apres-cyberattaque" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Que faire après une cyberattaque</h3>
                  <p className="text-muted-foreground text-sm">Réponse à incident et CSIRT.</p>
                </Link>
              </div>
            </motion.section>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default SOCManage;
