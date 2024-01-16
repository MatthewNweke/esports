import React from 'react';

const Header = () => {
  return (
    <div className="h-[5rem] my-5 px-3 w-[100%] rounded bg-green-500 text-white hidden lg:block">
      <ul className="flex h-[100%] gap-10 items-center justify-around max-2xl:justify-center font-semibold">
        <li className="cursor-pointer">Deposit</li>
        <li className="cursor-pointer">Withdraw</li>
        <li className="cursor-pointer">Wallet</li>
        <li className="cursor-pointer">History</li>
        <li className="cursor-pointer">Plans</li>
        <li className="cursor-pointer">Support</li>
      </ul>
    </div>
  );
};

export default Header;
