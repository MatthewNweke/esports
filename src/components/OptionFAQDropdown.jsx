import { useState } from 'react';

function OptionFAQDropdown() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); // Close other dropdowns
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false); // Close other dropdowns
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false); // Close other dropdowns
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false); // Close other dropdowns
    setIsOpen2(false);
    setIsOpen5(false);
    setIsOpen3(false);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
    setIsOpen1(false); // Close other dropdowns
    setIsOpen2(false);
    setIsOpen4(false);
    setIsOpen3(false);
  };

  return (
    <div>
    <div className=" mx-auto my-20  w-[50%] max-md:w-[70%] max-sm:w-[90%]">
      <button
        onClick={toggleDropdown1}
        className={`flex justify-between w-[100%] mb-5 border  shadow-sm py-5 rounded-lg px-4  border-[#D4B71680]  text-sm font-medium text-[white] focus:outline-none 
        ${
          isOpen1 ? 'bg-[#D4B716] ' : 'bg-[#343A40]'
        }`}
      >
        When can I deposit/withdraw from my deposit account?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen1 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen1 && (
        <div className=" mt-2 shadow-lg text-white py-2 ring-black ring-opacity-5 w-[100%]">
          {/* Dropdown content here */}
          <div className="py-1 w-[100%]">
            Deposit and withdrawal are available for at any time. Be sure, that
            your funds are not used in any ongoing trade before the withdrawal.
            The available amount is shown in your dashboard on the main page of
            Investing platform. Deposit and withdrawal are available for at any
            time. Be sure, that your funds are not used in any ongoing trade
            before the withdrawal. The available amount is shown in your
            dashboard on the main page of Investing platform.
          </div>
        </div>
      )}

      <button
        onClick={toggleDropdown2}
        className={`flex justify-between w-[100%] border mb-5 rounded-lg shadow-sm py-5 px-4  border-[#D4B71680]  text-sm font-medium text-[white] focus:outline-none "
        ${
          isOpen2 ? 'bg-[#D4B716] ' : 'bg-[#343A40]'
        }`}>
        How do I check my account balance?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen2 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen2 && (
        <div className="  mt-2  shadow-lg text-white py-2  ring-black ring-opacity-5 w-[100%]">
          {/* Dropdown content here */}
          <div className="py-1">
            You can see this anytime on your accounts dashboard. You can see
            this anytime on your accounts dashboard.
          </div>
        </div>
      )}

      <button
        onClick={toggleDropdown3}
        className={`flex justify-between w-[100%] rounded-lg mb-5  border border-[#D4B71680]  shadow-sm py-5 px-4 text-sm font-medium text-[white] focus:outline-none
        ${
          isOpen3 ? 'bg-[#D4B716] ' : 'bg-[#343A40]'
        }`}
      >
        I forgot my password,what should i do?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen3 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen3 && (
        <div className=" mt-2  shadow-lg text-white py-2 ring-black ring-opacity-5 w-[100%]">
          {/* Dropdown content here */}
          <div className="py-1">
            Visit the password reset page, type in your email address and click
            the `Reset` button. Visit the password reset page, type in your
            email address and click the `Reset` button.
          </div>
        </div>
      )}

      <button
        onClick={toggleDropdown4}
        className={`flex justify-between w-[100%] border rounded-lg px-4 py-5 mb-5 border-[#D4B71680]  shadow-sm p-4 text-sm font-medium text-[white] focus:outline-none
        ${
          isOpen4 ? 'bg-[#D4B716] ' : 'bg-[#343A40]'
        }`}
      >
        How will i know thta the withdrawal has been successful?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen4 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen4 && (
        <div className=" mt-2  shadow-lg text-white py-2 ring-black ring-opacity-5 w-[100%]">
          {/* Dropdown content here */}
          <div className="py-1">
            You will get an automatic notification once we send the funds and
            you can always check your transactions or account balance. Your
            chosen payment system dictates how long it will take for the funds
            to reach you. You will get an automatic notification once we send
            the funds and you can always check your transactions or account
            balance. Your chosen payment system dictates how long it will take
            for the funds to reach you.
          </div>
        </div>
      )}

      <button
        onClick={toggleDropdown5}
        className={`flex justify-between w-[100%]  rounded-lg border border-[#D4B71680]  shadow-sm py-5 px-4 text-sm font-medium text-[white] focus:outline-none"
        ${
          isOpen5 ? 'bg-[#D4B716] ' : 'bg-[#343A40]'
        }`}>
        How much can I withdraw?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen5 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen5 && (
        <div className=" mt-2  shadow-lg text-white  ring-black ring-opacity-5 w-[100%] py-2">
          {/* Dropdown content here */}
          <div className="py-1">
            Visit the password reset page, type in your email address and click
            the `Reset` button. Visit the password reset page, type in your
            email address and click the `Reset` button.
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default OptionFAQDropdown;
