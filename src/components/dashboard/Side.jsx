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
    'Logout',
  ];

  return (
    <aside
      className="text-white font-semibold bg-gradient-to-br from-gray-800 to-gray-900 overflow-y-auto
      inset-x-0 mx-auto min-h-[100vh] my-4 ml-4 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100"
    >
      <nav>
        <ul className="p-10 w-[100%] flex flex-col justify-center  gap-8">
          {sidebarItems.map((item, index) => (
            <li
              className="font-normal text-white transition-colors hover:text-gray-900  cursor-pointer px-4 py-2 hover:bg-white"
              key={index}
              onClick={() => onItemSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Side;
