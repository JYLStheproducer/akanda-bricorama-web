import { useState, useEffect } from 'react';
import { ArrowDown, Play, Star, Users, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=80',
      title: 'Atelier de Bricolage Professionnel',
      subtitle: 'Outillage de qualité pour tous vos projets',
      cta: 'Découvrir nos outils',
      stats: '2000+ outils disponibles'
    },
    {
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
      title: 'Jardinage & Aménagement Extérieur',
      subtitle: 'Créez votre oasis tropicale au Gabon',
      cta: 'Voir le jardinage',
      stats: '500+ plantes tropicales'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
      title: 'Showroom & Exposition',
      subtitle: 'Découvrez nos dernières innovations',
      cta: 'Visiter le showroom',
      stats: '10 000+ références'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider avec overlay dynamique */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content principal */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <div className="animate-fade-in">
          {/* Badge de confiance */}
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Depuis 15 ans au Gabon</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Votre partenaire
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              bricolage & jardinage
            </span>
            <span className="block text-2xl md:text-4xl font-normal text-neutral-light/90 mt-2">
              à Akanda
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-neutral-light/90 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].stats} • Plus de 10 000 produits pour réaliser tous vos projets
          </p>
          
          {/* Trust Indicators avec icônes */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-secondary" />
              <span>15 ans d'expérience</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Truck className="w-4 h-4 text-secondary" />
              <span>Livraison Libreville</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-secondary" />
              <span>Conseil expert</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-secondary hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white px-8 py-4 text-lg font-medium rounded-full"
            >
              {slides[currentSlide].cta}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg font-medium rounded-full"
            >
              <Play className="w-5 h-5 mr-2" />
              Voir la vidéo
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">10K+</div>
              <div className="text-sm text-neutral-light/80">Produits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">15</div>
              <div className="text-sm text-neutral-light/80">Années</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-sm text-neutral-light/80">Projets</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators améliorés */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-secondary scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator animé */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-medium">Découvrir</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
