
import { useState, useEffect } from 'react';
import { Building, Users, Award, Clock, MapPin, Shield, CheckCircle, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    customers: 0,
    rating: 0,
    deliveries: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      const targets = {
        years: 20,
        customers: 100000,
        rating: 4.9,
        deliveries: 200000
      };

      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          years: Math.floor(targets.years * progress),
          customers: Math.floor(targets.customers * progress),
          rating: Math.floor((targets.rating * progress) * 10) / 10,
          deliveries: Math.floor(targets.deliveries * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const certifications = [
    {
      name: "ISO 9001",
      description: "Zertifiziertes Qualitätsmanagement"
    },
    {
      name: "DIN SPEC 51603-1",
      description: "Premium-Heizöl Qualitätsstandard"
    },
    {
      name: "WHG Zertifikat",
      description: "Konform mit dem Wasserhaushaltsgesetz"
    },
    {
      name: "ADR Zertifikat",
      description: "Lizenz für den Gefahrguttransport"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Das ist Heidel Energie GmbH
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Seit über 20 Jahren Ihr verlässlicher Partner für hochwertiges Heizöl in Deutschland. 
            Erstklassige Qualität, persönlicher Service und transparente Preise – darauf geben wir Ihnen unser Wort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              <Phone className="mr-2" size={20} />
              0211-87971675
            </Button>
            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              <Mail className="mr-2" size={20} />
              info@heidel-heizoel.de
            </Button>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.years}+
              </div>
              <div className="text-gray-600">Jahre Branchenerfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="text-gray-600">Begeisterte Kunden</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.rating}★
              </div>
              <div className="text-gray-600">Durchschnittsbewertung</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {animatedStats.deliveries.toLocaleString()}+
              </div>
              <div className="text-gray-600">Erfolgreiche Zustellungen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Wie alles begann
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  2016 wurde Heidel Energie GmbH mit einer klaren Mission gegründet: 
                  Kunden in Deutschland zuverlässig mit hochwertigem Heizöl zu attraktiven 
                  Konditionen zu versorgen. Mit über 20 Jahren gesammelter Branchenkenntnis 
                  haben wir uns rasch zu einem der gefragtesten Anbieter der Region entwickelt.
                </p>
                <p>
                  Drei Grundpfeiler tragen unseren Erfolg: exzellente Produktqualität, 
                  verlässlicher Service und eine offene Preisgestaltung. Wir betreuen 
                  Privat- wie Geschäftskunden und setzen dabei auf modernste Logistik 
                  und individuelle Betreuung.
                </p>
                <p>
                  Mehr als 100.000 zufriedene Kunden und über 200.000 reibungslose 
                  Zustellungen sprechen für sich. Unser eingespieltes Team aus Fachleuten 
                  steht Ihnen jederzeit mit Kompetenz und Engagement zur Seite.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-12 text-white text-center shadow-2xl">
                <Building size={80} className="mx-auto mb-6 text-primary-100" />
                <h3 className="text-3xl font-bold mb-4">Heidel</h3>
                <p className="text-xl text-primary-100 mb-6">Energie GmbH</p>
                <div className="space-y-2 text-primary-100">
                  <p>Gegründet 2016 in Düsseldorf</p>
                  <p>Ihr Heizöl-Spezialist für Deutschland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Gute Gründe für Heidel Energie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bei uns erhalten Sie mehr als nur Heizöl – wir bieten Ihnen Sicherheit, 
              geprüfte Qualität und einen Service, der keine Wünsche offen lässt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Erstklassige Qualität</h3>
                <p className="text-gray-600">
                  Unser Heizöl erfüllt die strengsten Qualitätsvorgaben nach DIN SPEC 51603-1 
                  für eine optimale Brennleistung und Effizienz.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Absolute Verlässlichkeit</h3>
                <p className="text-gray-600">
                  Termintreue Zustellung, transparente Konditionen und 24/7 Notfallbereitschaft – 
                  auf uns können Sie bauen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-orange-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Individuelle Betreuung</h3>
                <p className="text-gray-600">
                  Persönliche Beratung, flexible Liefertermine und ein Team, 
                  das sich um Ihre Anliegen kümmert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Area */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Unser Versorgungsgebiet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir liefern verlässlich in ganz Deutschland – von Berlin bis München, 
              von Hamburg bis Stuttgart, vom Ruhrgebiet bis nach Sachsen.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="text-primary-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Bundesweite Abdeckung</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Berlin und Brandenburg</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Hamburg und der Norden</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Köln/Düsseldorf und das Ruhrgebiet</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Frankfurt und das Rhein-Main-Gebiet</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>Stuttgart und Baden-Württemberg</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Kostenfreie Zustellung</h4>
                <p className="text-gray-700 mb-4">ab 1500 Liter deutschlandweit</p>
                <div className="text-2xl font-bold text-primary-600">4-7</div>
                <div className="text-sm text-gray-600">Werktage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Zertifizierungen & Qualitätsstandards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere Zertifizierungen stehen für höchste Qualität und maximale Sicherheit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Heidel Energie GmbH
                  </h2>
                  <p className="text-xl text-gray-600">
                    Ihr Heizöl-Partner für ganz Deutschland
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Firmenadresse</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>Heidel Energie GmbH</p>
                      <p>Kaiserstr. 5</p>
                      <p>40479 Düsseldorf</p>
                      <p>Deutschland</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kontaktdaten</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="text-primary-600 mr-3" size={20} />
                        <span className="text-gray-700">0211-87971675</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-primary-600 mr-3" size={20} />
                        <span className="text-gray-700">info@heidel-heizoel.de</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Registerdaten</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>HRB 104494</p>
                      <p>Amtsgericht Düsseldorf</p>
                      <p>USt-IdNr.: DE251547599</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Servicezeiten</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
                      <p>Sa: 9:00 - 14:00 Uhr</p>
                      <p>Notfall-Bereitschaft: 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                    Jetzt Heizöl bestellen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;