import { Card } from "@/components/ui/card";
import { BarChart3, MapPinned, Clock, Cpu, Database, RefreshCw } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Demand Forecasting",
    description: "Historical data analysis predicts emergency hotspots with high accuracy, enabling proactive positioning.",
  },
  {
    icon: MapPinned,
    title: "Spatial Optimization",
    description: "Advanced algorithms calculate optimal vehicle positions considering road networks and geographic constraints.",
  },
  {
    icon: Clock,
    title: "Real-Time Adaptation",
    description: "System continuously adjusts recommendations based on current vehicle status and emerging situations.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Decisions",
    description: "Machine learning models improve over time, learning from outcomes to refine positioning strategies.",
  },
  {
    icon: Database,
    title: "Seamless Integration",
    description: "Connects with existing CAD systems and dispatch software without disrupting current workflows.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Feedback loops ensure the system adapts to changing city dynamics and seasonal patterns.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 lg:py-24 bg-muted/30" data-testid="section-technology">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            How Our Technology Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on years of operations research and emergency services expertise, 
            our platform combines cutting-edge optimization with practical deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-tech-${index}`}
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
