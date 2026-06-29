import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Shield, Bug, Search, AlertTriangle, Settings } from "lucide-react";

const SsdlcSecuriteDevs = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SSDLC : intégrer la sécurité dans le cycle de développement logiciel",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-29",
    "dateModified": "2026-06-29",
    "description": "SSDLC (Secure Software Development Life Cycle) : threat modeling STRIDE, SAST/DAST, SCA, tests de sécurité en CI/CD, formation des développeurs et DevSecOps pour les équipes."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SSDLC : intégrer la sécurité dans le cycle de développement logiciel"
        description="Secure SDLC complet : threat modeling STRIDE/PASTA, SAST (Semgrep, SonarQube), DAST (OWASP ZAP), SCA (Snyk, OWASP Dependency-Check), secret scanning et DevSecOps."
        canonical="/actualites/ssdlc-securite-cycle-developpement"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">DevSecOps</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-29">29 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-gradient">SSDLC</span> : intégrer la sécurité dans le cycle de développement logiciel
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Le coût de correction d'une vulnérabilité augmente exponentiellement selon la phase de détection : 1x en design, 6x en développement, 15x en QA, 100x en production. Le Secure Software Development Life Cycle (SSDLC) intègre la sécurité à chaque étape du développement, réduisant à la fois les coûts de remédiation et la surface d'attaque. Voici comment le mettre en place concrètement.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Pourquoi le développement est le maillon faible</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La grande majorité des incidents de sécurité impliquent une vulnérabilité dans le code applicatif ou ses dépendances :
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Injections (SQL, XSS, Command) :</strong> des entrées non validées passées directement aux interprètes. Restent dans le OWASP Top 10 depuis 2010 malgré leur prévention triviale.</li>
                <li><strong className="text-foreground">Dépendances vulnérables :</strong> Log4Shell, Spring4Shell, XZ Utils — des bibliothèques tierces avec des CVE critiques présentes dans des milliers d'applications. La supply chain logicielle est devenue un vecteur d'attaque majeur.</li>
                <li><strong className="text-foreground">Secrets codés en dur :</strong> clés API, mots de passe, tokens dans le code source ou les fichiers de configuration commités dans Git. Visibles pour toujours dans l'historique Git même après suppression.</li>
                <li><strong className="text-foreground">Logique métier défaillante :</strong> contournement de workflows, race conditions, IDOR — des vulnérabilités liées à des erreurs de conception que les scanners automatiques ne détectent pas.</li>
                <li><strong className="text-foreground">Composants open source non maintenus :</strong> des projets abandonnés utilisés en production, sans correctifs pour les nouvelles CVE.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Phase Design : Threat Modeling</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le threat modeling identifie les menaces potentielles avant d'écrire la première ligne de code. Réaliser cette analyse en phase de design est la mesure la plus rentable du SSDLC.
              </p>
              <h3 className="font-heading text-xl font-semibold mb-3">Méthode STRIDE</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">S - Spoofing :</strong> usurpation d'identité (attaquant se faisant passer pour un utilisateur légitime). Contre-mesure : authentification forte.</li>
                <li><strong className="text-foreground">T - Tampering :</strong> modification non autorisée de données. Contre-mesure : intégrité des données, signatures.</li>
                <li><strong className="text-foreground">R - Repudiation :</strong> nier avoir effectué une action. Contre-mesure : logs d'audit non répudiables.</li>
                <li><strong className="text-foreground">I - Information Disclosure :</strong> fuite de données sensibles. Contre-mesure : chiffrement, contrôle d'accès.</li>
                <li><strong className="text-foreground">D - Denial of Service :</strong> rendre le service indisponible. Contre-mesure : rate limiting, scalabilité.</li>
                <li><strong className="text-foreground">E - Elevation of Privilege :</strong> accès non autorisé à des fonctions élevées. Contre-mesure : moindre privilège, RBAC.</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Process STRIDE en pratique</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Créer un diagramme de flux de données (DFD) de la feature : acteurs, processus, datastores, flux de données</li>
                <li>Identifier les limites de confiance (trust boundaries) entre les composants</li>
                <li>Pour chaque flux traversant une limite de confiance, appliquer la grille STRIDE</li>
                <li>Documenter les menaces identifiées avec leur probabilité et impact</li>
                <li>Définir les contre-mesures et les stories de sécurité à ajouter au backlog</li>
                <li>Outils : Microsoft Threat Modeling Tool (gratuit), OWASP Threat Dragon, draw.io</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Phase Développement : SAST</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'analyse statique (SAST — Static Application Security Testing) analyse le code source sans l'exécuter pour détecter des patterns vulnérables.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Semgrep :</strong> outil SAST open source multi-langages avec des règles communautaires pour détecter les injections SQL, XSS, désérialisations non sécurisées, et OWASP Top 10. Rapide, faible taux de faux positifs, intégrable dans la CI/CD.</li>
                <li><strong className="text-foreground">SonarQube / SonarCloud :</strong> plateforme d'analyse statique complète avec qualité de code + sécurité. Quality Gates pour bloquer les builds avec des "Security Hotspots" non résolus.</li>
                <li><strong className="text-foreground">CodeQL (GitHub Advanced Security) :</strong> analyse sémantique du code permettant de détecter des vulnérabilités complexes en traitant le code comme une base de données requêtable. Intégré dans GitHub Actions.</li>
                <li><strong className="text-foreground">Bandit (Python) / Gosec (Go) / ESLint-plugin-security (JavaScript) :</strong> analyseurs spécifiques aux langages pour les vulnérabilités communes.</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Intégration SAST dans les IDE</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>Plugin Semgrep ou SonarLint dans VS Code / IntelliJ pour détecter les vulnérabilités en temps réel pendant le développement</li>
                <li>Pre-commit hooks : exécuter un scan SAST rapide avant chaque commit (Semgrep en mode rapide)</li>
                <li>GitHub Actions / GitLab CI : scan SAST complet sur chaque PR avec annotations dans la code review</li>
                <li>Principe : détecter le plus tôt possible — "shift left security"</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Bug className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">SCA et Secrets Scanning</h2>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Software Composition Analysis (SCA)</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Snyk :</strong> détection des CVE dans les dépendances (npm, pip, Maven, Go modules) avec des corrections automatiques via PRs. Intégration GitHub/GitLab/Azure DevOps native.</li>
                <li><strong className="text-foreground">OWASP Dependency-Check :</strong> outil open source qui analyse les dépendances contre la NVD (National Vulnerability Database). Plugin Maven, Gradle, et CLI.</li>
                <li><strong className="text-foreground">Dependabot (GitHub) :</strong> mises à jour automatiques des dépendances vulnérables avec PRs. Gratuit pour les repos GitHub.</li>
                <li><strong className="text-foreground">SBOM generation :</strong> générer un Software Bill of Materials (SPDX ou CycloneDX) à chaque build pour tracer toutes les dépendances et versions exactes.</li>
              </ul>
              <h3 className="font-heading text-xl font-semibold mb-3">Secrets Scanning</h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Gitleaks :</strong> outil open source qui scanne l'historique Git complet pour détecter les secrets commités (clés AWS, tokens GitHub, API keys, passwords). Utilisable en pre-commit hook et en CI/CD.</li>
                <li><strong className="text-foreground">TruffleHog :</strong> scanne Git, S3, GitHub, GitLab, CircleCI pour les secrets exposés. Version Enterprise avec vérification active des secrets (teste si le secret est encore valide).</li>
                <li><strong className="text-foreground">GitHub Secret Scanning :</strong> protection native GitHub qui détecte automatiquement les secrets connus dans les repos et les bloque avant le push.</li>
                <li><strong className="text-foreground">Rotation immédiate :</strong> quand un secret est détecté dans Git, le considérer comme compromis et le révoquer immédiatement — même si le commit est supprimé, il reste dans l'historique et peut avoir été forké.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Phase Test : DAST et pentest</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">DAST (Dynamic Application Security Testing) :</strong> tests d'une application en cours d'exécution. OWASP ZAP (gratuit) ou Burp Suite Enterprise pour scanner automatiquement les endpoints HTTP, détecter les injections, XSS, et mauvaises configurations.</li>
                <li><strong className="text-foreground">ZAP dans la CI/CD :</strong> OWASP ZAP en mode automatisé dans les pipelines pour les tests de régression de sécurité — idéal pour les environnements de staging.</li>
                <li><strong className="text-foreground">Pentest à chaque release majeure :</strong> faire appel à des pentesters externes (PASSI) pour les fonctionnalités critiques (paiement, authentification, accès données sensibles) avant chaque version majeure.</li>
                <li><strong className="text-foreground">Bug Bounty :</strong> programme de divulgation responsable via HackerOne ou Bugcrowd pour les applications publiques — complément aux tests internes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Formation et culture sécurité</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Security Champions :</strong> désigner un développeur référent sécurité par équipe (Security Champion) — pont entre l'équipe sécurité et les développeurs, pas un expert mais un relais formé.</li>
                <li><strong className="text-foreground">Formation OWASP Top 10 :</strong> formation obligatoire aux 10 vulnérabilités les plus critiques pour tous les développeurs, avec des labs pratiques (DVWA, WebGoat, HackTheBox).</li>
                <li><strong className="text-foreground">Code review sécurité :</strong> checklist de sécurité incluse dans le processus de code review (validation des entrées, cryptographie, gestion des erreurs, logs sensibles).</li>
                <li><strong className="text-foreground">Secure coding standards :</strong> guidelines spécifiques au langage (OWASP Cheat Sheet Series) intégrées dans les standards de développement de l'équipe.</li>
                <li><strong className="text-foreground">Métriques SSDLC :</strong> mesurer le temps moyen de correction des vulnérabilités, le taux de faux positifs des outils SAST, le nombre de vulnérabilités détectées par phase.</li>
              </ul>
            </section>

            <div className="mt-16 p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
              <h3 className="font-heading text-xl font-bold mb-3">Mise en place d'un SSDLC pour votre équipe</h3>
              <p className="text-muted-foreground mb-6">Nos experts accompagnent vos équipes dans l'intégration de la sécurité tout au long du cycle de développement : audit des pratiques actuelles, sélection et intégration des outils SAST/DAST/SCA, formation des développeurs.</p>
              <Link to="/contact" className="btn-primary">Parler à un expert DevSecOps</Link>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default SsdlcSecuriteDevs;
