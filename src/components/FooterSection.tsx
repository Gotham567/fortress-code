import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">
              cyber<span className="text-primary">secure</span>
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
            <Link to="/rse" className="hover:text-primary transition-colors">Démarche RSE</Link>
            <Link to="/glossaire" className="hover:text-primary transition-colors">Glossaire</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:0426782486" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              04 26 78 24 86
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-xs">
            © AlgoSecure 2026 — Spécialistes en sécurité informatique à Lyon, Paris, Saint-Étienne et partout en France
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
