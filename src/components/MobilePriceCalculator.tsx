
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Calculator, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const MobilePriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const prices = {
    standard_heizoel: 0.90,
    premium_heizoel: 0.93
  };

  const products = [
    {
      id: 'standard_heizoel' as const,
      name: 'Standard Heizöl',
      price: prices.standard_heizoel,
      description: 'Bewährte Qualität',
      features: ['DIN-konform', 'Kostengünstig']
    },
    {
      id: 'premium_heizoel' as const,
      name: 'Premium Heizöl',
      price: prices.premium_heizoel,
      description: 'Additivierte Qualität',
      features: ['Korrosionsschutz', 'Längere Lagerfähigkeit']
    }
  ];

  const shopId = "4d04ce80-b4cd-4704-bcbd-e20184308710";
  const currentPrice = prices[oilType];
  const litersNum = parseInt(liters) || 0;
  const canCalculate = liters !== '' && litersNum >= 1500 && litersNum <= 32000;
  const totalAmount = canCalculate ? litersNum * currentPrice : 0;
  const minLiters = 1500;
  const maxLiters = 32000;

  const handleLitersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(e.target.value);
  };

  const adjustLiters = (amount: number) => {
    const newValue = litersNum + amount;
    if (newValue >= minLiters && newValue <= maxLiters) {
      setLiters(newValue.toString());
    }
  };

  const selectProduct = (productId: typeof oilType) => {
    setOilType(productId);
  };


  const handleOrder = async () => {
    if (!canCalculate) {
      toast({
        title: "Ungültige Literzahl",
        description: `Bitte wählen Sie zwischen ${minLiters} und ${maxLiters} Litern.`,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const apiUrl = 'https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/create-order-token';
      
      const requestBody = {
        product: oilType,
        liters: litersNum,
        shop_id: shopId,
        total_amount: parseFloat(totalAmount.toFixed(2)),
        delivery_fee: 0,
        price_per_liter: parseFloat(currentPrice.toFixed(2))
      };

      console.log('Sending order request to:', apiUrl);
      console.log('Request body:', requestBody);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('API Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('API Response data:', data);
        
        if (data.token) {
          const checkoutUrl = `https://checkout.heidel-heizoel.de/checkout?token=${data.token}`;
          console.log('Redirecting to:', checkoutUrl);
          window.location.assign(checkoutUrl);
          
          toast({
            title: "Bestellung weitergeleitet",
            description: "Sie werden zum Checkout weitergeleitet.",
          });
        } else {
          throw new Error('Kein Token erhalten');
        }
      } else {
        const errorData = await response.text();
        console.error('API Error response:', errorData);
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Order error:', error);
      toast({
        title: "Fehler bei der Bestellung",
        description: "Bitte versuchen Sie es später erneut oder rufen Sie uns an.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentProduct = products.find(p => p.id === oilType)!;

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5 text-primary-600" />
            Preisrechner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Selection - Improved with navigation */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Heizöltyp wählen</Label>
            
            <div className="grid grid-cols-2 gap-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200",
                    oilType === product.id 
                      ? "border-accent-orange-500 bg-accent-orange-50 shadow-md" 
                      : "border-gray-200 bg-white hover:border-accent-orange-300"
                  )}
                  onClick={() => selectProduct(product.id)}
                >
                  <div className="text-center">
                    <h4 className="font-semibold text-sm mb-1 text-gray-800">{product.name}</h4>
                    <p className="text-xl font-bold text-accent-orange-600 mb-1">
                      {product.price.toFixed(2)}€/L
                    </p>
                    <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liter Input with Touch Controls */}
          <div className="space-y-3">
            <Label htmlFor="liters" className="text-base font-medium">
              Liter-Anzahl ({minLiters} - {maxLiters}L)
            </Label>
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-12 h-12 p-0 border-accent-orange-300 hover:bg-accent-orange-50"
                onClick={() => adjustLiters(-100)}
                disabled={litersNum <= minLiters}
              >
                <ChevronLeft size={20} />
              </Button>
              <Input
                id="liters"
                type="number"
                min={minLiters}
                max={maxLiters}
                step={50}
                value={liters}
                onChange={handleLitersChange}
                className="text-center text-lg h-12 flex-1"
                inputMode="numeric"
              />
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-12 h-12 p-0 border-accent-orange-300 hover:bg-accent-orange-50"
                onClick={() => adjustLiters(100)}
                disabled={litersNum >= maxLiters}
              >
                <ChevronRight size={20} />
              </Button>
            </div>
            {liters !== '' && litersNum < minLiters && (
              <p className="text-sm text-red-600 text-center">
                Mindestbestellmenge: {minLiters} Liter
              </p>
            )}
            {liters !== '' && litersNum > maxLiters && (
              <p className="text-sm text-red-600 text-center">
                Maximalmenge: {maxLiters} Liter
              </p>
            )}
            <div className="flex justify-center space-x-2">
              {[1500, 2000, 5000, 10000].map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1 h-8 border-accent-orange-300 hover:bg-accent-orange-50 hover:border-accent-orange-500"
                  onClick={() => setLiters(amount.toString())}
                >
                  {amount}L
                </Button>
              ))}
            </div>
          </div>

          {/* Price Display */}
          <div className="bg-gradient-to-r from-primary-50 to-accent-orange-50 p-4 rounded-lg space-y-2 border border-accent-orange-200">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Produkt:</span>
              <span className="font-medium">{currentProduct.name}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Menge:</span>
              <span className="font-medium">{liters || '—'} Liter</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Preis pro Liter:</span>
              <span className="font-medium text-accent-orange-600">{currentPrice.toFixed(2)}€</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Gesamtpreis:</span>
                <span className="text-accent-orange-600">{canCalculate ? totalAmount.toFixed(2) : '—'}€</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Truck size={14} className="text-accent-orange-500" />
              <span>Kostenlose Lieferung</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} className="text-primary-600" />
              <span>Lieferung in 4-7 Werktagen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={14} className="text-accent-orange-500" />
              <span>Geprüfte DIN-Qualität</span>
            </div>
          </div>

          {/* Order Button */}
          <Button 
            onClick={handleOrder}
            disabled={isLoading || !canCalculate}
            className="w-full bg-accent-orange-500 hover:bg-accent-orange-600 text-white h-14 text-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Wird verarbeitet...</span>
              </div>
            ) : (
              <>
                <span>{canCalculate ? `Jetzt bestellen - ${totalAmount.toFixed(2)}€` : 'Jetzt bestellen'}</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobilePriceCalculator;
