import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Page non trouvée (404)"
        description="La page que vous recherchez n'existe pas. Retournez à l'accueil de CyberSecure pour découvrir nos services de cybersécurité."
      />
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
          <p className="font-heading text-2xl font-semibold text-foreground mb-4">Page non trouvée</p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée. Découvrez nos services de cybersécurité depuis la page d'accueil.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default NotFound;
