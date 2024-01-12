import React, { useState } from 'react';

const Sides = ({ onItemSelected }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <div className={`fixed top-0 w-72 max-lg:w-56  ${mobileMenu ? 'z-50' : 'z-50'}`}>
      <div className={`bg-green-500 block z-50 max-lg:w-screen py-2 lg:hidden ${mobileMenu ? 'z-50' : ''}`}>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-2xl block border rounded border-black p-3 relative left-3"
        >
          &#9776;
        </button>
      </div>
      <aside
        className={`${
          mobileMenu
            ? 'translate-x-0 shadow-xl'
            : '-translate-x-full max-lg:overflow-y-hidden shadow-none '
        } font-semibold overflow-hidden text-black overflow-y-auto h-screen fixed w-full my-4 ml-4 rounded-xl duration-300 transition-transform bg-white  lg:translate-x-0 lg:static `}
      >
        <nav>
          <ul className="p-4 sm:p-10 w-full sm:w-72 flex flex-col justify-center gap-8">
            {sidebarItems.map((item, index) => (
              <li
                className="font-normal transition-colors hover:bg-gray-900 cursor-pointer px-4 py-2 hover:text-white"
                key={index}
                onClick={() => {
                  onItemSelected(item);
                  setMobileMenu(false); // Close the menu on item click
                }}
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
