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
    <div className={`fixed top-0 w-72 max-lg:w-56  ${mobileMenu ? 'z-50 w-0' : 'z-50'}`}>
      <div className={`bg-green-500 block z-50 max-lg:w-[100vw] inset-0 py-2 lg:hidden ${mobileMenu ? 'z-50' : ''}`}>
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
        } font-semibold overflow-hidden text-black overflow-y-auto pb-20 h-screen fixed w-full my-4 ml-4 rounded-tr-none rounded-br-none rounded-xl duration-300 transition-transform bg-white lg:translate-x-0 lg:static max-xl:w-[15rem] `}
      >
        <p className='p-10 font-semibold text-xl '>Welcome back <br /> <span className='text-green-500'>Matthew</span></p>
        <nav>
          <ul className=" flex  w-full  items-center flex-col justify-center gap-8">
            {sidebarItems.map((item, index) => (
              <li
                className="font-normal w-full text-center transition-colors hover:bg-green-500 cursor-pointer  py-2 hover:text-white"
                key={index}
                onClick={() => {
                  onItemSelected(item);
                  setMobileMenu(false); 
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
