import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="card-glass rounded-2xl p-6 border border-border shadow-2xl">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                  Respect de votre vie privée
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Nous utilisons des cookies essentiels au fonctionnement du site. En acceptant, vous autorisez également les cookies analytiques pour améliorer votre expérience.{" "}
                  <Link to="/politique-confidentialite" className="text-primary hover:underline">
                    En savoir plus
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={refuse}
                variant="outline"
                size="sm"
                className="flex-1 font-heading font-semibold text-xs"
              >
                Refuser
              </Button>
              <Button
                onClick={accept}
                size="sm"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-xs"
              >
                Accepter
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
