import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Audit from "./pages/Audit.tsx";
import Conseil from "./pages/Conseil.tsx";
import Cert from "./pages/Cert.tsx";
import Actualites from "./pages/Actualites.tsx";
import Contact from "./pages/Contact.tsx";
import AlgoLightHouse from "./pages/AlgoLightHouse.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import RSE from "./pages/RSE.tsx";
import Glossaire from "./pages/Glossaire.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/conseil" element={<Conseil />} />
          <Route path="/cert" element={<Cert />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/algolighthouse" element={<AlgoLightHouse />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/glossaire" element={<Glossaire />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
