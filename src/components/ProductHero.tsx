
import { Button } from "@/components/ui/button";
import { scrollToCalculatorFromOtherPage } from '../utils/scrollToCalculator';

const ProductHero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Unser Heizöl-Sortiment
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Erstklassige Heizöl-Varianten für jeden Anspruch – von der bewährten Standardqualität 
          bis zum Premium-Heizöl mit innovativen Schutzadditiven.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToCalculatorFromOtherPage}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg"
          >
            Jetzt bestellen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;