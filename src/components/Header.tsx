
import { useState } from 'react';
import { Menu, X, Bell, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { scrollToCalculator, scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleOrderClick = () => {
    if (isHomePage) {
      scrollToCalculator();
    } else {
      scrollToCalculatorFromOtherPage();
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 hidden lg:block">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="border-b border-gray-100 py-2">
            <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Bell size={14} className="text-accent-orange-500" />
                  <span>info@heidel-heizoel.de</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-accent-orange-500" />
                  <span>0211-87971675</span>
                </div>
              </div>
              <div className="text-accent-orange-500 font-medium">
                Gratis-Versand deutschlandweit
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center py-3">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/heidel-logo.png" 
                alt="Heidel Energie" 
                className="h-16"
              />
            </Link>

            <nav className="ml-auto flex items-center flex-nowrap gap-6">
              <Link to="/" className="inline-flex items-center h-10 text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Startseite
              </Link>
              <Link to="/produkte" className="inline-flex items-center h-10 text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Produkte
              </Link>
              <Link to="/services" className="inline-flex items-center h-10 text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Services
              </Link>
              <Link to="/ueber-uns" className="inline-flex items-center h-10 text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Über uns
              </Link>
              <Link to="/bestellstatus" className="inline-flex items-center h-10 text-gray-700 hover:text-accent-orange-500 transition-colors font-medium">
                Bestellstatus
              </Link>
              <Button
                onClick={handleOrderClick}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6"
              >
                Jetzt bestellen
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 lg:hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex-1"></div>
            
            <Link to="/" className="flex items-center">
              <img 
                src="/heidel-logo.png" 
                alt="Heidel Energie" 
                className="h-14"
              />
            </Link>

            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 border border-gray-300 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center hover:border-accent-orange-500 transition-colors"
                aria-label="Menü öffnen"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Sidebar */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-white flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex-1" />
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
            <img src="/heidel-logo.png" alt="Heidel Energie" className="h-14" />
          </Link>
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full border border-gray-300 min-w-[44px] min-h-[44px] flex items-center justify-center hover:border-accent-orange-500 transition-colors"
              aria-label="Menü schließen"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          {[
            { to: '/', label: 'Startseite' },
            { to: '/produkte', label: 'Produkte' },
            { to: '/services', label: 'Services' },
            { to: '/ueber-uns', label: 'Über uns' },
            { to: '/bestellstatus', label: 'Bestellstatus' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-medium text-gray-800 hover:text-accent-orange-500 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Button
            onClick={() => { setIsMenuOpen(false); handleOrderClick(); }}
            className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-base"
          >
            Jetzt bestellen
          </Button>
        </nav>

        {/* Sidebar Footer */}
        <div className="px-6 py-6 text-center text-sm text-gray-500 space-y-1">
          <p>info@heidel-heizoel.de</p>
          <p>0211-87971675</p>
        </div>
      </div>
    </>
  );
};

export default Header;