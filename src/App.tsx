import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Pages
const Index = lazy(() => import("./pages/Index.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Audit = lazy(() => import("./pages/Audit.tsx"));
const Conseil = lazy(() => import("./pages/Conseil.tsx"));
const Cert = lazy(() => import("./pages/Cert.tsx"));
const Actualites = lazy(() => import("./pages/Actualites.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales.tsx"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite.tsx"));
const RSE = lazy(() => import("./pages/RSE.tsx"));
const Glossaire = lazy(() => import("./pages/Glossaire.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Articles
const AuditCybersecurite = lazy(() => import("./pages/articles/AuditCybersecurite.tsx"));
const PentestEntreprise = lazy(() => import("./pages/articles/PentestEntreprise.tsx"));
const ChoisirPrestataire = lazy(() => import("./pages/articles/ChoisirPrestataire.tsx"));
const CybersecuritePME = lazy(() => import("./pages/articles/CybersecuritePME.tsx"));
const CoutAudit = lazy(() => import("./pages/articles/CoutAudit.tsx"));
const PentestVsAudit = lazy(() => import("./pages/articles/PentestVsAudit.tsx"));
const CyberattaquesPME = lazy(() => import("./pages/articles/CyberattaquesPME.tsx"));
const ApresCyberattaque = lazy(() => import("./pages/articles/ApresCyberattaque.tsx"));
const AuditObligatoire = lazy(() => import("./pages/articles/AuditObligatoire.tsx"));
const PreparerPentest = lazy(() => import("./pages/articles/PreparerPentest.tsx"));
const DirectiveNIS2 = lazy(() => import("./pages/articles/DirectiveNIS2.tsx"));
const RSSIExternalise = lazy(() => import("./pages/articles/RSSIExternalise.tsx"));
const SecuriserTeletravail = lazy(() => import("./pages/articles/SecuriserTeletravail.tsx"));
const PlanContinuite = lazy(() => import("./pages/articles/PlanContinuite.tsx"));
const FormationCybersecurite = lazy(() => import("./pages/articles/FormationCybersecurite.tsx"));
const ConformiteRGPD = lazy(() => import("./pages/articles/ConformiteRGPD.tsx"));
const RansomwarePME = lazy(() => import("./pages/articles/RansomwarePME.tsx"));
const EDRXDRProtection = lazy(() => import("./pages/articles/EDRXDRProtection.tsx"));
const AuditActiveDirectory = lazy(() => import("./pages/articles/AuditActiveDirectory.tsx"));
const ZeroTrust = lazy(() => import("./pages/articles/ZeroTrust.tsx"));
const SecuriteMicrosoft365 = lazy(() => import("./pages/articles/SecuriteMicrosoft365.tsx"));
const SpearPhishing = lazy(() => import("./pages/articles/SpearPhishing.tsx"));
const SecuriteCloudAWS = lazy(() => import("./pages/articles/SecuriteCloudAWS.tsx"));
const SOCManage = lazy(() => import("./pages/articles/SOCManage.tsx"));
const CyberAssurance = lazy(() => import("./pages/articles/CyberAssurance.tsx"));
const IACybersecurite = lazy(() => import("./pages/articles/IACybersecurite.tsx"));
const SauvegardeImmuable = lazy(() => import("./pages/articles/SauvegardeImmuable.tsx"));
const SecuriteOTICS = lazy(() => import("./pages/articles/SecuriteOTICS.tsx"));
const OwaspTop10 = lazy(() => import("./pages/articles/OwaspTop10.tsx"));
const PentestActiveDirectory = lazy(() => import("./pages/articles/PentestActiveDirectory.tsx"));
const BugBountyProgramme = lazy(() => import("./pages/articles/BugBountyProgramme.tsx"));
const SimulationPhishing = lazy(() => import("./pages/articles/SimulationPhishing.tsx"));
const AuditSecuriteMobile = lazy(() => import("./pages/articles/AuditSecuriteMobile.tsx"));
const VulnerabilitesCritiques = lazy(() => import("./pages/articles/VulnerabilitesCritiques.tsx"));
const AuditSecuriteApi = lazy(() => import("./pages/articles/AuditSecuriteApi.tsx"));
const ReconnaissanceOsint = lazy(() => import("./pages/articles/ReconnaissanceOsint.tsx"));
const PentestWifi = lazy(() => import("./pages/articles/PentestWifi.tsx"));
const ForensiqueNumerique = lazy(() => import("./pages/articles/ForensiqueNumerique.tsx"));
const LateralMovement = lazy(() => import("./pages/articles/LateralMovement.tsx"));
const CvssGestionVulnerabilites = lazy(() => import("./pages/articles/CvssGestionVulnerabilites.tsx"));
const SanctionsNIS2 = lazy(() => import("./pages/articles/SanctionsNIS2.tsx"));
const BudgetCybersecuritePME = lazy(() => import("./pages/articles/BudgetCybersecuritePME.tsx"));
const NotificationIncidentCyber = lazy(() => import("./pages/articles/NotificationIncidentCyber.tsx"));
const ChecklistCybersecurite = lazy(() => import("./pages/articles/ChecklistCybersecurite.tsx"));
const AuditAvantLeveedeFonds = lazy(() => import("./pages/articles/AuditAvantLeveedeFonds.tsx"));
const CyberPMESansDSI = lazy(() => import("./pages/articles/CyberPMESansDSI.tsx"));
const AuditExigeGrandCompte = lazy(() => import("./pages/articles/AuditExigeGrandCompte.tsx"));
const MaturiteCybersecurite = lazy(() => import("./pages/articles/MaturiteCybersecurite.tsx"));
const FinancementAuditCyber = lazy(() => import("./pages/articles/FinancementAuditCyber.tsx"));
const DoraEntrepriseFinanciere = lazy(() => import("./pages/articles/DoraEntrepriseFinanciere.tsx"));
const Article32RgpdSecurite = lazy(() => import("./pages/articles/Article32RgpdSecurite.tsx"));
const ScanVulnerabilitesReseau = lazy(() => import("./pages/articles/ScanVulnerabilitesReseau.tsx"));
const SecurisationRdpVpn = lazy(() => import("./pages/articles/SecurisationRdpVpn.tsx"));
const CyberResilienceActPme = lazy(() => import("./pages/articles/CyberResilienceActPme.tsx"));
const AuditSauvegardeEntreprise = lazy(() => import("./pages/articles/AuditSauvegardeEntreprise.tsx"));
const AuditMicrosoft365Securite = lazy(() => import("./pages/articles/AuditMicrosoft365Securite.tsx"));
const AuditSecuriteEmail = lazy(() => import("./pages/articles/AuditSecuriteEmail.tsx"));
const TestIntrusionPhysique = lazy(() => import("./pages/articles/TestIntrusionPhysique.tsx"));
const ThreatHuntingApt = lazy(() => import("./pages/articles/ThreatHuntingApt.tsx"));
const PentestApiRest = lazy(() => import("./pages/articles/PentestApiRest.tsx"));
const SecuriteEntraId = lazy(() => import("./pages/articles/SecuriteEntraId.tsx"));
const IncidentResponseForensique = lazy(() => import("./pages/articles/IncidentResponseForensique.tsx"));
const SsdlcSecuriteDevs = lazy(() => import("./pages/articles/SsdlcSecuriteDevs.tsx"));
const GestionVulnerabilitesPatch = lazy(() => import("./pages/articles/GestionVulnerabilitesPatch.tsx"));
const AuditSecuriteNordPasDeCalais = lazy(() => import("./pages/cities/AuditSecuriteNordPasDeCalais.tsx"));
const AuditSecuriteIleDeFrance = lazy(() => import("./pages/cities/AuditSecuriteIleDeFrance.tsx"));
const AuditSecuriteBretagne = lazy(() => import("./pages/cities/AuditSecuriteBretagne.tsx"));
const AuditSecuriteNormandie = lazy(() => import("./pages/cities/AuditSecuriteNormandie.tsx"));
const AuditSecuriteOccitanie = lazy(() => import("./pages/cities/AuditSecuriteOccitanie.tsx"));
const AuditSecuritePaca = lazy(() => import("./pages/cities/AuditSecuritePaca.tsx"));

// Cities
const AuditSecuriteParis = lazy(() => import("./pages/cities/AuditSecuriteParis.tsx"));
const AuditSecuriteLyon = lazy(() => import("./pages/cities/AuditSecuriteLyon.tsx"));
const AuditSecuriteMarseille = lazy(() => import("./pages/cities/AuditSecuriteMarseille.tsx"));
const AuditSecuriteToulouse = lazy(() => import("./pages/cities/AuditSecuriteToulouse.tsx"));
const AuditSecuriteNantes = lazy(() => import("./pages/cities/AuditSecuriteNantes.tsx"));
const AuditSecuriteLille = lazy(() => import("./pages/cities/AuditSecuriteLille.tsx"));
const AuditSecuriteNice = lazy(() => import("./pages/cities/AuditSecuriteNice.tsx"));
const AuditSecuriteRennes = lazy(() => import("./pages/cities/AuditSecuriteRennes.tsx"));
const AuditSecuriteStrasbourg = lazy(() => import("./pages/cities/AuditSecuriteStrasbourg.tsx"));
const AuditSecuriteGrenoble = lazy(() => import("./pages/cities/AuditSecuriteGrenoble.tsx"));
const AuditSecuriteRouen = lazy(() => import("./pages/cities/AuditSecuriteRouen.tsx"));
const AuditSecuriteClermontFerrand = lazy(() => import("./pages/cities/AuditSecuriteClermontFerrand.tsx"));
const AuditSecuriteToulon = lazy(() => import("./pages/cities/AuditSecuriteToulon.tsx"));
const AuditSecuriteAixEnProvence = lazy(() => import("./pages/cities/AuditSecuriteAixEnProvence.tsx"));
const AuditSecuriteBrest = lazy(() => import("./pages/cities/AuditSecuriteBrest.tsx"));
const AuditSecuriteDijon = lazy(() => import("./pages/cities/AuditSecuriteDijon.tsx"));
const AuditSecuriteAngers = lazy(() => import("./pages/cities/AuditSecuriteAngers.tsx"));
const AuditSecuriteSaintEtienne = lazy(() => import("./pages/cities/AuditSecuriteSaintEtienne.tsx"));
const AuditSecuriteLeMans = lazy(() => import("./pages/cities/AuditSecuriteLeMans.tsx"));
const AuditSecuriteAmiens = lazy(() => import("./pages/cities/AuditSecuriteAmiens.tsx"));
const AuditSecuriteTours = lazy(() => import("./pages/cities/AuditSecuriteTours.tsx"));
const AuditSecuriteLimoges = lazy(() => import("./pages/cities/AuditSecuriteLimoges.tsx"));
const AuditSecuriteMetz = lazy(() => import("./pages/cities/AuditSecuriteMetz.tsx"));
const AuditSecuriteNancy = lazy(() => import("./pages/cities/AuditSecuriteNancy.tsx"));
const AuditSecuriteCaen = lazy(() => import("./pages/cities/AuditSecuriteCaen.tsx"));
const AuditSecuriteOrleans = lazy(() => import("./pages/cities/AuditSecuriteOrleans.tsx"));
const AuditSecuriteReims = lazy(() => import("./pages/cities/AuditSecuriteReims.tsx"));
const AuditSecuritePau = lazy(() => import("./pages/cities/AuditSecuritePau.tsx"));
const AuditSecuritePerpignan = lazy(() => import("./pages/cities/AuditSecuritePerpignan.tsx"));
const AuditSecuriteBesancon = lazy(() => import("./pages/cities/AuditSecuriteBesancon.tsx"));
const AuditSecuriteAvignon = lazy(() => import("./pages/cities/AuditSecuriteAvignon.tsx"));
const AuditSecuriteLaRochelle = lazy(() => import("./pages/cities/AuditSecuriteLaRochelle.tsx"));
const AuditSecuriteNimes = lazy(() => import("./pages/cities/AuditSecuriteNimes.tsx"));
const AuditSecuriteAnnecy = lazy(() => import("./pages/cities/AuditSecuriteAnnecy.tsx"));
const AuditSecuriteColmar = lazy(() => import("./pages/cities/AuditSecuriteColmar.tsx"));
const AuditSecuriteBordeaux = lazy(() => import("./pages/cities/AuditSecuriteBordeaux.tsx"));
const AuditSecuriteMontpellier = lazy(() => import("./pages/cities/AuditSecuriteMontpellier.tsx"));
const AuditSecuriteBayonne = lazy(() => import("./pages/cities/AuditSecuriteBayonne.tsx"));
const AuditSecuriteValence = lazy(() => import("./pages/cities/AuditSecuriteValence.tsx"));
const AuditSecuritePoitiers = lazy(() => import("./pages/cities/AuditSecuritePoitiers.tsx"));
const AuditSecuriteDunkerque = lazy(() => import("./pages/cities/AuditSecuriteDunkerque.tsx"));
const AuditSecuriteTroyes = lazy(() => import("./pages/cities/AuditSecuriteTroyes.tsx"));
const AuditSecuriteMulhouse = lazy(() => import("./pages/cities/AuditSecuriteMulhouse.tsx"));
const AuditSecuriteChambery = lazy(() => import("./pages/cities/AuditSecuriteChambery.tsx"));
const AuditSecuriteNiort = lazy(() => import("./pages/cities/AuditSecuriteNiort.tsx"));
const AuditSecuriteQuimper = lazy(() => import("./pages/cities/AuditSecuriteQuimper.tsx"));
const AuditSecuriteLorient = lazy(() => import("./pages/cities/AuditSecuriteLorient.tsx"));
const AuditSecuriteVannes = lazy(() => import("./pages/cities/AuditSecuriteVannes.tsx"));
const AuditSecuriteSaintNazaire = lazy(() => import("./pages/cities/AuditSecuriteSaintNazaire.tsx"));
const AuditSecuriteCalais = lazy(() => import("./pages/cities/AuditSecuriteCalais.tsx"));
const AuditSecuriteValenciennes = lazy(() => import("./pages/cities/AuditSecuriteValenciennes.tsx"));
const AuditSecuriteArras = lazy(() => import("./pages/cities/AuditSecuriteArras.tsx"));
const AuditSecuriteBourges = lazy(() => import("./pages/cities/AuditSecuriteBourges.tsx"));
const AuditSecuriteChartres = lazy(() => import("./pages/cities/AuditSecuriteChartres.tsx"));
const AuditSecuriteCherbourg = lazy(() => import("./pages/cities/AuditSecuriteCherbourg.tsx"));
const AuditSecuriteLaval = lazy(() => import("./pages/cities/AuditSecuriteLaval.tsx"));
const AuditSecuriteCholet = lazy(() => import("./pages/cities/AuditSecuriteCholet.tsx"));
const AuditSecuriteAngouleme = lazy(() => import("./pages/cities/AuditSecuriteAngouleme.tsx"));
const AuditSecuritePerigueux = lazy(() => import("./pages/cities/AuditSecuritePerigueux.tsx"));
const AuditSecuriteTarbes = lazy(() => import("./pages/cities/AuditSecuriteTarbes.tsx"));
const AuditSecuriteAlbi = lazy(() => import("./pages/cities/AuditSecuriteAlbi.tsx"));
const AuditSecuriteBeziers = lazy(() => import("./pages/cities/AuditSecuriteBeziers.tsx"));
const AuditSecuriteCarcassonne = lazy(() => import("./pages/cities/AuditSecuriteCarcassonne.tsx"));
const AuditSecuriteNarbonne = lazy(() => import("./pages/cities/AuditSecuriteNarbonne.tsx"));
const AuditSecuriteAntibes = lazy(() => import("./pages/cities/AuditSecuriteAntibes.tsx"));
const AuditSecuriteCannes = lazy(() => import("./pages/cities/AuditSecuriteCannes.tsx"));
const AuditSecuriteFrejus = lazy(() => import("./pages/cities/AuditSecuriteFrejus.tsx"));
const AuditSecuriteAjaccio = lazy(() => import("./pages/cities/AuditSecuriteAjaccio.tsx"));
const AuditSecuriteBastia = lazy(() => import("./pages/cities/AuditSecuriteBastia.tsx"));
const AuditSecuriteBelfort = lazy(() => import("./pages/cities/AuditSecuriteBelfort.tsx"));
const AuditSecuriteAuxerre = lazy(() => import("./pages/cities/AuditSecuriteAuxerre.tsx"));
const AuditSecuriteThionville = lazy(() => import("./pages/cities/AuditSecuriteThionville.tsx"));
const AuditSecuriteEvreux = lazy(() => import("./pages/cities/AuditSecuriteEvreux.tsx"));
const AuditSecuriteVersailles = lazy(() => import("./pages/cities/AuditSecuriteVersailles.tsx"));
const AuditSecuriteCreteil = lazy(() => import("./pages/cities/AuditSecuriteCreteil.tsx"));
const AuditSecuriteNanterre = lazy(() => import("./pages/cities/AuditSecuriteNanterre.tsx"));
const AuditSecuriteBruxelles = lazy(() => import("./pages/cities/AuditSecuriteBruxelles.tsx"));
const AuditSecuriteLiege = lazy(() => import("./pages/cities/AuditSecuriteLiege.tsx"));
const AuditSecuriteNamur = lazy(() => import("./pages/cities/AuditSecuriteNamur.tsx"));
const AuditSecuriteCharleroi = lazy(() => import("./pages/cities/AuditSecuriteCharleroi.tsx"));
const AuditSecuriteMons = lazy(() => import("./pages/cities/AuditSecuriteMons.tsx"));
const AuditSecuriteGeneve = lazy(() => import("./pages/cities/AuditSecuriteGeneve.tsx"));
const AuditSecuriteLausanne = lazy(() => import("./pages/cities/AuditSecuriteLausanne.tsx"));
const AuditSecuriteFribourg = lazy(() => import("./pages/cities/AuditSecuriteFribourg.tsx"));
const AuditSecuriteNeuchatel = lazy(() => import("./pages/cities/AuditSecuriteNeuchatel.tsx"));
const AuditSecuriteLuxembourg = lazy(() => import("./pages/cities/AuditSecuriteLuxembourg.tsx"));
const AuditSecuriteEschSurAlzette = lazy(() => import("./pages/cities/AuditSecuriteEschSurAlzette.tsx"));
const AuditSecuriteMontreal = lazy(() => import("./pages/cities/AuditSecuriteMontreal.tsx"));
const AuditSecuriteQuebec = lazy(() => import("./pages/cities/AuditSecuriteQuebec.tsx"));
const AuditSecuriteGatineau = lazy(() => import("./pages/cities/AuditSecuriteGatineau.tsx"));
const AuditSecuriteSherbrooke = lazy(() => import("./pages/cities/AuditSecuriteSherbrooke.tsx"));
const AuditSecuriteMonaco = lazy(() => import("./pages/cities/AuditSecuriteMonaco.tsx"));
const AuditSecuriteBethune = lazy(() => import("./pages/cities/AuditSecuriteBethune.tsx"));
const AuditSecuriteLens = lazy(() => import("./pages/cities/AuditSecuriteLens.tsx"));
const AuditSecuriteHautsDeFrance = lazy(() => import("./pages/cities/AuditSecuriteHautsDeFrance.tsx"));
const AuditSecuriteNouvelleAquitaine = lazy(() => import("./pages/cities/AuditSecuriteNouvelleAquitaine.tsx"));
const AuditSecuriteGrandEst = lazy(() => import("./pages/cities/AuditSecuriteGrandEst.tsx"));
const AuditSecuriteAuvergneRhoneAlpes = lazy(() => import("./pages/cities/AuditSecuriteAuvergneRhoneAlpes.tsx"));
const AuditSecuritePaysDeLaLoire = lazy(() => import("./pages/cities/AuditSecuritePaysDeLaLoire.tsx"));
const AuditSecuriteCentreValDeLoire = lazy(() => import("./pages/cities/AuditSecuriteCentreValDeLoire.tsx"));
const AuditSecuriteBourgogneFrancheComte = lazy(() => import("./pages/cities/AuditSecuriteBourgogneFrancheComte.tsx"));
const AuditSecuriteGironde = lazy(() => import("./pages/cities/AuditSecuriteGironde.tsx"));
const AuditSecuriteIlleEtVilaine = lazy(() => import("./pages/cities/AuditSecuriteIlleEtVilaine.tsx"));
const AuditSecuriteRhone = lazy(() => import("./pages/cities/AuditSecuriteRhone.tsx"));
const AuditSecuriteNord = lazy(() => import("./pages/cities/AuditSecuriteNord.tsx"));
const AuditSecuriteHerault = lazy(() => import("./pages/cities/AuditSecuriteHerault.tsx"));
const AuditSecuriteIsere = lazy(() => import("./pages/cities/AuditSecuriteIsere.tsx"));
const AuditSecuriteHauteGaronne = lazy(() => import("./pages/cities/AuditSecuriteHauteGaronne.tsx"));
const AuditSecuriteBouchesduRhone = lazy(() => import("./pages/cities/AuditSecuriteBouchesduRhone.tsx"));
const AuditSecuriteLoireAtlantique = lazy(() => import("./pages/cities/AuditSecuriteLoireAtlantique.tsx"));
const AuditSecuriteMoselle = lazy(() => import("./pages/cities/AuditSecuriteMoselle.tsx"));
const AuditSecuriteSeineMaritime = lazy(() => import("./pages/cities/AuditSecuriteSeineMaritime.tsx"));
const AuditSecuriteBasRhin = lazy(() => import("./pages/cities/AuditSecuriteBasRhin.tsx"));
const AuditSecuriteAlpesMaritimes = lazy(() => import("./pages/cities/AuditSecuriteAlpesMaritimes.tsx"));
const AuditSecuriteVar = lazy(() => import("./pages/cities/AuditSecuriteVar.tsx"));
const AuditSecuriteFinistere = lazy(() => import("./pages/cities/AuditSecuriteFinistere.tsx"));
const AuditSecuritePuyDeDome = lazy(() => import("./pages/cities/AuditSecuritePuyDeDome.tsx"));
const AuditSecuriteDoubs = lazy(() => import("./pages/cities/AuditSecuriteDoubs.tsx"));
const AuditSecuriteMeurtheEtMoselle = lazy(() => import("./pages/cities/AuditSecuriteMeurtheEtMoselle.tsx"));
const AuditSecuriteMaineEtLoire = lazy(() => import("./pages/cities/AuditSecuriteMaineEtLoire.tsx"));
const AuditSecuriteYvelines = lazy(() => import("./pages/cities/AuditSecuriteYvelines.tsx"));
const AuditSecuriteVendee = lazy(() => import("./pages/cities/AuditSecuriteVendee.tsx"));
const AuditSecuriteHautRhin = lazy(() => import("./pages/cities/AuditSecuriteHautRhin.tsx"));
const AuditSecuritePasDeCalais = lazy(() => import("./pages/cities/AuditSecuritePasDeCalais.tsx"));
const AuditSecuriteCoteDor = lazy(() => import("./pages/cities/AuditSecuriteCoteDor.tsx"));
const AuditSecuriteCasablanca = lazy(() => import("./pages/cities/AuditSecuriteCasablanca.tsx"));
const AuditSecuriteRabat = lazy(() => import("./pages/cities/AuditSecuriteRabat.tsx"));
const AuditSecuriteMarrakech = lazy(() => import("./pages/cities/AuditSecuriteMarrakech.tsx"));
const AuditSecuriteTanger = lazy(() => import("./pages/cities/AuditSecuriteTanger.tsx"));
const AuditSecuriteAgadir = lazy(() => import("./pages/cities/AuditSecuriteAgadir.tsx"));
const AuditSecuriteFes = lazy(() => import("./pages/cities/AuditSecuriteFes.tsx"));
const AuditSecuriteTunis = lazy(() => import("./pages/cities/AuditSecuriteTunis.tsx"));
const AuditSecuriteSfax = lazy(() => import("./pages/cities/AuditSecuriteSfax.tsx"));
const AuditSecuriteSousse = lazy(() => import("./pages/cities/AuditSecuriteSousse.tsx"));
const AuditSecuriteAlger = lazy(() => import("./pages/cities/AuditSecuriteAlger.tsx"));
const AuditSecuriteOran = lazy(() => import("./pages/cities/AuditSecuriteOran.tsx"));
const AuditSecuriteAbidjan = lazy(() => import("./pages/cities/AuditSecuriteAbidjan.tsx"));
const AuditSecuriteDakar = lazy(() => import("./pages/cities/AuditSecuriteDakar.tsx"));
const AuditSecuriteYaounde = lazy(() => import("./pages/cities/AuditSecuriteYaounde.tsx"));
const AuditSecuriteDouala = lazy(() => import("./pages/cities/AuditSecuriteDouala.tsx"));
const AuditSecuriteSaintDenisReunion = lazy(() => import("./pages/cities/AuditSecuriteSaintDenisReunion.tsx"));
const AuditSecuriteFortDeFrance = lazy(() => import("./pages/cities/AuditSecuriteFortDeFrance.tsx"));
const AuditSecuritePointeAPitre = lazy(() => import("./pages/cities/AuditSecuritePointeAPitre.tsx"));
const AuditSecuriteCayenne = lazy(() => import("./pages/cities/AuditSecuriteCayenne.tsx"));

// Countries
const AuditSecuriteMaroc = lazy(() => import("./pages/countries/AuditSecuriteMaroc.tsx"));
const AuditSecuriteTunisie = lazy(() => import("./pages/countries/AuditSecuriteTunisie.tsx"));
const AuditSecuriteAlgerie = lazy(() => import("./pages/countries/AuditSecuriteAlgerie.tsx"));
const AuditSecuriteAfrique = lazy(() => import("./pages/countries/AuditSecuriteAfrique.tsx"));
const AuditSecuriteDomTom = lazy(() => import("./pages/countries/AuditSecuriteDomTom.tsx"));
const AuditSecuriteBelgique = lazy(() => import("./pages/countries/AuditSecuriteBelgique.tsx"));
const AuditSecuriteSuisse = lazy(() => import("./pages/countries/AuditSecuriteSuisse.tsx"));
const AuditSecuriteLuxembourg = lazy(() => import("./pages/countries/AuditSecuriteLuxembourg.tsx"));
const AuditSecuriteCanada = lazy(() => import("./pages/countries/AuditSecuriteCanada.tsx"));
const AuditSecuriteMonaco = lazy(() => import("./pages/countries/AuditSecuriteMonaco.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" aria-label="Chargement..." />
          </div>
        }>
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
            <Route path="/actualites/vulnerabilites-critiques-cve-gestion" element={<VulnerabilitesCritiques />} />
            <Route path="/actualites/audit-securite-api-web-guide" element={<AuditSecuriteApi />} />
            <Route path="/actualites/reconnaissance-osint-ethical-hacking" element={<ReconnaissanceOsint />} />
            <Route path="/actualites/pentest-wifi-reseau-sans-fil-guide" element={<PentestWifi />} />
            <Route path="/actualites/investigation-forensique-numerique-guide" element={<ForensiqueNumerique />} />
            <Route path="/actualites/lateral-movement-escalade-privileges-defense" element={<LateralMovement />} />
            <Route path="/actualites/cvss-priorisation-vulnerabilites-guide" element={<CvssGestionVulnerabilites />} />
            <Route path="/actualites/sanctions-nis2-non-conformite-entreprise" element={<SanctionsNIS2 />} />
            <Route path="/actualites/budget-cybersecurite-pme-50-salaries" element={<BudgetCybersecuritePME />} />
            <Route path="/actualites/signalement-incident-cybersecurite-anssi-obligation" element={<NotificationIncidentCyber />} />
            <Route path="/actualites/checklist-cybersecurite-pme-anssi" element={<ChecklistCybersecurite />} />
            <Route path="/actualites/audit-cybersecurite-avant-levee-de-fonds" element={<AuditAvantLeveedeFonds />} />
            <Route path="/actualites/cybersecurite-pme-sans-dsi-dirigeant-non-technicien" element={<CyberPMESansDSI />} />
            <Route path="/actualites/audit-cyber-exige-client-grand-compte" element={<AuditExigeGrandCompte />} />
            <Route path="/actualites/maturite-cybersecurite-pme-comment-evaluer" element={<MaturiteCybersecurite />} />
            <Route path="/actualites/financement-audit-cybersecurite-bpi-france-anssi" element={<FinancementAuditCyber />} />
            <Route path="/actualites/dora-cybersecurite-entreprise-financiere" element={<DoraEntrepriseFinanciere />} />
            <Route path="/actualites/article-32-rgpd-mesures-techniques-securite" element={<Article32RgpdSecurite />} />
            <Route path="/actualites/scan-vulnerabilites-reseau-pme" element={<ScanVulnerabilitesReseau />} />
            <Route path="/actualites/securisation-acces-distants-rdp-vpn-pme" element={<SecurisationRdpVpn />} />
            <Route path="/actualites/cyber-resilience-act-obligations-pme-france" element={<CyberResilienceActPme />} />
            <Route path="/actualites/audit-sauvegarde-donnees-entreprise" element={<AuditSauvegardeEntreprise />} />
            <Route path="/actualites/audit-microsoft-365-securite-pme" element={<AuditMicrosoft365Securite />} />
            <Route path="/actualites/audit-securite-messagerie-email-entreprise" element={<AuditSecuriteEmail />} />
            <Route path="/actualites/test-intrusion-physique-social-engineering" element={<TestIntrusionPhysique />} />
            <Route path="/actualites/threat-hunting-apt-detection-proactive" element={<ThreatHuntingApt />} />
            <Route path="/actualites/securite-ot-ics-systemes-industriels-nis2" element={<SecuriteOTICS />} />
            <Route path="/actualites/pentest-api-rest-owasp-methode" element={<PentestApiRest />} />
            <Route path="/actualites/securite-microsoft-entra-id-audit" element={<SecuriteEntraId />} />
            <Route path="/actualites/forensique-numerique-apres-cyberattaque-preuves" element={<IncidentResponseForensique />} />
            <Route path="/actualites/ssdlc-securite-cycle-developpement" element={<SsdlcSecuriteDevs />} />
            <Route path="/actualites/gestion-vulnerabilites-patch-management-entreprise" element={<GestionVulnerabilitesPatch />} />
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
            <Route path="/audit-securite-mulhouse" element={<AuditSecuriteMulhouse />} />
            <Route path="/audit-securite-chambery" element={<AuditSecuriteChambery />} />
            <Route path="/audit-securite-niort" element={<AuditSecuriteNiort />} />
            <Route path="/audit-securite-quimper" element={<AuditSecuriteQuimper />} />
            <Route path="/audit-securite-lorient" element={<AuditSecuriteLorient />} />
            <Route path="/audit-securite-vannes" element={<AuditSecuriteVannes />} />
            <Route path="/audit-securite-saint-nazaire" element={<AuditSecuriteSaintNazaire />} />
            <Route path="/audit-securite-calais" element={<AuditSecuriteCalais />} />
            <Route path="/audit-securite-valenciennes" element={<AuditSecuriteValenciennes />} />
            <Route path="/audit-securite-arras" element={<AuditSecuriteArras />} />
            <Route path="/audit-securite-bourges" element={<AuditSecuriteBourges />} />
            <Route path="/audit-securite-chartres" element={<AuditSecuriteChartres />} />
            <Route path="/audit-securite-cherbourg" element={<AuditSecuriteCherbourg />} />
            <Route path="/audit-securite-laval" element={<AuditSecuriteLaval />} />
            <Route path="/audit-securite-cholet" element={<AuditSecuriteCholet />} />
            <Route path="/audit-securite-angouleme" element={<AuditSecuriteAngouleme />} />
            <Route path="/audit-securite-perigueux" element={<AuditSecuritePerigueux />} />
            <Route path="/audit-securite-tarbes" element={<AuditSecuriteTarbes />} />
            <Route path="/audit-securite-albi" element={<AuditSecuriteAlbi />} />
            <Route path="/audit-securite-beziers" element={<AuditSecuriteBeziers />} />
            <Route path="/audit-securite-carcassonne" element={<AuditSecuriteCarcassonne />} />
            <Route path="/audit-securite-narbonne" element={<AuditSecuriteNarbonne />} />
            <Route path="/audit-securite-antibes" element={<AuditSecuriteAntibes />} />
            <Route path="/audit-securite-cannes" element={<AuditSecuriteCannes />} />
            <Route path="/audit-securite-frejus" element={<AuditSecuriteFrejus />} />
            <Route path="/audit-securite-ajaccio" element={<AuditSecuriteAjaccio />} />
            <Route path="/audit-securite-bastia" element={<AuditSecuriteBastia />} />
            <Route path="/audit-securite-belfort" element={<AuditSecuriteBelfort />} />
            <Route path="/audit-securite-auxerre" element={<AuditSecuriteAuxerre />} />
            <Route path="/audit-securite-thionville" element={<AuditSecuriteThionville />} />
            <Route path="/audit-securite-evreux" element={<AuditSecuriteEvreux />} />
            <Route path="/audit-securite-versailles" element={<AuditSecuriteVersailles />} />
            <Route path="/audit-securite-creteil" element={<AuditSecuriteCreteil />} />
            <Route path="/audit-securite-nanterre" element={<AuditSecuriteNanterre />} />
            <Route path="/audit-securite-bruxelles" element={<AuditSecuriteBruxelles />} />
            <Route path="/audit-securite-liege" element={<AuditSecuriteLiege />} />
            <Route path="/audit-securite-namur" element={<AuditSecuriteNamur />} />
            <Route path="/audit-securite-charleroi" element={<AuditSecuriteCharleroi />} />
            <Route path="/audit-securite-mons" element={<AuditSecuriteMons />} />
            <Route path="/audit-securite-geneve" element={<AuditSecuriteGeneve />} />
            <Route path="/audit-securite-lausanne" element={<AuditSecuriteLausanne />} />
            <Route path="/audit-securite-fribourg" element={<AuditSecuriteFribourg />} />
            <Route path="/audit-securite-neuchatel" element={<AuditSecuriteNeuchatel />} />
            <Route path="/audit-securite-luxembourg" element={<AuditSecuriteLuxembourg />} />
            <Route path="/audit-securite-esch-sur-alzette" element={<AuditSecuriteEschSurAlzette />} />
            <Route path="/audit-securite-montreal" element={<AuditSecuriteMontreal />} />
            <Route path="/audit-securite-quebec" element={<AuditSecuriteQuebec />} />
            <Route path="/audit-securite-gatineau" element={<AuditSecuriteGatineau />} />
            <Route path="/audit-securite-sherbrooke" element={<AuditSecuriteSherbrooke />} />
            <Route path="/audit-securite-monaco" element={<AuditSecuriteMonaco />} />
            <Route path="/audit-securite-bethune" element={<AuditSecuriteBethune />} />
            <Route path="/audit-securite-lens" element={<AuditSecuriteLens />} />
            <Route path="/prestataire-cybersecurite-hauts-de-france" element={<AuditSecuriteHautsDeFrance />} />
            <Route path="/cybersecurite-nord-pas-de-calais" element={<AuditSecuriteNordPasDeCalais />} />
            <Route path="/cybersecurite-ile-de-france" element={<AuditSecuriteIleDeFrance />} />
            <Route path="/cybersecurite-bretagne" element={<AuditSecuriteBretagne />} />
            <Route path="/cybersecurite-normandie" element={<AuditSecuriteNormandie />} />
            <Route path="/cybersecurite-occitanie" element={<AuditSecuriteOccitanie />} />
            <Route path="/cybersecurite-paca" element={<AuditSecuritePaca />} />
            <Route path="/cybersecurite-nouvelle-aquitaine" element={<AuditSecuriteNouvelleAquitaine />} />
            <Route path="/cybersecurite-grand-est" element={<AuditSecuriteGrandEst />} />
            <Route path="/cybersecurite-auvergne-rhone-alpes" element={<AuditSecuriteAuvergneRhoneAlpes />} />
            <Route path="/cybersecurite-pays-de-la-loire" element={<AuditSecuritePaysDeLaLoire />} />
            <Route path="/cybersecurite-centre-val-de-loire" element={<AuditSecuriteCentreValDeLoire />} />
            <Route path="/cybersecurite-bourgogne-franche-comte" element={<AuditSecuriteBourgogneFrancheComte />} />
            <Route path="/audit-securite-gironde" element={<AuditSecuriteGironde />} />
            <Route path="/audit-securite-ille-et-vilaine" element={<AuditSecuriteIlleEtVilaine />} />
            <Route path="/audit-securite-rhone" element={<AuditSecuriteRhone />} />
            <Route path="/audit-securite-nord" element={<AuditSecuriteNord />} />
            <Route path="/audit-securite-herault" element={<AuditSecuriteHerault />} />
            <Route path="/audit-securite-isere" element={<AuditSecuriteIsere />} />
            <Route path="/audit-securite-haute-garonne" element={<AuditSecuriteHauteGaronne />} />
            <Route path="/audit-securite-bouches-du-rhone" element={<AuditSecuriteBouchesduRhone />} />
            <Route path="/audit-securite-loire-atlantique" element={<AuditSecuriteLoireAtlantique />} />
            <Route path="/audit-securite-moselle" element={<AuditSecuriteMoselle />} />
            <Route path="/audit-securite-seine-maritime" element={<AuditSecuriteSeineMaritime />} />
            <Route path="/audit-securite-bas-rhin" element={<AuditSecuriteBasRhin />} />
            <Route path="/audit-securite-alpes-maritimes" element={<AuditSecuriteAlpesMaritimes />} />
            <Route path="/audit-securite-var" element={<AuditSecuriteVar />} />
            <Route path="/audit-securite-finistere" element={<AuditSecuriteFinistere />} />
            <Route path="/audit-securite-puy-de-dome" element={<AuditSecuritePuyDeDome />} />
            <Route path="/audit-securite-doubs" element={<AuditSecuriteDoubs />} />
            <Route path="/audit-securite-meurthe-et-moselle" element={<AuditSecuriteMeurtheEtMoselle />} />
            <Route path="/audit-securite-maine-et-loire" element={<AuditSecuriteMaineEtLoire />} />
            <Route path="/audit-securite-yvelines" element={<AuditSecuriteYvelines />} />
            <Route path="/audit-securite-vendee" element={<AuditSecuriteVendee />} />
            <Route path="/audit-securite-haut-rhin" element={<AuditSecuriteHautRhin />} />
            <Route path="/audit-securite-pas-de-calais" element={<AuditSecuritePasDeCalais />} />
            <Route path="/audit-securite-cote-dor" element={<AuditSecuriteCoteDor />} />
            <Route path="/audit-securite-casablanca" element={<AuditSecuriteCasablanca />} />
            <Route path="/audit-securite-rabat" element={<AuditSecuriteRabat />} />
            <Route path="/audit-securite-marrakech" element={<AuditSecuriteMarrakech />} />
            <Route path="/audit-securite-tanger" element={<AuditSecuriteTanger />} />
            <Route path="/audit-securite-agadir" element={<AuditSecuriteAgadir />} />
            <Route path="/audit-securite-fes" element={<AuditSecuriteFes />} />
            <Route path="/audit-securite-tunis" element={<AuditSecuriteTunis />} />
            <Route path="/audit-securite-sfax" element={<AuditSecuriteSfax />} />
            <Route path="/audit-securite-sousse" element={<AuditSecuriteSousse />} />
            <Route path="/audit-securite-alger" element={<AuditSecuriteAlger />} />
            <Route path="/audit-securite-oran" element={<AuditSecuriteOran />} />
            <Route path="/audit-securite-abidjan" element={<AuditSecuriteAbidjan />} />
            <Route path="/audit-securite-dakar" element={<AuditSecuriteDakar />} />
            <Route path="/audit-securite-yaounde" element={<AuditSecuriteYaounde />} />
            <Route path="/audit-securite-douala" element={<AuditSecuriteDouala />} />
            <Route path="/audit-securite-saint-denis-reunion" element={<AuditSecuriteSaintDenisReunion />} />
            <Route path="/audit-securite-fort-de-france" element={<AuditSecuriteFortDeFrance />} />
            <Route path="/audit-securite-pointe-a-pitre" element={<AuditSecuritePointeAPitre />} />
            <Route path="/audit-securite-cayenne" element={<AuditSecuriteCayenne />} />
            {/* Countries */}
            <Route path="/audit-securite-maroc" element={<AuditSecuriteMaroc />} />
            <Route path="/audit-securite-tunisie" element={<AuditSecuriteTunisie />} />
            <Route path="/audit-securite-algerie" element={<AuditSecuriteAlgerie />} />
            <Route path="/audit-securite-afrique" element={<AuditSecuriteAfrique />} />
            <Route path="/audit-securite-dom-tom" element={<AuditSecuriteDomTom />} />
            <Route path="/audit-securite-belgique" element={<AuditSecuriteBelgique />} />
            <Route path="/audit-securite-suisse" element={<AuditSecuriteSuisse />} />
            <Route path="/audit-securite-luxembourg" element={<AuditSecuriteLuxembourg />} />
            <Route path="/audit-securite-canada" element={<AuditSecuriteCanada />} />
            <Route path="/audit-securite-monaco" element={<AuditSecuriteMonaco />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
