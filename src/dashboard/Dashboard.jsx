// src/components/Dashboard.js

import { useState } from 'react';

import Sides from '../dashboard/Sides';
import Header from'../dashboard/Header';
import MainContent from'../dashboard/MainContent';
const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex overflow-hidden">
      <Sides onItemSelected={handleItemSelected} />
      <div className=" flex-1 flex flex-col">
        <Header />
        <MainContent selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default Dashboard;
