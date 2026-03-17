
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Clock, Truck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdditionalServicesSection = () => {
  const additionalServices = [
    {
      icon: Map,
      title: 'Füllstandsermittlung',
      description: 'Fachgerechte Bestimmung Ihres aktuellen Heizölvorrats',
      features: [
        'Exakte Füllstandsmessung direkt bei Ihnen',
        'Berechnung der benötigten Nachfüllmenge',
        'Kostenfreie Empfehlung zur idealen Bestellmenge',
        'Schriftliche Dokumentation für Ihre Ablage'
      ],
      price: 'Gratis bei Bestellung'
    },
    {
      icon: Clock,
      title: 'Eilzustellung',
      description: 'Rund-um-die-Uhr-Bereitschaft für dringende Lieferungen',
      features: [
        'Express-Zustellung innerhalb von 4 Stunden',
        'Auch an Wochenenden und Feiertagen verfügbar',
        'Bereits ab 300 Liter Mindestmenge',
        'Telefonisch erreichbare Notfall-Hotline'
      ],
      price: 'Zuschlag 15€/100L'
    },
    {
      icon: Bell,
      title: 'Preisbenachrichtigung',
      description: 'Automatischer Hinweis bei besonders günstigen Konditionen',
      features: [
        'Persönliche Wunschpreisschwelle definieren',
        'Benachrichtigung per SMS oder E-Mail',
        'Marktbeobachtung und Trendanalysen',
        'Empfehlung für den optimalen Bestellzeitpunkt'
      ],
      price: 'Kostenfreier Service'
    },
    {
      icon: Truck,
      title: 'Gemeinschaftsbestellungen',
      description: 'Gemeinsam bestellen und von besseren Konditionen profitieren',
      features: [
        'Koordination von Nachbarschaftsbestellungen',
        'Bis zu 10% Preisnachlass bei Sammelbestellungen',
        'Abstimmung der Liefertermine',
        'Individuelle Abrechnung nach Menge'
      ],
      price: 'Bis zu 10% Vorteil'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Weitere Leistungen für Sie
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Weit mehr als reine Heizöllieferung – entdecken Sie unser umfangreiches 
            Serviceangebot für Ihre Heizölversorgung.
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