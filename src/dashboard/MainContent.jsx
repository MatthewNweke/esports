// src/components/MainContent.js

import React from 'react';
import Deposits from './Deposits';
import Withdrawal from './Withdrawal';
import Transfer from './Transfer';
import MyWallet from './MyWallet';
import Pricing from './Pricing';
import Bonus from './Bonus';
import Transaction from './Transaction';
import DepositHistory from './Transaction';
import WithdrawalHistory from './WithdrawalHistory';
import AllTransfers from './AllTransfers';
import Profile from './Profile';
import Header from '../dashboard/Header';

const MainContent = ({ selectedItem }) => {
  const contentMap = {
    Dashboard: <p>Welcome to the Dashboard!</p>,
    Deposit: <Deposits />,
    Withdraw: <Withdrawal />,
    Transfer: <Transfer />,
    Mywallet: <MyWallet />,
    'Pricing plans': <Pricing />,
    Bonus: <Bonus />,
    'All Transactions': <Transaction />,
    'Deposit History': <DepositHistory />,
    'Withdrawal History': <WithdrawalHistory />,
    'Transfer History': <AllTransfers />,
    'My Profile': <Profile />,
    'My Referral': <p>Adjust your settings here.</p>,
    Notifications: <p>Adjust your settings here.</p>,
    'Contact Support': <p>Adjust your settings here.</p>,
    Logout: <p>Adjust your settings here.</p>,
  };

  return (
    
      
      <main className=" w-[75%]  translate-x-[-90%] relative left-[90%] max-lg:w-[90%] max-lg:mt-32">
      <Header/>
       
      {contentMap[selectedItem] || <p>Select an item from the sidebar.</p>}
      
    </main>
   
  );
};

export default MainContent;
