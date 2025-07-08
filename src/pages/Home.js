import React from 'react';
import Dashboard from '../components/Dashboard';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Dashboard Overview</h1>
      <Dashboard />
    </div>
  );
}

export default Home;
