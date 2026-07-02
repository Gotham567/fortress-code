import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteQuebec = () => (
  <CityLandingPage
    data={{
      city: "Québec",
      citySlug: "quebec",
      region: "Canada — Québec",
      postalCode: "G1R",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion à Québec pour l'Assemblée Nationale, les ministères provinciaux, SSQ Assurances, Beneva, Intact et le CHU de Québec. Cabinet qualifié PASSI ANSSI, nous intervenons dans la Capitale-Nationale avec une expertise en sécurité des administrations publiques québécoises soumises à la Loi 25 et aux obligations de protection des renseignements personnels des citoyens.",
      localContext: "Québec est la capitale provinciale du Québec, concentrant les institutions gouvernementales les plus sensibles : l'Assemblée Nationale (délibérations parlementaires), le Conseil exécutif (décisions du Conseil des ministres), les ministères (Finances, Santé, Éducation, Sécurité publique) gérant des millions de données citoyennes. Ces systèmes sont des cibles prioritaires du cyberespionnage étatique et des groupes hacktivistes voulant perturber les processus démocratiques. Le secteur des assurances est majeur : SSQ Assurances, Beneva (fusion SSQ/La Capitale) et Intact gèrent des données de santé, d'automobile et d'habitation soumises au RGPD pour leurs clients en France et à la Loi 25 pour le Québec. L'Université Laval et le CHU de Québec traitent respectivement des données de recherche et des données de santé de haute sensibilité. La Ville de Québec développe une smart city avec des systèmes connectés créant de nouvelles surfaces d'attaque.",
      sectors: [
        "Gouvernement et Assemblée Nationale (ministères, fonctions publique)",
        "Assurances et mutualités (Beneva, SSQ, La Capitale, Intact)",
        "Santé publique (CHU de Québec, CIUSSS Capitale-Nationale)",
        "Enseignement supérieur (Université Laval, UQAM Québec)",
        "Technologie et innovation (IQ (Investissement Québec), Inno-Centre)",
        "Tourisme et culture (Vieux-Québec UNESCO, hôtellerie Fairmont)",
      ],
      neighborhoods: [
        "Vieux-Québec et Haute-Ville (Assemblée Nationale, Château Frontenac)",
        "Grande Allée et Montcalm (ministères, gouvernement)",
        "Saint-Roch et Saint-Sauveur (startups, numérique, techno)",
        "Ste-Foy et Sillery (Université Laval, assurances, sièges sociaux)",
        "Beauport et Charlesbourg (CHU, santé, banlieues est)",
        "Lévis et Rive-Sud (chantiers Davie, industrie maritime)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Québec pour un ministère provincial ou une institution gouvernementale ?",
          a: "Les marchés publics québécois de sécurité informatique sont régis par la Loi sur les contrats des organismes publics (LCOP) et les directives du Secrétariat du Conseil du Trésor. CyberSecure répond aux appels d'offres gouvernementaux (SEAO, RENA). Tarifs de référence : audit de sécurité d'un portail gouvernemental (services en ligne aux citoyens) entre 6 000 et 14 000 $ CAD HT ; pentest d'infrastructure réseau ministérielle entre 10 000 et 22 000 $ CAD HT ; audit complet Active Directory gouvernemental entre 8 000 et 18 000 $ CAD HT. Les entités publiques québécoises doivent respecter la DGSPTQ (Directive sur la gestion de la sécurité de l'information) — CyberSecure est familier de ces référentiels.",
        },
        {
          q: "Audit Beneva/SSQ Assurances à Québec : comment sécuriser un assureur gérant des données de santé ?",
          a: "Beneva (issue de la fusion SSQ Assurance et La Capitale en 2021) est le plus grand assureur québécois mutuel, gérant les données de santé de plusieurs millions d'assurés. Ces données sont parmi les plus sensibles sous la Loi 25 (renseignements personnels de santé) et nécessitent une protection renforcée. Un audit Beneva comprend : pentest des portails clients (espace membre, remboursements en ligne), audit des accès aux dossiers de santé électroniques, test d'intrusion du système de gestion des sinistres (fraud detection, paiements), audit Active Directory et des accès courtiers partenaires, test de phishing ciblé sur les agents et souscripteurs. Tarif : 12 000-28 000 $ CAD HT selon périmètre.",
        },
        {
          q: "Pentest CHU de Québec (CHUL, Laval, L'Hôtel-Dieu) : comment auditer un réseau hospitalier universitaire ?",
          a: "Le CHU de Québec-Université Laval est le plus grand hôpital universitaire au Canada francophone avec cinq sites hospitaliers. Un audit CHU comprend : test d'intrusion des systèmes DMÉ (Dossier Médical Électronique, Oacis, Logibec), audit des appareils médicaux connectés (IoMT : scanners, IRM, pompes), test de la segmentation réseau (réseau médical vs. Wi-Fi visiteurs vs. réseau administratif), audit des accès des résidents, internes et étudiants en médecine, test de phishing sur le personnel soignant. Les hospitals québécois subissent une vague de cyberattaques depuis 2020 (CISSS Laurentides, CHU Sainte-Justine). CyberSecure délivre des rapports compatibles avec les exigences du MSSS (Ministère de la Santé et des Services Sociaux).",
        },
        {
          q: "La qualification PASSI ANSSI est-elle utile pour décrocher des contrats gouvernementaux à Québec ?",
          a: "Oui, la qualification PASSI ANSSI constitue un atout différenciant dans les appels d'offres de cybersécurité du gouvernement québécois et des institutions publiques de la région de Québec. Les donneurs d'ordre publics québécois ayant des échanges avec l'Europe (RGPD, partenaires français) valorisent cette qualification. Par ailleurs, de nombreux ministères québécois collaborent avec des partenaires français (coopération France-Québec en sécurité informatique), et la qualification PASSI facilite ces collaborations transfrontalières. CyberSecure peut répondre aux RFQ gouvernementaux québécois sous forme de soumissionnaire principal ou de sous-traitant spécialisé cybersécurité.",
        },
        {
          q: "Que faire en cas de cyberattaque à Québec (incident gouvernemental, ransomware hospitalier) ?",
          a: "En cas d'incident à Québec, notre CERT intervient 24h/24 en français. Pour un ministère provincial : notification immédiate au CGSIC (Centre gouvernemental de cyberdéfense) et au dirigeant principal de l'information (DPI) du gouvernement québécois, notification à la Commission d'accès à l'information (CAI) si renseignements personnels compromis, coordination avec le Centre canadien pour la cybersécurité (CCCS). Pour un hôpital : notification au MSSS, préservation des systèmes de soins critiques (priorité absolue aux patients), isolement des systèmes administratifs des systèmes médicaux. CyberSecure coordonne l'investigation forensique, la reconstruction sécurisée et les communications de crise. Dépôt de plainte au SPVQ (Service de Police de la Ville de Québec) et à la GRC.",
        },
      ],
    }}
  />
);

export default AuditSecuriteQuebec;
