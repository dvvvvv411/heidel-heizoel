
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Droplets, Shield } from 'lucide-react';

const EnvironmentalAspects = () => {
  const environmentalFeatures = [
    {
      icon: Leaf,
      title: 'Niedriger Schwefelgehalt',
      description: 'Weniger als 50 mg/kg Schwefel für eine besonders saubere Verbrennung',
      impact: 'Deutlich weniger SO₂-Ausstoß'
    },
    {
      icon: Droplets,
      title: 'Effiziente Verbrennung',
      description: 'Gleichmäßiges Brennverhalten dank hochwertiger Raffination',
      impact: 'Minimaler Ruß- und Partikelausstoß'
    },
    {
      icon: Recycle,
      title: 'Umweltbewusste Herstellung',
      description: 'Ressourcenschonende Produktionsverfahren bei der Aufbereitung',
      impact: 'Reduzierter CO₂-Fußabdruck'
    },
    {
      icon: Shield,
      title: 'Schutz der Gewässer',
      description: 'Biologisch abbaubare Zusätze in unserer Premium-Variante',
      impact: 'Umweltschonend'
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Verantwortung für Umwelt & Klima
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Durch schwefelarme Heizölsorten und nachhaltige Produktionsprozesse 
            leisten wir unseren Beitrag zum Umweltschutz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {environmentalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {feature.impact}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-600" />
                Schadstoffwerte im Überblick
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">CO₂-Ausstoß</span>
                  <span className="text-green-600 font-semibold">-15% gegenüber Standard</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Schwefel im Abgas</span>
                  <span className="text-green-600 font-semibold">{"< 50 mg/kg"}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Feinstaubbelastung</span>
                  <span className="text-green-600 font-semibold">Äußerst gering</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-6 h-6 text-green-600" />
                Unsere Nachhaltigkeitsinitiativen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Routenoptimierte Transporte zur Senkung der CO₂-Bilanz</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Einsatz regenerativer Energien in der Produktion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Konsequentes Recycling von Verpackungsmaterialien</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span>Fortlaufende Optimierung unserer Umweltbilanz</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalAspects;