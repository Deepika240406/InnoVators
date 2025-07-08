import { useState } from 'react';
import TransactionForm from '../components/TransactionForm';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const handleAdd = (txn) => {
    setTransactions([txn, ...transactions]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add a Transaction (NLP)</h2>
      <TransactionForm onSubmit={handleAdd} />
      <ul className="mt-6 space-y-3">
        {transactions.map((txn, index) => (
          <li
            key={index}
            className="p-3 border rounded shadow-sm bg-white"
          >
            <p className="font-semibold">₹{txn.amount} - {txn.category}</p>
            <p className="text-sm text-gray-600">Mode: {txn.mode}</p>
            <p className="text-xs italic text-gray-500">"{txn.description}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
