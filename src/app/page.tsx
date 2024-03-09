import { Navbar } from '@/components/ui/Navbar';
import { ExperienceSection } from '@/components/sections/experience/ExperienceSection';
import HeroSection from '@/components/sections/hero/HeroSection';
import QualitySection from '@/components/sections/quality/QualitySection';
import MapSection from '@/components/sections/map/MapSection';
import CreatedSection from '@/components/sections/created/CreatedSection';
import WhyMeSection from '@/components/sections/whyMe/WhyMeSection';
import ChatSection from '@/components/sections/chat/ChatSection';
import EducationSection from '@/components/sections/education/EducationSection';
import CTA1 from '@/components/sections/CTA/CTA1';
import FAQSection from '@/components/sections/faq/FAQSection';
import DreamJobSection from '@/components/sections/dreamJob/DreamJobSection';

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
        <CTA1 />
        <FAQSection />
        <CreatedSection />
      </div>
    </main>
  );
}
