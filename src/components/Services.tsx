import { UserCheck, Truck, Wrench, GraduationCap, Clock, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: 'Conseil Personnalisé',
      description: 'Nos experts vous accompagnent dans le choix des produits adaptés à vos projets et au climat gabonais.',
      features: ['Étude de projet gratuite', 'Devis détaillé 24h', 'Suivi personnalisé'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      color: 'primary',
      badge: 'Gratuit'
    },
    {
      icon: Truck,
      title: 'Livraison Express',
      description: 'Service de livraison rapide sur Libreville, Akanda et environs pour vos matériaux et équipements.',
      features: ['Livraison J+1', 'Transport sécurisé', 'Déchargement inclus'],
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=600&q=80',
      color: 'secondary',
      badge: 'Rapide'
    },
    {
      icon: Wrench,
      title: 'Location d\'Outils',
      description: 'Large gamme d\'outils professionnels en location pour vos projets ponctuels.',
      features: ['Tarifs dégressifs', 'Matériel entretenu', 'Formation incluse'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80',
      color: 'accent',
      badge: 'Pro'
    },
    {
      icon: GraduationCap,
      title: 'Formation Bricolage',
      description: 'Ateliers pratiques pour apprendre les techniques de base du bricolage et du jardinage.',
      features: ['Groupes restreints', 'Matériel fourni', 'Certificat inclus'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      color: 'primary',
      badge: 'Nouveau'
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

  const stats = [
    { icon: Users, value: '500+', label: 'Clients satisfaits' },
    { icon: Clock, value: '24h', label: 'Délai de réponse' },
    { icon: Shield, value: '15', label: 'Années d\'expérience' },
    { icon: Award, value: '100%', label: 'Satisfaction garantie' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Services professionnels</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Au-delà de la Vente
          </h2>
          <p className="text-xl text-neutral-dark max-w-3xl mx-auto leading-relaxed">
            Nous vous accompagnons avec des services sur-mesure pour la réussite de vos projets
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-neutral-light rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-neutral-dark">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className={`bg-gradient-to-r ${getColorClass(service.color)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {service.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-6">
                  <div className={`p-3 bg-gradient-to-r ${getColorClass(service.color)} rounded-xl shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-neutral-dark mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-dark">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button className={`w-full bg-gradient-to-r ${getColorClass(service.color)} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  En savoir plus
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section finale */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary via-primary-light to-secondary rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Besoin d'un service personnalisé ?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Contactez nos experts pour un devis gratuit adapté à votre projet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-neutral-light font-bold transition-all duration-300">
                  <UserCheck className="w-5 h-5 mr-2" />
                  Devis gratuit
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-medium transition-all duration-300">
                  <Clock className="w-5 h-5 mr-2" />
                  +241 11 74 77 65
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
