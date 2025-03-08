import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Technology Solutions | Digital Transformation with IGTL",
    description: "Discover IGTL's technology services — software development, cloud computing, cybersecurity, and AI solutions to fuel innovation.",
    keywords: ["Technology Solutions", "Software Development", "Cloud Computing", "Cybersecurity", "AI Solutions", "IGTL"],
    openGraph: {
      title: "Technology Solutions | Future-Ready Tech by IGTL",
      description: "Transform your business with IGTL's technology solutions — custom software, AI automation, and cybersecurity."
    }
};

const TechSolutionsLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default TechSolutionsLayout;

