

## Branding-Farbe aktualisieren: #006b51 → #2ba0f0

Die dunkelgrüne Farbe wird zentral in 3 Konfigurationsdateien definiert. Durch Änderung dort wird sie automatisch in allen ~34 Dateien wirksam, die `hill-green` oder `primary` Tailwind-Klassen nutzen. Zusätzlich gibt es eine Handvoll Stellen mit hardcoded Hex-Werten.

### Zentrale Änderungen (2 Dateien)

**tailwind.config.ts** -- Hill-Farben und Primary-Palette:
- `hill.green`: #006b51 → #2ba0f0
- `hill.green-dark`: #005a44 → #1a8ad4
- `hill.green-light`: #007d5e → #4db8ff
- `primary.DEFAULT/500`: #006b51 → #2ba0f0
- `primary.600`: #005a44 → #1a8ad4
- `primary.700`: #004a37 → #1578b8
- `primary.800/900`: passend anpassen
- `primary.50-400`: hellblaue Abstufungen

**src/index.css** -- CSS Custom Properties:
- `--hill-green`: #006b51 → #2ba0f0
- `--hill-green-dark`: #005a44 → #1a8ad4
- `--hill-green-light`: #007d5e → #4db8ff

### Hardcoded Hex-Werte (2 Dateien)

- **src/components/PriceOverviewSection.tsx**: `color: "#006b51"` → `"#2ba0f0"`
- **src/pages/DesignSystem.tsx**: Farbpalette-Anzeige `#006b51` Text → `#2ba0f0`

### Ergebnis
Alle Buttons, Links, Icons, Badges, Karten-Akzente, Gradient-Texte und Focus-Ringe wechseln automatisch von Grün zu Blau (#2ba0f0).

