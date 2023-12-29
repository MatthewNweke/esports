import AboutUs from '../components/common/AboutUs';
import CoinBg from '../components/common/CoinBg';
import MainLayout from '../components/MainLayout';
import OptionFAQDropdown from '../components/OptionFAQDropdown';

const About = () => {
  return (
    <div>
      <MainLayout>
        {/* <CoinBg> */}

        <CoinBg title="About Us" description="About" />

        <div className="bg-gradient-to-br from-black py-20 to-opacity-50 ">
          <div className="text-center mb-28">
            <p className="text-[2.5rem] font-bold text-white max-md:text-[2rem] max-sm:text-[1.5rem]">
              How <span className="text-[#D04029] ">FxtradingsLimited</span>{' '}
              Works{' '}
            </p>
            <p className="text-[1.2rem] text-white max-sm:text-[1rem]">
              Get involved in our tremendous platform and Invest. We will
              utilize your money and give you <br /> profit in your wallet
              automatically. depending on the package enrolled
            </p>
          </div>
          <div className="flex flex-wrap justify-around items-center  text-[#D04029] max-sm:flex-col max-sm:justify-center max-sm:gap-20">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="border-[3px] relative border-solid border-[#D04029] shadow-md border-opacity-100 w-[7rem] h-[7rem] rounded-[50%] bg-[black]">
                <div className="absolute right-0 border-[3px] border-solid border-[#D04029]  shadow-md rounded-[50%] h-[2rem] w-[2rem] bg-[black]">
                  <span className="absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%]">
                    1
                  </span>
                </div>
              </div>
              <p className="text-[#D04029] text-[1.5rem] font-semibold">
                Create Account
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="border-[3px] relative border-solid border-[#D04029] shadow-md border-opacity-100 w-[7rem] h-[7rem] rounded-[50%] bg-[black]">
                <div className="absolute right-0 border-[3px] border-solid border-[#D04029]  shadow-md rounded-[50%] h-[2rem] w-[2rem] bg-[black]">
                  <span className="absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%]">
                    2
                  </span>
                </div>
              </div>
              <p className="text-[#D04029] text-[1.5rem] font-semibold">
                Choose a plan
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="border-[3px] relative border-solid border-[#D04029] shadow-md border-opacity-100 w-[7rem] h-[7rem] rounded-[50%] bg-[black]">
                <div className="absolute right-0 border-[3px] border-solid border-[#D04029]  shadow-md rounded-[50%] h-[2rem] w-[2rem] bg-[black]">
                  <span className="absolute left-[50%] bottom-[50%] translate-y-[50%] translate-x-[-50%]">
                    3
                  </span>
                </div>
              </div>
              <p className="text-[#D04029] text-[1.5rem] font-semibold">Earn</p>
            </div>
          </div>
        </div>
        <AboutUs />
        <div className="bg-black py-10">
          <OptionFAQDropdown />
        </div>

        <div className='w-[100%]'>
          <div
            className="h-[40vh] px-5 w-[100%] xl:w-[60%] lg:w-[80%] my-16 mx-auto flex flex-col items-center text-center gap-5 justify-center "
            style={{
              backgroundImage: 'url("/joinUs_bg.jpg") ',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 3px 15px rgba(208, 64, 41, 0.5)',
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
            <button className="bg-[#D04029] px-8 py-3 rounded-lg">
              Join Us
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
