import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TechnologySection from "@/components/TechnologySection";
import AudienceSection from "@/components/AudienceSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen" data-testid="landing-page">
      <Navigation onRequestDemo={scrollToContact} />
      
      <main className="pt-16">
        <HeroSection onRequestDemo={scrollToContact} />
        <StatsSection />
        <ProblemSolutionSection />
        <TechnologySection />
        <AudienceSection />
        <CaseStudySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
