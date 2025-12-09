import { Card } from "@/components/ui/card";
import { Building2, Ambulance, Shield, Landmark, Hospital } from "lucide-react";

const audiences = [
  {
    icon: Landmark,
    title: "Agencias Gubernamentales",
    description: "Ministerios de salud y autoridades de gestión de emergencias",
    benefits: [
      "Optimizar la cobertura de la flota pública de emergencia",
      "Asignación de recursos basada en datos",
      "Mejoras medibles en resultados",
      "Métricas de rendimiento transparentes",
    ],
  },
  {
    icon: Ambulance,
    title: "Servicios de Ambulancias Privadas",
    description: "Proveedores comerciales de servicios médicos de emergencia y empresas de transporte",
    benefits: [
      "Reducir costos operativos",
      "Mejorar el cumplimiento del nivel de servicio",
      "Ventaja competitiva a través de respuesta más rápida",
      "Optimización de utilización de flota",
    ],
  },
  {
    icon: Shield,
    title: "Policía y Servicios de Emergencia",
    description: "Organizaciones de aplicación de la ley y primeros respondedores",
    benefits: [
      "Optimización de rutas de patrullaje",
      "Posicionamiento de respuesta a incidentes",
      "Coordinación interagencial",
      "Análisis de brechas de cobertura",
    ],
  },
];

export default function AudienceSection() {
  return (
    <section className="py-16 lg:py-16" data-testid="section-audience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            A Quién Servimos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma de optimización se adapta a las necesidades únicas de diversas 
            organizaciones responsables de la respuesta de emergencia.
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
