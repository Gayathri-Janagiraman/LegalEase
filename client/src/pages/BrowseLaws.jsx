// import React from "react";
// import Footer from "../components/Footer";

// const lawCategories = [
//   { title: "Women's Rights", description: "Legal protections and rights for women in various domains." },
//   { title: "Cyber Law", description: "Laws related to online activity, privacy, and digital crimes." },
//   { title: "Labor Law", description: "Worker rights, workplace safety, and employment regulations." },
//   { title: "Consumer Protection", description: "Rights of consumers and remedies against unfair practices." },
//   { title: "Property Law", description: "Legal rules governing ownership, transfer, and land use." },
//   { title: "Criminal Law", description: "Legal framework for crimes, penalties, and justice process." },
// ];

// const BrowseLaws = () => {
//   return (
//     <>
//       <div className="bg-white py-32 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Browse Legal Categories</h1>
//           <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
//             Explore simplified information on important Indian laws and legal topics. Click any category to learn more.
//           </p>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {lawCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition cursor-pointer"
//               >
//                 <h2 className="text-xl font-semibold text-blue-700 mb-2">{category.title}</h2>
//                 <p className="text-gray-600 text-sm">{category.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BrowseLaws;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const lawCategories = [
  { id: "womens-rights", title: "Women's Rights", description: "Legal protections, safety, equality, and rights for women." },

  { id: "cyber-law", title: "Cyber Law", description: "Laws related to online activity, privacy, cybercrimes, and digital safety." },

  { id: "labor-law", title: "Labor Law", description: "Worker rights, wages, workplace safety, and employment regulations." },

  { id: "consumer-protection", title: "Consumer Protection", description: "Rights of consumers and remedies against unfair trade practices." },

  { id: "property-law", title: "Property Law", description: "Laws governing ownership, transfer, tenancy, and land-related disputes." },

  { id: "criminal-law", title: "Criminal Law", description: "Legal framework defining crimes, punishments, and criminal procedures." },

  { id: "family-law", title: "Family Law", description: "Marriage, divorce, child custody, adoption, and maintenance regulations." },

  { id: "child-protection", title: "Child Protection Law", description: "Laws safeguarding children from abuse, exploitation, and child labor." },

  { id: "senior-citizen-rights", title: "Senior Citizen Rights", description: "Laws protecting elderly rights, welfare, safety, and maintenance." },

  { id: "traffic-law", title: "Traffic & Motor Vehicle Law", description: "Rules on driving, road safety, vehicle regulations, and penalties." },

  { id: "education-law", title: "Education Rights", description: "Laws ensuring access to free, quality, and non-discriminatory education." },

  { id: "fundamental-rights", title: "Fundamental Rights", description: "Constitutional rights ensuring freedom, equality, and justice." },

  { id: "rti-law", title: "Right to Information (RTI)", description: "Laws allowing citizens to access government information and records." },

  { id: "environmental-law", title: "Environmental Law", description: "Laws regulating pollution, waste management, forests, and wildlife." },

  { id: "banking-fraud", title: "Banking & Financial Fraud", description: "Regulations on banking fraud, online scams, loan issues, and disputes." },
];


const BrowseLaws = () => {
  return (
    <>
      <div className="bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Browse Legal Categories</h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Explore simplified information on important Indian laws and legal topics. Click any category to learn more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawCategories.map((category) => (
              <Link
                key={category.id}
                to={`/laws/${category.id}`}
                className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md transition cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseLaws;
