import Hero from '../components/Hero';
import AboutMini from '../components/AboutMini';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import LinkedInPosts from '../components/LinkedinPosts';
import Contact from '../components/Contact';

interface HomeProps {
  onAbout: () => void;
}

export default function Home({ onAbout }: HomeProps) {
  return (
    <main>
      <Hero />
      <AboutMini onOpen={onAbout} />
      <Services />
      <Testimonials />
      <LinkedInPosts />
      <Contact />
    </main>
  );
}