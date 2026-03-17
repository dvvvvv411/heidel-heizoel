

## Änderungen

### 1. Rezensionen: Datum → relative Zeitangaben
In `ReviewsSection.tsx` die `date`-Felder durch relative Strings ersetzen (z.B. "Vor 3 Tagen", "Vor 2 Wochen", "Vor 1 Monat") und die `toLocaleDateString`-Formatierung durch direkte Textausgabe ersetzen.

### 2. Footer: 2025 → 2026
In `Footer.tsx` Zeile 95: `© 2025` → `© 2026`.

### 3. Mobile Preisrechner: Pfeil-Buttons entfernen, beide Typen direkt anklickbar
In `MobilePriceCalculator.tsx`:
- Die ChevronLeft/ChevronRight Navigation-Buttons um die Produktkarten entfernen (Zeilen 162-177)
- Den horizontalen Scroll-Container durch ein einfaches 2-Spalten-Grid ersetzen (`grid grid-cols-2 gap-3`)
- `scrollRef`, `scrollToProduct`-Funktion und Scroll-Indikatoren entfernen
- `ChevronLeft`/`ChevronRight` Import nur noch für Liter-Stepper behalten

### 4. Preise aktualisieren: Standard 0.90€, Premium 0.93€
In beiden Dateien die `prices`-Objekte ändern:
- `PriceCalculator.tsx` Zeile 18-19: `0.70 → 0.90`, `0.73 → 0.93`
- `MobilePriceCalculator.tsx` Zeile 18-19: `0.70 → 0.90`, `0.73 → 0.93`

