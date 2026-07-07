# Trend Detal

Trend Detal avtomobil ehtiyat hisseleri ucun storefront demo ve ForkCart kecid paketidir.

## Fayllar

- `index.html` - ana sehife
- `styles.css` - dizayn
- `script.js` - katalog, sebet, musteri hesabi, dil secimi ve sorqu mentiqi
- `config.js` - ForkCart, WhatsApp ve API linkleri
- `data/products.json` - demo mehsul bazasi
- `assets/` - logo, banner ve mehsul sekilleri
- `FORKCART_SETUP.md` - ForkCart qurasdirma izahi
- `docs/` - GitHub ve ForkCart ucun elave izahlar

## Lokal isletme

Statik fayllari birbasa browserde acmaq olar. JSON fetch ucun local server daha yaxsidir:

```bash
python -m http.server 4173
```

Sonra ac:

```text
http://127.0.0.1:4173/
```

## ForkCart ile real magazaya kecid

ForkCart tam e-commerce platformadir:

- storefront
- admin panel
- REST API
- customer account
- order history
- checkout
- inventory

Qurasdirma ve kecid addimlari:

```text
FORKCART_SETUP.md
docs/forkcart-product-import.md
docs/github-upload-checklist.md
```

## GitHub Pages

GitHub Pages ucun `index.html` repo root-da qalmalidir. `Settings -> Pages` bolmesinde branch olaraq
`main` ve folder olaraq `/root` sec.
