import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return <HeroSection onRequestDemo={() => console.log("Request demo clicked")} />;
}
