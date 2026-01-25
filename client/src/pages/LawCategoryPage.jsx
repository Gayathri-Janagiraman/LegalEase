import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const lawContent = {
  // --------------------------
  // WOMEN'S RIGHTS
  // --------------------------
  "womens-rights": {
    title: "Women's Rights",
    overview:
      "Laws ensuring safety, equality, dignity, and justice for women across various sectors in India.",
    points: [
      "Protection from domestic violence and abuse.",
      "Equal pay and safe workplace environment.",
      "Legal protection against sexual harassment.",
      "Rights related to maternity benefits.",
    ],
    acts: [
      "The Protection of Women from Domestic Violence Act, 2005",
      "The Sexual Harassment of Women at Workplace (POSH) Act, 2013",
      "Maternity Benefit Act, 1961",
      "Dowry Prohibition Act, 1961",
    ],
  },

  // --------------------------
  // CYBER LAW
  // --------------------------
  "cyber-law": {
    title: "Cyber Law",
    overview:
      "Cyber law governs online safety, cybercrimes, digital privacy, and electronic transactions.",
    points: [
      "Regulates online conduct and digital communication.",
      "Prevents identity theft, hacking, phishing, and cyber fraud.",
      "Protects personal data and privacy rights.",
      "Recognizes digital signatures and electronic documents.",
    ],
    acts: [
      "Information Technology Act, 2000",
      "Digital Personal Data Protection Act, 2023",
      "Indian Penal Code (Cybercrime Sections: 419, 420, 465)",
    ],
  },

  // --------------------------
  // LABOR LAW
  // --------------------------
  "labor-law": {
    title: "Labor Law",
    overview:
      "Labor laws regulate working conditions, employee rights, wages, workplace safety, and dispute resolution.",
    points: [
      "Ensures fair wages and timely payment.",
      "Protects against unfair termination.",
      "Mandates safe and hygienic working conditions.",
      "Regulates working hours and paid leave.",
    ],
    acts: [
      "Minimum Wages Act, 1948",
      "Industrial Disputes Act, 1947",
      "Factories Act, 1948",
      "Code on Wages, 2019",
      "Occupational Safety, Health and Working Conditions Code, 2020",
    ],
  },

  // --------------------------
  // CONSUMER PROTECTION
  // --------------------------
  "consumer-protection": {
    title: "Consumer Protection",
    overview:
      "Consumer laws safeguard buyers against unfair practices, fraud, defective products, and exploitation.",
    points: [
      "Right to safety from hazardous goods.",
      "Right to be informed about product details.",
      "Right to seek compensation for defective products.",
      "Right to file complaints in consumer courts.",
    ],
    acts: [
      "Consumer Protection Act, 2019",
      "Legal Metrology Act, 2009",
      "Food Safety and Standards Act, 2006",
    ],
  },

  // --------------------------
  // PROPERTY LAW
  // --------------------------
  "property-law": {
    title: "Property Law",
    overview:
      "Property laws regulate ownership, land rights, inheritance, transfer, tenancy, and property disputes.",
    points: [
      "Governs property ownership and transfer rights.",
      "Defines legal validity of sale deeds and registration.",
      "Covers land disputes and tenancy rights.",
      "Regulates inheritance and succession laws.",
    ],
    acts: [
      "Transfer of Property Act, 1882",
      "Registration Act, 1908",
      "Indian Succession Act, 1925",
      "Real Estate (Regulation and Development) Act, 2016 (RERA)",
    ],
  },

  // --------------------------
  // CRIMINAL LAW
  // --------------------------
  "criminal-law": {
    title: "Criminal Law",
    overview:
      "Criminal law deals with crimes, punishments, rights of the accused, and protection of victims.",
    points: [
      "Defines criminal offenses and penalties.",
      "Ensures fair investigation and trial.",
      "Protects victims and witnesses.",
      "Regulates bail, arrest, and evidence procedures.",
    ],
    acts: [
      "Bharatiya Nyaya Sanhita (BNS), 2023",
      "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
      "Bharatiya Sakshya Adhiniyam (BSA), 2023",
    ],
  },

  // --------------------------
  // FAMILY LAW
  // --------------------------
  "family-law": {
    title: "Family Law",
    overview:
      "Family law governs marriage, divorce, adoption, guardianship, and domestic disputes.",
    points: [
      "Regulates legal marriage requirements.",
      "Covers grounds for divorce and separation.",
      "Defines child custody and maintenance rights.",
      "Provides legal framework for adoption.",
    ],
    acts: [
      "Hindu Marriage Act, 1955",
      "Special Marriage Act, 1954",
      "Hindu Adoption and Maintenance Act, 1956",
      "Domestic Violence Act, 2005",
    ],
  },

  // --------------------------
  // CHILD PROTECTION LAW
  // --------------------------
  "child-protection": {
    title: "Child Protection Law",
    overview:
      "Laws ensuring safety, education, welfare, and rights of children in India.",
    points: [
      "Protects children from abuse and exploitation.",
      "Regulates child labor and hazardous activities.",
      "Ensures free and compulsory education.",
      "Covers adoption and juvenile justice.",
    ],
    acts: [
      "POCSO Act, 2012",
      "Child Labour Act, 1986",
      "Right to Education Act, 2009",
      "Juvenile Justice Act, 2015",
    ],
  },

  // --------------------------
  // SENIOR CITIZEN RIGHTS
  // --------------------------
  "senior-citizen-rights": {
    title: "Senior Citizen Rights",
    overview:
      "Laws providing protection, welfare, and financial security for senior citizens.",
    points: [
      "Right to maintenance from children or legal heirs.",
      "Protection from neglect, abuse, or abandonment.",
      "Access to healthcare and senior homes.",
      "Reservation and benefits in public services.",
    ],
    acts: [
      "Maintenance and Welfare of Parents and Senior Citizens Act, 2007",
      "Rights of Persons with Disabilities Act, 2016",
    ],
  },

  // --------------------------
  // TRAFFIC LAW
  // --------------------------
  "traffic-law": {
    title: "Traffic & Motor Vehicle Law",
    overview:
      "Traffic laws regulate road safety, driving rules, accidents, and vehicle documentation.",
    points: [
      "Defines driving rules and penalties.",
      "Covers drunk driving, overspeeding, and rash driving.",
      "Regulates vehicle registration and insurance.",
      "Defines accident compensation procedures.",
    ],
    acts: [
      "Motor Vehicles Act, 1988",
      "Motor Vehicles (Amendment) Act, 2019",
    ],
  },

  // --------------------------
  // EDUCATION LAW
  // --------------------------
  "education-law": {
    title: "Education Rights",
    overview:
      "Education laws ensure access to free, quality, and non-discriminatory education.",
    points: [
      "Free and compulsory education up to age 14.",
      "Prohibits discrimination in schools.",
      "Reservation for disadvantaged groups.",
      "Regulates school standards and fees.",
    ],
    acts: ["Right to Education Act, 2009", "NEP 2020"],
  },

  // --------------------------
  // FUNDAMENTAL RIGHTS
  // --------------------------
  "fundamental-rights": {
    title: "Fundamental Rights",
    overview:
      "Fundamental rights provide constitutional protection of freedom, equality, and justice.",
    points: [
      "Right to equality and non-discrimination.",
      "Freedom of speech and religion.",
      "Protection against exploitation.",
      "Right to constitutional remedies.",
    ],
    acts: ["Articles 12–35 of the Constitution"],
  },

  // --------------------------
  // RTI LAW
  // --------------------------
  "rti-law": {
    title: "Right to Information (RTI)",
    overview:
      "RTI empowers citizens to request information from public authorities.",
    points: [
      "Allows access to government documents.",
      "Authorities must reply within 30 days.",
      "Includes appeal rights.",
      "Promotes transparency.",
    ],
    acts: ["Right to Information Act, 2005"],
  },

  // --------------------------
  // ENVIRONMENTAL LAW
  // --------------------------
  "environmental-law": {
    title: "Environmental Law",
    overview:
      "Environmental laws regulate pollution control, waste management, and ecological protection.",
    points: [
      "Controls air and water pollution.",
      "Regulates waste disposal and plastic use.",
      "Protects forests and wildlife.",
      "Ensures environmental clearance procedures.",
    ],
    acts: [
      "Environment Protection Act, 1986",
      "Air Act, 1981",
      "Water Act, 1974",
      "Wildlife Protection Act, 1972",
    ],
  },

  // --------------------------
  // BANKING FRAUD
  // --------------------------
  "banking-fraud": {
    title: "Banking & Financial Fraud",
    overview:
      "Laws protecting individuals from scams, unauthorized transactions, and loan harassment.",
    points: [
      "Regulates loan recovery agents.",
      "Protects from UPI and credit card fraud.",
      "Covers online banking disputes.",
      "Ensures consumer rights in financial services.",
    ],
    acts: [
      "RBI Ombudsman Scheme",
      "Payment and Settlement Systems Act, 2007",
      "IT Act (Cyber Fraud Sections)",
    ],
  },
};

const LawCategoryPage = () => {
  const { categoryId } = useParams();
  const data = lawContent[categoryId];

  if (!data) {
    return <h2 className="text-center mt-20">Category not found.</h2>;
  }

  return (
    <>
      <div className="py-28 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{data.title}</h1>

        <p className="text-gray-700 mb-6 text-lg">{data.overview}</p>

        <h2 className="text-2xl font-semibold mt-8">Key Points</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {data.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Important Acts</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {data.acts.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default LawCategoryPage;
