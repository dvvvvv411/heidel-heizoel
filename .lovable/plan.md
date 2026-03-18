

## Plan: PDF-Download statt neuem Tab

### Problem
Der `<a>` Tag mit `target="_blank"` öffnet die PDF in einem neuen Tab. Das `download`-Attribut funktioniert bei Cross-Origin URLs nicht zuverlässig.

### Lösung in `src/pages/Bestellstatus.tsx`

Den `<a>`-Link durch einen `<Button>` mit `onClick`-Handler ersetzen, der die PDF per `fetch()` als Blob herunterlädt und dann über einen temporären `<a>`-Tag mit `blob:`-URL den echten Download auslöst:

```ts
const handleDownload = async () => {
  const res = await fetch(orderData.invoice_url);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Rechnung-${orderData.order_number}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
};
```

Zeilen 287-297: `<a>` durch `<Button onClick={handleDownload}>` ersetzen.

