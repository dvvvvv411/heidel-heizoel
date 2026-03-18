
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/heidel-logo.png" 
              alt="Heidel Energie" 
              className="h-14 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              Ihr bewährter Partner für Heizöl in ganz Deutschland – mit über 20 Jahren Erfahrung. 
              Erstklassige Qualität, persönlicher Service und faire Konditionen.
            </p>
            <div>
              <div className="font-medium text-sm">Heidel Energie GmbH</div>
              <div className="text-xs text-gray-500">Ihr Heizöl-Spezialist in Deutschland</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Schnellzugriff</h3>
            <ul className="space-y-2.5 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/produkte" className="hover:text-white transition-colors">Produkte</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/agb" className="hover:text-white transition-colors">AGB</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Kontakt</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-gray-500" />
                <span>0211-87971675</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-gray-500" />
                <span>info@heidel-heizoel.de</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="text-gray-500 mt-0.5" />
                <div>
                  <div>Kaiserstr. 5</div>
                  <div>40479 Düsseldorf</div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Erreichbarkeit</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-3">
                <Clock size={14} className="text-gray-500" />
                <span>Telefonische Beratung</span>
              </div>
              <div className="space-y-1 text-sm text-gray-400">
                <div>Mo - Fr: 08:00 - 18:00</div>
                <div>Sa: 09:00 - 14:00</div>
                <div>So: Notfall-Bereitschaft</div>
              </div>
              <div className="mt-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-xs font-medium text-primary-400 mb-1">
                  24/7 Notfall-Bereitschaft
                </div>
                <div className="text-xs text-gray-400">
                  Bei Heizungsausfällen rund um die Uhr erreichbar
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-xs">
              © 2026 Heidel Energie GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 mt-3 md:mt-0 text-xs text-gray-500">
              <Link to="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-gray-300 transition-colors">AGB</Link>
              <Link to="/widerrufsrecht" className="hover:text-gray-300 transition-colors">Widerrufsrecht</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
