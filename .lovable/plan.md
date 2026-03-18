
Ziel: Die Desktop-Navigation wirklich sauber in eine Linie bringen und die Menüpunkte vertikal exakt zum Button und Logo ausrichten.

1. Ursache beheben
- Das Problem liegt sehr wahrscheinlich nicht mehr am äußeren Flex-Container, sondern an den einzelnen Link-Elementen:
  - Globale Styles geben allen `a`- und `button`-Elementen mindestens `44px` Höhe.
  - Die Desktop-Links in der Navbar sind aktuell keine `flex`/`inline-flex` Elemente.
  - Dadurch sitzen die Link-Texte optisch zu weit oben, obwohl der Nav-Container selbst `items-center` hat.

2. Anpassung in `src/components/Header.tsx`
- Desktop-Navigation gezielt neu ausrichten:
  - Hauptzeile auf stabiles Layout umstellen: Logo links, Navigation mit `ml-auto` rechts.
  - Navigation weiter `flex-nowrap` lassen, damit nichts umbrechen kann.
  - `space-x-*` durch `gap-*` ersetzen, damit das Layout berechenbarer wird.
- Desktop-Menülinks selbst zentrieren:
  - Jeden Link als `inline-flex items-center`
  - Feste Höhe passend zum Button, z. B. `h-10`
- Button auf dieselbe visuelle Höhe abstimmen:
  - Button-Höhe explizit konsistent zur Link-Höhe halten
- Falls nötig:
  - Vertikales Padding der Header-Zeile leicht reduzieren
  - Logo als sauber blockiges Element behandeln, damit keine optische Verschiebung entsteht

3. Erwartetes Ergebnis
- Menüpunkte und „Jetzt bestellen“-Button stehen wirklich in einer horizontalen Linie
- Die Texte wirken nicht mehr nach oben versetzt
- Kein Umbruch mehr in der Desktop-Navbar

Technische Details
- Betroffene Datei: `src/components/Header.tsx`
- Kernfix:
  - Desktop-Wrapper: von reinem `justify-between` auf klareres `flex items-center` mit `ml-auto` für die Nav
  - Nav: `flex items-center flex-nowrap gap-*`
  - Links: `inline-flex items-center h-10`
- Warum das wirkt:
  - `items-center` zentriert nur Flex-Items, aber nicht automatisch den Text innerhalb eines blockifizierten Links mit Mindesthöhe
  - Erst wenn die Links selbst `inline-flex items-center` bekommen, sitzt der Text optisch korrekt mittig

Umsetzungsschritte
1. Desktop-Header-Zeile in `Header.tsx` umbauen
2. Desktop-Link-Klassen auf echte vertikale Zentrierung anpassen
3. Button-/Logo-Höhen visuell angleichen
4. Danach im Preview auf Desktop-Breite prüfen, ob alles jetzt wirklich bündig ist
