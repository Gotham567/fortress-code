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
import MentionsLegales from "./pages/MentionsLegales.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import RSE from "./pages/RSE.tsx";
import Glossaire from "./pages/Glossaire.tsx";
import FAQ from "./pages/FAQ.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Cities
import AuditSecuriteToulon from "./pages/cities/AuditSecuriteToulon.tsx";
import AuditSecuriteAixEnProvence from "./pages/cities/AuditSecuriteAixEnProvence.tsx";
import AuditSecuriteBrest from "./pages/cities/AuditSecuriteBrest.tsx";
import AuditSecuriteDijon from "./pages/cities/AuditSecuriteDijon.tsx";
import AuditSecuriteAngers from "./pages/cities/AuditSecuriteAngers.tsx";
import AuditSecuriteSaintEtienne from "./pages/cities/AuditSecuriteSaintEtienne.tsx";
import AuditSecuriteLeMans from "./pages/cities/AuditSecuriteLeMans.tsx";
import AuditSecuriteAmiens from "./pages/cities/AuditSecuriteAmiens.tsx";
import AuditSecuriteTours from "./pages/cities/AuditSecuriteTours.tsx";
import AuditSecuriteLimoges from "./pages/cities/AuditSecuriteLimoges.tsx";
import AuditSecuriteMetz from "./pages/cities/AuditSecuriteMetz.tsx";
import AuditSecuriteNancy from "./pages/cities/AuditSecuriteNancy.tsx";
import AuditSecuriteCaen from "./pages/cities/AuditSecuriteCaen.tsx";
import AuditSecuriteOrleans from "./pages/cities/AuditSecuriteOrleans.tsx";
import AuditSecuriteReims from "./pages/cities/AuditSecuriteReims.tsx";
import AuditSecuritePau from "./pages/cities/AuditSecuritePau.tsx";
import AuditSecuritePerpignan from "./pages/cities/AuditSecuritePerpignan.tsx";
import AuditSecuriteBesancon from "./pages/cities/AuditSecuriteBesancon.tsx";
import AuditSecuriteAvignon from "./pages/cities/AuditSecuriteAvignon.tsx";
import AuditSecuriteLaRochelle from "./pages/cities/AuditSecuriteLaRochelle.tsx";
import AuditSecuriteNimes from "./pages/cities/AuditSecuriteNimes.tsx";
import AuditSecuriteAnnecy from "./pages/cities/AuditSecuriteAnnecy.tsx";
import AuditSecuriteColmar from "./pages/cities/AuditSecuriteColmar.tsx";
import AuditSecuriteBordeaux from "./pages/cities/AuditSecuriteBordeaux.tsx";
import AuditSecuriteMontpellier from "./pages/cities/AuditSecuriteMontpellier.tsx";
import AuditSecuriteBayonne from "./pages/cities/AuditSecuriteBayonne.tsx";
import AuditSecuriteValence from "./pages/cities/AuditSecuriteValence.tsx";
import AuditSecuritePoitiers from "./pages/cities/AuditSecuritePoitiers.tsx";
import AuditSecuriteDunkerque from "./pages/cities/AuditSecuriteDunkerque.tsx";
import AuditSecuriteTroyes from "./pages/cities/AuditSecuriteTroyes.tsx";
import AuditSecuriteParis from "./pages/cities/AuditSecuriteParis.tsx";
import AuditSecuriteLyon from "./pages/cities/AuditSecuriteLyon.tsx";
import AuditSecuriteMarseille from "./pages/cities/AuditSecuriteMarseille.tsx";
import AuditSecuriteToulouse from "./pages/cities/AuditSecuriteToulouse.tsx";
import AuditSecuriteNantes from "./pages/cities/AuditSecuriteNantes.tsx";
import AuditSecuriteLille from "./pages/cities/AuditSecuriteLille.tsx";
import AuditSecuriteNice from "./pages/cities/AuditSecuriteNice.tsx";
import AuditSecuriteRennes from "./pages/cities/AuditSecuriteRennes.tsx";
import AuditSecuriteStrasbourg from "./pages/cities/AuditSecuriteStrasbourg.tsx";
import AuditSecuriteGrenoble from "./pages/cities/AuditSecuriteGrenoble.tsx";
import AuditSecuriteRouen from "./pages/cities/AuditSecuriteRouen.tsx";
import AuditSecuriteClermontFerrand from "./pages/cities/AuditSecuriteClermontFerrand.tsx";

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
import IACybersecurite from "./pages/articles/IACybersecurite.tsx";
import SauvegardeImmuable from "./pages/articles/SauvegardeImmuable.tsx";
import SecuriteOTICS from "./pages/articles/SecuriteOTICS.tsx";
import OwaspTop10 from "./pages/articles/OwaspTop10.tsx";
import PentestActiveDirectory from "./pages/articles/PentestActiveDirectory.tsx";
import BugBountyProgramme from "./pages/articles/BugBountyProgramme.tsx";
import SimulationPhishing from "./pages/articles/SimulationPhishing.tsx";
import AuditSecuriteMobile from "./pages/articles/AuditSecuriteMobile.tsx";

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
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/glossaire" element={<Glossaire />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Cities */}
          <Route path="/cybersecurite-paris" element={<AuditSecuriteParis />} />
          <Route path="/cybersecurite-lyon" element={<AuditSecuriteLyon />} />
          <Route path="/cybersecurite-marseille" element={<AuditSecuriteMarseille />} />
          <Route path="/cybersecurite-toulouse" element={<AuditSecuriteToulouse />} />
          <Route path="/cybersecurite-nantes" element={<AuditSecuriteNantes />} />
          <Route path="/cybersecurite-lille" element={<AuditSecuriteLille />} />
          <Route path="/cybersecurite-nice" element={<AuditSecuriteNice />} />
          <Route path="/cybersecurite-rennes" element={<AuditSecuriteRennes />} />
          <Route path="/cybersecurite-strasbourg" element={<AuditSecuriteStrasbourg />} />
          <Route path="/cybersecurite-grenoble" element={<AuditSecuriteGrenoble />} />
          <Route path="/cybersecurite-rouen" element={<AuditSecuriteRouen />} />
          <Route path="/cybersecurite-clermont-ferrand" element={<AuditSecuriteClermontFerrand />} />
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
          <Route path="/actualites/ia-cybersecurite-guide-pme" element={<IACybersecurite />} />
          <Route path="/actualites/sauvegarde-immuable-3-2-1-guide-pme" element={<SauvegardeImmuable />} />
          <Route path="/actualites/securite-ot-ics-industrielle-guide" element={<SecuriteOTICS />} />
          <Route path="/actualites/owasp-top-10-guide-securite-web" element={<OwaspTop10 />} />
          <Route path="/actualites/pentest-active-directory-guide" element={<PentestActiveDirectory />} />
          <Route path="/actualites/bug-bounty-programme-entreprise-guide" element={<BugBountyProgramme />} />
          <Route path="/actualites/simulation-phishing-campagne-sensibilisation" element={<SimulationPhishing />} />
          <Route path="/actualites/audit-securite-application-mobile-ios-android" element={<AuditSecuriteMobile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="/audit-securite-toulon" element={<AuditSecuriteToulon />} />
          <Route path="/audit-securite-aix-en-provence" element={<AuditSecuriteAixEnProvence />} />
          <Route path="/audit-securite-brest" element={<AuditSecuriteBrest />} />
          <Route path="/audit-securite-dijon" element={<AuditSecuriteDijon />} />
          <Route path="/audit-securite-angers" element={<AuditSecuriteAngers />} />
          <Route path="/audit-securite-saint-etienne" element={<AuditSecuriteSaintEtienne />} />
          <Route path="/audit-securite-le-mans" element={<AuditSecuriteLeMans />} />
          <Route path="/audit-securite-amiens" element={<AuditSecuriteAmiens />} />
          <Route path="/audit-securite-tours" element={<AuditSecuriteTours />} />
          <Route path="/audit-securite-limoges" element={<AuditSecuriteLimoges />} />
          <Route path="/audit-securite-metz" element={<AuditSecuriteMetz />} />
          <Route path="/audit-securite-nancy" element={<AuditSecuriteNancy />} />
          <Route path="/audit-securite-caen" element={<AuditSecuriteCaen />} />
          <Route path="/audit-securite-orleans" element={<AuditSecuriteOrleans />} />
          <Route path="/audit-securite-reims" element={<AuditSecuriteReims />} />
          <Route path="/audit-securite-pau" element={<AuditSecuritePau />} />
          <Route path="/audit-securite-perpignan" element={<AuditSecuritePerpignan />} />
          <Route path="/audit-securite-besancon" element={<AuditSecuriteBesancon />} />
          <Route path="/audit-securite-avignon" element={<AuditSecuriteAvignon />} />
          <Route path="/audit-securite-la-rochelle" element={<AuditSecuriteLaRochelle />} />
          <Route path="/audit-securite-nimes" element={<AuditSecuriteNimes />} />
          <Route path="/audit-securite-annecy" element={<AuditSecuriteAnnecy />} />
          <Route path="/audit-securite-colmar" element={<AuditSecuriteColmar />} />
          <Route path="/audit-securite-bordeaux" element={<AuditSecuriteBordeaux />} />
          <Route path="/audit-securite-montpellier" element={<AuditSecuriteMontpellier />} />
          <Route path="/audit-securite-bayonne" element={<AuditSecuriteBayonne />} />
          <Route path="/audit-securite-valence" element={<AuditSecuriteValence />} />
          <Route path="/audit-securite-poitiers" element={<AuditSecuritePoitiers />} />
          <Route path="/audit-securite-dunkerque" element={<AuditSecuriteDunkerque />} />
          <Route path="/audit-securite-troyes" element={<AuditSecuriteTroyes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
