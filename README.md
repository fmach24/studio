# C1PH3R - Strona Koła Naukowego AGH

Oficjalna strona internetowa Koła Naukowego Cyberbezpieczeństwa C1PH3R działającego na Akademii Górniczo-Hutniczej w Krakowie.

## 🚀 Technologie

- **Next.js 15.3** - React framework z Server-Side Rendering
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Komponenty UI z accessibility
- **Lucide React** - Ikony

## 📦 Instalacja

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build produkcyjny
npm run build

# Start serwera produkcyjnego
npm start

# Sprawdzanie typów TypeScript
npm run typecheck

# Linting
npm run lint
```

## 🏗️ Struktura projektu

```
C1PH3R-website/
├── public/              # Pliki statyczne (obrazy, fonty, favicon)
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Layout główny
│   │   ├── page.tsx    # Strona główna
│   │   └── globals.css # Style globalne
│   ├── components/     # Komponenty React
│   │   ├── icons/      # Komponenty ikon i logo
│   │   └── ui/         # Komponenty UI (shadcn/ui)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── types/          # Deklaracje TypeScript
└── docs/               # Dokumentacja projektu
```

## 🎨 Konfiguracja

Projekt używa:
- **Static Export** - generowanie statycznych plików HTML
- **Tailwind CSS** - z custom theme i zmiennymi CSS
- **Google Fonts** - Inter (body) i Orbitron (headings)
- **Dark Mode** - wsparcie dla ciemnego motywu

## 🌐 Deployment

Projekt jest skonfigurowany jako statyczny export (`output: 'export'`), więc może być hostowany na dowolnym serwerze statycznym:

1. Zbuduj projekt:
```bash
npm run build
```

2. Folder `out/` zawiera gotowe pliki do wdrożenia

3. Skopiuj zawartość folderu `out/` na serwer

### Deployment na AGH
```bash
# Przykład kopiowania na serwer AGH
scp -r out/* user@cipher.agh.edu.pl:/var/www/html/
```

## 📝 SEO

Projekt zawiera:
- ✅ Metadata w `layout.tsx`
- ✅ Open Graph tags
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ Favicon i ikony

## 🔧 Development

### Port deweloperski
Aplikacja uruchamia się domyślnie na porcie `9002`:
```bash
npm run dev
# Otwórz http://localhost:9002
```

### Dodawanie nowych komponentów UI
Projekt używa **shadcn/ui**. Aby dodać nowy komponent:
```bash
npx shadcn@latest add [nazwa-komponentu]
```

## 📄 Licencja

Projekt Koła Naukowego C1PH3R AGH

## 👥 Kontakt

- Email: cipher@agh.edu.pl
- LinkedIn: [cipher-agh](https://www.linkedin.com/company/cipher-agh/)
- Facebook: [KNCipherAGH](https://www.facebook.com/KNCipherAGH)
- Lokalizacja: Wydział WiET, AGH, Kraków
