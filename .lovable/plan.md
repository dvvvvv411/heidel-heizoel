

## Logo & Favicon austauschen

### Dateien kopieren
- `user-uploads://heidellogo.png` → `public/heidel-logo.png`
- `user-uploads://heidelfavicon.png` → `public/favicon.png` (überschreibt bestehendes Favicon)

### Code-Änderungen

1. **src/components/Header.tsx** -- `bayerwald-logo.png` → `/heidel-logo.png` (2 Stellen: Desktop & Mobile)
2. **src/components/Footer.tsx** -- `bayerwald-logo.png` → `/heidel-logo.png`, ggf. den Invert-Filter entfernen (da das neue Logo bereits blau auf transparent ist)
3. **index.html** -- Favicon-Referenz bleibt `/favicon.png` (Datei wird überschrieben)

