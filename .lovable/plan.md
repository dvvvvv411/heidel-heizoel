

## 1. Cookie-Banner Komponente

Neue Datei `src/components/CookieBanner.tsx`:
- Dezentes Banner am unteren Bildschirmrand, fixiert
- Glasmorphism-Stil passend zum modernisierten Design
- Text: kurze Info zu Cookies + "Akzeptieren" und "Nur notwendige" Buttons
- Speichert Zustimmung in `localStorage` (`cookie-consent`)
- Wird nur beim ersten Besuch angezeigt (prüft localStorage)
- In `Index.tsx` einbinden

## 2. Preis-Hinweis-Banner im Preisrechner

In `PriceCalculator.tsx` und `MobilePriceCalculator.tsx`:
- Dismissible Alert/Banner oberhalb der Produktauswahl
- State `showPriceAlert` (default `true`), mit X-Button schließbar
- Inhalt: Hinweis auf letzte Bestände zum aktuellen Preis, baldige Preiserhöhung wegen Konflikt
- Dezentes Design: leichter orange/amber Hintergrund, AlertTriangle-Icon
- Verschwindet nach Schließen (nur Session-basiert, kein localStorage)

### Betroffene Dateien
- Neu: `src/components/CookieBanner.tsx`
- Edit: `src/pages/Index.tsx` (CookieBanner einbinden)
- Edit: `src/components/PriceCalculator.tsx` (Preis-Hinweis)
- Edit: `src/components/MobilePriceCalculator.tsx` (Preis-Hinweis)

