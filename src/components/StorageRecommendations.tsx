
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Thermometer, Shield, Info } from 'lucide-react';

const StorageRecommendations = () => {
  const generalTips = [
    {
      icon: Thermometer,
      title: 'Temperatur',
      description: 'Optimale Lagertemperatur zwischen -10°C und +40°C für bestmögliche Qualitätserhaltung'
    },
    {
      icon: Shield,
      title: 'Tankschutz',
      description: 'Setzen Sie auf korrosionsbeständige Behälter aus Stahl oder hochwertigem Kunststoff'
    },
    {
      icon: Info,
      title: 'Füllstand',
      description: 'Halten Sie den Tank möglichst voll, um Kondenswasserbildung vorzubeugen'
    },
    {
      icon: AlertTriangle,
      title: 'Inspektion',
      description: 'Prüfen Sie regelmäßig auf Undichtigkeiten und Ablagerungen'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tipps zur richtigen Lagerung
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            So bewahren Sie die Qualität Ihres Heizöls und verlängern dessen Haltbarkeit.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {generalTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="standard">Standard Heizöl</TabsTrigger>
              <TabsTrigger value="premium">Premium Heizöl</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Heizöl – Hinweise zur Aufbewahrung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Empfohlene Lagerdauer</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Ideale Aufbewahrungszeit: bis zu 6 Monate</li>
                        <li>• Nach 6 Monaten: Qualitätscheck empfehlenswert</li>
                        <li>• Bei längerer Lagerung: Stabilisierungszusätze verwenden</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Prüfintervalle</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Monatliche optische Kontrolle</li>
                        <li>• Halbjährliche Tanksäuberung</li>
                        <li>• Jährliche Qualitätsuntersuchung</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-yellow-800">Bitte beachten</h5>
                        <p className="text-yellow-700 text-sm mt-1">
                          Bei längerer Aufbewahrung können sich Rückstände bilden. 
                          Eine regelmäßige Überprüfung ist daher ratsam.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card>
                <CardHeader>
                  <CardTitle>Premium Heizöl – Hinweise zur Aufbewahrung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Empfohlene Lagerdauer</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Ideale Aufbewahrungszeit: über 12 Monate</li>
                        <li>• Antioxidantien bremsen die Alterung wirkungsvoll</li>
                        <li>• Biozid-Zusatz hemmt Mikroorganismenbildung</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Prüfintervalle</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Vierteljährliche optische Kontrolle</li>
                        <li>• Jährliche Tanksäuberung</li>
                        <li>• Qualitätsprüfung nach Bedarf</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h5 className="font-medium text-green-800">Premium-Vorteil</h5>
                        <p className="text-green-700 text-sm mt-1">
                          Dank der speziellen Additive ist Premium Heizöl wesentlich länger haltbar 
                          und erfordert weniger Pflegeaufwand.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StorageRecommendations;