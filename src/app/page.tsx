import { HeroSection } from "@/components/home/HeroSection";
import { HaltungSection } from "@/components/home/HaltungSection";
import { ZugangTeaser } from "@/components/home/ZugangTeaser";
import { LeistungenGrid } from "@/components/home/LeistungenGrid";
import { UeberUnsTeaser } from "@/components/home/UeberUnsTeaser";
import { ReferenzSection } from "@/components/home/ReferenzSection";
import { KontaktBanner } from "@/components/home/KontaktBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <HaltungSection />
      <ZugangTeaser />
      <LeistungenGrid />
      <UeberUnsTeaser />
      <ReferenzSection />
      <KontaktBanner />
    </>
  );
}
