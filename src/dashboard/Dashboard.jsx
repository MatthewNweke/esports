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
    <div>
      <div className='bg-green-500 block max-lg:w-screen py-2 lg:hidden'>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-2xl block border rounded border-black p-3 relative left-3"
        >
          &#9776;
        </button>
      </div>
    
    <div className="flex  overflow-hidden">
      <Sides onItemSelected={handleItemSelected} />

      <MainContent  selectedItem={selectedItem} />
    </div>
    </div>
  );
};

export default Dashboard;
