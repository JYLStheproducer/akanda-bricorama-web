
import { Hammer, Leaf, Palette, Building, ArrowRight, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductUniverses = () => {
  const universes = [
    {
      title: 'Bricolage & Outillage',
      description: 'Outils professionnels et équipements pour tous vos travaux',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      icon: Hammer,
      items: ['Perceuses', 'Scies', 'Outils à main', 'Électroportatif'],
      color: 'primary',
      productCount: '2000+',
      badge: 'Nouveautés'
    },
    {
      title: 'Jardinage & Extérieur',
      description: 'Tout pour créer et entretenir votre jardin tropical',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
      icon: Leaf,
      items: ['Plantes tropicales', 'Tondeuses', 'Arrosage', 'Mobilier jardin'],
      color: 'accent',
      productCount: '1500+',
      badge: 'Spécial Gabon'
    },
    {
      title: 'Décoration & Aménagement',
      description: 'Transformez votre intérieur avec style',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      icon: Palette,
      items: ['Peintures', 'Revêtements', 'Éclairage', 'Accessoires déco'],
      color: 'secondary',
      productCount: '3000+',
      badge: 'Tendances'
    },
    {
      title: 'Matériaux & Construction',
      description: 'Matériaux de qualité pour vos gros œuvres',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      icon: Building,
      items: ['Ciment', 'Fer à béton', 'Carrelage', 'Sanitaires'],
      color: 'primary',
      productCount: '4000+',
      badge: 'Pro'
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'from-primary to-primary-light';
      case 'secondary': return 'from-secondary to-secondary-light';
      case 'accent': return 'from-accent to-accent-light';
      default: return 'from-primary to-primary-light';
    }
  };

  const getTextColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary';
      case 'secondary': return 'text-secondary';
      case 'accent': return 'text-accent';
      default: return 'text-primary';
    }
  };

  return (
    <section id="produits" className="py-20 bg-gradient-to-br from-neutral-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Plus de 10 000 références</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Nos Univers Produits
          </h2>
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Découvrez notre large gamme de produits adaptés au climat gabonais et aux besoins locaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {universes.map((universe, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`bg-gradient-to-r ${getColorClass(universe.color)} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {universe.badge}
                </span>
              </div>

              {/* Product Count */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-neutral-dark">
                  {universe.productCount}
                </div>
              </div>

              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={universe.image}
                  alt={universe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${getColorClass(universe.color)} rounded-xl shadow-lg`}>
                      <universe.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{universe.title}</h3>
                      <p className="text-neutral-light/90 text-sm">{universe.description}</p>
                    </div>
                  </div>
                </div>

                {/* Product Items avec animation */}
                <div className="grid grid-cols-2 gap-3 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  {universe.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <Button className={`flex-1 bg-gradient-to-r ${getColorClass(universe.color)} hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Explorer
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-dark transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary via-primary-light to-secondary rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h3>
            <p className="text-xl mb-6 text-white/90">
              Nos experts vous conseillent gratuitement pour trouver les produits adaptés à votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-neutral-light transition-all duration-300 font-bold">
                Conseil gratuit
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium">
                Catalogue 2024
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductUniverses;
