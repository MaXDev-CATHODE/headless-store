# Research: Headless Lightning Store

## Decyzja 1: Framework - Astro
- **Wybór**: Astro 4.x
- **Rationale**: Astro oferuje architekturę "Islands", co pozwala na wysyłanie zero bajtów JavaScriptu do przeglądarki dla statycznych części strony. Jest to najprostsza droga do wyniku 100/100 w Lighthouse.
- **Alternatives considered**: Next.js (zbyt dużo JS runtime dla prostego dema), HTML/CSS (trudne w utrzymaniu przy wielu stronach).

## Decyzja 2: Optymalizacja obrazów
- **Wybór**: Wbudowany komponent `<Image />` z Astro.
- **Rationale**: Automatycznie generuje formaty WebP/AVIF i dba o atrybuty `width`/`height` (brak CLS).
- **Alternatives considered**: Ręczna optymalizacja (zbyt czasochłonna), Cloudinary (wymaga klucza API, co narusza zasadę "zero kosztów/zależności").

## Decyzja 3: Deployment
- **Wybór**: GitHub Pages
- **Rationale**: Darmowy, zintegrowany z repozytorium, serwowany przez szybki CDN.
- **Alternatives considered**: Vercel (również dobry, ale GitHub Pages wystarczy dla czystego SSG).
