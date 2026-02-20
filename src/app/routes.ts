import { createBrowserRouter } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { PalmistryPage } from './pages/PalmistryPage';
import { RevealCosmicTruthPage } from './pages/RevealCosmicTruthPage';
import { AstrologyPage } from './pages/AstrologyPage';
import { ContactPage } from './pages/ContactPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PaymentPage } from './pages/PaymentPage';
import { ReportProcessingPage } from './pages/ReportProcessingPage';
import { ReportReadyPage } from './pages/ReportReadyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'palmistry', Component: PalmistryPage },
      { path: 'reveal-cosmic-truth', Component: RevealCosmicTruthPage },
      { path: 'payment', Component: PaymentPage },
      { path: 'report-processing', Component: ReportProcessingPage },
      { path: 'report-ready', Component: ReportReadyPage },
      { path: 'astrology', Component: AstrologyPage },
      { path: 'how-it-works', Component: HowItWorksPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
