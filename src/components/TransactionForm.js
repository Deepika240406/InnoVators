import { useState } from 'react';

function TransactionForm({ onSubmit }) {
  const [inputText, setInputText] = useState('');

  const parseNLP = (text) => {
    // Extract amount
    const amountMatch = text.match(/(?:₹|rs\.?\s?)?(\d+(\.\d+)?)/i);
    const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;

    // Extract category (e.g., groceries, rent, etc.)
    const categories = ['groceries', 'rent', 'transport', 'entertainment', 'food', 'snacks', 'shopping', 'fuel'];
    const category = categories.find(cat => text.toLowerCase().includes(cat)) || 'others';

    // Extract mode (UPI, cash, credit card, etc.)
    const modes = ['upi', 'cash', 'credit card', 'debit card', 'wallet', 'netbanking'];
    const mode = modes.find(m => text.toLowerCase().includes(m)) || 'unknown';

    return {
      amount,
      category,
      mode,
      description: text
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = parseNLP(inputText);
    onSubmit(parsed);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        rows={2}
        className="w-full border p-2 rounded"
        placeholder="Enter a sentence like: Spent 500 on groceries via UPI"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
