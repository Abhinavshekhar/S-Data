"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [name, setName] = useState('');
  
  const handleSave = async () => {
    const { error } = await supabase.from('submissions').insert([{ farmer_name: name }]);
    if (error) alert("Error: " + error.message);
    else alert("Success! Saved to Supabase.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-[32px] shadow-2xl border border-slate-100 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">S DATA</h1>
        <p className="text-slate-500 mb-8">Field Data Collection Portal</p>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Farmer Full Name" 
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            onChange={(e) => setName(e.target.value)}
          />
          <button 
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Sync to Cloud
          </button>
        </div>
      </div>
    </div>
  );
}
