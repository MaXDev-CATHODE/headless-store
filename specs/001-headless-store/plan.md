# Implementation Plan: Headless Lightning Store Demo

**Branch**: `001-headless-store` | **Date**: 2026-04-29 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-headless-store/spec.md`

## Summary

Projekt polega na zbudowaniu ekstremalnie wydajnego dema sklepu internetowego (Strona Główna + Karta Produktu) przy użyciu frameworka **Astro**. Głównym celem jest osiągnięcie wyniku **100/100 w Lighthouse** i stworzenie wizualnej iluzji "żywego" systemu e-commerce, co ma służyć jako potężny dowód umiejętności (uwiarygodnienie) w portfolio.

## Technical Context

**Language/Version**: TypeScript / Node.js 20+  
**Primary Dependencies**: Astro 4.x, Tailwind CSS (via Astro Integration), Lucide React (icons)  
**Storage**: Local JSON file (`src/data/products.json`)  
**Testing**: Astro Check, Vitest (unit tests for logic), Lighthouse CI (local performance check)  
**Target Platform**: GitHub Pages (Static Site Generation)  
**Project Type**: web-application (Static)  
**Performance Goals**: 100/100 Lighthouse Performance, LCP < 1.0s  
**Constraints**: Zero-JS on client where possible (Astro Islands), strictly optimized images (AVIF/WebP)  
**Scale/Scope**: 2-3 pages, mock data for 6-12 products

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] No unnecessary implementation details in spec.
- [x] Tech stack chosen for maximum performance (Astro).
- [x] Clear measurable success criteria (Lighthouse 100).

## Project Structure

### Documentation (this feature)

```text
specs/001-headless-store/
├── plan.md              # Ten plik
├── research.md          # Faza 0: Badania i decyzje projektowe
├── data-model.md        # Faza 1: Model danych produktu
├── quickstart.md        # Faza 1: Instrukcja uruchomienia
└── tasks.md             # Faza 2: Lista zadań (wygenerowana przez speckit-tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── layout/          # Header, Footer, Container
│   ├── product/         # ProductCard, ProductGallery
│   └── ui/              # Buttons, Badges, Toasts
├── data/
│   └── products.json    # Baza produktów (Mock)
├── layouts/
│   └── MainLayout.astro # Główny layout HTML
├── pages/
│   ├── index.astro      # Strona główna
│   └── product/
│       └── [id].astro   # Karta produktu (Dynamic Routes)
└── styles/
    └── global.css       # Globalne style i tokeny
```

**Structure Decision**: Wybrano strukturę "Single project" opartą na standardowym układzie Astro, ponieważ cała aplikacja jest statyczna i nie wymaga osobnego backendu.

## Complexity Tracking

> **Brak naruszeń konstytucji.** Projekt jest prosty technicznie, skupiony na perfekcyjnej egzekucji i optymalizacji.
