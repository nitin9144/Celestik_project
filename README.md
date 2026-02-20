# CELESTIK – AI Palmistry Web App (Prototype)

A modern, mystical frontend prototype for Celestik where users can upload palm images, proceed through a payment verification flow, and receive personalized palmistry reports.

## 🌌 Project Overview

**CELESTIK** is an AI-powered palmistry platform with a premium, mystical aesthetic combined with modern technology. This prototype features:

- **Palmistry (LIVE)**: Complete user flow from palm upload to report generation
- **Astrology (Coming Soon)**: Teaser UI and waitlist functionality
- **Premium Design**: Dark cosmic background, gold/cream highlights, mystical but modern
- **Responsive**: Fully mobile-responsive design

### Tagline
> "Not magic. Just stardust and algorithms."

## 📦 Tech Stack

- **React 18** with Vite
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Shadcn/UI** component library (pre-installed)
- **Lucide React** for icons
- **Framer Motion** compatible (motion library included)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173/`

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Footer.tsx                # Footer with links
│   │   ├── HeroSection.tsx           # Landing hero with branding
│   │   ├── HowItWorks.tsx            # 3-step how it works section
│   │   ├── TrustSection.tsx          # Trust & security section
│   │   ├── AstrologyComingSoon.tsx   # Astrology teaser
│   │   ├── PalmUploadForm.tsx        # Palm image upload form
│   │   ├── PaymentCard.tsx           # Payment verification card
│   │   ├── ReportProcessing.tsx      # Loading animation screen
│   │   ├── ReportReady.tsx           # Report preview & download
│   │   ├── ZodiacBackground.tsx      # Cosmic background animation
│   │   ├── ContactSection.tsx        # Contact form
│   │   ├── PalmistrySection.tsx      # Original palmistry intro
│   │   ├── figma/                    # Figma-generated components
│   │   └── ui/                       # Shadcn/UI components
│   ├── pages/
│   │   ├── HomePage.tsx              # Landing with all sections
│   │   ├── PalmistryPage.tsx         # Palm upload form page
│   │   ├── PaymentPage.tsx           # ₹1 payment verification
│   │   ├── ReportProcessingPage.tsx  # Loading/processing screen
│   │   ├── ReportReadyPage.tsx       # Report ready screen
│   │   ├── AstrologyPage.tsx         # Astrology coming soon
│   │   ├── HowItWorksPage.tsx        # How it works detailed
│   │   └── ContactPage.tsx           # Contact us
│   ├── layouts/
│   │   └── RootLayout.tsx            # Main layout with header/footer
│   ├── assets/                       # Images and assets
│   ├── styles/
│   │   ├── index.css                 # Global imports
│   │   ├── theme.css                 # Theme variables
│   │   ├── tailwind.css              # Tailwind config
│   │   └── fonts.css                 # Custom fonts
│   ├── App.tsx                       # Main app component
│   └── routes.ts                     # Route configuration
├── main.tsx                          # Entry point
```

## 🧪 User Flow

### Complete User Journey

1. **Landing Page** (`/`)
   - Hero section with CELESTIK branding
   - How It Works (3-step guide)
   - Trust & Security section
   - Astrology Coming Soon teaser
   - CTA: "Start Your Reading"

2. **Palm Upload** (`/palmistry`)
   - Enter Full Name, Gender, Age
   - Upload palm image (drag & drop or click)
   - Image preview
   - Form validation
   - CTA: "Proceed to Payment"

3. **Payment Verification** (`/payment`)
   - Show user details summary
   - Display uploaded palm image
   - Show what user gets (insights, archetypes, life themes)
   - Price: ₹1 verification payment
   - CTA: "Pay ₹1 & Generate Report"

4. **Report Processing** (`/report-processing`)
   - Animated loading sequence:
     - "Analyzing palm lines..."
     - "Detecting personality archetypes..."
     - "Generating cosmic profile..."
     - "Compiling your stardust report..."
   - Progress bar animation
   - Auto-redirect to report ready page

5. **Report Ready** (`/report-ready`)
   - Personalized greeting
   - Report preview:
     - **Personality Insights** - Pattern analysis
     - **Emotional Archetypes** - Character types
     - **Life Path Themes** - Cosmic guidance
   - Palm image display
   - Download Report button
   - Share Reading button
   - Astrology Coming Soon banner
   - Back to Home button

## 🎨 Design Features

### Visual Style
- **Primary Color**: Gold/Amber (#FBD324, #FEFCE8)
- **Secondary Color**: Purple (#6D28D9, #9C27B0)
- **Background**: Dark Navy (#0f1433)
- **Accent**: Purple/Violet with transparency

### Typography
- **Headings**: Cinzel (serif) - mystical, elegant
- **Body**: Inter (sans-serif) - clean, readable
- **Decorative**: Philosopher (sans-serif) - mystical taglines
- **Elegant**: Marcellus (serif) - premium feel

### Components
- Decorative corner borders
- Gradient overlays
- Glassmorphism (backdrop-blur)
- Animations: pulse, spin, bounce
- Responsive grid layouts
- Form validation with error messages

## 🔐 Key Features Built

### ✅ Palm Upload Form
- Full Name, Gender, Age inputs
- Drag & drop file upload
- Image preview
- Form validation
- Error messages
- Mobile responsive

### ✅ Payment Card
- Summary card with user details
- What you get section with icons
- ₹1 price display
- Simulated payment processing
- Trust badge
- Mobile responsive

### ✅ Report Processing Screen
- 4-step animated processing:
  1. Palm line analysis
  2. Archetype detection
  3. Profile generation
  4. Report compilation
- Progress bar
- Status indicators (pending, active, complete)
- Mystical Elements
- Smooth transitions

### ✅ Report Ready Page
- Personalized greeting
- Three report sections:
  - Personality Insights
  - Emotional Archetypes
  - Life Path Themes
- Palm image display
- Download Report (simulation)
- Share Reading (with native share API)
- Astrology waitlist CTA
- Navigation options

### ✅ Home Page Sections
- **HeroSection**: CELESTIK branding, mystical mandala, tagline
- **HowItWorks**: 3-step process with icons and descriptions
- **TrustSection**: Security, privacy, no predictions assurance
- **AstrologyComingSoon**: Teaser with waitlist CTA
- **Fixed CTA**: "Start Your Reading" button

## 🔄 Data Flow

The app uses `sessionStorage` to pass user data through the flow:

```typescript
// Palm Upload → Payment
sessionStorage.setItem('palmFormData', JSON.stringify({
  fullName: string,
  gender: string,
  age: string,
  imagePreview: string (base64)
}))

// Payment → Processing
sessionStorage.setItem('paymentCompleted', 'true')

// Retrieved on Payment & Report Ready pages
const formData = JSON.parse(sessionStorage.getItem('palmFormData') || '{}')
```

## 🎯 Component Usage Examples

### Using PalmUploadForm
```tsx
import { PalmUploadForm } from '../components/PalmUploadForm';

export function PalmistryPage() {
  return <PalmUploadForm />;
}
```

### Using PaymentCard
```tsx
import { PaymentCard } from '../components/PaymentCard';

export function PaymentPage() {
  return <PaymentCard />;
}
```

### Using ReportProcessing
```tsx
import { ReportProcessing } from '../components/ReportProcessing';

export function ReportProcessingPage() {
  return <ReportProcessing />;
}
```

## 🎬 Animations & Transitions

- **Pulse**: Loading states, CTAs
- **Spin**: Progress indicators
- **Bounce**: Decorative stars
- **Fade**: Section transitions
- **Scale**: Button hover effects
- **Glow**: Shadow effects on hover

## 📱 Responsive Design

- **Mobile (< 768px)**: Single column, stacked layouts
- **Tablet (768px - 1024px)**: 2-column grids
- **Desktop (> 1024px)**: Full multi-column layouts

All components use Tailwind's responsive prefixes:
- `md:` - medium screens and up
- `lg:` - large screens and up

## 🔗 Navigation Routes

```typescript
/                    // Home page with all sections
/palmistry           // Palm upload form
/payment             // Payment verification
/report-processing   // Loading animation
/report-ready        // Report preview & download
/astrology           // Astrology coming soon
/how-it-works        // Detailed how it works
/contact             // Contact form
```

## 🛠️ Customization Guide

### Changing Colors
Update `src/styles/theme.css`:
```css
:root {
  --background: #0f1433;
  /* Update color variables */
}
```

### Changing Fonts
Update in component style props or `theme.css`:
```tsx
style={{ fontFamily: 'var(--font-serif)' }}
```

### Modifying Form Fields
Edit `PalmUploadForm.tsx` to add/remove fields and validation.

### Adjusting Processing Steps
Edit the `steps` array in `ReportProcessing.tsx` component.

## 📄 Environment Variables

No environment variables required for the prototype. For production:
- Add `.env.local` for API endpoints
- Update payment processing integration
- Configure backend data persistence

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (recommended for React)
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 📚 Component Props & Interfaces

All components are self-contained with internal state management. Key interfaces:

```typescript
// PalmUploadForm
interface FormData {
  fullName: string;
  gender: string;
  age: string;
  palmImage: File | null;
  imagePreview: string;
}

// ReportProcessing
interface ProcessingStep {
  id: number;
  text: string;
  completed: boolean;
  active: boolean;
}
```

## 🐛 Known Issues & Future Improvements

### Current (Prototype)
- Payment processing is simulated
- Report data is static/dummy
- No backend integration
- Data cleared on page refresh

### Future Enhancements
- Real payment integration (Razorpay/Stripe)
- Backend API for report generation
- Database persistence
- User authentication
- Download actual PDF reports
- Email report delivery
- Astrology feature completion
- Dark/Light theme toggle
- Multi-language support

## 📖 License

This project is part of the CELESTIK platform. Original design available in Figma.

## 🤝 Contributing

This is a prototype built for demonstration. For production use, ensure:
- Backend security implementation
- Payment gateway compliance
- Data privacy regulations
- SSL/TLS encryption
- GDPR compliance

---

**Built with ✨ and stardust** | Celestik 2025

This original project is available at https://www.figma.com/design/LteEf2P9m7or7AvQHHkpj6/Create-Pages-with-Code.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.