import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Automotive Tech Solutions | Smart Mobility with IGTL",
    description: "Explore IGTL's automotive tech services — diagnostics, fleet management, IoT, and EV support for smarter mobility.",
    keywords: ["Automotive Technology", "Vehicle Diagnostics", "Fleet Management", "IoT Solutions", "EV Technology", "IGTL"],
    openGraph: {
      title: "Automotive Tech | Drive Innovation with IGTL",
      description: "Embrace the future of mobility with IGTL's automotive tech solutions — from telematics to electric vehicle innovations."
    }
};

const AutoTechLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default AutoTechLayout;

