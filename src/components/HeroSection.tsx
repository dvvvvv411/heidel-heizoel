
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import PriceCalculator from './PriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';

const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculatorElement = document.getElementById('price-calculator');
    calculatorElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-primary-50/60 via-white to-white overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-orange-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 pt-12 pb-12 lg:pb-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100">
                Über 20 Jahre Kompetenz im Heizölmarkt
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Heizöl zum
                <br />
                <span className="text-primary-600">besten Preis</span>
                <br />
                in ganz Deutschland
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
                Kostenlose Lieferung deutschlandweit • <span className="text-accent-orange-600 font-semibold">Schon ab 90 Cent/Liter</span> • Schnell & zuverlässig
              </p>
            </div>

            {/* USPs */}
            <div className="space-y-3">
              {[
                { text: 'Gratis-Lieferung in ganz Deutschland ab 1500 Liter', highlight: true },
                { text: 'Zustellung in nur 4-7 Werktagen', highlight: false },
                { text: 'Zertifizierte Premium-Qualität nach DIN-Norm', highlight: false },
                { text: 'Mehr als 100.000 begeisterte Kunden', highlight: true }
              ].map((usp, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className={`flex-shrink-0 ${usp.highlight ? 'text-accent-orange-500' : 'text-primary-600'}`} size={18} />
                  <span className="text-gray-700 font-medium text-sm lg:text-base">{usp.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                Jetzt Preis ermitteln
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="lg:hidden space-y-4">
              <Button 
                onClick={scrollToCalculator}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg font-semibold min-h-[48px]"
              >
                Jetzt Preis ermitteln
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 lg:pt-8 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4 lg:flex lg:items-center lg:space-x-10">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary-600">100.000+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary-600">20+</div>
                  <div className="text-xs lg:text-sm text-gray-500">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-primary-600">24h</div>
                  <div className="text-xs lg:text-sm text-gray-500">Erreichbarkeit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Price Calculators */}
          <div className="animated-slide-up">
            <div id="price-calculator">
              {/* Desktop Calculator */}
              <div className="hidden lg:block">
                <PriceCalculator />
              </div>
              {/* Mobile Calculator */}
              <div className="lg:hidden">
                <MobilePriceCalculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
