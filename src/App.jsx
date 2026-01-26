import Header from './components/Header';
import Hero from './components/Hero';
import FindUsOnline from './components/FindUsOnline';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedCrystals from './components/FeaturedCrystals';
import CrystalMusings from './components/CrystalMusings';
import JoinCommunity from './components/JoinCommunity';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="text-gray-200 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-16 space-y-24">
        <Hero />
        <FindUsOnline />
        <AboutUs />
        <WhyChooseUs />
        <FeaturedCrystals />
        <CrystalMusings />
        <JoinCommunity />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
