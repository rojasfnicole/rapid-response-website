import { Card } from "@/components/ui/card";
import { Clock, Heart, MapPin, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "35%",
    label: "Faster Response",
    description: "Average reduction in arrival time",
  },
  {
    icon: Heart,
    value: "1,200+",
    label: "Lives Impacted",
    description: "Potential lives saved annually",
  },
  {
    icon: MapPin,
    value: "15+",
    label: "Cities Covered",
    description: "Active deployment zones",
  },
  {
    icon: TrendingUp,
    value: "42%",
    label: "Efficiency Gain",
    description: "Improved resource utilization",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center"
              data-testid={`card-stat-${index}`}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
