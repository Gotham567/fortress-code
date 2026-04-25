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
import FAQ from "./pages/FAQ.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Articles
import AuditCybersecurite from "./pages/articles/AuditCybersecurite.tsx";
import PentestEntreprise from "./pages/articles/PentestEntreprise.tsx";
import ChoisirPrestataire from "./pages/articles/ChoisirPrestataire.tsx";
import CybersecuritePME from "./pages/articles/CybersecuritePME.tsx";
import CoutAudit from "./pages/articles/CoutAudit.tsx";
import PentestVsAudit from "./pages/articles/PentestVsAudit.tsx";
import CyberattaquesPME from "./pages/articles/CyberattaquesPME.tsx";
import ApresCyberattaque from "./pages/articles/ApresCyberattaque.tsx";
import AuditObligatoire from "./pages/articles/AuditObligatoire.tsx";
import PreparerPentest from "./pages/articles/PreparerPentest.tsx";
import DirectiveNIS2 from "./pages/articles/DirectiveNIS2.tsx";
import RSSIExternalise from "./pages/articles/RSSIExternalise.tsx";
import SecuriserTeletravail from "./pages/articles/SecuriserTeletravail.tsx";
import PlanContinuite from "./pages/articles/PlanContinuite.tsx";
import FormationCybersecurite from "./pages/articles/FormationCybersecurite.tsx";
import ConformiteRGPD from "./pages/articles/ConformiteRGPD.tsx";
import RansomwarePME from "./pages/articles/RansomwarePME.tsx";
import EDRXDRProtection from "./pages/articles/EDRXDRProtection.tsx";
import AuditActiveDirectory from "./pages/articles/AuditActiveDirectory.tsx";
import ZeroTrust from "./pages/articles/ZeroTrust.tsx";
import SecuriteMicrosoft365 from "./pages/articles/SecuriteMicrosoft365.tsx";
import SpearPhishing from "./pages/articles/SpearPhishing.tsx";
import SecuriteCloudAWS from "./pages/articles/SecuriteCloudAWS.tsx";
import SOCManage from "./pages/articles/SOCManage.tsx";
import CyberAssurance from "./pages/articles/CyberAssurance.tsx";

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
          <Route path="/faq" element={<FAQ />} />
          {/* Articles */}
          <Route path="/actualites/audit-cybersecurite-guide" element={<AuditCybersecurite />} />
          <Route path="/actualites/pentest-entreprise-guide-pme" element={<PentestEntreprise />} />
          <Route path="/actualites/choisir-prestataire-cybersecurite" element={<ChoisirPrestataire />} />
          <Route path="/actualites/cybersecurite-pme-par-ou-commencer" element={<CybersecuritePME />} />
          <Route path="/actualites/cout-audit-cybersecurite-2025" element={<CoutAudit />} />
          <Route path="/actualites/pentest-vs-audit-securite-differences" element={<PentestVsAudit />} />
          <Route path="/actualites/10-cyberattaques-frequentes-pme" element={<CyberattaquesPME />} />
          <Route path="/actualites/que-faire-apres-cyberattaque" element={<ApresCyberattaque />} />
          <Route path="/actualites/audit-cybersecurite-obligatoire" element={<AuditObligatoire />} />
          <Route path="/actualites/comment-se-preparer-pentest" element={<PreparerPentest />} />
          <Route path="/actualites/directive-nis2-guide-pme-eti" element={<DirectiveNIS2 />} />
          <Route path="/actualites/rssi-externalise-guide" element={<RSSIExternalise />} />
          <Route path="/actualites/securiser-teletravail-entreprise" element={<SecuriserTeletravail />} />
          <Route path="/actualites/pca-pra-cybersecurite-guide" element={<PlanContinuite />} />
          <Route path="/actualites/formation-sensibilisation-cybersecurite-entreprise" element={<FormationCybersecurite />} />
          <Route path="/actualites/conformite-rgpd-cybersecurite-guide-pme" element={<ConformiteRGPD />} />
          <Route path="/actualites/ransomware-pme-guide-prevention-reponse" element={<RansomwarePME />} />
          <Route path="/actualites/edr-xdr-protection-endpoint-pme" element={<EDRXDRProtection />} />
          <Route path="/actualites/audit-active-directory-securite-pme" element={<AuditActiveDirectory />} />
          <Route path="/actualites/zero-trust-architecture-guide-pme" element={<ZeroTrust />} />
          <Route path="/actualites/securiser-microsoft-365-pme" element={<SecuriteMicrosoft365 />} />
          <Route path="/actualites/spear-phishing-bec-guide-protection-pme" element={<SpearPhishing />} />
          <Route path="/actualites/securite-cloud-aws-guide-pme" element={<SecuriteCloudAWS />} />
          <Route path="/actualites/soc-manage-mdr-guide-pme" element={<SOCManage />} />
          <Route path="/actualites/cyber-assurance-guide-pme-eti" element={<CyberAssurance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
