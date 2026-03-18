

## Plan: Bestellstatus-Seite + Navbar-Eintrag

### Übersicht
Neue Seite `/bestellstatus` erstellen, auf der Kunden mit Bestellnummer + PLZ ihre Rechnung, Bankdaten und Preis einsehen können. Die Seite wird in Desktop- und Mobile-Navigation eingebunden.

### Dateien

#### 1. Neue Datei: `src/pages/Bestellstatus.tsx`
Zweistufige Seite im bestehenden Layout (Header + Footer):

**Schritt 1 – Eingabeformular:**
- Card mit Eingabefeldern für Bestellnummer und PLZ
- Button "Bestellstatus abfragen"
- `branding_id` wird aus der Konstante `shopId` (gleiche wie im PriceCalculator: `4d04ce80-b4cd-4704-bcbd-e20184308710`) mitgeschickt
- POST an `https://luhhnsvwtnmxztcmdxyq.supabase.co/functions/v1/get-invoice-by-order`
- Fehlerbehandlung mit Toast-Nachrichten für 400/404/500

**Schritt 2 – Ergebnisanzeige (nach erfolgreicher Abfrage):**
- Bestellnummer prominent anzeigen
- Gesamtpreis mit Währung
- Bankdaten-Card: Kontoinhaber, IBAN, BIC, Bankname – mit deutlichem Hinweis "Bitte überweisen Sie den Betrag an folgende Bankverbindung"
- Rechnungs-PDF: Großes Thumbnail via `<iframe>` oder `<object>` Embed + Download-Button
- Klarer CTA-Hinweis zur Überweisung

#### 2. `src/components/Header.tsx`
- Desktop-Nav: Link "Bestellstatus" zu `/bestellstatus` hinzufügen (vor dem "Jetzt bestellen" Button)
- Mobile-Sidebar: "Bestellstatus" in die Nav-Link-Liste einfügen

#### 3. `src/App.tsx`
- Import `Bestellstatus` und Route `/bestellstatus` hinzufügen

### Technische Details
- Direkte `fetch()`-Aufrufe an die externe Supabase Edge Function (kein eigener Edge Function nötig)
- `shopId` als Konstante für `branding_id`
- PDF-Vorschau mit `<iframe src={invoice_url}>` + `<a href={invoice_url} download>` Button
- Fehler-Mapping: 400 → Validierungsfehler, 404 → nicht gefunden / keine Rechnung, 500 → Serverfehler
- Styling konsistent mit bestehendem Design: Cards, rounded-xl, shadow-sm, Lucide-Icons

