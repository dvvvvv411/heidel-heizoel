

## Fixes

### 1. Desktop Navbar – Items in einer Zeile
Die Nav-Links und der Button wrappen, weil `space-x-8` zu viel Platz braucht. Fix: `space-x-8` auf `space-x-6` reduzieren und `whitespace-nowrap` auf die nav setzen, damit alles in einer Zeile bleibt.

### 2. Mobile Menu – Fullscreen Sidebar statt Dropdown
Das aktuelle Mobile-Menu ist ein `max-h` Dropdown innerhalb des Headers. Ersetzen durch ein fixed fullscreen Overlay (`fixed inset-0 z-50 bg-white`):
- Logo oben mittig zentriert
- X-Button oben rechts
- Nav-Links vertikal zentriert mit größerer Schrift
- Kontakt-Info unten
- Slide-in Animation von rechts

### Betroffene Datei
- `src/components/Header.tsx`

