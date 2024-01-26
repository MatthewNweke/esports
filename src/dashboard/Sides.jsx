import React, { useState } from 'react';

const NotificationDropdown = () => {
  // Implement your notification dropdown content here
  return (
    <div className="absolute top-full right-0 mt-2 w-48 bg-green-500 py-5 px-3 text-white  border rounded-md shadow-lg overflow-hidden z-10">
      {/* Add your notification content here */}
      <p>Notification 1</p>
      <p>Notification 2</p>
      <p>Notification 3</p>
      <p>Notification 4</p>
      <p>Notification 5</p>
      {/* ... */}
    </div>
  );
};

const Sides = ({ onItemSelected }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [logoutStatus, setLogoutStatus] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await fetch('https://vaultcoin-production.up.railway.app/user/auth/logout/', {
        method: 'POST', // or 'GET' depending on your API
        headers: {
          'Content-Type': 'application/json',
          // You may need to include additional headers based on your API requirements
        },
        // You may need to include a body if your API requires it
        // body: JSON.stringify({}),
      });

      if (response.status === 201) {
        // Successful logout
        setLogoutStatus('Logout successful');
      } else {
        // Handle other response status codes as needed
        setLogoutStatus('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      setLogoutStatus('An error occurred during logout');
    }
  };

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
    <div>
      <button onClick={handleLogout}>Logout</button>
      {logoutStatus && <p>{logoutStatus}</p>}
    </div>
  ];

  return (
    <div
      className={`fixed top-0 w-72 max-lg:w-56  ${
        mobileMenu ? 'z-50 w-0' : 'z-50'
      }`}
    >
      <div
        className={`bg-green-500 items-center z-50 flex justify-between pr-10  max-lg:w-[100vw] inset-0 py-2 lg:hidden ${
          mobileMenu ? 'z-50' : ''
        }`}
      >
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-2xl block border rounded border-black p-3 relative left-3"
        >
          &#9776;
        </button>
        <li
          className="cursor-pointer relative bottom-2"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <img src="/notification_bell.svg" alt="" />
          {showNotifications && <NotificationDropdown />}
        </li>
      </div>
      <aside
        className={`${
          mobileMenu
            ? 'translate-x-0 shadow-xl'
            : '-translate-x-full max-lg:overflow-y-hidden shadow-none'
        } font-semibold overflow-hidden text-black overflow-y-auto pb-20 h-screen fixed w-full my-4 ml-4 rounded-tr-none rounded-br-none rounded-xl duration-300 transition-transform bg-white lg:translate-x-0 lg:static max-xl:w-[15rem] `}
      >
        <p className="p-10 font-semibold text-xl text-center">
          Welcome back <br /> <span className="text-green-500">Matthew</span>
        </p>
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
