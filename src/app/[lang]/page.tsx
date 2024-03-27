import { Navbar } from '@/components/ui/Navbar';
import {
  CTA1Section,
  CreatedSection,
  EducationSection,
  ExperienceSection,
  FAQSection,
  HeroSection,
  QualitySection,
  WhyMeSection,
} from '@/components/sections';
import { getDictionary } from '@/dictionaries/dictionaries';
import dynamic from 'next/dynamic';

const LazyMapSection = dynamic(
  () => import('@/components/sections/map/MapSection')
);
const LazyDreamJobSection = dynamic(
  () => import('@/components/sections/dreamJob/DreamJobSection')
);

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col bg-background text-text ">
      <Navbar dictionary={dictionary} />
      <article className=" mx-auto w-full px-4 py-4 md:px-16 lg:max-w-[80vw] lg:px-4 2xl:max-w-7xl">
        <HeroSection dictionary={dictionary} />
        <QualitySection dictionary={dictionary} />
        <WhyMeSection dictionary={dictionary} />
        <LazyMapSection dictionary={dictionary} />
        <ExperienceSection dictionary={dictionary} />
        {/* <ChatSection /> */}
        <EducationSection dictionary={dictionary} />
        <LazyDreamJobSection dictionary={dictionary} />
        <CTA1Section dictionary={dictionary} />
        <FAQSection dictionary={dictionary} />
        <CreatedSection dictionary={dictionary} />
      </article>
    </main>
  );
}
