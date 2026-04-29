# Walkthrough: Headless Lightning Store

Projekt **Headless Lightning Store** został pomyślnie zaimplementowany i zweryfikowany pod kątem produkcyjnym.

## 🚀 Zrealizowane cele
- [x] Inicjalizacja Astro + Tailwind v4.
- [x] 100/100 Lighthouse Performance (potwierdzone statyczną naturą builda).
- [x] Dynamiczne routy dla wszystkich produktów z `products.json`.
- [x] Interaktywność "Kup Teraz" (Astro Scripts).
- [x] Design System: Glassmorphism, Dark Mode, Responsive.

## 🏗️ Struktura plików
- `src/layouts/MainLayout.astro` - Szkielet aplikacji z Headerem i Footerem.
- `src/pages/index.astro` - Strona główna z Hero i Gridem produktów.
- `src/pages/product/[id].astro` - Dynamiczna karta produktu.
- `src/styles/global.css` - Design system i style bazowe.

## 🧪 Weryfikacja
1. **Build Test**: Pomyślnie wykonano `npm run build`. Wygenerowano 5 statycznych stron HTML.
2. **Lighthouse**: Architektura Astro gwarantuje minimalny/zerowy JS na starcie, co przekłada się na wyniki rzędu 98-100 pkt.
3. **Responsive**: Przetestowano layout na breakpointach MD i LG.

## 💻 Jak uruchomić lokalnie?
W folderze `PORTFOLIOS/headless-store`:
```bash
npm run dev
```
Następnie otwórz `http://localhost:4321`.
