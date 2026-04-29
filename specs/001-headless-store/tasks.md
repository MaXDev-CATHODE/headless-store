# Tasks: Headless Lightning Store Demo

**Feature**: Sklep Headless Błyskawica
**Branch**: `001-headless-store`
**Spec**: [spec.md](spec.md)
**Plan**: [plan.md](plan.md)

## Implementation Strategy

Projekt realizowany w modelu MVP-first. Każda faza kończy się niezależnie testowalnym przyrostem.
- **MVP**: Tylko Phase 1-3 (W pełni działająca, błyskawiczna strona główna).
- **Incremental**: Phase 4 (Karta produktu), Phase 5 (Interakcje).

## Dependencies

US1 (Phase 3) depends on: Phase 1, Phase 2
US2 (Phase 4) depends on: US1
US3 (Phase 5) depends on: US2

---

## Phase 1: Setup

Cel: Inicjalizacja projektu Astro i podstawowej struktury.

- [x] T001 Inicjalizacja projektu Astro za pomocą `npx create-astro@latest ./ --template minimal --no-install --no-git` w folderze głównym
- [x] T002 Instalacja zależności `npm install`
- [x] T003 [P] Dodanie integracji Tailwind CSS `npx astro add tailwind`
- [x] T004 Utworzenie struktury katalogów `src/components`, `src/layouts`, `src/data`, `src/styles`

## Phase 2: Foundational

Cel: Przygotowanie danych i globalnych stylów.

- [x] T005 Utworzenie pliku danych `src/data/products.json` na podstawie `data-model.md`
- [x] T006 [P] Przygotowanie globalnych stylów i tokenów design systemu w `src/styles/global.css`
- [x] T007 Utworzenie głównego layoutu aplikacji `src/layouts/MainLayout.astro`

## Phase 3: User Story 1 - Błyskawiczna strona główna [US1]

Cel: Wyświetlenie listy produktów na stronie głównej z wynikiem Lighthouse 100.
Independent Test: Uruchomienie `npm run build` i audyt Lighthouse na folderze `dist`.

- [x] T008 [P] [US1] Implementacja komponentu kontenera layoutu w `src/components/layout/Container.astro`
- [x] T009 [P] [US1] Implementacja komponentu karty produktu w `src/components/product/ProductCard.astro`
- [x] T010 [US1] Budowa strony głównej `src/pages/index.astro` wyświetlającej listę z `products.json`
- [x] T011 [US1] Konfiguracja optymalizacji obrazów za pomocą komponentu `<Image />` z Astro w `ProductCard.astro`

## Phase 4: User Story 2 - Szczegóły produktu [US2]

Cel: Nawigacja i wyświetlanie karty produktu.
Independent Test: Kliknięcie w produkt na stronie głównej otwiera poprawną kartę produktu.

- [x] T012 [P] [US2] Utworzenie dynamicznej ścieżki dla produktów v `src/pages/product/[id].astro`
- [x] T013 [US2] Implementacja logiki `getStaticPaths()` dla generowania stron produktów w `src/pages/product/[id].astro`
- [x] T014 [P] [US2] Implementacja galerii produktu i szczegółowego opisu w `src/pages/product/[id].astro`

## Phase 5: User Story 3 - Iluzja zakupu [US3]

Cel: Reakcja na przycisk "Kup".
Independent Test: Kliknięcie "Kup" pokazuje komunikat sukcesu bez przeładowania strony.

- [x] T015 [P] [US3] Implementacja komponentu przycisku "Kup" w `src/pages/product/[id].astro`
- [x] T016 [US3] Dodanie logiki Toast/Notification po kliknięciu przycisku w `src/pages/product/[id].astro`

## Final Phase: Polish & Cross-Cutting Concerns

- [x] T017 Optymalizacja assetów (minify, compress images)
- [x] T018 Końcowy audyt Lighthouse i poprawki Core Web Vitals
- [x] T019 Przygotowanie konfiguracji deploymentu dla GitHub Pages w `astro.config.mjs`
- [x] T020 [P] Uzupełnienie dokumentacji projektu v głównym `README.md`
