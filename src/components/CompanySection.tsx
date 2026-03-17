
import { Building, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const CompanySection = () => {
  const stats = [
    {
      icon: Building,
      number: '2016',
      label: 'Gründungsjahr',
      description: 'Über 20 Jahre Branchenkenntnis'
    },
    {
      icon: Users,
      number: '100.000+',
      label: 'Kunden deutschlandweit',
      description: 'Stetig wachsende Gemeinschaft'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Kundenbewertung',
      description: 'Hervorragender Service'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Erreichbarkeit',
      description: 'Jederzeit für Sie ansprechbar'
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lernen Sie Heidel Energie kennen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seit über zwei Jahrzehnten beliefern wir Kunden in ganz Deutschland mit erstklassigem Heizöl – 
            zu fairen Konditionen und mit persönlichem Service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              So sind wir gewachsen
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mit der Gründung im Jahr 2016 und über 20 Jahren gesammelter Branchenerfahrung 
                haben wir uns zu einem der gefragtesten Heizöl-Lieferanten in Deutschland entwickelt. 
                Was mit fundiertem Fachwissen in Düsseldorf begann, ist heute ein verlässlicher Partner 
                für mehr als 100.000 Kunden im ganzen Land.
              </p>
              <p>
                Das Geheimnis unseres Erfolgs? Wir verbinden hochwertige Produkte mit 
                transparenten Preisen und legen dabei besonderen Wert auf individuelle Betreuung 
                und höchste Kundenzufriedenheit. Modernste Technik und ein eingespieltes Team 
                bilden das Fundament unserer Arbeit.
              </p>
              <p>
                Als erfahrener Energieversorger verstehen wir genau, worauf es unseren Kunden 
                ankommt – und sind stolz, zur Energieversorgung in ganz Deutschland beizutragen.
              </p>
            </div>
          </div>

          {/* Company Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="h-96 w-full">
                  <img 
                    src="https://i.imgur.com/xPI8LoI.jpeg" 
                    alt="Heidel Energie Unternehmen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">20+</div>
                <div className="text-xs text-gray-600">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-primary-600 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Wofür wir stehen
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Höchste Qualität</h4>
              <p className="text-gray-600">
                Wir vertreiben ausschließlich DIN-konformes Premium-Heizöl, das 
                maximale Heizleistung und Effizienz gewährleistet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Vertrauenswürdigkeit</h4>
              <p className="text-gray-600">
                Verlässlichkeit und offene Kommunikation bilden das Fundament 
                unserer Geschäftsbeziehungen. Darauf ist Verlass.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💚</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Individueller Service</h4>
              <p className="text-gray-600">
                Persönliche Betreuung und maßgeschneiderte Beratung haben 
                bei uns oberste Priorität.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;