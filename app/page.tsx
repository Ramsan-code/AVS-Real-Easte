import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedItems } from './components/FeaturedItems';
import { PropertyGallery } from './components/PropertyGallery';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cloud overflow-x-hidden flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <PropertyGallery />
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
