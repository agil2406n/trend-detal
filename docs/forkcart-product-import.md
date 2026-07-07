# ForkCart product import mapping

Bu fayl `data/products.json` datasini ForkCart admin paneline kocurmek ucundur.

## Product fields

| Trend Detal JSON | ForkCart field | Qeyd |
| --- | --- | --- |
| `id` | SKU | Mehsul kodu kimi saxla |
| `name` | Product name | Mehsul adi |
| `category` | Category | Filtr, Eylec, Asqi, Yag, Elektrik |
| `brand` | Vendor / Brand | Brend adi |
| `price` | Price | AZN qiymet |
| `currency` | Currency | AZN |
| `stock` | Inventory status | `in_stock` / `order` |
| `oem` | Metadata | OEM kodlari |
| `fits` | Description / Metadata | Uyqun avtomobiller |
| `image` | Product image | SVG/PNG sekil |
| `description` | Description | Qisa aciqlama |

## Category setup

ForkCart admin panelinde ilkin bu kateqoriyalari yarat:

- Filtr
- Eylec
- Asqi
- Yag
- Elektrik

## Customer account

Statik demo-da musteri hesabi `localStorage` ile isleyir.
ForkCart-da real musteri hesabi backend ve auth sistemi ile islemelidir.

`config.js` icinde bu endpoint-leri real route-lara deyis:

```js
customerLoginEndpoint: "https://your-domain.az/api/auth/login",
customerRegisterEndpoint: "https://your-domain.az/api/auth/register",
orderEndpoint: "https://your-domain.az/api/orders",
vinEndpoint: "https://your-domain.az/api/vin-requests"
```

## VIN request

ForkCart-da VIN sorqusu ucun custom form, custom API route ve ya plugin yazmaq olar.
Minimum payload:

```json
{
  "type": "vin",
  "customerEmail": "customer@example.com",
  "data": {
    "brand": "Toyota",
    "model": "Camry 2018",
    "part": "VIN / detal"
  }
}
```
