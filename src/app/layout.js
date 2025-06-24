import './globals.css';
import Link from 'next/link';
import { CartProvider } from '@/context/CartContext'; // si tu utilises le contexte panier

export const metadata = {
  title: 'Next.js Practical Project',
  description: '10 Tasks Fullstack with App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact-form" className="hover:underline">Contact</Link>
              <Link href="/products" className="hover:underline">Products</Link>
              <Link href="/cart" className="hover:underline">Cart</Link>
              <Link href="/search" className="hover:underline">Search</Link>
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            </div>
          </nav>

          <main className="mt-6">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
