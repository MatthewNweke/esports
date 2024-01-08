import React, { useState } from 'react';

const Sides = ({ onItemSelected }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
    <aside
      className={`text-white font-semibold bg-gradient-to-br from-gray-800 to-gray-900 
        inset-x-0 mx-auto min-h-screen my-4 ml-4 w-72 rounded-xl transition-transform duration-300 max-lg:hidden`}
    >
      <button className='hidden max-lg:block'>
        &#9776;
      </button>
      <nav>
        <ul className="p-4 sm:p-10 w-[100%] sm:w-72 flex flex-col justify-center gap-8">
          {sidebarItems.map((item, index) => (
            <li
              className="font-normal text-white transition-colors hover:text-gray-900 cursor-pointer px-4 py-2 hover:bg-white"
              key={index}
              onClick={() => onItemSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </div>
  );
};

export default Sides;
