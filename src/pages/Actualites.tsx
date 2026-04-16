import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import imgAudit from "@/assets/articles/audit-cybersecurite.jpg";
import imgPentest from "@/assets/articles/pentest-entreprise.jpg";
import imgPrestataire from "@/assets/articles/choisir-prestataire.jpg";
import imgPME from "@/assets/articles/cybersecurite-pme.jpg";
import imgCout from "@/assets/articles/cout-audit.jpg";
import imgVs from "@/assets/articles/pentest-vs-audit.jpg";
import imgAttaques from "@/assets/articles/cyberattaques-pme.jpg";
import imgApres from "@/assets/articles/apres-cyberattaque.jpg";
import imgObligatoire from "@/assets/articles/audit-obligatoire.jpg";
import imgPreparer from "@/assets/articles/preparer-pentest.jpg";
import imgNIS2 from "@/assets/articles/nis2-directive.jpg";
import imgRSSI from "@/assets/articles/rssi-externalise.jpg";
import imgTeletravail from "@/assets/articles/securiser-teletravail.jpg";
import imgPCA from "@/assets/articles/pca-pra-cybersecurite.jpg";
import imgFormation from "@/assets/articles/formation-cybersecurite.jpg";
import imgRGPD from "@/assets/articles/rgpd-cybersecurite.jpg";
import imgRansomware from "@/assets/articles/ransomware-pme.jpg";
import imgEDR from "@/assets/articles/edr-xdr-protection.jpg";
import imgAD from "@/assets/articles/audit-active-directory.jpg";

const pillarPages = [
  { tag: "Page pilier", title: "Qu'est-ce qu'un audit cybersécurité et pourquoi en faire un ?", desc: "Guide complet sur l'audit cybersécurité : définition, méthodologie, types d'audits, bénéfices et fréquence recommandée pour les PME et ETI.", date: "10 Mars 2026", slug: "/actualites/audit-cybersecurite-guide", img: imgAudit },
  { tag: "Page pilier", title: "Pentest entreprise : guide complet pour les PME", desc: "Tout savoir sur le pentest entreprise : approches (boîte noire, grise, blanche), types de tests, déroulement étape par étape et coûts pour les PME.", date: "8 Mars 2026", slug: "/actualites/pentest-entreprise-guide-pme", img: imgPentest },
  { tag: "Page pilier", title: "Comment choisir son prestataire en cybersécurité ?", desc: "Les critères essentiels pour sélectionner un prestataire cybersécurité : qualifications PASSI, certifications, méthodologie, pièges à éviter.", date: "5 Mars 2026", slug: "/actualites/choisir-prestataire-cybersecurite", img: imgPrestataire },
  { tag: "Page pilier", title: "Cybersécurité PME : par où commencer ?", desc: "Feuille de route complète pour les PME : 10 premières mesures, budget, obligations réglementaires et plan d'action sur 12 mois.", date: "1 Mars 2026", slug: "/actualites/cybersecurite-pme-par-ou-commencer", img: imgPME },
];

const blogArticles = [
  { tag: "Article", title: "Ransomware PME : guide complet de prévention et de réponse", desc: "Modes opératoires des attaques, 12 mesures de prévention, plan de réponse à incident et faut-il payer la rançon ? Guide complet pour les dirigeants de PME.", date: "10 Avril 2026", slug: "/actualites/ransomware-pme-guide-prevention-reponse", img: imgRansomware },
  { tag: "Article", title: "EDR vs XDR : choisir sa solution de détection et réponse", desc: "Comprendre les différences entre antivirus, EDR et XDR : comparatif des solutions du marché, prix et plan de déploiement en 6 étapes pour les PME.", date: "8 Avril 2026", slug: "/actualites/edr-xdr-protection-endpoint-pme", img: imgEDR },
  { tag: "Article", title: "Audit Active Directory : sécuriser le cœur de votre SI", desc: "10 vulnérabilités AD les plus fréquentes, outils d'audit (PingCastle, BloodHound), méthodologie en 7 étapes et quick wins pour sécuriser votre annuaire.", date: "5 Avril 2026", slug: "/actualites/audit-active-directory-securite-pme", img: imgAD },
  { tag: "Article", title: "PCA et PRA en cybersécurité : protéger la continuité de votre entreprise", desc: "Guide complet sur le Plan de Continuité (PCA) et le Plan de Reprise d'Activité (PRA) : méthodologie en 8 étapes, RTO/RPO, budget et erreurs à éviter.", date: "25 Mars 2026", slug: "/actualites/pca-pra-cybersecurite-guide", img: imgPCA },
  { tag: "Article", title: "Formation cybersécurité : sensibiliser vos collaborateurs", desc: "95 % des incidents impliquent une erreur humaine. Programme de sensibilisation, simulations de phishing, plan annuel et mesure du ROI pour les PME.", date: "22 Mars 2026", slug: "/actualites/formation-sensibilisation-cybersecurite-entreprise", img: imgFormation },
  { tag: "Article", title: "Conformité RGPD et cybersécurité : deux faces d'une même obligation", desc: "Obligations RGPD en matière de sécurité, sanctions CNIL, 12 mesures techniques indispensables et plan de mise en conformité en 10 étapes.", date: "20 Mars 2026", slug: "/actualites/conformite-rgpd-cybersecurite-guide-pme", img: imgRGPD },
  { tag: "Article", title: "Directive NIS2 : ce que les PME et ETI doivent savoir", desc: "Guide complet sur la directive NIS2 : entreprises concernées, obligations, sanctions, calendrier et plan de mise en conformité en 6 étapes.", date: "18 Mars 2026", slug: "/actualites/directive-nis2-guide-pme-eti", img: imgNIS2 },
  { tag: "Article", title: "RSSI externalisé : pourquoi et comment externaliser votre sécurité", desc: "Tout savoir sur le RSSI externalisé (vCISO) : missions, coûts, avantages par rapport au recrutement et critères de choix pour les PME.", date: "15 Mars 2026", slug: "/actualites/rssi-externalise-guide", img: imgRSSI },
  { tag: "Article", title: "Sécuriser le télétravail : 12 mesures essentielles", desc: "Guide pratique pour sécuriser le télétravail : VPN, MFA, gestion des appareils, protection des données et sensibilisation des collaborateurs.", date: "12 Mars 2026", slug: "/actualites/securiser-teletravail-entreprise", img: imgTeletravail },
  { tag: "Article", title: "Combien coûte un audit cybersécurité en 2025 ?", desc: "Prix détaillés par type d'audit, facteurs de coût, conseils pour optimiser votre budget et ROI d'un audit cybersécurité pour les PME.", date: "25 Fév 2026", slug: "/actualites/cout-audit-cybersecurite-2025", img: imgCout },
  { tag: "Article", title: "Pentest vs audit de sécurité : quelles différences ?", desc: "Comprendre les différences fondamentales entre pentest et audit de sécurité : approche, méthodologie, livrables et comment choisir.", date: "20 Fév 2026", slug: "/actualites/pentest-vs-audit-securite-differences", img: imgVs },
  { tag: "Article", title: "Les 10 cyberattaques les plus fréquentes sur les PME", desc: "Phishing, ransomware, arnaque au président... Les 10 menaces les plus courantes avec leur impact réel et les mesures de protection.", date: "15 Fév 2026", slug: "/actualites/10-cyberattaques-frequentes-pme", img: imgAttaques },
  { tag: "Article", title: "Que faire après une cyberattaque ?", desc: "Guide de réponse à incident pour les PME : containment, obligations légales, investigation forensique, restauration et retour d'expérience.", date: "10 Fév 2026", slug: "/actualites/que-faire-apres-cyberattaque", img: imgApres },
  { tag: "Article", title: "Audit cybersécurité obligatoire : qui est concerné ?", desc: "NIS2, DORA, RGPD, LPM : toutes les réglementations qui imposent des audits cybersécurité et les secteurs concernés.", date: "5 Fév 2026", slug: "/actualites/audit-cybersecurite-obligatoire", img: imgObligatoire },
  { tag: "Article", title: "Comment se préparer à un pentest ?", desc: "Guide pratique : documentation à fournir, périmètre à définir, équipes à impliquer, checklist complète de préparation.", date: "28 Jan 2026", slug: "/actualites/comment-se-preparer-pentest", img: imgPreparer },
];

const Actualites = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog cybersécurité : audit, pentest, conseils PME"
        description="Blog cybersécurité de CyberSecure : guides complets sur l'audit cybersécurité, le pentest entreprise, la conformité NIS2/DORA et les bonnes pratiques pour les PME et ETI."
        canonical="/actualites"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog cybersécurité CyberSecure",
          "description": "Articles et guides sur l'audit cybersécurité et le pentest entreprise pour les PME",
          "publisher": { "@type": "Organization", "name": "CyberSecure" }
        }}
      />
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-4">Blog & guides cybersécurité</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-gradient">Audit cybersécurité</span> & pentest entreprise
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Guides complets, articles pratiques et retours d'expérience sur l'audit cybersécurité et le pentest entreprise. Ressources conçues pour les dirigeants et responsables IT de PME et ETI.
              </p>
            </motion.div>

            {/* Pillar pages */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl font-bold mb-8">Guides complets</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pillarPages.map((a, i) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <Link to={a.slug} className="card-glass rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all block h-full">
                      <div className="h-52 overflow-hidden">
                        <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">{a.tag}</span>
                          <time className="text-muted-foreground text-xs" dateTime={a.date}>{a.date}</time>
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                        <span className="text-primary text-sm font-heading font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lire le guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Blog articles */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-8">Articles de blog</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((a, i) => (
                  <motion.article key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                    <Link to={a.slug} className="card-glass rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all block h-full">
                      <div className="h-44 overflow-hidden">
                        <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">{a.tag}</span>
                          <time className="text-muted-foreground text-xs" dateTime={a.date}>{a.date}</time>
                        </div>
                        <h3 className="font-heading text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.desc}</p>
                        <span className="text-primary text-sm font-heading font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lire l'article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Actualites;
