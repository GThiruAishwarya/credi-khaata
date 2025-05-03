// pages/CustomerDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf';

const mockTransactions = [
  { date: '2025-04-15', item: 'Rice Bag', loan: 1000, repayment: 200 },
  { date: '2025-04-20', item: 'Wheat', loan: 500, repayment: 500 },
];

const CustomerDetails = () => {
  const { id } = useParams();
  const customer = { name: 'Ravi Kumar', transactions: mockTransactions };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(`Statement for ${customer.name}`, 10, 10);
    customer.transactions.forEach((t, i) => {
      doc.text(`${t.date}: ${t.item} - Loan ₹${t.loan}, Paid ₹${t.repayment}`, 10, 20 + i * 10);
    });
    doc.save(`${customer.name}_statement.pdf`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Transactions - {customer.name}</h2>
      <ul className="space-y-2">
        {customer.transactions.map((t, i) => (
          <li key={i} className="border p-2">
            <p>{t.date} - {t.item}</p>
            <p>Loan: ₹{t.loan}</p>
            <p>Repayment: ₹{t.repayment}</p>
            <p>Balance: ₹{t.loan - t.repayment}</p>
          </li>
        ))}
      </ul>
      <button onClick={exportPDF} className="mt-4 bg-blue-600 text-white px-4 py-2">Download PDF</button>
    </div>
  );
};

export default CustomerDetails;
