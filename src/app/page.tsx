import Hero from "./home/Hero";
import About from "./home/About";
import ServiceSection from "./home/Service";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div>
      {/* section start */}
      <Hero />
      <About />
      <ServiceSection />
      <CTA />
      {/* section end */}
    </div>
  );
}
