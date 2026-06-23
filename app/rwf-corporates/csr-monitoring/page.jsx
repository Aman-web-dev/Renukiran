"use client";

import React, { useEffect, useState } from "react";
import { BarChart3, FileText, ArrowRight, CheckCircle, Globe, Eye, Shield, TrendingUp } from "lucide-react";

function CSRMonitoringPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "CSR Monitoring & ESG Reporting - Renukiran";
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-800 via-blue-700 to-cyan-700">
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-12 h-12 text-indigo-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">CSR Monitoring, ESG Reporting & Impact Documentation</h1>
          </div>
          <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">Ensuring Transparency and Measuring Real Impact - Renukiran Welfare Foundation provides comprehensive monitoring, evaluation, and reporting services to help organizations track and communicate their CSR and ESG performance.</p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">We help organizations establish robust monitoring systems, collect meaningful data, and create transparent reports that demonstrate genuine impact and build stakeholder trust.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Monitoring Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Project Monitoring & Evaluation", "Impact Assessment Studies", "Baseline & Endline Surveys", "Beneficiary Feedback Systems", "Progress Tracking Dashboards", "Third-Party Audits"].map((service, index) => (<div key={index} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-md"><CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700 font-medium">{service}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-indigo-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Reporting & Documentation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Annual CSR Reports", "ESG Impact Reports", "Project Documentation", "Case Studies & Success Stories", "Data Visualization", "Stakeholder Communication"].map((item, index) => (<div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border-l-4 border-indigo-500"><FileText className="w-6 h-6 text-indigo-600 flex-shrink-0" /><span className="text-gray-700 font-medium">{item}</span></div>))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-indigo-700 to-cyan-700">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Demonstrate Real Impact</h2>
            <p className="text-xl text-indigo-100 mb-8">Let us help you measure, monitor, and communicate your sustainability achievements.</p>
            <button className="bg-white text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300 shadow-xl flex items-center mx-auto">Start Monitoring <ArrowRight className="w-5 h-5 ml-2" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSRMonitoringPage;
