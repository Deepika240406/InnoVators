import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2'];

// Dummy transaction data for demo (you can connect real state later)
const categoryData = [
  { name: 'Food', value: 1200 },
  { name: 'Rent', value: 8000 },
  { name: 'Transport', value: 1500 },
  { name: 'Entertainment', value: 2200 },
  { name: 'Others', value: 1000 }
];

const monthlyData = [
  { month: 'Jan', amount: 6000 },
  { month: 'Feb', amount: 7200 },
  { month: 'Mar', amount: 6900 },
  { month: 'Apr', amount: 8500 },
  { month: 'May', amount: 7400 },
  { month: 'Jun', amount: 6600 }
];

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Category-wise Spending */}
      <div className="bg-white p-4 shadow rounded-xl">
        <h2 className="text-xl font-semibold text-center mb-2">Spending by Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name }) => name}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Spending */}
      <div className="bg-white p-4 shadow rounded-xl">
        <h2 className="text-xl font-semibold text-center mb-2">Monthly Spending</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
