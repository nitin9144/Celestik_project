# Celestik - Next.js Migration

## Project Structure

This project has been successfully migrated from Vite to Next.js 15.

### Directory Structure

```
├── app/
│   ├── components/           # Reusable React components
│   │   ├── ui/              # Shadcn UI components
│   │   ├── figma/           # Figma components
│   │   └── *.tsx            # Feature components
│   ├── (sites)/             # Route group for site pages
│   │   ├── home/            # Home page
│   │   ├── palmistry/       # Palmistry page
│   │   ├── astrology/       # Astrology page
│   │   ├── contact/         # Contact page
│   │   ├── how-it-works/    # How it works page
│   │   ├── payment/         # Payment page
│   │   ├── reveal-cosmic-truth/  # Reveal cosmic truth page
│   │   ├── report-processing/   # Report processing page
│   │   └── report-ready/    # Report ready page
│   ├── styles/              # Global styles and CSS
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── page.tsx             # Root page (redirects to /home)
├── public/                  # Static assets
├── lib/                     # Utility functions
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Production

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Key Changes from Vite

1. **Router**: Migrated from React Router to Next.js App Router
   - Replace `useNavigate()` with `useRouter()` from `next/navigation`
   - File-based routing replaces explicit route configuration

2. **Styling**: 
   - Tailwind CSS 4 with Next.js integration
   - Global styles in `app/globals.css`
   - Import global styles in root layout

3. **Entry Point**: 
   - No more `main.tsx` and `index.html`
   - Next.js handles the entry point automatically
   - Root layout in `app/layout.tsx`

4. **Components**:
   - Client components must be marked with `"use client"` directive
   - Server components are default
   - All existing components migrated and updated

5. **Configuration**:
   - `next.config.js` replaces `vite.config.ts`
   - `tsconfig.json` updated for Next.js
   - `postcss.config.mjs` simplified for Next.js

## Features

- ✅ Next.js 15 App Router
- ✅ TypeScript support
- ✅ Tailwind CSS v4
- ✅ Shadcn UI components
- ✅ Responsive design
- ✅ Dark mode optimized
- ✅ SEO-friendly with metadata

## Deployment

This project can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Any Node.js hosting provider**

For deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Notes

- All React Router functionality has been replaced with Next.js routing
- Session storage is used for form persistence between pages
- The application redirects from `/` to `/home`
- All components maintain their original styling and functionality

## Troubleshooting

If you encounter any issues:

1. Clear `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules`
3. Reinstall dependencies: `npm install`
4. Run dev server: `npm run dev`

For more information on Next.js, visit [https://nextjs.org/docs](https://nextjs.org/docs).
