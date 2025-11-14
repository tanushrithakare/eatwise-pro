import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const ProgressTab = ({ userData }) => {
  // Example progress data
  const data = [
    { name: 'Calories Consumed', value: 1800 },
    { name: 'Calories Remaining', value: 400 },
  ];

  const COLORS = ['#34D399', '#D1FAE5'];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Your Progress</h2>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default ProgressTab;
