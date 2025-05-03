// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const mockCustomers = [
  { id: '1', name: 'Ravi Kumar', balance: 500, lastTransaction: '2025-05-01', overdue: true },
  { id: '2', name: 'Seema Gupta', balance: 0, lastTransaction: '2025-04-20', overdue: false },
];

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Customer Dashboard</h2>
      <ul className="space-y-3">
        {mockCustomers.map(c => (
          <li key={c.id} className={`p-4 border rounded ${c.overdue ? 'border-red-500' : 'border-green-500'}`}>
            <Link to={`/customer/${c.id}`} className="text-lg font-bold">{c.name}</Link>
            <p>Balance: ₹{c.balance}</p>
            <p>Last Transaction: {c.lastTransaction}</p>
            <p>Status: {c.overdue ? 'Overdue' : 'Up-to-date'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
