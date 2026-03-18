
import { Star, Quote } from 'lucide-react';

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
        size={14}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stimmen unserer Kunden
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mehr als 10.000 Kunden setzen auf Heidel Energie – lesen Sie, warum sie uns weiterempfehlen.
          </p>
          
          {/* Overall Rating */}
          <div className="mt-6 inline-flex items-center space-x-2 bg-gray-50 px-5 py-2.5 rounded-lg border border-gray-100">
            <div className="flex space-x-0.5">
              {renderStars(5)}
            </div>
            <span className="text-primary-600 font-bold">4.9/5</span>
            <span className="text-gray-500 text-sm">aus über 1.200 Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <Quote className="text-primary-200" size={20} />
                <div className="flex space-x-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-5 line-clamp-4 leading-relaxed text-sm">
                „{review.text}"
              </p>
              
              <div className="border-t border-gray-50 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{review.name}</div>
                    <div className="text-xs text-gray-400">{review.location}</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-14 text-center">
          <div className="bg-primary-600 rounded-xl p-8 md:p-10 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Gehören auch Sie zu unseren zufriedenen Kunden!
            </h3>
            <p className="text-lg mb-6 text-primary-100 max-w-xl mx-auto">
              Erleben Sie selbst, was erstklassiger Service und attraktive Preise ausmachen.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
              Jetzt Angebot berechnen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
