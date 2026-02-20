import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0f1433] text-white overflow-x-hidden">
      <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
