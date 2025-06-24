'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthorized(true);
    } else {
      router.push('/login');
    }
  }, []);

  if (!authorized) {
    return <p className="p-6 text-gray-500">Checking login...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>This is a protected page only visible to logged-in users.</p>

      <button
        onClick={() => {
          localStorage.removeItem('token');
          router.push('/login');
        }}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
