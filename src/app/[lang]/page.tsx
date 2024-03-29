import { Navbar } from '@/components/ui/Navbar';
import {
  CTA1Section,
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
import { getDictionary } from '@/dictionaries/dictionaries';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col bg-background text-text ">
      <Navbar dictionary={dictionary} />
      <div className=" mx-auto w-full px-4 py-4 md:px-16 lg:max-w-[80vw] lg:px-4 2xl:max-w-7xl">
        <HeroSection dictionary={dictionary} />
        <QualitySection dictionary={dictionary} />
        <WhyMeSection dictionary={dictionary} />
        <MapSection dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        {/* CTA */}
        {/* <ChatSection /> */}
        <EducationSection dictionary={dictionary} />
        <DreamJobSection dictionary={dictionary} />
        <CTA1Section dictionary={dictionary} />
        <FAQSection dictionary={dictionary} />
        <CreatedSection dictionary={dictionary} />
      </div>
    </main>
  );
}
