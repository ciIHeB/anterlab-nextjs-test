'use client';

import { useCart } from '@/context/CartContext';

const sampleProducts = [
  { id: 1, name: 'T-shirt' },
  { id: 2, name: 'Book' },
  { id: 3, name: 'Headphones' },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-4">
        {sampleProducts.map((product) => (
          <li key={product.id} className="p-4 border rounded flex justify-between">
            <span>{product.name}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
