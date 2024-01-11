// src/components/Dashboard.js

import { useState } from 'react';

import Sides from '../dashboard/Sides';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainContent from '../dashboard/MainContent';
const Dashboard = () => {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex  overflow-hidden">
      <Sides onItemSelected={handleItemSelected} />

      <MainContent selectedItem={selectedItem} />
    </div>
  );
};

export default Dashboard;
