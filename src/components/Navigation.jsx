import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'home', label: 'Home' },
    { key: 'progress', label: 'Progress' },
    { key: 'recipes', label: 'Recipes' },
  ];

  return (
    <nav className="flex justify-around p-4 bg-gray-100 shadow-inner">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`py-2 px-4 rounded-lg font-semibold transition-colors
            ${activeTab === tab.key ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
