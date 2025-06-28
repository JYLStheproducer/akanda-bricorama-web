
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductUniverses from '@/components/ProductUniverses';
import ProductCatalog from '@/components/ProductCatalog';
import Services from '@/components/Services';
import ProjectsGallery from '@/components/ProjectsGallery';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductUniverses />
      <ProductCatalog />
      <Services />
      <ProjectsGallery />
      <Footer />
    </div>
  );
};

export default Index;
