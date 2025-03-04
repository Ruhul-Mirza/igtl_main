import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact IGTL | Elevate Your Business with Outsourcing & Tech Solutions',
  description: "Ready to elevate your business operations? Contact IGTL to explore how our outsourcing and technology solutions can drive your digital transformation and operational excellence.",
  keywords: ["Contact IGTL", "Business Solutions", "Outsourcing Services", "Technology Solutions", "Digital Transformation", "Operational Excellence"],
  openGraph: {
    title: "Contact IGTL | Let's Achieve Operational Excellence Together",
    description: "Reach out to IGTL to discover how our innovative outsourcing and technology solutions can help transform your business operations and drive growth.",
  },
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    {children}
  </main>
);

export default ContactLayout;
