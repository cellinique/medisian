import Hero from "@/components/sections/Hero";
import Company from "@/components/sections/Company";
import Brand from "@/components/sections/Brand";
import CellReand from "@/components/sections/CellReand";
import Service from "@/components/sections/Service";
import Contact from "@/components/sections/Contact";
import Inquiry from "@/components/sections/Inquiry";

export default function Home() {
  return (
    <main>
      <Hero />
      <Company />
      <Brand />
      <CellReand />
      <Service />
      <Contact />
      <Inquiry />
    </main>
  );
}
