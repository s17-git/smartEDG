import Hero from "../components/Hero";
import { Innovation } from "../components/Innovations";
import { HowItWork } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import WhyGSE from "../components/WhyGSE";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Innovation />
        <HowItWork />
        <Testimonials />
        <WhyGSE />
      </main>
    </>
  );
}
