import { Metadata } from 'next';

type ServiceMeta = {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
  };
};

const serviceMetaData: Record<string, ServiceMeta> = {
  "bpo-services": {
    title: "BPO Services | Enhance Business Efficiency with IGTL",
    description: "Explore IGTL's Business Process Outsourcing solutions — customer support, data management, virtual assistance, and more to optimize your business operations.",
    keywords: ["BPO Services", "Business Process Outsourcing", "Customer Support", "Data Management", "Virtual Assistance", "IGTL"],
    openGraph: {
      title: "BPO Services | Streamline Your Business with IGTL",
      description: "Maximize operational efficiency with IGTL's tailored BPO services — customer support, data management, and virtual assistance."
    }
  },
  "kpo-services": {
    title: "KPO Services | Strategic Knowledge Solutions by IGTL",
    description: "Leverage IGTL's Knowledge Process Outsourcing services — market research, data analytics, and content management to support strategic decisions.",
    keywords: ["KPO Services", "Knowledge Process Outsourcing", "Market Research", "Data Analytics", "Content Management", "IGTL"],
    openGraph: {
      title: "KPO Services | Data-Driven Insights by IGTL",
      description: "Unlock business growth with IGTL's KPO solutions — research, data analytics, and content moderation to drive informed decisions."
    }
  },
  "tech-solutions": {
    title: "Technology Solutions | Digital Transformation with IGTL",
    description: "Discover IGTL's technology services — software development, cloud computing, cybersecurity, and AI solutions to fuel innovation.",
    keywords: ["Technology Solutions", "Software Development", "Cloud Computing", "Cybersecurity", "AI Solutions", "IGTL"],
    openGraph: {
      title: "Technology Solutions | Future-Ready Tech by IGTL",
      description: "Transform your business with IGTL's technology solutions — custom software, AI automation, and cybersecurity."
    }
  },
  "auto-tech": {
    title: "Automotive Tech Solutions | Smart Mobility with IGTL",
    description: "Explore IGTL's automotive tech services — diagnostics, fleet management, IoT, and EV support for smarter mobility.",
    keywords: ["Automotive Technology", "Vehicle Diagnostics", "Fleet Management", "IoT Solutions", "EV Technology", "IGTL"],
    openGraph: {
      title: "Automotive Tech | Drive Innovation with IGTL",
      description: "Embrace the future of mobility with IGTL's automotive tech solutions — from telematics to electric vehicle innovations."
    }
  }
};

type ServiceLayoutProps = {
  params: {
    service: string;
  };
};

export async function generateMetadata({ params }: ServiceLayoutProps): Promise<Metadata> {
  const { service } = params;
  const meta = serviceMetaData[service];

  if (!meta) {
    // Fallback metadata for unknown slugs
    return {
      title: "Service Not Found | IGTL",
      description: "The service you are looking for does not exist.",
      keywords: ["IGTL", "Services", "Business Solutions"],
      openGraph: {
        title: "Service Not Found",
        description: "Explore our range of services to find the solution your business needs."
      }
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description
    }
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    
    return <main>{children}</main>;
}
