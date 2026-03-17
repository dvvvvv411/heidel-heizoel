
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Clock, Truck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdditionalServicesSection = () => {
  const additionalServices = [
    {
      icon: Map,
      title: 'Tankinhaltsmessung',
      description: 'Professionelle Messung Ihres aktuellen Heizölbestands',
      features: [
        'Genaue Füllstandsmessung vor Ort',
        'Berechnung der benötigten Heizölmenge',
        'Kostenlose Beratung zur optimalen Bestellmenge',
        'Dokumentation für Ihre Unterlagen'
      ],
      price: 'Kostenlos bei Bestellung'
    },
    {
      icon: Clock,
      title: 'Notfalllieferung',
      description: '24/7 Service für dringende Heizöllieferungen',
      features: [
        'Express-Lieferung innerhalb von 4 Stunden',
        'Auch an Wochenenden und Feiertagen',
        'Mindestmenge bereits ab 300 Liter',
        'Telefonische Hotline rund um die Uhr'
      ],
      price: 'Aufpreis 15€/100L'
    },
    {
      icon: Bell,
      title: 'Preisalarm-Service',
      description: 'Automatische Benachrichtigung bei günstigen Preisen',
      features: [
        'Individuelle Preisschwelle festlegen',
        'SMS oder E-Mail Benachrichtigung',
        'Marktanalyse und Preistrends',
        'Optimaler Kaufzeitpunkt-Empfehlung'
      ],
      price: 'Kostenloser Service'
    },
    {
      icon: Truck,
      title: 'Sammelbestellungen',
      description: 'Gemeinsame Bestellungen für bessere Preise',
      features: [
        'Organisation von Nachbarschaftsbestellungen',
        'Bis zu 10% Rabatt bei Sammelbestellungen',
        'Koordination der Liefertermine',
        'Abrechnung nach individuellen Mengen'
      ],
      price: 'Rabatt bis 10%'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zusätzliche Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mehr als nur Heizöllieferung - wir bieten Ihnen umfassende Serviceleistungen 
            für Ihre optimale Heizölversorgung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-primary-600">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
