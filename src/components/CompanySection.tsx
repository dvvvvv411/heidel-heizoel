
import { Building, Users, Award, Clock, Trophy, Handshake, Heart } from 'lucide-react';
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

  const values = [
    {
      icon: Trophy,
      title: 'Höchste Qualität',
      description: 'Wir vertreiben ausschließlich DIN-konformes Premium-Heizöl, das maximale Heizleistung und Effizienz gewährleistet.',
      color: 'bg-primary-50 text-primary-600'
    },
    {
      icon: Handshake,
      title: 'Vertrauenswürdigkeit',
      description: 'Verlässlichkeit und offene Kommunikation bilden das Fundament unserer Geschäftsbeziehungen.',
      color: 'bg-accent-orange-50 text-accent-orange-600'
    },
    {
      icon: Heart,
      title: 'Individueller Service',
      description: 'Persönliche Betreuung und maßgeschneiderte Beratung haben bei uns oberste Priorität.',
      color: 'bg-primary-50 text-primary-600'
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lernen Sie Heidel Energie kennen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seit über zwei Jahrzehnten beliefern wir Kunden in ganz Deutschland mit erstklassigem Heizöl – 
            zu fairen Konditionen und mit persönlichem Service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Story */}
          <div className="space-y-5">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              So sind wir gewachsen
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mit der Gründung im Jahr 2016 und über 20 Jahren gesammelter Branchenerfahrung 
                haben wir uns zu einem der gefragtesten Heizöl-Lieferanten in Deutschland entwickelt. 
                Was mit fundiertem Fachwissen in Düsseldorf begann, ist heute ein verlässlicher Partner 
                für mehr als 100.000 Kunden im ganzen Land.
              </p>
              <p>
                Das Geheimnis unseres Erfolgs? Wir verbinden hochwertige Produkte mit 
                transparenten Preisen und legen dabei besonderen Wert auf individuelle Betreuung 
                und höchste Kundenzufriedenheit.
              </p>
              <p>
                Als erfahrener Energieversorger verstehen wir genau, worauf es unseren Kunden 
                ankommt – und sind stolz, zur Energieversorgung in ganz Deutschland beizutragen.
              </p>
            </div>
          </div>

          {/* Company Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <div className="h-80 lg:h-96 w-full">
                <img 
                  src="https://i.imgur.com/xPI8LoI.jpeg" 
                  alt="Heidel Energie Unternehmen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-5 py-3 shadow-md border border-gray-100">
              <div className="text-center">
                <div className="text-xl font-bold text-primary-600">20+</div>
                <div className="text-xs text-gray-500">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-sm transition-all duration-200">
                <div className="bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="text-primary-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-primary-600 mb-0.5">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl p-8 md:p-10 border border-gray-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-10">
            Wofür wir stehen
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-5`}>
                    <IconComponent size={26} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
