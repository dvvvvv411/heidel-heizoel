
import { Truck, Shield, Clock, Phone, Award, Users } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Versandkostenfreie Zustellung',
      description: 'Ab einer Bestellmenge von 1500 Litern liefern wir in ganz Deutschland ohne Zusatzkosten',
    },
    {
      icon: Shield,
      title: 'Erstklassige Produktqualität',
      description: 'DIN-geprüftes Heizöl für eine effiziente und saubere Verbrennung',
    },
    {
      icon: Clock,
      title: 'Zügige Belieferung',
      description: 'Ihre Bestellung erreicht Sie innerhalb von 4-7 Werktagen',
    },
    {
      icon: Award,
      title: 'Zwei Jahrzehnte Kompetenz',
      description: 'Seit 2016 sind wir Ihr bewährter Heizöl-Partner in Deutschland',
    },
    {
      icon: Users,
      title: 'Über 100.000 Kunden',
      description: 'Eine stetig wachsende Gemeinschaft vertraut auf unseren Service',
    },
    {
      icon: Phone,
      title: 'Persönliche Beratung',
      description: 'Unser Expertenteam berät Sie individuell – telefonisch und per E-Mail',
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ihre Vorteile mit Heidel Energie
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hochwertige Produkte, pünktliche Lieferung und persönlicher Service – deutschlandweit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-200">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-primary-600 rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-1">1500L</div>
              <div className="text-primary-100 text-sm">Mindestbestellmenge</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4-7</div>
              <div className="text-primary-100 text-sm">Werktage Lieferzeit</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-primary-100 text-sm">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-primary-100 text-sm">Zufriedenheitsgarantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
