# GitHub upload checklist

## Statik sayt kimi yuklemek

Repo root-da bunlar olmalidir:

- `index.html`
- `styles.css`
- `script.js`
- `config.js`
- `data/products.json`
- `assets/`
- `README.md`
- `FORKCART_SETUP.md`
- `.env.forkcart.example`
- `docs/`

## GitHub web UI ile upload

1. GitHub repo-nu ac.
2. `Add file -> Upload files`.
3. Zip-i ac ve icindeki fayllari sec.
4. Commit message yaz: `Add Trend Detal storefront and ForkCart setup`.
5. `Commit changes`.

## GitHub Pages

1. `Settings -> Pages`.
2. Source: `Deploy from a branch`.
3. Branch: `main`.
4. Folder: `/root`.
5. Save.

## ForkCart repo ile islemek

Tam e-commerce ucun statik sayti ForkCart repo root-na qarishdirma.
Bunun yerine ForkCart-i ayrica qurasdir:

```bash
npx create-forkcart trend-detal-shop
```

Sonra Trend Detal datasini ve dizaynini ForkCart storefront/admin-a kocur.
