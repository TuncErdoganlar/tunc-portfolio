import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <CurrentlyLearning />
      <Skills />
      <Hobbies />
      <Contact />
    </>
  );
}
