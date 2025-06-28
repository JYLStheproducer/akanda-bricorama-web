
import { useState } from 'react';
import { MapPin, Clock, Eye, Filter, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('tous');

  const categories = [
    { id: 'tous', name: 'Tous les projets', count: 24 },
    { id: 'jardinage', name: 'Jardinage', count: 8 },
    { id: 'bricolage', name: 'Bricolage', count: 7 },
    { id: 'amenagement', name: 'Aménagement', count: 9 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Villa Moderne - Jardin Tropical',
      category: 'jardinage',
      description: 'Création d\'un jardin tropical avec système d\'arrosage automatique et piscine naturelle',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
      location: 'Libreville Centre',
      duration: '2 semaines',
      budget: '2.5M FCFA',
      rating: 5,
      featured: true
    },
    {
      id: 2,
      title: 'Terrasse Bois Exotique Premium',
      category: 'amenagement',
      description: 'Construction d\'une terrasse en bois d\'iroko résistante au climat tropical',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      location: 'Akanda',
      duration: '1 semaine',
      budget: '1.8M FCFA',
      rating: 5,
      featured: false
    },
    {
      id: 3,
      title: 'Atelier Bricolage Familial',
      category: 'bricolage',
      description: 'Aménagement d\'un espace bricolage fonctionnel avec rangements optimisés',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
      location: 'Port-Gentil',
      duration: '4 jours',
      budget: '800K FCFA',
      rating: 4,
      featured: false
    },
    {
      id: 4,
      title: 'Potager Urbain Vertical',
      category: 'jardinage',
      description: 'Installation de bacs potagers verticaux adaptés au climat équatorial',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
      location: 'Libreville',
      duration: '3 jours',
      budget: '650K FCFA',
      rating: 5,
      featured: true
    },
    {
      id: 5,
      title: 'Rénovation Salle de Bain Tropicale',
      category: 'amenagement',
      description: 'Rénovation complète avec matériaux anti-humidité et ventilation optimisée',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      location: 'Akanda',
      duration: '10 jours',
      budget: '3.2M FCFA',
      rating: 5,
      featured: false
    },
    {
      id: 6,
      title: 'Pergola Design Contemporain',
      category: 'bricolage',
      description: 'Construction d\'une pergola moderne avec protection solaire intégrée',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      location: 'Libreville',
      duration: '6 jours',
      budget: '1.5M FCFA',
      rating: 4,
      featured: true
    }
  ];

  const filteredProjects = activeCategory === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'jardinage': return 'accent';
      case 'bricolage': return 'primary';
      case 'amenagement': return 'secondary';
      default: return 'primary';
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'from-primary to-primary-light';
      case 'secondary': return 'from-secondary to-secondary-light';
      case 'accent': return 'from-accent to-accent-light';
      default: return 'from-primary to-primary-light';
    }
  };

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-neutral-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">500+ projets réalisés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Projets & Inspirations
          </h2>
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Découvrez nos réalisations et laissez-vous inspirer pour votre prochain projet au Gabon
          </p>
        </div>

        {/* Category Filter amélioré */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-sm text-neutral-dark mb-4">
            <Filter className="w-4 h-4" />
            <span>Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-secondary text-white shadow-lg'
                    : 'bg-white text-neutral-dark hover:bg-secondary/10 hover:text-secondary border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image avec overlays */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`bg-gradient-to-r ${getColorClass(getCategoryColor(project.category))} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                  {project.featured && (
                    <span className="bg-gradient-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Coup de cœur
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-secondary fill-current" />
                    <span className="text-xs font-bold">{project.rating}</span>
                  </div>
                </div>

                {/* View button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-dark mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div className="flex items-center space-x-2 text-neutral-dark">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-dark">
                    <Clock className="w-3 h-3 text-primary" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-secondary">
                    {project.budget}
                  </div>
                  <div className="text-xs text-neutral-dark bg-neutral-light px-2 py-1 rounded-full">
                    Budget indicatif
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Voir les détails
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section finale */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Votre projet, notre expertise</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à réaliser votre projet ?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Partagez votre vision, nous vous accompagnons de A à Z dans sa réalisation avec un devis personnalisé
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-neutral-light font-bold transform hover:scale-105 transition-all duration-300">
                  <Award className="w-5 h-5 mr-2" />
                  Démarrer mon projet
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-medium transform hover:scale-105 transition-all duration-300">
                  <Eye className="w-5 h-5 mr-2" />
                  Voir plus de projets
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
