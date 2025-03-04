import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About IGTL | Empowering Businesses with Outsourcing & Technology Solutions',
  description: "Discover IGTL's seamless outsourcing and technology services. We empower businesses with tailored solutions, optimizing processes and driving superior business outcomes through strategic innovation.",
  keywords: ["IGTL", "Outsourcing Services", "Technology Solutions", "Business Efficiency", "Digital Innovation"," End-to-End Solutions", "Process Optimization",'Vision', 'Mission', 'About'],
  openGraph: {
    title: 'About IGTL | Driving Innovation and Business Efficiency',
    description: 'Learn how IGTL provides end-to-end outsourcing and technology solutions. Our mission is to optimize business processes, maximize efficiency, and empower organizations in the digital era.',
  },
};

const AboutLayout = ({children}:{children:React.ReactNode}) => (
  <main>
{children}
  </main>
);

export default AboutLayout;
