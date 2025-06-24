'use client';

import { useState } from 'react';

const items = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'TypeScript',
  'JavaScript',
  'Vite',
  'Redux',
];

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search Frameworks & Tools</h1>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <ul className="space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="p-2 border rounded">
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results found.</li>
        )}
      </ul>
    </div>
  );
}
