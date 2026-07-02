import CityLandingPage from "@/components/CityLandingPage";

const AuditSecuriteLuxembourg = () => (
  <CityLandingPage
    data={{
      city: "Luxembourg",
      citySlug: "luxembourg",
      region: "Luxembourg — Grand-Duché",
      postalCode: "1111",
      intro: "CyberSecure réalise des pentests, audits de sécurité et tests d'intrusion au Luxembourg pour les fonds d'investissement, Clearstream, les fintechs (PayPal Europe, Amazon EU), les datacenters critiques et les établissements financiers soumis à DORA et NIS2. Cabinet qualifié PASSI ANSSI, nous intervenons au Grand-Duché avec des rapports conformes aux exigences de la CSSF et du CNPD, dans la 2e place financière européenne.",
      localContext: "Le Luxembourg est la 2e place de fonds d'investissement mondiale après les États-Unis, hébergeant plus de 3 500 fonds (Amundi, BlackRock Luxembourg, BNPP Asset Management Luxembourg, Fidelity, Invesco) gérant collectivement plusieurs milliers de milliards d'euros. Clearstream International (Deutsche Börse Group) est le principal dépositaire central de titres européen, clearing des obligations et eurobonds mondiaux. PayPal Europe SRL a son siège à Luxembourg pour toute l'Europe, Amazon Europe Holding traite les transactions de millions d'Européens, et Skype (Microsoft) y est historiquement établi. SES Satellites opère une constellation mondiale depuis le Grand-Duché. La CSSF (Commission de Surveillance du Secteur Financier) est un régulateur financier exigeant, ayant imposé des attentes croissantes en matière de cyber-résilience depuis l'entrée en vigueur de DORA (Digital Operational Resilience Act) le 17 janvier 2025.",
      sectors: [
        "Fonds d'investissement et OPCVM (Amundi, BlackRock, Fidelity Luxembourg)",
        "Infrastructure financière (Clearstream, Euroclear Luxembourg, TARGET2)",
        "Fintech et e-commerce (PayPal Europe, Amazon EU, Rakuten)",
        "Banques et PSP (BGL BNP Paribas, ING Luxembourg, Raiffeisen)",
        "Technologie et datacenters (SES Satellites, LuxConnect, Cloud providers)",
        "Cabinets d'avocats et fiduciaires (Linklaters, Allen & Overy, PwC Luxembourg)",
      ],
      neighborhoods: [
        "Kirchberg (institutions EU, fonds, Cour de Justice EU)",
        "Clausen et Muhlenbach (banques, cabinets d'avocats)",
        "Centre-ville (Gare, Rham, Place de Paris)",
        "Gasperich et Leudelange (datacenters, tech, LuxConnect)",
        "Bertrange et Strassen (fintech, bureaux d'affaires)",
        "Esch-sur-Alzette et sud du pays (ArcelorMittal, Belval)",
      ],
      faq: [
        {
          q: "Combien coûte un pentest au Luxembourg pour un fonds d'investissement ou une banque ?",
          a: "Les tarifs des prestations de cybersécurité au Luxembourg reflètent le niveau d'exigence réglementaire et la criticité des actifs : un pentest d'application web ou portail investisseur coûte entre 5 000 et 12 000 € HT ; un audit de sécurité complet (infrastructure, AD, cloud, applications) entre 12 000 et 25 000 € HT ; un DORA gap assessment (analyse d'écart Digital Operational Resilience Act) entre 8 000 et 20 000 € HT selon la taille de l'entité ; un exercice TLPT (Threat-Led Penetration Testing) conforme à DORA entre 40 000 et 100 000 € HT. CyberSecure émet des rapports en français et/ou anglais, conformes aux attentes de la CSSF et aux standards TIBER-EU (cadre TLPT de la BCE).",
        },
        {
          q: "Mon fonds Luxembourg est-il soumis à DORA ? Quelles obligations de test de sécurité ?",
          a: "Oui. DORA (règlement UE 2022/2554) s'applique depuis le 17 janvier 2025 à tous les fonds d'investissement et gestionnaires d'actifs agréés au Luxembourg (OPCVM, FIA, SICAR, SIF, RAIF). Les obligations clés en matière de tests : tests de résilience des TIC (pénétration, revue de sécurité) au moins annuellement pour les entités importantes, TLPT (Threat-Led Penetration Testing similaire à TIBER-EU) tous les 3 ans pour les entités financières d'importance systémique. CyberSecure est qualifié pour réaliser les tests DORA et TLPT. Nous accompagnons également la mise en conformité sur les registres des tiers (sous-traitants IT), les plans de continuité et les tests de réponse aux incidents. Devis DORA complet sur demande.",
        },
        {
          q: "Pentest Clearstream ou dépositaire central au Luxembourg : comment procéder pour une infrastructure financière critique ?",
          a: "Clearstream International est une infrastructure de marché financière (IMF) classée systémique par la BCE et la CSSF — soumise aux standards les plus stricts de cybersécurité. Un test d'intrusion Clearstream nécessite une coordination préalable avec le CISO et la direction de la conformité, une autorisation formelle de la CSSF, et le respect du cadre TIBER-EU ou TLPT DORA. CyberSecure dispose de l'expérience des IMF et de la méthodologie TIBER-EU : phase de reconnaissance (Threat Intelligence provider accrédité), phase Red Team (simulation d'APT avancé), phase de clôture et retour d'expérience Blue Team. Les tests sont réalisés en environnement de production avec des mesures de protection strictes. Tarif TLPT IMF : 50 000-120 000 € HT.",
        },
        {
          q: "Audit sécurité AWS/Azure pour données financières au Luxembourg (CSSF, GDPR, DORA) ?",
          a: "Le Luxembourg autorise l'externalisation cloud pour les établissements financiers sous conditions strictes (CSSF circulaire 17/654 et 22/806). Un audit cloud financier Luxembourg comprend : revue de la lettre d'externalisation déposée à la CSSF, audit de la configuration AWS/Azure (IAM, chiffrement, accès administration), test d'intrusion des API financières hébergées en cloud, audit des droits d'accès des prestataires cloud (principe du moindre privilège), évaluation de la conformité DORA article 28 (risque lié aux tiers). CyberSecure délivre un rapport cloud compatible avec les attentes CSSF et DORA. Tarif audit cloud financier : 8 000-18 000 € HT.",
        },
        {
          q: "Que faire si mon fonds ou ma banque Luxembourg subit une cyberattaque ?",
          a: "En cas de cyberattaque au Luxembourg, contactez notre CERT immédiatement (24h/24, support en français et anglais). Obligations légales DORA et réglementaires CSSF : notification à la CSSF dans les 4 heures pour les incidents majeurs affectant les TIC (seuils DORA article 19), notification au CNPD (Commission Nationale pour la Protection des Données) dans les 72h si données personnelles compromises, notification à la banque centrale si transactions affectées. CyberSecure coordonne l'investigation forensique, la préservation des preuves pour la CSSF (les inspecteurs peuvent les requérir), le containment et la reconstruction. Pour les fonds gérant des actifs de tiers, nous gérons également la communication aux investisseurs institutionnels selon vos obligations contractuelles.",
        },
      ],
    }}
  />
);

export default AuditSecuriteLuxembourg;
