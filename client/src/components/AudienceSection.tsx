import { Card } from "@/components/ui/card";
import { Building2, Ambulance, Shield, Landmark, Hospital } from "lucide-react";

const audiences = [
  {
    icon: Landmark,
    title: "Government Agencies",
    description: "Health ministries and emergency management authorities",
    benefits: [
      "Optimize public emergency fleet coverage",
      "Data-driven resource allocation",
      "Measurable outcome improvements",
      "Transparent performance metrics",
    ],
  },
  {
    icon: Ambulance,
    title: "Private Ambulance Services",
    description: "Commercial EMS providers and transport companies",
    benefits: [
      "Reduce operational costs",
      "Improve service level compliance",
      "Competitive advantage through faster response",
      "Fleet utilization optimization",
    ],
  },
  {
    icon: Shield,
    title: "Police & Emergency Services",
    description: "Law enforcement and first responder organizations",
    benefits: [
      "Patrol route optimization",
      "Incident response positioning",
      "Cross-agency coordination",
      "Coverage gap analysis",
    ],
  },
  {
    icon: Building2,
    title: "City Councils",
    description: "Municipal governments and urban planners",
    benefits: [
      "City-wide emergency coverage planning",
      "Infrastructure investment decisions",
      "Public safety improvements",
      "Community health outcomes",
    ],
  },
  {
    icon: Hospital,
    title: "Private Health Centers",
    description: "Hospitals and healthcare networks",
    benefits: [
      "Patient transfer optimization",
      "Ambulance fleet management",
      "Emergency department coordination",
      "Network-wide coverage",
    ],
  },
];

export default function AudienceSection() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-audience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our optimization platform adapts to the unique needs of various 
            organizations responsible for emergency response.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.slice(0, 3).map((audience, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-audience-${index}`}
            >
              <audience.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{audience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {audiences.slice(3).map((audience, index) => (
            <Card 
              key={index + 3} 
              className="p-6"
              data-testid={`card-audience-${index + 3}`}
            >
              <audience.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-1">{audience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
