"use client";

import React, { useState } from "react";
import { FileText, ChevronLeft, X, ExternalLink, Download } from "lucide-react";

const newsletters = [
  {
    id: 1,
    title: "Annual Report 2024-2025",
    url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FANNUAL%20REPORT%202024-2025.pdf?alt=media&token=57474e2e-b8fc-4add-8e3d-6762b2cbe82d",
    type: "Annual Report",
  },
  {
    id: 2,
    title: "Annual Report 2023-24",
    url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FANNUAL%20REPORT%202023-24.pdf?alt=media&token=ba45bb3d-8446-40d2-adfe-28265d587d36",
    type: "Annual Report",
  },
  {
    id: 3,
    title: "Annual Report 2021-22",
    url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FAnnual%20report%2021-22.pdf%20(2).pdf?alt=media&token=a1b982d1-4b1f-42b5-b086-1aa84c25a70a",
    type: "Annual Report",
  },
  {
    id: 4,
    title: "Annual Report 2020-21",
    url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FAnnual%20Report%2020-21.pdf%20(1).pdf?alt=media&token=803f9361-720d-4f61-b267-d864e8ef0364",
    type: "Annual Report",
  },
  {
    id: 5,
    title: "Annual Newsletter",
    url: "https://firebasestorage.googleapis.com/v0/b/renukiran-a6410.appspot.com/o/newsletters%2FAnnual%20newsletter%20(4).pdf?alt=media&token=54f9a7c3-5c57-4772-9668-e055ea02572b",
    type: "Newsletter",
  },
];

const Newsletters = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openPdf = (newsletter) => {
    setSelectedPdf(newsletter);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-red-500 mr-3" />
              <h1 className="text-4xl font-bold text-gray-800">
                Newsletters & Annual Reports
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about our activities, achievements, and impact through our newsletters and annual reports.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openPdf(newsletter)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {newsletter.type}
                  </span>
                  <FileText className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {newsletter.title}
                </h3>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>View PDF</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedPdf.title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={selectedPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </a>
                <a
                  href={selectedPdf.url}
                  download
                  className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
                <button
                  onClick={closePdf}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${selectedPdf.url}#toolbar=0`}
                className="w-full h-full"
                title={selectedPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletters;