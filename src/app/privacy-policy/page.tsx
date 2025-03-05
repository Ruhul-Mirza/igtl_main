"use client";

import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to IGTL (Infiglobal Techlogix Pvt Ltd). We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or use our services."
    },
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, job title, and company details when you contact us or submit inquiries.",
        "Technical Information: IP address, browser type, device information, and browsing behavior through cookies and similar technologies.",
        "Transactional Information: If you engage with our services, we may collect payment and billing details.",
        "Employment Information: If you apply for a job, we may collect your resume, work history, and other relevant details.",
        "Automatically Collected Information: Data related to how you interact with our website and services, including log data, location, and preferences."
      ]
    },
    {
      title: "Legal Basis for Processing Data",
      content: [
        "Consent: When you provide explicit consent for data collection and processing.",
        "Contractual Necessity: When processing is necessary to fulfill a contract or service agreement with you.",
        "Legal Compliance: When required to comply with legal obligations.",
        "Legitimate Interests: When necessary for business purposes that do not override your privacy rights."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services",
        "To communicate with you regarding inquiries, service updates, or job applications",
        "To process payments and transactions",
        "To analyze website usage and improve user experience",
        "To comply with legal and regulatory requirements",
        "To prevent fraud, security risks, and unauthorized access"
      ]
    },
    {
      title: "How We Share Your Information",
      content: [
        "With service providers: We may share information with third-party vendors who assist us in business operations.",
        "For legal purposes: If required by law, regulation, or legal process.",
        "Business transfers: In case of a merger, acquisition, or sale of assets.",
        "With affiliates and partners: If necessary to deliver services or products."
      ]
    },
    {
      title: "Data Retention",
      content: "We retain your personal data only as long as necessary for the purposes outlined in this policy or as required by law. Once your information is no longer needed, we securely delete or anonymize it."
    },
    {
      title: "International Data Transfers",
      content: "If your data is transferred outside your country of residence, we ensure that adequate safeguards, such as standard contractual clauses or data protection agreements, are in place to protect your information."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not intended for children under the age of 13, and we do not knowingly collect personal data from minors. If we become aware of such a collection, we will take steps to delete the information promptly."
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security."
    },
    {
      title: "Your Rights & Choices",
      content: [
        "Access, update, or delete your information by contacting us",
        "Opt-out of marketing communications at any time",
        "Restrict or object to certain data processing activities",
        "Withdraw consent where applicable",
        "Request data portability for your information"
      ]
    },
    {
      title: "Cookies & Tracking Technologies",
      content: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more details, refer to our Cookie Policy."
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any information."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically."
    },
    {
      title: "Contact Us",
      content: {
        text: "If you have any questions about this Privacy Policy or your data privacy rights, please contact us:",
        company: "IGTL - Infiglobal Techlogix Pvt Ltd",
        email: "wecare@infigtl.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto mt-20 bg-white rounded-lg shadow-sm">
        <div className="p-8">
          {/* Header */}
          <div className="flex my-10 items-center justify-center space-x-3 mb-4">
            <Shield className="h-8 w-8 fill-amber-400 text-amber-400" />
            <h1 className="text-3xl font-bold text-orange-500 text-center">Privacy Policy</h1>
          </div>
          <p className="text-base text-center font-semibold text-gray-500 mb-12">
            Effective Date: March 05, 2025
          </p>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-xl font-semibold text-orange-500">
                  {index + 1}. {section.title}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-base font-semibold">{item}</li>
                    ))}
                  </ul>
                ) : typeof section.content === 'object' ? (
                  <div className="space-y-4">
                    <p className="text-base font-semibold text-black">{section.content.text}</p>
                    <div className="bg-orange-500/15 rounded-lg p-6">
                      <p className="font-medium text-gray-900 mb-2">{section.content.company}</p>
                      <a href="#" className="text-orange-600 hover:underline">
                        {section.content.email}
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className=" font-semibold text-base text-gray-600">{section.content}</p>
                )}
                {index < sections.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}