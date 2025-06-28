import { useState } from 'react';
import { Menu, X, Search, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from './QuoteForm';
import Cart from './Cart';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsCartOpen } = useCart();

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Produits', href: '#produits' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-primary/10">
      {/* Top bar avec informations importantes */}
      <div className="bg-gradient-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Akanda, Gabon - Livraison Libreville</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Lun-Sam: 7h30-18h30 | Dim: 8h-17h</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-secondary font-medium">🔥 Promotions jusqu'à -30%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo amélioré */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="/lovable-uploads/96dc2197-e9e4-4516-a7d7-2b0d35895dbd.png" 
                  alt="Bricorama Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">🔧</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Bricorama
              </h1>
              <p className="text-xs text-neutral-dark font-medium">Akanda • Gabon</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-neutral-dark hover:text-primary transition-all duration-300 font-medium py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact & CTA améliorés */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-neutral-dark bg-neutral-light px-3 py-2 rounded-full">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">+241 11 74 77 65</span>
            </div>
            <Cart />
            <QuoteForm />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation améliorée */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in bg-white rounded-b-xl shadow-xl">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-neutral-dark hover:text-primary hover:bg-neutral-light transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-center space-x-2 text-sm text-neutral-dark px-4">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-medium">+241 11 74 77 65</span>
                </div>
                <div className="flex gap-2 mx-4">
                  <Cart />
                  <QuoteForm />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
