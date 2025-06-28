
import { Phone, Mail, ArrowUp, Search } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Bricorama Akanda</h3>
                <p className="text-sm text-neutral-light/80">Votre expert bricolage</p>
              </div>
            </div>
            <p className="text-neutral-light/90 leading-relaxed">
              Depuis 15 ans, nous accompagnons les Gabonais dans leurs projets de bricolage, 
              jardinage et aménagement avec plus de 10 000 produits de qualité.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-secondary/20 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">+241 11 74 77 65</p>
                  <p className="text-sm text-neutral-light/80">Lun-Sam: 7h-18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">contact@bricorama-akanda.ga</p>
                  <p className="text-sm text-neutral-light/80">Réponse sous 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowUp className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Zone Industrielle Akanda</p>
                  <p className="text-sm text-neutral-light/80">Face au Port d'Owendo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Liens Rapides</h4>
            <div className="space-y-3">
              {[
                'Nos produits',
                'Services pro',
                'Devis gratuit',
                'Location outils',
                'Formation bricolage',
                'Livraison'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-neutral-light/90 hover:text-secondary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Horaires & Infos */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Horaires & Infos</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-secondary mb-2">Horaires d'ouverture</h5>
                <div className="text-sm text-neutral-light/90 space-y-1">
                  <p>Lun-Ven: 7h00 - 18h00</p>
                  <p>Samedi: 7h00 - 17h00</p>
                  <p>Dimanche: 8h00 - 12h00</p>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-secondary mb-2">Zone de livraison</h5>
                <div className="text-sm text-neutral-light/90 space-y-1">
                  <p>• Libreville</p>
                  <p>• Akanda</p>
                  <p>• Owendo</p>
                  <p>• Ntoum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Restez informé de nos actualités</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-secondary"
              />
              <button className="bg-secondary hover:bg-secondary/90 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-neutral-light/70 mt-2">
              Promotions, nouveautés et conseils bricolage
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-light/80">
            <p>© {currentYear} Bricorama Akanda. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Mentions légales
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-secondary transition-colors duration-200">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
