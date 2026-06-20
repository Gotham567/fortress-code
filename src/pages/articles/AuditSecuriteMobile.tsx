import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import NewsletterSection from "@/components/NewsletterSection";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Smartphone, Lock, Code, Shield, Calendar } from "lucide-react";

const AuditSecuriteMobile = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Audit de sécurité application mobile iOS et Android : guide complet",
    "author": { "@type": "Organization", "name": "CyberSecure" },
    "datePublished": "2026-06-10",
    "dateModified": "2026-06-10",
    "description": "Méthode d'audit de sécurité des applications mobiles iOS et Android : OWASP Mobile Top 10, analyse statique et dynamique, reverse engineering, stockage local et communications réseau."
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Audit sécurité application mobile iOS Android : guide 2026"
        description="Auditer la sécurité de vos applications mobiles iOS et Android : OWASP Mobile Top 10, analyse statique (SAST), dynamique (DAST), reverse engineering, stockage insécurisé, communications réseau."
        canonical="/actualites/audit-securite-application-mobile-ios-android"
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
                <span className="text-primary text-xs font-heading font-semibold uppercase tracking-wider">Audit mobile</span>
                <time className="text-muted-foreground text-xs" dateTime="2026-06-10">10 Juin 2026</time>
              </div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                Audit sécurité <span className="text-gradient">application mobile</span> iOS et Android : guide 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Les applications mobiles traitent des données sensibles — coordonnées bancaires, données de santé, identifiants professionnels — sur des appareils souvent hors du contrôle de l'entreprise. Pourtant, leur sécurité est fréquemment négligée par rapport aux applications web. L'OWASP Mobile Top 10 recense les vulnérabilités les plus critiques des apps mobiles. Ce guide vous explique comment auditer vos applications iOS et Android.
              </p>
            </motion.div>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">OWASP Mobile Top 10 : les vulnérabilités critiques</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">M1 — Utilisation inappropriée des plateformes :</strong> Mauvaise utilisation des fonctionnalités de sécurité natives iOS/Android (permissions excessives, URL schemes non filtrés, mauvaise utilisation du Keychain/Keystore).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">M2 — Stockage de données non sécurisé :</strong> Données sensibles stockées en clair dans les fichiers de l'application, SharedPreferences, bases SQLite non chiffrées, logs applicatifs ou backups. C'est l'une des vulnérabilités les plus fréquentes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">M3 — Communications non sécurisées :</strong> Trafic en HTTP (non chiffré), mauvaise validation des certificats TLS permettant des attaques Man-in-the-Middle, certificats épinglés (certificate pinning) absents ou mal implémentés.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">M4 — Authentification non sécurisée :</strong> Mécanismes d'authentification insuffisants, absence de verrouillage après tentatives échouées, tokens de session stockés insécurisés ou non renouvelés.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">M5 — Cryptographie insuffisante :</strong> Utilisation d'algorithmes obsolètes (DES, RC4), clés codées en dur dans le code, IV fixes pour les chiffrements par blocs.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Méthodologie d'audit : analyse statique et dynamique</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Analyse statique (SAST) :</strong> Analyse du code sans exécution de l'application. Sur Android, nous analysons l'APK décompilé (via apktool, jadx) pour identifier les permissions déclarées, les secrets codés en dur (clés API, mots de passe), les bibliothèques vulnérables, les communications réseau définies et les failles de logique métier. Sur iOS, nous analysons l'IPA et le binaire compilé via Hopper ou Ghidra pour les applications sans accès au code source.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Analyse dynamique (DAST) :</strong> Analyse en cours d'exécution sur un appareil physique ou un émulateur. Nous interceptons les communications réseau via Burp Suite (avec certificate pinning bypassé si nécessaire via Frida), analysons le stockage de données créé lors de l'utilisation, monitorons les appels système, et testons les mécanismes d'authentification et de gestion des sessions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Reverse engineering :</strong> Décompilation du code pour comprendre la logique métier et identifier les failles algorithmiques. Outils principaux : jadx (Android), Hopper/Ghidra (iOS), Frida (hooking dynamique sur Android et iOS).
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Spécificités iOS vs Android</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">iOS :</strong> L'écosystème fermé Apple offre un modèle de sécurité plus strict (sandboxing, App Store review, Gatekeeper). Les vulnérabilités iOS sont souvent liées à une mauvaise utilisation du Keychain, des URL schemes mal sécurisés, l'absence de jailbreak detection, et des problèmes de confidentialité (accès excessifs aux photos, localisation, contacts). L'audit nécessite idéalement un accès au code source (Swift/Objective-C) ou un appareil jailbreaké pour les tests dynamiques avancés.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Android :</strong> L'écosystème ouvert Android offre plus de surface d'attaque : applications tierces (APK hors Play Store), permissions granulaires, Intents non filtrés, Content Providers exposés, WebViews avec JavaScript activé. La fragmentation des versions Android (nombreux appareils sous Android 8 ou 9) complexifie également le patching des vulnérabilités système.
              </p>
            </section>

            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Bonnes pratiques pour sécuriser votre app mobile</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utiliser le Keychain (iOS) ou le Keystore Android pour stocker tous les secrets (tokens, clés) — jamais dans SharedPreferences ou des fichiers en clair. Implémenter le certificate pinning pour les communications API critiques. Activer le root/jailbreak detection pour les applications à haute sensibilité. Chiffrer les bases de données locales (SQLCipher). Minimiser les permissions demandées (demander uniquement au moment où elles sont nécessaires). Mettre en place l'obfuscation du code (ProGuard/R8 pour Android, diverses techniques pour iOS). Intégrer un RASP (Runtime Application Self-Protection) pour les applications bancaires ou de santé.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Un audit de sécurité mobile complet (iOS + Android) prend généralement 8 à 15 jours selon la complexité de l'application. Il est fortement recommandé avant chaque release majeure et lors de changements d'architecture. Pour les applications traitant des données de paiement, l'audit est souvent requis par la norme PCI-DSS.
              </p>
            </section>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <time dateTime="2026-06-10">10 Juin 2026</time>
              <span>·</span>
              <span>13 min de lecture</span>
            </div>
          </div>
        </article>
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default AuditSecuriteMobile;
