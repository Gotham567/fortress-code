import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Audit", href: "/audit" },
  { label: "Conseil", href: "/conseil" },
  { label: "CERT", href: "/cert" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="CyberSecure - Accueil">
          <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
          <span className="font-heading text-xl font-bold text-foreground tracking-tight">
            cyber<span className="text-primary">secure</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/lakaoub/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary border border-primary/30 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors font-heading"
          >
            Audit gratuit
          </a>
          <Link to="/contact">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              Contactez-nous
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-colors ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button className="bg-primary text-primary-foreground w-full font-heading">Contactez-nous</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
