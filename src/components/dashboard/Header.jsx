// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <div className="h-[4rem]">
      <ul className='flex h-[100%] gap-10 items-center'>
        <li className='cursor-pointer'>Deposit</li>
        <li className='cursor-pointer'>Withdraw</li>
        <li className='cursor-pointer'>Wallet</li>
        <li className='cursor-pointer'>History</li>
        <li className='cursor-pointer'>Plans</li>
        <li className='cursor-pointer'>Support</li>
      </ul>
    </div>
  );
};

export default Header;
