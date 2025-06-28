import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ShoppingCart, Star, Eye } from 'lucide-react';
import { useCart, Product } from '@/hooks/useCart';

const ProductCatalog = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Produits d'exemple avec images mieux adaptées
  const products: Product[] = [
    {
      id: '1',
      name: 'Perceuse Sans Fil 18V',
      price: 89000,
      category: 'Outillage',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=400&q=80',
      description: 'Perceuse professionnelle avec batterie lithium',
      unit: 'pièce'
    },
    {
      id: '2',
      name: 'Scie Circulaire 1200W',
      price: 125000,
      category: 'Outillage',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=400&q=80',
      description: 'Scie circulaire puissante pour tous matériaux',
      unit: 'pièce'
    },
    {
      id: '3',
      name: 'Peinture Acrylique 10L',
      price: 35000,
      category: 'Peinture',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80',
      description: 'Peinture haute qualité résistante au climat tropical',
      unit: 'pot'
    },
    {
      id: '4',
      name: 'Carrelage 60x60cm',
      price: 8500,
      category: 'Matériaux',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=400&q=80',
      description: 'Carrelage grès cérame antidérapant',
      unit: 'm²'
    },
    {
      id: '5',
      name: 'Tondeuse Électrique',
      price: 165000,
      category: 'Jardinage',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
      description: 'Tondeuse adaptée aux pelouses tropicales',
      unit: 'pièce'
    },
    {
      id: '6',
      name: 'Ciment Portland 50kg',
      price: 4500,
      category: 'Matériaux',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
      description: 'Ciment haute résistance pour construction',
      unit: 'sac'
    }
  ];

  const categories = ['all', 'Outillage', 'Peinture', 'Matériaux', 'Jardinage'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Catalogue Produits
          </h2>
          <p className="text-xl text-neutral-dark">
            Sélectionnez vos produits pour créer votre devis personnalisé
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral w-5 h-5" />
            <Input
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category === 'all' ? 'Tous' : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="bg-white/90">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-primary mb-2">{product.name}</CardTitle>
                <p className="text-neutral-dark text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      {product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-neutral ml-1">FCFA</span>
                    <div className="text-xs text-neutral">par {product.unit}</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-secondary fill-current" />
                    <span className="text-sm text-neutral-dark ml-1">4.5</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => addToCart(product, 1)}
                  className="w-full bg-gradient-primary hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto text-neutral mb-4" />
            <h3 className="text-xl font-semibold text-neutral-dark mb-2">Aucun produit trouvé</h3>
            <p className="text-neutral">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
