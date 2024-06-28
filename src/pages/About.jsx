import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import AboutUs from '../components/common/AboutUs';
import CoinBg from '../components/common/CoinBg';

const About = () => {
  return (
    <div>
      <MainLayout>
        {/* <CoinBg> */}

        <CoinBg title="About Us" description="About" />
        
        <AboutUs />
        <div className="bg-gray-100 py-10">
          
        </div>

        <div className="w-[100%]">
          <div
            className="py-10 px-5 w-[100%] xl:w-[60%] lg:w-[80%] my-16 mx-auto flex flex-col items-center text-center gap-5 justify-center "
            style={{
              backgroundImage: 'url("/connect_bg.png") ',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 3px 15px #1a56db50',
              borderRadius: '0.8rem',
            }}
          >
            <p className="text-white text-[2rem] max-sm:text-[1.5rem]">
              Get Started Today With Us
            </p>
            <p className="text-white text-[1rem]">
              This is a Revolutionary Money Making Platform! Invest for Future
              in Stable Platform and Make <br /> Fast Money. Not only we
              guarantee the fastest and the most exciting returns on your
              investments, <br /> but we also guarantee the security of your
              investment.
            </p>
            <Link to="/signup">
              <button className="bg-blue-700 border-0 text-white font-semibold px-8 py-3 rounded-lg">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
