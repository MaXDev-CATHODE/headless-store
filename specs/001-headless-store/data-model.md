# Data Model: Product

## Entity: Product
Reprezentuje produkt w sklepie.

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string | Unikalny identyfikator (slug) | Required, lowercase |
| name | string | Nazwa produktu | Required |
| description | string | Krótki opis (teaser) | Max 150 chars |
| longDescription | string | Pełny opis na kartę produktu | Required |
| price | number | Cena numeryczna | > 0 |
| currency | string | Symbol waluty (np. "zł") | Default: "zł" |
| image | string | Ścieżka do obrazu głównego | Path exists |
| category | string | Kategoria produktu | Required |
| features | array | Lista kluczowych cech (stringi) | Min 1 element |

## Przykładowy JSON (src/data/products.json)
```json
[
  {
    "id": "lightning-keyboard",
    "name": "Klawiatura Lightning Pro",
    "price": 599,
    "currency": "zł",
    "image": "/images/keyboard.jpg",
    "category": "Akcesoria",
    "features": ["RGB", "Mechanical", "Wireless"]
  }
]
```
