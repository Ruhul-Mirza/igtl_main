import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at IGTL | Join Our Innovative & Growth-Driven Team',
  description: "Explore exciting career opportunities at IGTL. Join our dynamic team, drive innovation, and grow professionally in the outsourcing and technology industry.",
  keywords: ["Careers at IGTL", "Job Openings", "Technology Careers", "Outsourcing Jobs", "Join IGTL", "Career Opportunities"],
  openGraph: {
    title: "Careers at IGTL | Be Part of Our Innovative Team",
    description: "Looking for a rewarding career? IGTL offers professional development, collaborative work environments, and opportunities to shape the future of outsourcing and technology.",
  },
};

const CareerLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default CareerLayout;
