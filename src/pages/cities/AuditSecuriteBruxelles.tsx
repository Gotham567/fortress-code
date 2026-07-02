import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteBruxelles = () => (
  <CityLandingPage
    data={{
      city: "Bruxelles",
      citySlug: "bruxelles",
      region: "Belgique — Région de Bruxelles-Capitale",
      postalCode: "1000",
      intro: "CyberSecure, cabinet qualifié PASSI ANSSI, réalise des tests d'intrusion, pentests et audits de sécurité à Bruxelles pour les institutions européennes, organisations OTAN, banques et cabinets d'avocats exposés au cyberespionnage étatique. Notre cellule CERT 24/7 intervient sur les incidents de sécurité dans toute la Région de Bruxelles-Capitale, avec des rapports conformes aux exigences du Centre for Cybersecurity Belgium (CCB) et à la directive NIS2 transposée en droit belge.",
      localContext: "Bruxelles est la capitale de l'Union Européenne et de l'OTAN, hébergeant la Commission, le Parlement et le Conseil EU ainsi que le siège de l'Alliance Atlantique à Evere — faisant des systèmes IT bruxellois parmi les plus ciblés d'Europe par le cyberespionnage étatique (APT russes, chinois, nord-coréens). Euroclear, dépositaire central de valeurs mobilières traitant 1 000 milliards d'euros de transactions par jour, et SWIFT, la messagerie bancaire mondiale dont le siège est à La Hulpe, représentent des cibles d'infrastructure financière critique absolument prioritaires. ING Belgique, BNP Paribas Fortis et KBC gèrent des données bancaires de millions d'Européens. Les 200+ organisations internationales installées dans le Quartier Européen (Schuman, Berlaymont) multiplient les vecteurs d'attaque par social engineering contre des fonctionnaires disposant d'informations confidentielles de premier rang. CyberSecure conduit des pentests et Red Team exercises adaptés à ce contexte de menace étatique élevée.",
      sectors: [
        "Institutions EU et OTAN (Commission, Parlement, Conseil, OTAN)",
        "Finance et infrastructure (ING, KBC, Euroclear, SWIFT)",
        "Cabinets d'avocats EU (Linklaters, Freshfields, Clifford Chance)",
        "Lobbying et associations professionnelles (FEB, BusinessEurope)",
        "Startups et PME tech (quartier Ixelles, Anderlecht)",
        "Diplomatie et ambassades (150+ représentations diplomatiques)",
      ],
      neighborhoods: [
        "Quartier Européen (Schuman, Berlaymont, Espace Léopold)",
        "Centre-ville (Ixelles, Saint-Gilles, Etterbeek)",
        "OTAN et Défense belge (Evere, Zaventem)",
        "Finance et business (Louise, Sablon, Uccle)",
        "Brabant wallon (Louvain-la-Neuve, Wavre)",
        "Nord de Bruxelles (Vilvorde, Zaventem, Aéroport BRU)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest à Bruxelles pour une institution EU ou une grande organisation ?",
          a: "Les tarifs d'un test d'intrusion à Bruxelles dépendent du périmètre et du niveau de menace : un pentest d'application web pour une PME ou association est facturé entre 4 000 et 8 000 € HT ; un pentest d'infrastructure pour une ETI ou organisation internationale coûte entre 10 000 et 20 000 € HT ; un exercice Red Team complet simulant une attaque APT étatique pour une grande organisation (institution EU, banque, infrastructure critique) se situe entre 25 000 et 60 000 € HT. CyberSecure intervient également en mode urgence pour les incidents (CERT 24/7). Nos rapports sont rédigés en français et/ou en anglais selon les besoins, conformes aux standards PASSI ANSSI et acceptés par le CCB (Centre for Cybersecurity Belgium).",
        },
        {
          q: "Votre qualification PASSI ANSSI est-elle reconnue en Belgique par le CCB ?",
          a: "Oui. La qualification PASSI de l'ANSSI française est reconnue et valorisée par le Centre for Cybersecurity Belgium (CCB) dans le cadre de la directive NIS2 transposée en droit belge (loi du 26 avril 2024). Le CCB recommande expressément le recours à des prestataires qualifiés pour les audits des opérateurs d'importance essentielle (OIE) et des opérateurs d'importance importante (OII). CyberSecure est qualifié PASSI pour toutes les prestations d'audit : architecture, configuration, code source, tests d'intrusion et organisation. Nous collaborons régulièrement avec des entités bruxelloises soumises à la surveillance du CCB.",
        },
        {
          q: "Comment tester la sécurité d'une institution EU ou d'une organisation internationale à Bruxelles ?",
          a: "Un pentest d'institution européenne ou internationale requiert une approche spécifique tenant compte des contraintes légales diplomatiques et des politiques de sécurité internes. CyberSecure procède en plusieurs phases : cadrage juridique et rédaction d'une autorisation de test formelle, reconnaissance OSINT ciblée sur les systèmes exposés (portails, VPN, messageries), tests d'intrusion externes sur les périmètres web et réseau, tests de social engineering sur les collaborateurs (phishing, vishing), et audit des configurations Active Directory. Nos consultants sont habilités et soumis à des obligations de confidentialité renforcées. Nous intervenons avec une discrétion totale, y compris en dehors des heures de bureau pour minimiser l'impact opérationnel.",
        },
        {
          q: "Audit Active Directory à Bruxelles : pourquoi est-ce urgent pour les organisations exposées au cyberespionnage ?",
          a: "L'Active Directory est le système d'annuaire central contrôlant l'accès à tous les systèmes d'une organisation. Les attaques APT étatiques ciblant Bruxelles (espionnage russe, chinois, iranien) visent systématiquement l'AD pour obtenir des droits d'administrateur de domaine, permettant d'exfiltrer des données confidentielles durant des mois sans être détectés. Un audit Active Directory à Bruxelles comprend : analyse des délégations de privilèges et des comptes de service, détection de configurations Kerberoasting, AS-REP Roasting et Golden Ticket, test des politiques de mots de passe et des GPO, cartographie des chemins d'attaque vers les comptes Tier0. CyberSecure recommande un audit AD annuel minimum pour toute organisation bruxelloise traitant des informations sensibles.",
        },
        {
          q: "Que faire en cas de cyberattaque à Bruxelles ?",
          a: "En cas de cyberattaque à Bruxelles, contactez immédiatement notre cellule CERT au +32 2 XXX XX XX (disponible 24h/24, 7j/7). N'éteignez pas les machines compromises pour préserver les preuves forensiques. CyberSecure coordonne la réponse à incident selon les obligations NIS2 : notification au CCB (Centre for Cybersecurity Belgium) dans les 24h pour un signalement initial et 72h pour la notification complète, investigation forensique pour déterminer le vecteur d'intrusion et l'étendue de la compromission, containment et éradication de la menace, communication de crise avec les autorités compétentes (CCB, CERT.be, autorité de protection des données). Nous pouvons également accompagner la notification à l'APD (Autorité de Protection des Données belge) en cas de violation de données personnelles.",
        },
      ],
    }}
  />
);

export default AuditSecuriteBruxelles;
