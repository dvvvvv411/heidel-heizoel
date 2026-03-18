

## Preisangaben von 70 Cent auf 90 Cent aktualisieren

Drei Stellen mit veralteten 0,70€-Preisen gefunden:

### 1. `src/components/HeroSection.tsx` (Zeile 40)
- "Schon ab 70 Cent/Liter" → "Schon ab 90 Cent/Liter"

### 2. `src/components/PriceOverviewSection.tsx` (Zeilen 36-38, 90)
- Staffelpreise aktualisieren (0,70 → 0,90 etc., proportional angepasst)
- "ab 0,70€" → "ab 0,90€"
- Premium-Preise ebenfalls proportional anheben (0,73 → 0,93 etc.)

### 3. `src/components/ProductComparison.tsx` (Zeilen 50-51)
- Standard: "0,70 €" → "0,90 €"
- Premium: "0,73 €" → "0,93 €"

Alle anderen Dateien enthalten keine veralteten Preisangaben. Die Preise im PriceCalculator/MobilePriceCalculator sind bereits korrekt (0,90/0,93).

