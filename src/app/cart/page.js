'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, index) => (
            <li key={index} className="p-2 border rounded">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
