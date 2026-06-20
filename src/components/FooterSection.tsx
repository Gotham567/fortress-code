import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-20" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="font-heading text-lg font-bold text-foreground">
                cyber<span className="text-primary">secure</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cabinet de conseil indépendant en cybersécurité, qualifié PASSI et certifié ISO 27001. Lyon, Paris et partout en France.
            </p>
          </div>

          <nav aria-label="Services">
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/audit" className="hover:text-primary transition-colors">Audit & pentest</Link></li>
              <li><Link to="/conseil" className="hover:text-primary transition-colors">Conseil cybersécurité</Link></li>
              <li><Link to="/cert" className="hover:text-primary transition-colors">CERT — Réponse à incident</Link></li>
              <li><Link to="/algolighthouse" className="hover:text-primary transition-colors">AlgoLightHouse</Link></li>
            </ul>
          </nav>

          <nav aria-label="Entreprise">
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/qui-sommes-nous" className="hover:text-primary transition-colors">Qui sommes-nous</Link></li>
              <li><Link to="/actualites" className="hover:text-primary transition-colors">Actualités & blog</Link></li>
              <li><Link to="/rse" className="hover:text-primary transition-colors">Démarche RSE</Link></li>
              <li><Link to="/glossaire" className="hover:text-primary transition-colors">Glossaire cybersécurité</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4">Écosystème</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://cloud-secure.fr" target="_blank" rel="noopener" className="hover:text-primary transition-colors">Cloud Secure — Sécurité cloud</a></li>
              <li><a href="https://cyberconform.fr" target="_blank" rel="noopener" className="hover:text-primary transition-colors">CyberConform — Conformité cyber</a></li>
            </ul>
            <h3 className="font-heading font-semibold text-foreground text-sm mb-4 mt-6">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:0426782486" className="hover:text-primary transition-colors">04 26 78 24 86</a></li>
              <li><a href="mailto:contact@cybersecure.fr" className="hover:text-primary transition-colors">contact@cybersecure.fr</a></li>
              <li className="text-xs pt-2">40 rue de Bruxelles, 69009 Lyon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 pb-6">
          <p className="text-xs font-semibold text-foreground mb-3">Nos interventions en France</p>
          <nav aria-label="Villes desservies" className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              ["Audit Paris", "/cybersecurite-paris"],
              ["Audit Lyon", "/cybersecurite-lyon"],
              ["Audit Marseille", "/cybersecurite-marseille"],
              ["Audit Toulouse", "/cybersecurite-toulouse"],
              ["Audit Nantes", "/cybersecurite-nantes"],
              ["Audit Lille", "/cybersecurite-lille"],
              ["Audit Nice", "/cybersecurite-nice"],
              ["Audit Rennes", "/cybersecurite-rennes"],
              ["Audit Strasbourg", "/cybersecurite-strasbourg"],
              ["Audit Grenoble", "/cybersecurite-grenoble"],
              ["Audit Rouen", "/cybersecurite-rouen"],
              ["Audit Clermont-Ferrand", "/cybersecurite-clermont-ferrand"],
            ].map(([label, href]) => (
              <Link key={href} to={href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © CyberSecure {new Date().getFullYear()} — Cabinet d'audit et pentest cybersécurité à Lyon, Paris, Toulouse, Lille et dans toute la France
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
