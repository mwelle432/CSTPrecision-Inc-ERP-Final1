'use client';
import { useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const createDemoQuote = async () => {
    setLoading(true);
    // Demo from your LE-171 BOM
    const demoData = {
      bom: 'LE-171-600-100 Transport Wagon',
      items: 40,
      totalCost: 2847,
      machiningHours: 18.4,
    };
    setQuote(demoData);
    setLoading(false);
  };

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">YourCompany ERP Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">New Quote</h2>
          <button 
            onClick={createDemoQuote}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {loading ? 'Generating...' : 'Try LE-171 Demo Quote'}
          </button>
          {quote && (
            <div className="mt-4 p-4 bg-green-100 rounded">
              <p><strong>BOM:</strong> {quote.bom}</p>
              <p><strong>Items:</strong> {quote.items}</p>
              <p><strong>Machining:</strong> {quote.machiningHours} hrs</p>
              <p><strong>Total Cost:</strong> ${quote.totalCost}</p>
            </div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Jobs</h2>
          <p>Convert quote to job — coming soon!</p>
        </div>
      </div>
    </main>
  );
}
