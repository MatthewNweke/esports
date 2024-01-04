// src/components/Sidebar.js

import React, { useState } from 'react';

const Side = ({ onItemSelected }) => {
  const sidebarItems = [
    'Dashboard',
    'Deposit',
    'Withdraw',
    'Transfer',
    'Mywallet',
    'Pricing plans',
    'Bonus',
    'All Transactions',
    'Deposit History',
    'Withdrawal History',
    'Transfer History',
    'My Profile',
    'My Referral',
    'Notifications',
    'Contact Support',
    'Logout'
  ];

  return (
    <aside className="bg-slate-800 text-white h-[100vh] overflow-y-auto">
      <nav>
        <ul className='py-10 px-3 flex flex-col justify-center gap-8'>
          {sidebarItems.map((item, index) => (
            <li className='cursor-pointer px-4 py-2 hover:bg-white hover:text-black' key={index} onClick={() => onItemSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Side;
