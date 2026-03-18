

## Plan: Gesamtbetrag-Card erweitern + IBAN-Schriftgröße anpassen

### Änderungen in `src/pages/Bestellstatus.tsx`

**1. Gesamtbetrag-Card (Zeilen 195-202):**
- Unter dem Gesamtbetrag die enthaltene MwSt. anzeigen: `inkl. {total_amount * 0.19 / 1.19} MwSt.` (19% aus dem Bruttobetrag herausrechnen, nicht draufrechnen)
- Darunter: "Kostenlose Lieferung" mit einem Häkchen-Icon
- Bestellnummer bleibt unten

**2. IBAN-Schriftgröße (Zeile 224):**
- Die Sonderbehandlung `font-mono text-sm` für IBAN entfernen, sodass alle Bankdaten-Werte gleich groß dargestellt werden (nur `font-medium text-foreground`)

### Berechnung MwSt.
- `mwst = total_amount - (total_amount / 1.19)` — das ist der im Bruttobetrag enthaltene MwSt.-Anteil
- Anzeige: `formatCurrency(mwst, currency)` mit Label "inkl. MwSt."

