import React from "react";
import { FileText, Download } from "lucide-react"; // for icons
import Footer from "../components/Footer";

const templates = [
  {
    title: "Affidavit Format 📜",
    description: "Standard affidavit format used in legal declarations.",
    fileUrl: "/templates/affidavit.docx",
    fileName: "Affidavit_Template.docx",
  },
  {
    title: "Rental Agreement 🏠",
    description: "Simple house rental agreement template.",
    fileUrl: "/templates/rental_agreement.pdf",
    fileName: "Rental_Agreement.pdf",
  },
  {
    title: "Power of Attorney ✍️",
    description: "General power of attorney format for legal use.",
    fileUrl: "/templates/power_of_attorney.docx",
    fileName: "Power_of_Attorney.docx",
  },
  {
    title: "Non-Disclosure Agreement (NDA) 🔒",
    description: "Confidentiality agreement template for business or personal use.",
    fileUrl: "/templates/nda.pdf",
    fileName: "Non_Disclosure_Agreement.pdf",
  },
  {
    title: "Employment Offer Letter 💼",
    description: "Formal offer letter template for new employees.",
    fileUrl: "/templates/offer_letter.docx",
    fileName: "Employment_Offer_Letter.docx",
  },
  {
    title: "Resignation Letter 📝",
    description: "Simple resignation letter template for employees.",
    fileUrl: "/templates/resignation_letter.docx",
    fileName: "Resignation_Letter.docx",
  },
  {
    title: "Partnership Agreement 🤝",
    description: "Agreement template for business partnerships.",
    fileUrl: "/templates/partnership_agreement.pdf",
    fileName: "Partnership_Agreement.pdf",
  },
  {
    title: "Complaint Letter 📩",
    description: "Formal complaint letter format for consumer issues.",
    fileUrl: "/templates/complaint_letter.docx",
    fileName: "Complaint_Letter.docx",
  },
  {
    title: "Will Format ⚖️",
    description: "Basic last will and testament format.",
    fileUrl: "/templates/will_format.pdf",
    fileName: "Will_Template.pdf",
  },
  {
    title: "Freelance Contract 💻",
    description: "Agreement template for freelancers and clients.",
    fileUrl: "/templates/freelance_contract.docx",
    fileName: "Freelance_Contract.docx",
  },
];


const DownloadTemplates = () => {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow p-8 mt-20 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          📂 Legal Templates Library
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">{template.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <button
                onClick={() => handleDownload(template.fileUrl, template.fileName)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <Download size={18} />
                Download
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadTemplates;


