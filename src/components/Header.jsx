import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex bg-[#00000090] shadow-md fixed z-40 top-0 left-0 justify-around max-lg:block ">
      <div className="flex justify-between items-center py-4 px-5 lg:px-10 xl:px-20">
        <img src="/FxLogo.png" alt="" />

        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none bg-[transparent]"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-10' : 'max-h-0'
        } bg-[#00000090]`}
      >
        <div className="flex flex-col items-center gap-4 max-lg:gap-10 ">
          <Link to="/">
            <p className="font-semibold text-white text-sm cursor-pointer max-lg:text-[1.2rem]">
              Home
            </p>
          </Link>
          <div className="cursor-pointer">
            <Link to="/Plan">
              <p className="font-semibold text-white text-sm max-lg:text-[1.2rem]">
                Plan
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/about">
              <p className="font-semibold text-white text-sm max-lg:text-[1.2rem]">
                About
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <p className="font-semibold text-white text-sm max-lg:text-[1.2rem]">
                Contact
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <select name="language" id="language" className="cursor-pointer">
              <option value="language">English</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex items-center gap-16 hidden`}>
        <div>
          <Link to="/">
            <p className="font-semibold text-white text-sm cursor-pointer">
              Home
            </p>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link to="/Plan">
            <p className="font-semibold text-white text-sm">Plan</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/about">
            <p className="font-semibold text-white text-sm">About</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/contact">
            <p className="font-semibold text-white text-sm">Contact</p>
          </Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer"></div>
        <div className="cursor-pointer">
          <select name="language" id="language" className="cursor-pointer">
            <option value="language">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
