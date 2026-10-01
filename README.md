# Nyarie Glow Cosmetics Wholesale

React + Vite catalogue frontend for **Nyarie Glow Cosmetics Wholesale**.

## What was updated

- Brand identity changed to **Nyarie Glow Cosmetics Wholesale**.
- Frontend product data replaced with the supplied wholesale catalogue as the master source.
- Catalogue prices are represented in USD.
- Search is frontend-only and searches product name, brand and category.
- Search includes partial matching and lightweight typo tolerance.
- Category filters work without a backend.
- Product cards use supplied product assets where an image reference is available.
- Products without a verified supplied image show an explicit `Image not supplied` state rather than a fabricated placeholder.
- Catalogue wording that was visibly truncated/unclear was retained rather than expanded with guessed information.

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Catalogue source rule

Do not add products or prices from memory, web searches, or the previous site. Update `src/main.jsx` only from a newer/clearer catalogue supplied by the business.

## Important catalogue ambiguities

The supplied catalogue contains repeated/partially visible listings, including:
- multiple `Dark Spot Corrector` entries with prices in the $6–$7 range;
- multiple `Bright Complete` listings at $8;
- multiple La Roche-Posay `Sunscreen` listings at $6;
- truncated names such as `Anti-D…`, `Retinal Lip…`, `Daily Vitamin…`, and `Maca Plus Extreme Cur…`.

Those visible catalogue distinctions are intentionally preserved instead of inventing missing details.


## WhatsApp ordering
- Floating WhatsApp button opens the business WhatsApp number: +263 78 241 8623.
- Catalogue cards have an **Add** action that opens a client-side cart.
- Cart supports quantities, removal and an exact USD catalogue total.
- Checkout opens WhatsApp with each selected product, quantity, catalogue unit price, line total and cart total.
- No backend or payment gateway is required; availability/order confirmation remains with the business on WhatsApp.
