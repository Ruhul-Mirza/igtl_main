import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IGTL - Your Data, Our Responsibility',
  description: "Discover how IGTL (Infiglobal Techlogix Pvt Ltd) collects, uses, and protects your personal information. Read our Privacy Policy to understand your data rights and our commitment to secure processing.",
  keywords: [
    "IGTL Privacy Policy",
    "Data Protection",
    "Personal Information",
    "User Privacy",
    "Data Security",
    "Cookies Policy",
    "Infiglobal Techlogix Pvt Ltd"
  ],
  openGraph: {
    title: "Privacy Policy | IGTL - Protecting Your Personal Data",
    description: "At IGTL, we value your privacy. Learn how we handle personal data, safeguard your information, and ensure secure processing through our transparent Privacy Policy."
  },
};

const PrivacyPolicyLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default PrivacyPolicyLayout;
