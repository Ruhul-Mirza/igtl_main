import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BPO Services | Enhance Business Efficiency with IGTL",
   description: "Explore IGTL's Business Process Outsourcing solutions — customer support, data management, virtual assistance, and more to optimize your business operations.",
  keywords: ["BPO Services", "Business Process Outsourcing", "Customer Support", "Data Management", "Virtual Assistance", "IGTL"],
  openGraph: {
      title: "BPO Services | Streamline Your Business with IGTL",
        description: "Maximize operational efficiency with IGTL's tailored BPO services — customer support, data management, and virtual assistance."
  },
};

const BpoLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default BpoLayout;

