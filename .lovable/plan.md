

## UI Design Modernisierung 2026

Das aktuelle Design wirkt etwas generisch und "2025" mit seinen runden Icon-Kreisen, gleichformigen Schatten-Cards und dem SVG-Punkt-Muster im Hero. Hier ist der Plan fur ein moderneres, serioses Erscheinungsbild:

### 1. Hero Section modernisieren
- SVG-Punkt-Hintergrundmuster entfernen, stattdessen subtilen geometrischen Gradient verwenden
- Pillen-Badge oben moderner gestalten (schlichtere Farbe, kein Emoji)
- Trust-Indikatoren am unteren Rand kompakter und eleganter
- Scroll-Indicator entfernen (veraltet)
- Leichte Glasmorphism-Effekte fur den Calculator-Bereich

### 2. Benefits Section: 6. Card hinzufugen + Design-Refresh
- **6. Card hinzufugen**: "Persoenliche Beratung" mit Phone-Icon (bereits importiert aber ungenutzt)
- Cards modernisieren: dezentere Schatten, subtile Border statt shadow-only, leichter Farbverlauf im Hintergrund
- Icon-Styling modernisieren: eckigere abgerundete Container statt perfekte Kreise (rounded-xl statt rounded-full)
- Stats-Leiste darunter mit klarerem Layout

### 3. Reviews Section auffrischen
- Subtilere Card-Borders, moderne Typografie
- Quote-Icon dezenter gestalten
- CTA-Block am Ende moderner (weniger Gradient, mehr Flat-Design)

### 4. Company Section modernisieren
- Werte-Bereich: Emojis durch Lucide-Icons ersetzen (wirkt professioneller)
- Stats-Cards schlanker gestalten
- Floating Badge moderner positionieren

### 5. Header & Footer
- Header: leicht verfeinerte Spacing/Typografie
- Footer: moderneres Layout mit klareren Trennlinien

### 6. Globale Design-Tokens
- Schatten reduzieren (shadow-lg -> shadow-sm/shadow-md, subtiler)
- Border-Radius konsistenter (mehr rounded-xl, weniger rounded-2xl)
- Hover-Effekte subtiler (-translate-y-1 statt -translate-y-2)
- Sektions-Hintergrunde abwechslungsreicher (nicht alles bg-white)

### Betroffene Dateien
- `src/components/HeroSection.tsx`
- `src/components/BenefitsSection.tsx`
- `src/components/ReviewsSection.tsx`
- `src/components/CompanySection.tsx`
- `src/components/Footer.tsx`
- `src/components/Header.tsx`
- `src/components/PriceCalculator.tsx`
- `src/components/MobilePriceCalculator.tsx`

Alle Farben (Blau-Palette) und Inhalte bleiben erhalten. Das Theme bleibt hell und serios.

