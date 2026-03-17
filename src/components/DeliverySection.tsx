
import { MapPin, CheckCircle, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeliverySection = () => {
  const cities = [
    'München', 'Nürnberg', 'Augsburg', 'Würzburg', 'Regensburg',
    'Ingolstadt', 'Fürth', 'Erlangen', 'Bayreuth', 'Bamberg',
    'Aschaffenburg', 'Landshut', 'Kempten', 'Rosenheim', 'Neu-Ulm',
    'Schweinfurt', 'Passau', 'Freising', 'Straubing', 'Dachau'
  ];

  return (
    <section id="liefergebiet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Deutschlandweite Belieferung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bringen Ihr Heizöl verlässlich und ohne Versandkosten zu Ihnen nach Hause.
            Ihre Stadt fehlt in der Liste? Sprechen Sie uns an – wir finden eine Lösung!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bayern Map Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-primary-50 to-primary-100">
              <CardContent className="p-8">
                <div className="relative bg-white rounded-2xl p-8 shadow-inner">
                  {/* Bayern Map Image Placeholder */}
                  <div className="relative flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=400"
                      alt="Deutschland Karte - Liefergebiet"
                      className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Floating Delivery Truck */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white rounded-full p-3 shadow-lg animate-float">
                    <Truck size={24} />
                  </div>
                  
                  {/* Location Pin */}
                  <div className="absolute top-6 left-6 bg-red-500 text-white rounded-full p-2 shadow-lg animate-bounce-subtle">
                    <MapPin size={20} />
                  </div>
                </div>
                
                {/* Bottom Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center bg-white/80 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-600">100%</div>
                    <div className="text-sm text-gray-600">Flächendeckend in Deutschland</div>
                  </div>
                  <div className="text-center bg-white/80 rounded-lg p-3">
                    <div className="text-2xl font-bold text-primary-600">20+</div>
                    <div className="text-sm text-gray-600">Regionale Stützpunkte</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
              Bundesweit verfügbar!
            </div>
          </div>

          {/* Cities List */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                 <CardTitle className="text-2xl text-primary-600 flex items-center">
                  <CheckCircle className="mr-3 text-green-500" size={28} />
                  Ausgewählte Lieferorte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {cities.map((city, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 p-2 hover:bg-primary-50 rounded-lg transition-colors"
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-primary-700 font-medium mb-2">
                    Ihre Stadt ist nicht aufgeführt?
                  </p>
                  <p className="text-gray-600 text-sm">
                    Kein Problem! Wir beliefern zahlreiche weitere Orte in Deutschland. 
                    Rufen Sie uns an unter <span className="font-medium">089 416 133 45</span> 
                    und wir klären die Liefermöglichkeit für Sie.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">Kostenfrei</div>
              <div className="text-gray-600">Zustellung ab 1500L</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">4-7 Tage</div>
              <div className="text-gray-600">Durchschnittliche Lieferdauer</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">8-18 Uhr</div>
              <div className="text-gray-600">Zeitfenster für Zustellungen</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;