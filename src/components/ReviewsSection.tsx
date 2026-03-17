
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Maria Huber',
      location: 'Berlin',
      rating: 5,
      text: 'Schon zum dritten Mal über Heidel Energie bestellt – jedes Mal rundum zufrieden! Termintreue Lieferung, faire Konditionen und ein äußerst freundliches Team. Absolute Weiterempfehlung!',
      date: 'Vor 3 Tagen'
    },
    {
      name: 'Thomas Wagner',
      location: 'Hamburg',
      rating: 5,
      text: 'Die Bestellung war unkompliziert und flott erledigt. Der Fahrer war überaus zuvorkommend und das Heizöl brennt hervorragend. Seit Jahren spare ich damit gegenüber Gas!',
      date: 'Vor 1 Woche'
    },
    {
      name: 'Familie Schneider',
      location: 'Köln',
      rating: 5,
      text: 'Ausgezeichnete Beratung! Wir hatten eine Rückfrage zur Zustellung und wurden sofort kompetent betreut. Alles verlief reibungslos und termingerecht.',
      date: 'Vor 2 Wochen'
    },
    {
      name: 'Johann Müller',
      location: 'Frankfurt am Main',
      rating: 5,
      text: 'Seit 5 Jahren Stammkunde und immer wieder begeistert. Verlässlich, preiswert und durchgehend hohe Qualität. Besonders die kostenfreie Zustellung und die schnelle Abwicklung schätze ich.',
      date: 'Vor 3 Wochen'
    },
    {
      name: 'Sarah Becker',
      location: 'Stuttgart',
      rating: 5,
      text: 'Die Online-Bestellung ging kinderleicht, der Preisrechner ist wirklich praktisch. Die Lieferung kam wie angekündigt und das Team war durchweg professionell.',
      date: 'Vor 1 Monat'
    },
    {
      name: 'Klaus Fischer',
      location: 'Leipzig',
      rating: 5,
      text: 'Die günstigsten Heizölpreise weit und breit! Ich habe mehrere Anbieter verglichen – Heidel Energie war nicht nur preiswerter, sondern auch deutlich serviceorientierter.',
      date: 'Vor 2 Monaten'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stimmen unserer Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mehr als 10.000 Kunden setzen auf Heidel Energie – lesen Sie, 
            warum sie uns weiterempfehlen.
          </p>
          
          {/* Overall Rating */}
          <div className="mt-8 inline-flex items-center space-x-2 bg-primary-50 px-6 py-3 rounded-full">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-primary-600 font-bold text-lg">4.9/5</span>
            <span className="text-gray-600">basierend auf über 1.200 Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="text-primary-600 opacity-50" size={24} />
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 line-clamp-4 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.location}</div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {review.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Gehören auch Sie zu unseren zufriedenen Kunden!
            </h3>
            <p className="text-xl mb-8 text-primary-100">
              Erleben Sie selbst, was erstklassiger Service und attraktive Preise ausmachen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Jetzt Angebot berechnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;