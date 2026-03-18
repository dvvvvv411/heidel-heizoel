
import { useState } from 'react';
import { FileText, Download, Building2, CreditCard, Euro, Search, AlertCircle, CheckCircle2, Copy, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const SHOP_ID = '4d04ce80-b4cd-4704-bcbd-e20184308710';
const API_URL = 'https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/get-invoice-by-order';

interface OrderData {
  order_number: string;
  invoice_url: string;
  total_amount: number;
  currency: string;
  bank_data: {
    account_holder: string;
    iban: string;
    bic: string;
    bank_name: string;
  };
}

const Bestellstatus = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedOrder = orderNumber.trim();
    const trimmedZip = zipCode.trim();

    if (!trimmedOrder || !trimmedZip) {
      toast({
        title: 'Fehlende Angaben',
        description: 'Bitte geben Sie Ihre Bestellnummer und Postleitzahl ein.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setOrderData(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order_number: trimmedOrder,
          zip_code: trimmedZip,
          branding_id: SHOP_ID,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.error || 'Ein unbekannter Fehler ist aufgetreten.';

        toast({
          title: response.status === 400 ? 'Ungültige Eingabe' : response.status === 404 ? 'Nicht gefunden' : 'Serverfehler',
          description: errorMsg,
          variant: 'destructive',
        });
        return;
      }

      const data: OrderData = await response.json();
      setOrderData(data);
    } catch {
      toast({
        title: 'Verbindungsfehler',
        description: 'Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(amount);
  };

  const formatIBAN = (iban: string) => {
    return iban.replace(/(.{4})/g, '$1 ').trim();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bestellstatus & Rechnung
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Geben Sie Ihre Bestellnummer und Postleitzahl ein, um Ihre Rechnung und Zahlungsinformationen abzurufen.
            </p>
          </div>

          {/* Search Form */}
          {!orderData && (
            <Card className="max-w-lg mx-auto shadow-md border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Search className="h-5 w-5 text-primary" />
                  Bestellung suchen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="orderNumber">Bestellnummer</Label>
                    <Input
                      id="orderNumber"
                      placeholder="z. B. 1234567"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      maxLength={20}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Postleitzahl</Label>
                    <Input
                      id="zipCode"
                      placeholder="z. B. 40210"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      maxLength={10}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Wird gesucht…
                      </span>
                    ) : (
                      'Bestellstatus abfragen'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Results */}
          {orderData && (
            <div className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">

              {/* Success Banner */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="font-semibold text-green-900 text-lg">Bestellung gefunden</h2>
                  <p className="text-green-700 mt-1">
                    Ihre Bestellung <span className="font-mono font-bold">{orderData.order_number}</span> wurde erfolgreich abgerufen.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Amount Card */}
                <Card className="shadow-md border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Euro className="h-5 w-5 text-primary" />
                      Gesamtbetrag
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-foreground">
                      {formatCurrency(orderData.total_amount, orderData.currency)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Bestellnr. {orderData.order_number}
                    </p>
                  </CardContent>
                </Card>

                {/* Bank Data Card */}
                <Card className="shadow-md border-border border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Building2 className="h-5 w-5 text-primary" />
                      Bankverbindung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-accent/50 rounded-lg p-4 space-y-3">
                      {[
                        { label: 'Kontoinhaber', value: orderData.bank_data.account_holder, key: 'holder' },
                        { label: 'IBAN', value: formatIBAN(orderData.bank_data.iban), rawValue: orderData.bank_data.iban, key: 'iban' },
                        { label: 'BIC', value: orderData.bank_data.bic, key: 'bic' },
                        { label: 'Bank', value: orderData.bank_data.bank_name, key: 'bank' },
                      ].map(({ label, value, rawValue, key }) => (
                        <div key={key} className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <p className="text-xs text-muted-foreground">{label}</p>
                            <p className={`font-medium text-foreground ${key === 'iban' ? 'font-mono text-sm' : ''}`}>
                              {value}
                            </p>
                          </div>
                          <button
                            onClick={() => handleCopy(rawValue || value, key)}
                            className="flex-shrink-0 p-1.5 rounded-md hover:bg-muted transition-colors"
                            title={`${label} kopieren`}
                          >
                            {copiedField === key ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Reminder */}
              <Card className="shadow-md border-border bg-accent/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CreditCard className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Zahlungshinweis</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Bitte überweisen Sie den Betrag von{' '}
                        <span className="font-bold text-foreground">{formatCurrency(orderData.total_amount, orderData.currency)}</span>{' '}
                        an <span className="font-bold text-foreground">{orderData.bank_data.account_holder}</span> unter Angabe Ihrer
                        Bestellnummer <span className="font-mono font-bold text-foreground">{orderData.order_number}</span> als Verwendungszweck.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Invoice PDF */}
              <Card className="shadow-md border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-primary" />
                    Ihre Rechnung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-border rounded-xl overflow-hidden bg-muted/30" style={{ height: '600px' }}>
                    <iframe
                      src={orderData.invoice_url}
                      title="Rechnung PDF"
                      className="w-full h-full"
                    />
                  </div>
                  <a
                    href={orderData.invoice_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-2">
                      <Download className="h-5 w-5" />
                      Rechnung herunterladen (PDF)
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Back Button */}
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setOrderData(null)}
                  className="px-8"
                >
                  Andere Bestellung suchen
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bestellstatus;
