import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section id="solution" className="py-16 lg:py-24" data-testid="section-problem-solution">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            The Challenge We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional emergency response relies on fixed station locations, 
            leaving coverage gaps that cost precious minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-md bg-destructive/5 border border-destructive/10">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Static Positioning Problem</h3>
                <p className="text-muted-foreground">
                  Ambulances stationed at fixed locations cannot adapt to real-time 
                  demand patterns, creating dangerous coverage gaps during peak hours 
                  or after completed calls.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-md bg-destructive/5 border border-destructive/10">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Response Time Variability</h3>
                <p className="text-muted-foreground">
                  Without dynamic repositioning, response times vary dramatically 
                  based on the emergency location relative to current vehicle positions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-md bg-primary/5 border border-primary/10">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Dynamic Optimization</h3>
                <p className="text-muted-foreground">
                  Our algorithms continuously analyze demand patterns, traffic conditions, 
                  and vehicle availability to recommend optimal repositioning in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-md bg-primary/5 border border-primary/10">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Predictive Coverage</h3>
                <p className="text-muted-foreground">
                  Machine learning models predict where emergencies are most likely 
                  to occur, allowing proactive positioning before incidents happen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <span className="font-medium">The result?</span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-semibold text-foreground">Faster response times across all service areas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
