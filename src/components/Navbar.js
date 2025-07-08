import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Smart Expense Tracker</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/budgets">Budgets</Link>
        <Link to="/goals">Goals</Link>
      </div>
    </nav>
  );
}

export default Navbar;
