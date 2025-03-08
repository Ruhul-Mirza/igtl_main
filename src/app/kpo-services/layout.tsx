import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "KPO Services | Strategic Knowledge Solutions by IGTL",
    description: "Leverage IGTL's Knowledge Process Outsourcing services — market research, data analytics, and content management to support strategic decisions.",
    keywords: ["KPO Services", "Knowledge Process Outsourcing", "Market Research", "Data Analytics", "Content Management", "IGTL"],
    openGraph: {
      title: "KPO Services | Data-Driven Insights by IGTL",
      description: "Unlock business growth with IGTL's KPO solutions — research, data analytics, and content moderation to drive informed decisions."
    }
};

const KpoLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default KpoLayout;

