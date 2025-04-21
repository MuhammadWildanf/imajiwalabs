import Hero from "./home/Hero";
import About from "./home/About";
import ServiceSection from "./home/Service";
import CTA from "../../components/frontend/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ServiceSection />
      <CTA />
    </div>
  );
}
