
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/heidel-logo.png" 
              alt="Heidel Energie" 
              className="h-16 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Ihr bewährter Partner für Heizöl in ganz Deutschland – mit über 20 Jahren Erfahrung. 
              Erstklassige Qualität, persönlicher Service und faire Konditionen.
            </p>
            <div>
              <div className="font-semibold">Heidel Energie GmbH</div>
              <div className="text-sm text-gray-400">Ihr Heizöl-Spezialist in Deutschland</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Schnellzugriff</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-accent-orange-400 transition-colors">Startseite</Link></li>
              <li><Link to="/produkte" className="hover:text-accent-orange-400 transition-colors">Produkte</Link></li>
              <li><Link to="/services" className="hover:text-accent-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-accent-orange-400 transition-colors">Über uns</Link></li>
              <li><Link to="/agb" className="hover:text-accent-orange-400 transition-colors">AGB</Link></li>
              <li><Link to="/datenschutz" className="hover:text-accent-orange-400 transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">So erreichen Sie uns</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span>0211-87971675</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span>info@heidel-heizoel.de</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent-orange-400 mt-1" />
                <div>
                  <div>Kaiserstr. 5</div>
                  <div>40479 Düsseldorf</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Erreichbarkeit</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-primary-400" />
                <span>Telefonische Beratung</span>
              </div>
              <div className="space-y-1 text-sm">
                <div>Mo - Fr: 08:00 - 18:00</div>
                <div>Sa: 09:00 - 14:00</div>
                <div>So: Notfall-Bereitschaft</div>
              </div>
              <div className="mt-4 p-3 bg-accent-orange-900 rounded-lg border border-accent-orange-700">
                <div className="text-sm font-semibold text-accent-orange-400 mb-1">
                  24/7 Notfall-Bereitschaft
                </div>
                <div className="text-xs text-gray-300">
                  Bei Heizungsausfällen sind wir rund um die Uhr für Sie erreichbar
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2026 Heidel Energie GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <Link to="/impressum" className="hover:text-accent-orange-400 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-accent-orange-400 transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-accent-orange-400 transition-colors">AGB</Link>
              <Link to="/widerrufsrecht" className="hover:text-accent-orange-400 transition-colors">Widerrufsrecht</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;