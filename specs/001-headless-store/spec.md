# Feature Specification: Sklep Headless Błyskawica (Demo)

**Feature Branch**: `001-headless-store`  
**Created**: 2026-04-29  
**Status**: Draft  
**Input**: User description: "Sklep Headless Błyskawica (Pod uwiarygodnienie E-commerce). Ma się ładować w ułamek sekundy, wynik Lighthouse 100."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Błyskawiczne przeglądanie strony głównej (Priority: P1)

Jako potencjalny klient szukający agencji, chcę wejść na demo sklepu i zobaczyć, że strona ładuje się natychmiastowo, aby przekonać się o skille dewelopera w optymalizacji wydajności.

**Why this priority**: To jest kluczowa wartość biznesowa całego dema - udowodnienie szybkości ("Lighthouse 100").

**Independent Test**: Można przetestować poprzez wejście na adres URL i uruchomienie audytu Lighthouse/PageSpeed Insights.

**Acceptance Scenarios**:

1. **Given** użytkownik wchodzi na stronę główną, **When** strona zostanie wczytana, **Then** wynik audytu Performance w Lighthouse wynosi 100/100.
2. **Given** użytkownik przewija stronę główną, **When** pojawiają się sekcje produktów, **Then** obrazy są optymalizowane (webp/avif) i nie powodują przesunięć układu (CLS = 0).

---

### User Story 2 - Przeglądanie karty produktu (Priority: P2)

Jako użytkownik chcę kliknąć w miniaturę produktu na stronie głównej, aby zobaczyć szczegóły oferty na dedykowanej karcie produktu.

**Why this priority**: Potwierdza strukturę e-commerce i umiejętność tworzenia czystego, funkcjonalnego UI.

**Independent Test**: Kliknięcie w produkt nawiguje do nowej podstrony bez odświeżania całego okna (SPA-like feel) i wyświetla poprawne dane.

**Acceptance Scenarios**:

1. **Given** użytkownik jest na stronie głównej, **When** kliknie w produkt, **Then** nawigacja do karty produktu trwa mniej niż 100ms.
2. **Given** karta produktu, **When** użytkownik widzi opis i cenę, **Then** wizualna jakość zdjęć jest wysoka mimo wysokiej kompresji.

---

### User Story 3 - Iluzja zakupu (Priority: P3)

Jako użytkownik chcę kliknąć przycisk "Kup", aby zobaczyć reakcję systemu na interakcję zakupową.

**Why this priority**: Dodaje interaktywności i "życia" do dema bez konieczności budowania pełnego backendu płatności.

**Independent Test**: Kliknięcie przycisku wywołuje animację lub komunikat o sukcesie.

**Acceptance Scenarios**:

1. **Given** karta produktu, **When** użytkownik kliknie "Kup", **Then** pojawia się stylowe powiadomienie (Toast/Modal) o dodaniu do koszyka lub symulacji zakupu.

---

### Edge Cases

- Co się stanie, gdy użytkownik ma bardzo wolne łącze (3G)? System musi wyświetlać szkielety (skeletons) lub priorytetyzować tekst nad obrazami.
- Jak system zachowa się na ekranach ultra-szerokich (21:9)? Layout musi być ograniczony (max-width) dla zachowania czytelności.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUSI być statycznie generowany (SSG - Static Site Generation).
- **FR-002**: System MUSI priorytetyzować Core Web Vitals (LCP < 1.2s, CLS < 0.1, FID < 100ms).
- **FR-003**: Obrazy MUSZĄ być automatycznie optymalizowane do formatów nowoczesnych (WebP/AVIF).
- **FR-004**: Interfejs MUSI być responsywny (Mobile First).
- **FR-005**: System MUSI ładować dane produktów z lokalnego pliku JSON (brak zewnętrznego API dla prędkości).
- **FR-006**: Stylizacja MUSI opierać się na systemie tokenów (harmonijna paleta kolorów, spójna typografia).

### Key Entities *(include if feature involves data)*

- **Produkt**: Reprezentuje pojedynczy element w sklepie. Atrybuty: ID, nazwa, opis, cena, obraz, kategoria.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Wynik audytu Lighthouse (Performance) na urządzeniach Mobile i Desktop wynosi 100/100.
- **SC-002**: First Contentful Paint (FCP) wynosi poniżej 0.8 sekundy.
- **SC-003**: Brak błędów 404 dla zasobów statycznych (obrazki, fonty).
- **SC-004**: Strona zajmuje mniej niż 500KB całkowitego transferu (Initial Load).

## Assumptions

- Demo będzie hostowane na GitHub Pages lub Vercel (darmowy tier).
- Używamy frameworka Astro ze względu na "Zero JS by default".
- Nie budujemy prawdziwego koszyka ani panelu admina (to tylko demo wizualne i wydajnościowe).
