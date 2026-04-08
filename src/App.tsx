import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './components/About';

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <Header onAbout={() => setAboutOpen(true)} />
      <Home onAbout={() => setAboutOpen(true)} />
      <Footer />
      <WhatsAppButton />
      {aboutOpen && <About onClose={() => setAboutOpen(false)} />}
    </>
  );
}