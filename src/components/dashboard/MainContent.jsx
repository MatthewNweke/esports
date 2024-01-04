// src/components/MainContent.js

import React from 'react';

const MainContent = ({ selectedItem }) => {
  const contentMap = {
    Dashboard: <p>Welcome to the Dashboard!</p>,
    Profile: <p>This is your profile information.</p>,
    Settings: <p>Adjust your settings here.</p>,
  };

  return (
    <main className="p-4">
      {contentMap[selectedItem] || <p>Select an item from the sidebar.</p>}
    </main>
  );
};

export default MainContent;
