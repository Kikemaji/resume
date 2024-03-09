import { Navbar } from '@/components/ui/Navbar';
import {
  CTA1Section,
  ChatSection,
  CreatedSection,
  DreamJobSection,
  EducationSection,
  ExperienceSection,
  FAQSection,
  HeroSection,
  MapSection,
  QualitySection,
  WhyMeSection,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-text ">
      <Navbar />
      <div className=" mx-auto w-full px-4 py-4 md:px-16 lg:max-w-[80vw] lg:px-4 2xl:max-w-7xl">
        <HeroSection />
        <QualitySection />
        <MapSection />
        <WhyMeSection />
        <ExperienceSection />
        {/* CTA */}
        <ChatSection />
        <EducationSection />
        <DreamJobSection />
        <CTA1Section />
        <FAQSection />
        <CreatedSection />
      </div>
    </main>
  );
}
