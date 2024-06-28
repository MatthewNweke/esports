import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollThreshold = 50;
    setScrolled(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex shadow-md fixed z-40 top-0 left-0 justify-around max-lg:block transition-all duration-300`}
      style={{
        backgroundImage: isScrolled
          ? 'url(/esport-bg.jpeg)'
          : 'url(/esport-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: isScrolled ? 0.9 : 1,
      }}
    >
      <div className="flex justify-between items-center py-4 px-5 lg:px-10 xl:px-20">
        <img
          src="/logo-esport.svg"
          className=""
          width={200}
          height={50}
          alt=""
        />

        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`relative w-10 bg-[red] h-10 flex flex-col justify-center items-center gap-2 group focus:outline-none`}
          >
            <div
              className={`w-8 h-1 bg-white rounded transition-transform duration-300 ${
                isMenuOpen
                  ? 'transform rotate-45 translate-y-2.5'
                  : 'transform rotate-0'
              }`}
            />
            <div
              className={`w-8 h-1 bg-white rounded  transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div
              className={`w-8 h-1 bg-white rounded  transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
           
          </button>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`lg:hidden fixed top right-0 h-full w-full bg-[#111] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-4 max-lg:gap-10 py-10">
          <Link to="/" onClick={toggleMenu}>
            <p className="font-bold text-white text-sm cursor-pointer max-lg:text-[1.2rem]">
              HOME
            </p>
          </Link>

          <div className="cursor-pointer" onClick={toggleMenu}>
            <Link to="/about">
              <p className="font-bold text-white text-sm max-lg:text-[1.2rem]">
                ABOUT
              </p>
            </Link>
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <Link to="/">
              <p className="font-bold text-white text-sm max-lg:text-[1.2rem]">
                TEAM
              </p>
            </Link>
          </div>

          <div className="cursor-pointer" onClick={toggleMenu}>
            <Link to="/contact">
              <p className="font-bold text-white text-sm max-lg:text-[1.2rem]">
                PARTNERS
              </p>
            </Link>
          </div>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <Link to="/contact">
              <p className="font-bold text-white text-sm max-lg:text-[1.2rem]">
                SHOP
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex items-center gap-16 hidden`}>
        <div>
          <Link to="/">
            <p className="font-bold text-white text-sm cursor-pointer">HOME</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/about">
            <p className="font-bold text-white text-sm">ABOUT</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/">
            <p className="font-semibold text-white text-sm">TEAM</p>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link to="/contact">
            <p className="font-semibold text-white text-sm">PARTNERS</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/contact">
            <p className="font-semibold text-white text-sm">SHOP</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
