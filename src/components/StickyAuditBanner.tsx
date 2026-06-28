import { useState } from "react";
import { X, Calendar } from "lucide-react";

const StickyAuditBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm font-heading">
        <Calendar className="h-4 w-4 flex-shrink-0 hidden sm:block" />
        <span className="font-medium">
          🎯 Audit cybersécurité gratuit de 15 min — Identifiez vos risques sans engagement
        </span>
        <a
          href="https://calendly.com/lakaoub/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Prendre RDV →
        </a>
        <button
          onClick={() => setVisible(false)}
          className="ml-2 hover:opacity-70 transition-opacity flex-shrink-0"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyAuditBanner;
