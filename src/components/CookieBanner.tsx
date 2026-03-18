
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = (type: 'all' | 'necessary') => {
    localStorage.setItem('cookie-consent', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-gray-600 flex-1">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.{' '}
          <Link to="/datenschutz" className="text-primary-600 hover:underline">Mehr erfahren</Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" onClick={() => accept('necessary')} className="text-xs">
            Nur notwendige
          </Button>
          <Button size="sm" onClick={() => accept('all')} className="text-xs bg-primary-600 hover:bg-primary-700 text-white">
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
