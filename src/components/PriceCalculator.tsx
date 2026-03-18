
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Truck, Shield, Clock, Calculator, AlertTriangle, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PriceCalculator = () => {
  const [liters, setLiters] = useState<string>('1500');
  const [oilType, setOilType] = useState<'standard_heizoel' | 'premium_heizoel'>('standard_heizoel');
  const [isLoading, setIsLoading] = useState(false);
  const [showPriceAlert, setShowPriceAlert] = useState(true);
  const { toast } = useToast();

  const prices = {
    standard_heizoel: 0.90,
    premium_heizoel: 0.93
  };

  const shopId = "e2a2c01e-0085-4421-ac7b-15068e5e8ae5";
  const currentPrice = prices[oilType];
  const litersNum = parseInt(liters) || 0;
  const canCalculate = liters !== '' && litersNum >= 1500 && litersNum <= 32000;
  const totalAmount = canCalculate ? litersNum * currentPrice : 0;
  const minLiters = 1500;
  const maxLiters = 32000;

  const handleLitersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLiters(e.target.value);
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
            title: "Weiterleitung zum Checkout",
            description: "Sie werden jetzt zur Kasse weitergeleitet.",
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
        title: "Bestellung fehlgeschlagen",
        description: "Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns per E-Mail.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getDisplayName = (type: string) => {
    return type === 'standard_heizoel' ? 'Standard Heizöl' : 'Premium Heizöl';
  };

  return (
    <Card className="w-full max-w-md mx-auto border border-gray-100 bg-white/95 backdrop-blur-sm shadow-soft">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Calculator className="w-5 h-5 text-primary-600" />
          Ihr Preisrechner
        </CardTitle>
        <p className="text-sm text-gray-500">Ermitteln Sie Ihren individuellen Heizölpreis</p>
      </CardHeader>
      <CardContent className="space-y-5">
        {showPriceAlert && (
          <div className="relative bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm">
            <button onClick={() => setShowPriceAlert(false)} className="absolute top-2 right-2 text-amber-400 hover:text-amber-600">
              <X size={14} />
            </button>
            <div className="flex gap-2 pr-4">
              <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-xs leading-relaxed">
                <span className="font-semibold">Letzte Bestände zum aktuellen Preis.</span> Aufgrund der geopolitischen Lage wird sich der Heizölpreis in Kürze erhöhen.
              </p>
            </div>
          </div>
        )}
        {/* Oil Type Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Produkt auswählen</Label>
          <Select value={oilType} onValueChange={(value: 'standard_heizoel' | 'premium_heizoel') => setOilType(value)}>
            <SelectTrigger className="h-11 text-sm">
              <SelectValue placeholder="Heizölsorte wählen" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="standard_heizoel">
                <div className="flex justify-between items-center w-full">
                  <span>Standard Heizöl</span>
                  <span className="font-bold text-primary-600 ml-4">{prices.standard_heizoel.toFixed(2)}€/L</span>
                </div>
              </SelectItem>
              <SelectItem value="premium_heizoel">
                <div className="flex justify-between items-center w-full">
                  <span>Premium Heizöl</span>
                  <span className="font-bold text-primary-600 ml-4">{prices.premium_heizoel.toFixed(2)}€/L</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Liter Input */}
        <div className="space-y-2">
          <Label htmlFor="liters" className="text-sm font-medium">
            Gewünschte Menge ({minLiters} - {maxLiters}L)
          </Label>
          <Input
            id="liters"
            type="number"
            min={minLiters}
            max={maxLiters}
            step={50}
            value={liters}
            onChange={handleLitersChange}
            className="text-base h-11"
            placeholder={`z.B. ${minLiters}`}
          />
          {liters !== '' && litersNum < minLiters && (
            <p className="text-xs text-red-600">
              Mindestmenge: {minLiters} Liter
            </p>
          )}
          {liters !== '' && litersNum > maxLiters && (
            <p className="text-xs text-red-600">
              Höchstmenge: {maxLiters} Liter
            </p>
          )}
        </div>

        {/* Live Price Display */}
        <div className="bg-gray-50 p-4 rounded-xl space-y-2.5 border border-gray-100">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Produkt:</span>
            <span className="font-medium text-gray-700">{getDisplayName(oilType)}</span>
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
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <Truck size={14} className="text-primary-500" />
            <span>Versandkostenfreie Zustellung</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-primary-500" />
            <span>Zustellung in 4-7 Werktagen</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield size={14} className="text-primary-500" />
            <span>DIN-zertifizierte Qualität</span>
          </div>
        </div>

        {/* Order Button */}
        <Button 
          onClick={handleOrder}
          disabled={isLoading || !canCalculate}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white h-11 text-base font-semibold transition-all duration-200"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Wird verarbeitet...</span>
            </div>
          ) : (
            'Jetzt bestellen'
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Alle Preise inkl. MwSt. • Mindestmenge: {minLiters}L • Höchstmenge: {maxLiters}L
        </p>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;
