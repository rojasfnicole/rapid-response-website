import { Card } from "@/components/ui/card";
import { Quote, MapPin, Clock, Users } from "lucide-react";

export default function CaseStudySection() {
  return (
    <section id="impact" className="py-16 lg:py-24 bg-primary/5" data-testid="section-case-study">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Proven Impact in Chile
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our technology is actively deployed and making a measurable difference 
            in emergency response outcomes.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 lg:p-12">
          <div className="flex items-start gap-4 mb-8">
            <Quote className="h-10 w-10 text-primary flex-shrink-0" />
            <blockquote className="text-lg lg:text-xl leading-relaxed italic text-muted-foreground">
              "The implementation of Rapid Response's optimization system has 
              transformed how we deploy our emergency resources. We're seeing 
              consistent improvements in response times across all our coverage 
              areas, and the data-driven approach has made resource planning 
              significantly more effective."
            </blockquote>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pl-14 mb-10">
            <span className="font-semibold">Regional Health Authority</span>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="text-muted-foreground">Santiago Metropolitan Region</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-md bg-muted/50">
              <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold mb-1">3.5 min</div>
              <div className="text-sm text-muted-foreground">Average time saved per call</div>
            </div>
            <div className="text-center p-4 rounded-md bg-muted/50">
              <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold mb-1">15 zones</div>
              <div className="text-sm text-muted-foreground">Active coverage areas</div>
            </div>
            <div className="text-center p-4 rounded-md bg-muted/50">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-3xl font-bold mb-1">2.5M+</div>
              <div className="text-sm text-muted-foreground">Population served</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
