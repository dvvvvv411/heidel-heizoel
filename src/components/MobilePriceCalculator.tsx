
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
      description: 'Bewährte Standardqualität',
      features: ['DIN-konform', 'Preisgünstig']
    },
    {
      id: 'premium_heizoel' as const,
      name: 'Premium Heizöl',
      price: prices.premium_heizoel,
      description: 'Mit Schutz-Additiven',
      features: ['Korrosionsschutz', 'Längere Haltbarkeit']
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
        title: "Ungültige Menge",
        description: `Bitte geben Sie eine Menge zwischen ${minLiters} und ${maxLiters} Litern an.`,
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

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          const checkoutUrl = `https://checkout.heidel-heizoel.de/checkout?token=${data.token}`;
          window.location.assign(checkoutUrl);
          toast({
            title: "Weiterleitung zum Checkout",
            description: "Sie werden jetzt zur Kasse weitergeleitet.",
          });
        } else {
          throw new Error('Kein Token erhalten');
        }
      } else {
        throw new Error(`API Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Order error:', error);
      toast({
        title: "Bestellung fehlgeschlagen",
        description: "Bitte versuchen Sie es später noch einmal oder rufen Sie uns an.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentProduct = products.find(p => p.id === oilType)!;

  return (
    <div className="w-full max-w-sm mx-auto">
      <Card className="border border-gray-100 bg-white/95 backdrop-blur-sm shadow-soft">
        <CardHeader className="text-center pb-3">
          <CardTitle className="text-lg font-bold text-gray-800 flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5 text-primary-600" />
            Ihr Preisrechner
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Product Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Produkt auswählen</Label>
            <div className="grid grid-cols-2 gap-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    "p-3 border rounded-xl cursor-pointer transition-all duration-200",
                    oilType === product.id 
                      ? "border-primary-400 bg-primary-50 shadow-sm" 
                      : "border-gray-100 bg-white hover:border-primary-200"
                  )}
                  onClick={() => selectProduct(product.id)}
                >
                  <div className="text-center">
                    <h4 className="font-medium text-sm mb-1 text-gray-800">{product.name}</h4>
                    <p className="text-lg font-bold text-primary-600 mb-1">
                      {product.price.toFixed(2)}€/L
                    </p>
                    <p className="text-xs text-gray-500 mb-1.5">{product.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liter Input */}
          <div className="space-y-2">
            <Label htmlFor="liters" className="text-sm font-medium">
              Gewünschte Menge ({minLiters} - {maxLiters}L)
            </Label>
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-11 h-11 p-0 border-gray-200 hover:bg-gray-50"
                onClick={() => adjustLiters(-100)}
                disabled={litersNum <= minLiters}
              >
                <ChevronLeft size={18} />
              </Button>
              <Input
                id="liters"
                type="number"
                min={minLiters}
                max={maxLiters}
                step={50}
                value={liters}
                onChange={handleLitersChange}
                className="text-center text-base h-11 flex-1"
                inputMode="numeric"
              />
              <Button
                type="button"
                variant="outline"
                className="flex-shrink-0 w-11 h-11 p-0 border-gray-200 hover:bg-gray-50"
                onClick={() => adjustLiters(100)}
                disabled={litersNum >= maxLiters}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
            {liters !== '' && litersNum < minLiters && (
              <p className="text-xs text-red-600 text-center">Mindestmenge: {minLiters} Liter</p>
            )}
            {liters !== '' && litersNum > maxLiters && (
              <p className="text-xs text-red-600 text-center">Höchstmenge: {maxLiters} Liter</p>
            )}
            <div className="flex justify-center space-x-2">
              {[1500, 2000, 5000, 10000].map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="text-xs px-2.5 py-1 h-7 border-gray-200 hover:bg-gray-50"
                  onClick={() => setLiters(amount.toString())}
                >
                  {amount}L
                </Button>
              ))}
            </div>
          </div>

          {/* Price Display */}
          <div className="bg-gray-50 p-4 rounded-xl space-y-2 border border-gray-100">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Produkt:</span>
              <span className="font-medium text-gray-700">{currentProduct.name}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Menge:</span>
              <span className="font-medium text-gray-700">{liters || '—'} Liter</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Literpreis:</span>
              <span className="font-medium text-primary-600">{currentPrice.toFixed(2)}€</span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Summe:</span>
                <span className="text-primary-600">{canCalculate ? totalAmount.toFixed(2) : '—'}€</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-1.5 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Truck size={13} className="text-primary-500" />
              <span>Versandkostenfreie Zustellung</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={13} className="text-primary-500" />
              <span>Zustellung in 4-7 Werktagen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={13} className="text-primary-500" />
              <span>DIN-zertifizierte Qualität</span>
            </div>
          </div>

          {/* Order Button */}
          <Button 
            onClick={handleOrder}
            disabled={isLoading || !canCalculate}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white h-12 text-base font-semibold transition-all duration-200"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Wird verarbeitet...</span>
              </div>
            ) : (
              <span>{canCalculate ? `Jetzt bestellen – ${totalAmount.toFixed(2)}€` : 'Jetzt bestellen'}</span>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MobilePriceCalculator;
