import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cloud, ShieldCheck, KeyRound, Eye, AlertTriangle, CheckCircle2, Calendar, Layers } from "lucide-react";
import heroImg from "@/assets/articles/securite-cloud-aws.jpg";

const SecuriteCloudAWS = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sécurité Cloud AWS : guide complet pour les PME et ETI",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "description": "Guide complet pour sécuriser un environnement AWS : modèle de responsabilité partagée, IAM, CloudTrail, GuardDuty, chiffrement, conformité et 15 bonnes pratiques pour les PME et ETI."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sécurité Cloud AWS : guide complet PME et ETI"
        description="Sécuriser AWS : modèle de responsabilité partagée, IAM, GuardDuty, CloudTrail, chiffrement KMS, hardening VPC, conformité et 15 bonnes pratiques pour les PME et ETI."
        canonical="/actualites/securite-cloud-aws-guide-pme"
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
                <time className="text-muted-foreground text-xs" dateTime="2026-04-22">22 Avril 2026</time>
              </div>

              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">Sécurité Cloud AWS</span> : guide complet pour les PME et ETI
              </h1>

              <img src={heroImg} alt="Sécurité du cloud AWS" className="w-full rounded-xl mb-8 border border-border/40" width={1280} height={720} />

              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                <strong>Amazon Web Services (AWS)</strong> domine le marché du cloud public avec plus de <strong>32 % de parts de marché en 2025</strong> (source : Synergy Research). Mais selon Gartner, <strong>99 % des incidents de sécurité cloud d'ici 2026 seront dus à une mauvaise configuration côté client</strong>, pas à une faille AWS. Pour les PME et ETI, sécuriser un environnement AWS impose une discipline stricte sur les identités, le chiffrement et la supervision. Ce guide pratique présente les fondamentaux, les services natifs à activer et les 15 bonnes pratiques indispensables.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Le modèle de responsabilité partagée AWS</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprendre la frontière entre ce qu'AWS sécurise et ce que vous devez sécuriser est <strong>la première étape</strong>. AWS sécurise « <em>l'infrastructure du cloud</em> » (datacenters, hyperviseurs, services managés). Vous restez responsable de « <em>la sécurité dans le cloud</em> » : configuration des services, identités, chiffrement, données et applications.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold mb-2 text-primary">À la charge d'AWS</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Sécurité physique des datacenters</li>
                    <li>• Hyperviseurs et virtualisation</li>
                    <li>• Patching des services managés (RDS, Lambda…)</li>
                    <li>• Réseau global AWS</li>
                  </ul>
                </div>
                <div className="card-glass rounded-xl p-5">
                  <h3 className="font-heading font-semibold mb-2 text-primary">À votre charge</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Comptes, rôles IAM et politiques d'accès</li>
                    <li>• Configuration sécurisée (S3, EC2, VPC, RDS)</li>
                    <li>• Chiffrement des données et gestion des clés</li>
                    <li>• Patching des OS sur EC2, applications</li>
                    <li>• Logs, supervision et réponse à incident</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 7 risques AWS les plus fréquents</h2>
              </div>
              <div className="space-y-3">
                {[
                  { t: "Buckets S3 publics", d: "Première cause de fuites de données cloud (Capital One, Accenture, Twilio…). Données clients, sauvegardes, secrets exposés sur Internet." },
                  { t: "Clés d'accès IAM exposées", d: "Clés AWS versionnées par erreur sur GitHub. Détectées et exploitées en moins de 4 minutes en moyenne pour miner de la cryptomonnaie." },
                  { t: "Comptes root utilisés en production", d: "Pas de MFA, clés actives, droits illimités. Compromission = perte totale de l'environnement." },
                  { t: "Security Groups trop permissifs (0.0.0.0/0)", d: "Ports SSH/RDP/bases de données ouverts sur Internet. Compromission par bruteforce en quelques heures." },
                  { t: "Absence de chiffrement", d: "Volumes EBS, snapshots, RDS et S3 non chiffrés. Risque RGPD majeur." },
                  { t: "Logs CloudTrail désactivés", d: "Impossible de mener une investigation forensique en cas d'incident." },
                  { t: "Snapshots et AMI publics", d: "Partage involontaire d'images contenant des données ou des secrets." },
                ].map((r, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{r.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{r.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <KeyRound className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les 15 bonnes pratiques essentielles</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ces 15 mesures, alignées sur le <strong>CIS AWS Foundations Benchmark</strong> et les <strong>recommandations de l'ANSSI</strong>, couvrent 90 % de la surface d'attaque d'un environnement AWS de PME/ETI.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Activer la MFA sur le compte root et tous les utilisateurs IAM",
                  "Verrouiller les clés d'accès du compte root (jamais de clé active)",
                  "Adopter AWS Organizations + AWS SSO/Identity Center pour centraliser",
                  "Appliquer le principe du moindre privilège (politiques IAM restrictives)",
                  "Activer CloudTrail multi-régions vers un bucket S3 chiffré dédié",
                  "Activer GuardDuty (détection de menaces) sur toutes les régions",
                  "Activer AWS Config + règles de conformité (CIS, PCI, NIS2)",
                  "Activer Security Hub pour centraliser les findings",
                  "Bloquer le « Public Access » sur tous les buckets S3 par défaut",
                  "Chiffrer EBS, RDS, S3 et snapshots avec AWS KMS (CMK clients)",
                  "Restreindre les Security Groups (jamais de 0.0.0.0/0 sur SSH/RDP)",
                  "Utiliser Systems Manager Session Manager au lieu de SSH/RDP direct",
                  "Activer la rotation automatique des secrets via AWS Secrets Manager",
                  "Mettre en place AWS WAF + Shield Standard sur les applications web",
                  "Sauvegardes via AWS Backup avec rétention longue et copies cross-account",
                ].map((b, i) => (
                  <div key={i} className="card-glass rounded-xl p-4 flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Les services AWS de sécurité à activer en priorité</h2>
              </div>
              <div className="space-y-4">
                {[
                  { t: "AWS IAM Identity Center (ex-SSO)", d: "Authentification centralisée, MFA obligatoire, accès temporaires aux comptes via permission sets. Indispensable dès 2 comptes AWS." },
                  { t: "AWS CloudTrail", d: "Journalisation de toutes les actions API. Conserver 1 an minimum, idéalement dans un compte « Log Archive » dédié et chiffré." },
                  { t: "Amazon GuardDuty", d: "Détection managée des menaces (cryptomining, exfiltration, brute force, comportements anormaux IAM). Coût : ~3 % de votre facture AWS." },
                  { t: "AWS Security Hub", d: "Tableau de bord unifié des findings GuardDuty, Inspector, Config, Macie + benchmarks CIS, PCI-DSS, NIST." },
                  { t: "AWS Config", d: "Suivi de la conformité des configurations (ex : S3 chiffrés, MFA activée, ports ouverts). Auto-remediation possible." },
                  { t: "Amazon Inspector", d: "Scan automatique de vulnérabilités sur EC2, ECR (containers) et Lambda." },
                  { t: "AWS Macie", d: "Détection de données sensibles (PII, RGPD) dans les buckets S3 via machine learning." },
                  { t: "AWS WAF & Shield", d: "Protection des applications web contre OWASP Top 10 et DDoS volumétriques." },
                ].map((s, i) => (
                  <div key={i} className="card-glass rounded-xl p-5">
                    <h3 className="font-heading font-semibold text-primary mb-1">{s.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Architecture multi-comptes recommandée</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AWS recommande désormais une approche <strong>multi-comptes</strong> via AWS Organizations / Control Tower, même pour les PME. Cette segmentation limite drastiquement le rayon d'explosion en cas de compromission.
              </p>
              <div className="card-glass rounded-xl p-6">
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Compte management</strong> : facturation, Organizations, SSO uniquement</li>
                  <li>• <strong>Compte Log Archive</strong> : centralisation immuable de CloudTrail/Config</li>
                  <li>• <strong>Compte Security / Audit</strong> : Security Hub, GuardDuty délégué, accès en lecture</li>
                  <li>• <strong>Comptes Workloads</strong> : un par environnement (prod, recette, dev)</li>
                  <li>• <strong>Compte Shared Services</strong> : DNS, AD, outils transverses</li>
                </ul>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-xl md:text-2xl font-bold">Conformité : RGPD, NIS2, HDS, SecNumCloud</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AWS dispose de nombreuses certifications utiles aux PME/ETI françaises : <strong>ISO 27001/27017/27018, SOC 1/2/3, HDS</strong> (régions Paris). Attention cependant : aucune région AWS standard n'est <strong>SecNumCloud</strong>. Pour les données sensibles État/OIV/OSE, des alternatives qualifiées (OVH, Outscale, S3NS) doivent être étudiées.
              </p>
              <div className="card-glass rounded-xl p-6 border-l-4 border-primary">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>RGPD & extraterritorialité :</strong> AWS étant soumis au CLOUD Act américain, l'hébergement de données personnelles européennes nécessite une analyse d'impact (AIPD), un chiffrement avec clés conservées par le client (BYOK / XKS) et idéalement le choix de régions européennes (eu-west-3 Paris).
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14 card-glass rounded-2xl p-8 text-center glow-border">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Audit gratuit de votre environnement AWS</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                15 minutes d'échange pour identifier les principales failles de configuration de votre tenant AWS et les actions prioritaires à mettre en place. Sans engagement.
              </p>
              <a
                href="https://calendly.com/many-cyberconform/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary/90 transition-all"
              >
                Réserver mon audit gratuit
              </a>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-14">
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-4">Articles liés</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/actualites/zero-trust-architecture-guide-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Zero Trust : guide PME et ETI</h3>
                  <p className="text-muted-foreground text-sm">Architecture complémentaire à la sécurité cloud.</p>
                </Link>
                <Link to="/actualites/securiser-microsoft-365-pme" className="card-glass rounded-xl p-5 hover:border-primary/40 transition-all">
                  <h3 className="font-heading font-semibold text-foreground mb-1">Sécuriser Microsoft 365</h3>
                  <p className="text-muted-foreground text-sm">L'équivalent côté écosystème Microsoft.</p>
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

export default SecuriteCloudAWS;
