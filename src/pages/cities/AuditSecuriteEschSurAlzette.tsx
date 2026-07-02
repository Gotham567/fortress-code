import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteEschSurAlzette = () => (
  <CityLandingPage
    data={{
      city: "Esch-sur-Alzette",
      citySlug: "esch-sur-alzette",
      region: "Luxembourg — Grand-Duché",
      postalCode: "4000",
      intro: "CyberSecure réalise des pentests OT industriels, des audits de sécurité et des tests d'intrusion à Esch-sur-Alzette pour ArcelorMittal Luxembourg, les startups du campus Belval et l'Université du Luxembourg. Cabinet qualifié PASSI ANSSI, nous intervenons dans le sud du Grand-Duché avec une expertise en sécurité des systèmes industriels sidérurgiques et en protection des environnements de recherche universitaire.",
      localContext: "Esch-sur-Alzette est la 2e ville du Luxembourg et le centre de la reconversion industrielle de la région d'Esch. ArcelorMittal Luxembourg y opère des aciéries avec des systèmes OT (SCADA, automates, four à arc électrique) représentant des cibles de ransomware industriel (comme le groupe a subi avec NotPetya en 2017). Le campus Belval incarne la renaissance culturelle et économique : il héberge l'Université du Luxembourg (UniLu), le LISER (Luxembourg Institute of Socio-Economic Research), le LIST (Luxembourg Institute of Science and Technology) et une centaine de startups innovantes dans l'ancienne friche sidérurgique reconvertie. L'Université du Luxembourg est la seule université trilingue (FR/DE/EN) du pays et développe des recherches en cryptographie, cybersécurité et IA. Belval attire des fintechs et des entreprises tech profitant des avantages fiscaux luxembourgeois.",
      sectors: [
        "Sidérurgie et métallurgie OT (ArcelorMittal, aciers spéciaux)",
        "Recherche et enseignement (Université Luxembourg, LISER, LIST)",
        "Startups tech et fintech (campus Belval, incubateurs)",
        "Construction et immobilier (Agora Belval, promoteurs)",
        "Commerce et services (Auchan Esch, collectivités)",
        "Santé (Centre Hospitalier Emile Mayrisch - CHEM)",
      ],
      neighborhoods: [
        "Belval (campus universitaire, startups, friches reconverties)",
        "Centre d'Esch (Alzette, Place de l'Hôtel de Ville)",
        "Lallange et Schifflange (zones industrielles ArcelorMittal)",
        "Sanem et Differdange (industrie, logistique sud)",
        "Dudelange (tech, distribution, frontière française)",
        "Frontière franco-luxembourgeoise (travailleurs frontaliers, flux)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest OT industriel à Esch-sur-Alzette pour ArcelorMittal ou une aciérie ?",
          a: "Un pentest OT sidérurgique nécessite des précautions extrêmes compte tenu des fours à arc électrique et des lignes de laminage en continu. Tarifs : audit de sécurité OT passif (cartographie réseau SCADA, analyse vulnérabilités sans intrusion) entre 10 000 et 20 000 € HT ; pentest OT/IT convergent sur environnement de test ou pendant arrêt planifié entre 15 000 et 35 000 € HT ; audit complet avec évaluation NIS2 et recommandations IEC 62443 entre 25 000 et 50 000 € HT. CyberSecure mobilise des experts ayant une double compétence IT cybersécurité et automation industrielle (Siemens S7, Rockwell Allen-Bradley, PROFIBUS, Modbus). Coordination préalable avec les équipes maintenance et HSE d'ArcelorMittal.",
        },
        {
          q: "Audit de sécurité pour l'Université du Luxembourg à Belval : recherche en cryptographie et cybersécurité ?",
          a: "L'Université du Luxembourg héberge le SnT (Interdisciplinary Centre for Security, Reliability and Trust) reconnu internationalement pour sa recherche en cryptographie, sécurité des protocoles et privacy. Un audit universitaire UniLu comprend : test d'intrusion du portail étudiant et des plateformes d'e-learning, audit des droits d'accès aux serveurs HPC (calcul haute performance), test de phishing ciblé sur les chercheurs et doctorants, audit du partage de données avec des partenaires industriels (NDA, chiffrement des résultats de recherche). La dimension trilingue FR/DE/EN de l'UniLu impose des configurations particulières de messagerie et de gestion des identités que CyberSecure sait auditer. Tarif audit UniLu : 6 000-15 000 € HT.",
        },
        {
          q: "Pentest pour une startup fintech ou tech sur le campus Belval à Esch ?",
          a: "Les startups du campus Belval bénéficient de l'écosystème luxembourgeois (accès aux fonds, clients bancaires, réglementation favorable) mais doivent satisfaire aux exigences de leurs clients institutionnels en matière de sécurité. Un pentest startup Belval comprend : test d'intrusion de l'application web ou mobile, audit de l'API REST/GraphQL, revue de la configuration cloud (AWS, GCP, Azure), test de l'authentification OAuth/OIDC, revue basique du code source critique. CyberSecure accompagne les startups en due diligence de sécurité avant une levée de fonds ou un appel d'offres bancaire CSSF. Tarif startup : 4 000-10 000 € HT, rapport express en 7 jours ouvrés disponible.",
        },
        {
          q: "NIS2 au Luxembourg pour une PME industrielle du sud du Grand-Duché : quelles obligations ?",
          a: "La loi luxembourgeoise NIS2 (transposition de la directive UE 2022/2555, entrée en vigueur au Grand-Duché le 18 octobre 2024) s'applique aux entités essentielles et importantes, notamment dans les secteurs de l'énergie, de l'eau, des transports, de la fabrication industrielle critique et de l'alimentation. Une PME sidérurgique ou industrielle d'Esch-sur-Alzette peut être qualifiée OIE ou OII selon sa taille et son importance systémique. Obligations principales : mise en œuvre de mesures de sécurité TIC proportionnées, tests de sécurité réguliers, notification d'incidents significatifs à l'ILNAS (Institut Luxembourgeois de la Normalisation), gestion des risques liés aux fournisseurs. CyberSecure réalise une qualification NIS2 gratuite lors de la première prise de contact.",
        },
        {
          q: "Que faire en cas de cyberattaque à Esch-sur-Alzette (ransomware industriel, incident Belval) ?",
          a: "En cas d'incident à Esch, notre CERT intervient 24h/24. Pour un ransomware industriel chez ArcelorMittal ou un sous-traitant : isolation immédiate des réseaux IT des segments OT industriels (ne jamais couper les automates d'un four en fonctionnement sans expertise process), préservation des logs des systèmes SCADA et MES, identification des systèmes chiffrés. CyberSecure coordonne : investigation forensique, notification à l'ILNAS (NIS2), notification au CNPD si données personnelles compromises, liaison avec CIRCL (Computer Incident Response Center Luxembourg). Pour les startups Belval : en cas de fuite de données, notification aux clients institutionnels luxembourgeois selon les clauses contractuelles DORA/NIS2. Intervention sur site à Esch en moins de 2 heures.",
        },
      ],
    }}
  />
);

export default AuditSecuriteEschSurAlzette;
