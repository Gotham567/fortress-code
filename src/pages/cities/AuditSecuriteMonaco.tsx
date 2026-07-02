import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteMonaco = () => (
  <CityLandingPage
    data={{
      city: "Monaco",
      citySlug: "monaco",
      region: "Principauté de Monaco",
      postalCode: "98000",
      intro: "CyberSecure réalise des pentests ultra-discrets, audits de sécurité et tests d'intrusion à Monaco pour la Société des Bains de Mer (Casino Monte-Carlo, Hôtel de Paris), les banques privées monégasques (SMB, BNP Paribas Monaco), les gestionnaires de patrimoine HNWI et les propriétaires de yachts connectés. Cabinet qualifié PASSI ANSSI, nous intervenons dans la Principauté avec une confidentialité absolue et des NDA bilatéraux renforcés pour protéger la clientèle la plus fortunée d'Europe.",
      localContext: "Monaco est la 2e place financière privée au monde par patrimoine géré par habitant, concentrant des HNWI (High Net Worth Individuals) et des UHNWI (Ultra-HNW) dont la fortune est une cible permanente pour la fraude, l'extorsion et le social engineering sophistiqué. La Société des Bains de Mer (SBM) opère le Casino Monte-Carlo, l'Hôtel de Paris, le Café de Paris et l'Hôtel Hermitage — des systèmes de paiement, de surveillance et de gestion de clientèle VIP dont la compromission est une menace permanente. La Banque SAM, la Société Monégasque de Banque (SMB) et BNP Paribas Monaco gèrent des patrimoines privés de plusieurs milliards. SICCFIN (Service d'Information et de Contrôle sur les Circuits FINanciers) surveille les risques de blanchiment. La flotte de superyachts connectés (Hercule, Fontvieille) représente une nouvelle surface d'attaque avec des systèmes VSAT, IoT bord et réseaux WiFi de luxe. La Famille Régnante (Palais Princier) et les institutions d'État monégasques sont des cibles de cyberespionnage diplomatique.",
      sectors: [
        "Jeux et hôtellerie de luxe (SBM, Monte-Carlo SBM, casinos)",
        "Banques privées et gestion de patrimoine (SMB, BNP Monaco, Julius Baer)",
        "Yachting et superyachts connectés (Port Hercule, Fontvieille)",
        "Immobilier et family offices (gestionnaires de patrimoine HNWI)",
        "Organisations sportives (ASM Football, Yacht Club Monaco, RACC)",
        "Institutions d'État (Palais Princier, ministères, consulats)",
      ],
      neighborhoods: [
        "Monte-Carlo (Casino, Hôtel de Paris, Hermitage, HNWI)",
        "La Condamine (Port Hercule, Palais, commerce)",
        "Fontvieille (industrie légère, port, Palais Princier adjacent)",
        "Larvotto et Bas-Moulins (hôtels, résidentiel luxe, plages)",
        "Monaco-Ville (Rocher, Palais, institutions d'État)",
        "Moneghetti et Jardin Exotique (résidentiel, PME)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest ultra-discret à Monaco pour une banque privée ou un family office ?",
          a: "CyberSecure propose à Monaco des prestations de cybersécurité adaptées au niveau d'exigence de la Principauté : NDA bilatéral signé avant tout échange de documents sensibles, déplacement d'auditeurs certifiés avec une discrétion absolue (pas de matériel visible, pas de communication sur les réseaux sociaux). Tarifs : pentest application web ou e-banking pour une banque privée entre 8 000 et 20 000 € HT ; audit de sécurité complet (infrastructure, accès clients HNWI, messagerie chiffrée) entre 15 000 et 35 000 € HT ; Red Team exercise simulant une tentative d'extorsion ou de compromission d'un compte client UHNWI entre 30 000 et 80 000 € HT ; test d'intrusion système de surveillance SBM entre 15 000 et 40 000 € HT. Facturation possible en EUR ou CHF selon préférence.",
        },
        {
          q: "Comment auditer la sécurité des systèmes informatiques de la Société des Bains de Mer (Casino Monte-Carlo) ?",
          a: "La SBM opère des systèmes critiques : systèmes de gestion de jeux (roulette électronique, machines à sous, surveillance cartes), CRM des clients VIP (dossiers de jeu, habitudes, dépenses), système de surveillance vidéo (centaines de caméras haute résolution), système de paiement (cartes, virements, jetons). Un audit SBM comprend : pentest de l'application mobile SBM et du portail client online, audit des systèmes de surveillance CCTV (accès aux flux vidéo), test des systèmes de paiement (PCI DSS compliance), audit des accès des employés aux données clients VIP, test de social engineering ciblé sur les pit boss et responsables jeux. CyberSecure intervient avec une autorisation formelle de la direction et respecte les exigences de confidentialité de la Direction du Tourisme et des Congrès de Monaco.",
        },
        {
          q: "Pentest de superyacht connecté à Monaco : comment auditer les systèmes VSAT, IoT et réseau bord ?",
          a: "Les superyachts amarrés à Port Hercule ou Fontvieille sont de véritables data centers flottants : communication satellite VSAT (cybervulnérabilités documentées sur les terminaux VSAT maritimes), réseau WiFi de bord (systèmes invités, équipage, propriétaire), systèmes de navigation GPS/AIS (risque de spoofing), systèmes domotique et IoT (automatisation cabines, sécurité bord), systèmes de divertissement (smart TV, audiovisuel connecté). CyberSecure réalise des audits yacht spécifiques : test de pénétration du réseau bord (segmentation propriétaire/équipage/invités), audit des terminaux VSAT (configuration firewall, VPN), test de l'exposition des systèmes AIS depuis l'extérieur, audit des systèmes de surveillance caméra bord. Intervention sur demande à Monaco, Nice ou Cannes.",
        },
        {
          q: "Protection des données HNWI à Monaco : comment éviter la fraude et le social engineering contre des clients ultra-riches ?",
          a: "Les HNWI et UHNWI monégasques sont des cibles de choix pour des attaques très sophistiquées : spear phishing personnalisé utilisant des informations issues de l'OSINT (réseaux sociaux, articles de presse mondaine, yacht tracker), Business Email Compromise (BEC) visant les virements de patrimoine, SIM swapping ciblant les numéros de téléphone des clients pour contourner le MFA, usurpation d'identité de conseillers patrimoniaux. CyberSecure protège les gestionnaires de patrimoine monégasques avec : audit des protocoles de vérification d'identité avant virement, test de phishing personnalisé sur les conseillers, recommandations de messagerie chiffrée (Signal, ProtonMail), audit des systèmes CRM gérant les données patrimoniales.",
        },
        {
          q: "Que faire en cas de cyberattaque à Monaco (fraude bancaire, compromission SBM, incident palais princier) ?",
          a: "En cas d'incident à Monaco, notre CERT est disponible 24h/24 avec une intervention discrète garantie. Obligations légales monégasques : notification à la CCIN (Commission de Contrôle des Informations Nominatives) si données personnelles compromises, notification au SICCFIN si transactions financières suspectes impliquant potentiellement du blanchiment. Pour une banque privée : notification à l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) si établissement de droit français, coordination avec la Direction de la Sûreté Publique de Monaco (police monégasque). CyberSecure coordonne l'investigation forensique en garantissant la confidentialité absolue des données clients HNWI — aucune information ne sort de nos équipes dédiées soumises à un NDA renforcé. Intervention sur site à Monaco en moins de 2 heures depuis Nice.",
        },
      ],
    }}
  />
);

export default AuditSecuriteMonaco;
