# Trend Detal + ForkCart setup

Bu repo Trend Detal ucun hazir storefront demo ve ForkCart-a kecid materiallarini saxlayir.
ForkCart tam e-commerce platformadir: storefront, admin panel, REST API, customer account,
checkout, order history ve inventory idaresi verir.

ForkCart repo:
https://github.com/forkcart/forkcart

## 1. ForkCart qurasdir

ForkCart README-ye gore en rahat yol:

```bash
npx create-forkcart trend-detal-shop
```

Installer sehifesini ac ve bu addimlari tamamla:

- database setup
- admin account
- demo data
- store settings

Manual qurasdirma ucun lazim olanlar:

- Node.js 22+
- pnpm 9+
- PostgreSQL 16

ForkCart README `main` branch yerine release tag ile clone etmeyi meslehet gorur.

## 2. ForkCart route-lari

Magaza isleyende route-lar bele olur:

- `/` - storefront
- `/admin` - admin panel
- `/api/*` - REST API

Trend Detal mehsullari, qiymetleri, stok, musteriler ve sifarisler ForkCart admin panelinden
idare olunmalidir.

## 3. Trend Detal mehsul datasi

Bu repo-da demo mehsullar buradadir:

```text
data/products.json
```

ForkCart admin panelinde mehsul yaradanda bu field-leri uygun doldur:

- `name` -> Product name
- `category` -> Category
- `brand` -> Vendor / Brand
- `price` -> Price
- `stock` -> Inventory status
- `oem` -> Product metadata / custom field
- `fits` -> Description or custom field
- `image` -> Product image
- `description` -> Product description

## 4. Statik sayt ForkCart-a nece qosulur

`config.js` faylinda real ForkCart linklerini yaz:

```js
window.TREND_DETAL_CONFIG = {
  forkcartAdminUrl: "https://your-domain.az/admin",
  forkcartStoreUrl: "https://your-domain.az",
  forkcartApiUrl: "https://your-domain.az/api/products",
  forkcartApiKey: "",
  customerLoginEndpoint: "https://your-domain.az/api/auth/login",
  customerRegisterEndpoint: "https://your-domain.az/api/auth/register",
  whatsappNumber: "994xxxxxxxxx",
  orderEndpoint: "https://your-domain.az/api/orders",
  vinEndpoint: "https://your-domain.az/api/vin-requests"
};
```

API endpoint adlari ForkCart qurasdirildiqdan sonra real route-lara gore deyisdirilmelidir.

## 5. GitHub-a ne yuklemek lazimdir?

Statik demo ucun bu fayllar repo root-da olmalidir:

- `index.html`
- `styles.css`
- `script.js`
- `config.js`
- `data/`
- `assets/`
- `README.md`
- `FORKCART_SETUP.md`
- `docs/`

GitHub Pages istifade edeceksense `index.html` repo root-da qalmalidir.

## 6. Tam ForkCart magazasi ucun yol

1. `forkcart/forkcart` repo-nu fork et.
2. ForkCart installer ile yeni shop yarat.
3. Trend Detal logo, rengler ve mehsul datalarini ForkCart admin paneline kocur.
4. Storefront theme-ni Trend Detal dizaynina uygunlasdir.
5. `/admin` panelinden product, order, customer, inventory idare et.

## 7. Vacib qeyd

Bu statik sayt demo/order UI ucundur. Real online satis ucun customer account, payment,
admin, stock ve order lifecycle ForkCart backendinde olmalidir.
