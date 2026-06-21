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
import imgZeroTrust from "@/assets/articles/zero-trust.jpg";
import imgM365 from "@/assets/articles/securite-microsoft-365.jpg";
import imgPhishing from "@/assets/articles/phishing-avance.jpg";
import imgAWS from "@/assets/articles/securite-cloud-aws.jpg";
import imgSOC from "@/assets/articles/soc-mdr-manage.jpg";
import imgCyberAssurance from "@/assets/articles/cyber-assurance.jpg";
import imgIA from "@/assets/articles/ia-cybersecurite.jpg";
import imgBackup from "@/assets/articles/sauvegarde-immuable.jpg";
import imgOT from "@/assets/articles/securite-ot-ics.jpg";

const pillarPages = [
  { tag: "Page pilier", title: "Qu'est-ce qu'un audit cybersécurité et pourquoi en faire un ?", desc: "Guide complet sur l'audit cybersécurité : définition, méthodologie, types d'audits, bénéfices et fréquence recommandée pour les PME et ETI.", date: "10 Mars 2026", slug: "/actualites/audit-cybersecurite-guide", img: imgAudit },
  { tag: "Page pilier", title: "Pentest entreprise : guide complet pour les PME", desc: "Tout savoir sur le pentest entreprise : approches (boîte noire, grise, blanche), types de tests, déroulement étape par étape et coûts pour les PME.", date: "8 Mars 2026", slug: "/actualites/pentest-entreprise-guide-pme", img: imgPentest },
  { tag: "Page pilier", title: "Comment choisir son prestataire en cybersécurité ?", desc: "Les critères essentiels pour sélectionner un prestataire cybersécurité : qualifications PASSI, certifications, méthodologie, pièges à éviter.", date: "5 Mars 2026", slug: "/actualites/choisir-prestataire-cybersecurite", img: imgPrestataire },
  { tag: "Page pilier", title: "Cybersécurité PME : par où commencer ?", desc: "Feuille de route complète pour les PME : 10 premières mesures, budget, obligations réglementaires et plan d'action sur 12 mois.", date: "1 Mars 2026", slug: "/actualites/cybersecurite-pme-par-ou-commencer", img: imgPME },
];

const blogArticles = [
  { tag: "Article", title: "CVE et vulnérabilités critiques : prioriser et remédier en 2026", desc: "Méthode complète de gestion des vulnérabilités : CVSS 3.1, EPSS, catalogue KEV CISA, SLA de remédiation par criticité, outils de scan (Nessus, Qualys, Trivy) et conformité NIS2.", date: "20 Juin 2026", slug: "/actualites/vulnerabilites-critiques-cve-gestion", img: imgAudit },
  { tag: "Article", title: "Audit sécurité des API web : méthodologie et outils 2026", desc: "Méthodologie d'audit API REST et GraphQL : OWASP API Security Top 10 2023, découverte d'endpoints, BOLA, broken auth, JWT manipulation, mass assignment, SSRF et outils (Burp Suite, ZAP, ffuf).", date: "18 Juin 2026", slug: "/actualites/audit-securite-api-web-guide", img: imgVs },
  { tag: "Article", title: "Reconnaissance OSINT en ethical hacking : outils et cadre légal", desc: "Phase de reconnaissance OSINT lors d'un pentest : Shodan, Maltego, theHarvester, Amass, HIBP, fuites de credentials, Google Dorks, cadre légal français et périmètre d'autorisation.", date: "16 Juin 2026", slug: "/actualites/reconnaissance-osint-ethical-hacking", img: imgPentest },
  { tag: "Article", title: "Pentest WiFi et réseau sans fil : guide technique 2026", desc: "Méthodologie de pentest WiFi : audit WPA2/WPA3, attaques Evil Twin, PMKID, capture handshake, réseaux enterprise 802.1X/EAP, outils Aircrack-ng, Hashcat, Kismet et contre-mesures.", date: "14 Juin 2026", slug: "/actualites/pentest-wifi-reseau-sans-fil-guide", img: imgAudit },
  { tag: "Article", title: "Investigation forensique numérique : collecte, analyse et chaîne de custody", desc: "Méthodologie DFIR : acquisition RAM (Volatility, WinPmem), disque (FTK Imager, write blocker), artefacts Windows (Prefetch, Amcache, Event Logs), outils Autopsy, KAPE, Velociraptor.", date: "12 Juin 2026", slug: "/actualites/investigation-forensique-numerique-guide", img: imgObligatoire },
  { tag: "Article", title: "Lateral movement et escalade de privilèges : techniques et défenses", desc: "Pass-the-Hash, Pass-the-Ticket, Golden Ticket, WMI/DCOM, token impersonation, DLL hijacking, sudo misconfiguration : techniques attaquants et contre-mesures défensives détaillées.", date: "10 Juin 2026", slug: "/actualites/lateral-movement-escalade-privileges-defense", img: imgAD },
  { tag: "Article", title: "Score CVSS 3.1 et 4.0 : comprendre et prioriser la remédiation", desc: "Guide complet CVSS 3.1 et CVSS 4.0 : métriques de base, temporelles, environnementales, différences entre versions, limites du CVSS seul et formule de priorisation combinant EPSS et KEV.", date: "8 Juin 2026", slug: "/actualites/cvss-priorisation-vulnerabilites-guide", img: imgVs },
  { tag: "Article", title: "OWASP Top 10 2026 : guide pratique de sécurité web pour les développeurs", desc: "OWASP Top 10 2025 décrypté : injection, cryptographie défaillante, broken access control, SSRF, SAST/DAST et plan de remédiation pour sécuriser vos applications web.", date: "18 Juin 2026", slug: "/actualites/owasp-top-10-guide-securite-web", img: imgOT },
  { tag: "Article", title: "Pentest Active Directory : techniques et défenses 2026", desc: "Kerberoasting, AS-REP Roasting, Pass-the-Hash, Golden Ticket, DCSync : techniques d'attaque AD expliquées et contre-mesures concrètes pour les PME et ETI.", date: "16 Juin 2026", slug: "/actualites/pentest-active-directory-guide", img: imgAD },
  { tag: "Article", title: "Programme Bug Bounty en entreprise : créer et gérer son programme", desc: "Lancer un programme de bug bounty : plateformes (HackerOne, YesWeHack, Intigriti), périmètre, règles d'engagement, triages, récompenses et conformité ANSSI.", date: "14 Juin 2026", slug: "/actualites/bug-bounty-programme-entreprise-guide", img: imgPhishing },
  { tag: "Article", title: "Simulation de phishing : campagnes de sensibilisation efficaces", desc: "Concevoir des campagnes de phishing simulé réalistes : outils (GoPhish, KnowBe4), scénarios, métriques, feedback pédagogique et programme de sensibilisation associé.", date: "12 Juin 2026", slug: "/actualites/simulation-phishing-campagne-sensibilisation", img: imgFormation },
  { tag: "Article", title: "Audit sécurité application mobile iOS et Android : méthodologie OWASP MASVS", desc: "Réaliser un audit de sécurité d'application mobile : OWASP MASVS/MASTG, stockage local, communications réseau, authentification, analyse statique/dynamique et rapport.", date: "10 Juin 2026", slug: "/actualites/audit-securite-application-mobile-ios-android", img: imgAudit },
  { tag: "Article", title: "Sécurité OT & ICS : protéger les environnements industriels", desc: "Modèle Purdue, IEC 62443, segmentation IT/OT, monitoring passif des protocoles industriels (Modbus, OPC-UA), conformité NIS2 et plan d'action en 10 étapes pour les industriels.", date: "12 Mai 2026", slug: "/actualites/securite-ot-ics-industrielle-guide", img: imgOT },
  { tag: "Article", title: "Sauvegarde immuable & règle 3-2-1-1-0 : la dernière ligne de défense", desc: "Stratégie anti-ransomware : règle 3-2-1-1-0, immuabilité WORM/Object Lock, air gap, RTO/RPO, tests de restauration et 10 bonnes pratiques pour PME et ETI.", date: "8 Mai 2026", slug: "/actualites/sauvegarde-immuable-3-2-1-guide-pme", img: imgBackup },
  { tag: "Article", title: "IA et cybersécurité : opportunités, risques et bonnes pratiques", desc: "Usages défensifs de l'IA, nouvelles menaces (deepfake, prompt injection, shadow AI), cadre AI Act et ISO 42001, plan d'action en 8 étapes pour les PME et ETI.", date: "5 Mai 2026", slug: "/actualites/ia-cybersecurite-guide-pme", img: imgIA },
  { tag: "Article", title: "Sécurité Cloud AWS : guide complet pour les PME et ETI", desc: "Modèle de responsabilité partagée, IAM, GuardDuty, CloudTrail, chiffrement KMS, hardening VPC, conformité RGPD/NIS2 et 15 bonnes pratiques pour sécuriser votre environnement AWS.", date: "22 Avril 2026", slug: "/actualites/securite-cloud-aws-guide-pme", img: imgAWS },
  { tag: "Article", title: "SOC managé et MDR : guide pour les PME et ETI", desc: "Différences SOC managé / MDR / XDR, services à exiger, prix moyens 2026, 8 critères de choix et erreurs à éviter pour externaliser sa supervision sécurité 24/7.", date: "20 Avril 2026", slug: "/actualites/soc-manage-mdr-guide-pme", img: imgSOC },
  { tag: "Article", title: "Cyber-assurance : guide complet pour les PME et ETI", desc: "Garanties (RC, dommages, rançon, frais de gestion de crise), exclusions, prix 2026, obligations LPM 2023 et 12 mesures attendues par les assureurs pour souscrire.", date: "18 Avril 2026", slug: "/actualites/cyber-assurance-guide-pme-eti", img: imgCyberAssurance },
  { tag: "Article", title: "Zero Trust : guide d'implémentation pour les PME et ETI", desc: "Comprendre les 5 piliers du Zero Trust, feuille de route en 7 étapes, technologies (ZTNA, MFA, micro-segmentation), bénéfices mesurables et erreurs à éviter.", date: "15 Avril 2026", slug: "/actualites/zero-trust-architecture-guide-pme", img: imgZeroTrust },
  { tag: "Article", title: "Sécuriser Microsoft 365 : guide complet pour les PME", desc: "15 mesures essentielles, MFA, accès conditionnel, Defender, Purview, gestion des partages externes et plan d'action en 30 jours pour sécuriser votre tenant.", date: "13 Avril 2026", slug: "/actualites/securiser-microsoft-365-pme", img: imgM365 },
  { tag: "Article", title: "Spear-phishing & BEC : se protéger des attaques email avancées", desc: "Techniques 2025 (AiTM, deepfake, quishing), 12 mesures techniques, programme de sensibilisation et plan de réponse en cas de fraude pour les PME.", date: "12 Avril 2026", slug: "/actualites/spear-phishing-bec-guide-protection-pme", img: imgPhishing },
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
