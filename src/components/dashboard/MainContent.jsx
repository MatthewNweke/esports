// src/components/MainContent.js

import React from 'react';
import Deposits from "./Deposits"

const MainContent = ({ selectedItem }) => {
  const contentMap = {
    Dashboard: <p>Welcome to the Dashboard!</p>,
    "Deposit": <Deposits/>,
    Withdraw: <p>Adjust your settings here.3k</p>,
    Transfer: <p>Adjust your settings here.</p>,
    Mywallet: <p>Adjust your settings here.</p>,
    "Pricing plans": <p>Adjust your settings here.kerr343</p>,
    Bonus: <p>Adjust your settings here.</p>,
    "All Transactions": <p>Adjust your settings here.</p>,
    "Deposit History": <p>Adjust your settings here.</p>,
    "Withdrawal History": <p>Adjust your settings here.</p>,
    "Transfer History": <p>Adjust your settings here.</p>,
    "My Profile": <p>Adjust your settings here.</p>,
    "My Referral": <p>Adjust your settings here.</p>,
    Notifications: <p>Adjust your settings here.</p>,
    "Contact Support": <p>Adjust your settings here.</p>,
    "Logout": <p>Adjust your settings here.</p>

   
  };

  return (
    <main className="p-4">
      {contentMap[selectedItem] || <p>Select an item from the sidebar.</p>}
    </main>
  );
};

export default MainContent;
