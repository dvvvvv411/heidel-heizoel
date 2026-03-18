

## Fix: Desktop Navigation Alignment

Das Problem: Die Menüpunkte und der Button sind vertikal nicht korrekt mit dem Logo zentriert – sie sitzen zu hoch.

### Lösung in `src/components/Header.tsx`

Zeile 48: Den Main-Navigation-Container von `justify-between` auf ein explizites `items-center` Layout umstellen und sicherstellen, dass Logo und Nav vertikal zentriert sind. Das Logo hat `h-16` und drückt den Container nach unten, aber die Nav-Items alignen sich nicht korrekt.

Fix: `py-4` auf `py-3` reduzieren und `items-center` beibehalten. Zusätzlich dem Nav-Container explizit `items-center` geben (ist schon da) – das eigentliche Problem ist, dass der Container `justify-between` nutzt aber die Items nicht gleichmäßig vertikal zentriert sind. Fix durch Hinzufügen von `flex-wrap: nowrap` (`flex-nowrap`) und ggf. Logo-Höhe angleichen.

Konkret:
- Zeile 48: `gap-6` beibehalten, sicherstellen dass `items-center` greift
- Dem gesamten Main-Nav-Bereich ein konsistentes vertikales Alignment geben, indem Logo und Nav in einem sauberen Flex-Container sitzen

