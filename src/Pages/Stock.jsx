import { Link } from 'react-router-dom';
import OptionFAQDropdown from '../Components/OptionFAQDropdown';
import StockSwiper from '../Components/StockSwiper';
import AboutUs from '../Components/common/AboutUs';
import ChooseCard from '../Components/utils/ChooseCard';
import TableRendering from '../Components/utils/cards/TableRedering';
import bg_fxtrad from '../assets/bg_fxtrad.jpg';
import MainLayout from '../components/MainLayout';
import StockSteps from '../components/StockSteps';
import StockCardsContainer from '../components/utils/StockCardsContainer';

const Stock = () => {
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[100vh] ">
        <img src={bg_fxtrad} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col justify-center items-start gap-12 top-0 right-0 bottom-0 left-0  bg-opacity-10 text-white pl-3 lg:pl-5 xl:pl-10">
          <p className="laviossa text-[2.6rem] font-bold w-[30rem] max-lg:text-[2.4rem] max-lg:w-[100%] max-md:text-[2rem]  ">
            Invest for Future in a Stable Platform <br />
            <p className="text-[#D04029]">
              Rely on us for a <br /> better future
            </p>
          </p>
          <ul className="font-medium text-[1.2rem] list-disc list-inside w-[100%] max-[300px]:text-[1rem]">
            Fx Tradings Limited is a professional, and reliable company that{' '}
            <br />
            provides you with the most necessary features that will make your{' '}
            <br />
            experience better. Not only we guarantee the fastest and the most{' '}
            <br />
            exciting returns on your investments, but we also guarantee the{' '}
            <br />
            security of your investment.
          </ul>
          <Link to="/LogIn">
            <button className="text-[black] font-bold py-3 px-5 bg-[#D04029] rounded-lg">
              Start learning
            </button>
          </Link>
        </div>
      </div>

      <AboutUs />

      {/* <StockSwiper /> */}
      <div className="px-5 lg:px-10 xl:px-20 py-[3rem] my-[3rem] bg-gray-100">
        <p className="text-4xl font-bold tracking-wide text-[#1A2433] text-center">
          Available <span className="text-[#D04029]">Plans</span>
        </p>
        <p className="text-center mt-5">
          To make a solid investment, you have to know where you are investing.
          Find a plan which is best for you.
        </p>
        <StockSteps />
      </div>

      <div className="bg-gradient-to-br from-black py-20 to-opacity-50 flex flex-col items-center gap-16 justify-center text-[#fff]">
        <div className="text-center">
          <p className="text-[2.2rem]">
            Why Choose <br />{' '}
            <span className="text-[#D04029] ">FxtradingsLimited</span>{' '}
          </p>
          <p className="text-[1.2rem]">
            Our goal is to provide our investors with a reliable source of high
            income, while <br /> minimizing any possible risks and offering a
            high-quality service.
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-10 items-center justify-center max-xl:grid-cols-2  max-xl:grid-rows-5 max-lg:grid-cols-1 max-lg:grid-rows-9">
          <ChooseCard
            title={'Legal Company'}
            description={
              'Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe.'
            }
          />
          <ChooseCard
            title={'High reliability'}
            description={
              'We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.'
            }
          />
          <ChooseCard
            title={'Anonymity'}
            description={
              'Anonymity and using cryptocurrency as a payment instrument. In the era of electronic money – this is one of the most convenient ways of cooperation.'
            }
          />
          <ChooseCard
            title={'Quick Withdrawal'}
            description={
              'Our all retreats are treated spontaneously once requested. There are high maximum limits. The minimum withdrawal amount is only $10 .'
            }
          />
          <ChooseCard
            title={'Referral Program'}
            description={
              'We are offering a certain level of referral income through our referral program. you can increase your income by simply refer a few people.'
            }
          />
          <ChooseCard
            title={'24/7 Support'}
            description={
              'We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulty.'
            }
          />
          <ChooseCard
            title={'Dedicated Server'}
            description={
              'We are using a dedicated server for the website which allows us exclusive use of the resources of the entire server.'
            }
          />
          <ChooseCard
            title={'SSL Secured'}
            description={
              'Comodo Essential-SSL Security encryption confirms that the presented content is genuine and legitimate.'
            }
          />
          <ChooseCard
            title={'DDOS Protection'}
            description={
              'We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider.'
            }
          />
        </div>
      </div>
      <div className="py-10">
        <div className="text-center px-5">
          <p className="text-[2rem] font-semibold">
            Profit <span className="text-[#D04029] ">Calculator</span>
          </p>
          <p className="my-[1rem] text-[1.2rem]">
            You must know the calculation before investing in any plan, so you
            never make mistakes. <br /> Check the calculation and you will get
            as our calculator says.
          </p>
        </div>
        <form
          action=""
          className="relative border-2 border-solid border-[#D0402980] shadow-md w-[60%] h-[20rem] my-0 mx-auto rounded-lg max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%]"
        >
          <div className="absolute w-[100%] top-[50%] translate-y-[-50%]">
            <div className="flex gap-[5%] justify-center mb-10">
              <div className="w-[45%] flex flex-col gap-2">
                <label htmlFor="">Choose plan</label>
                <select
                  name="nft"
                  id="nft"
                  className="w-[100%] text-[#fff] py-3 px-4 rounded-lg bg-[#D04029] outline-none border-none"
                >
                  <option value="defi" className="text-[#fff]">
                    DEFI
                  </option>
                  <option value="stock" className="text-[#fff]">
                    Stocks
                  </option>
                  <option value="stock" className="text-[#fff]">
                    Blockchain ETFs
                  </option>
                  <option value="nft" className="text-[#fff]">
                    NFT
                  </option>
                </select>
              </div>
              <div className="w-[45%] flex flex-col gap-2">
                <label htmlFor="">Invest amount</label>
                <input
                  type="text"
                  className="w-[100%] py-3 px-4 rounded-lg bg-[#D04029] outline-none border-none"
                />
              </div>
            </div>

            <div className="w-[95%] my-0 mx-auto">
              <label htmlFor="">Invest amount</label>
              <input
                type="text"
                className="w-[100%] py-3 px-4 rounded-lg bg-[#D04029] outline-none  border-none "
              />
            </div>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-around items-center bg-gradient-to-br from-black py-20 to-opacity-50 text-[#D04029] max-sm:flex-col max-sm:justify-center max-sm:gap-20">
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

      <div className="bg-black text-white pt-20">
        <p className="text-center text-[1.2rem] px-4">
          Here is the log of the most recent transactions including withdraw and
          deposit made by our <br /> users.
        </p>

        <TableRendering />
      </div>

      <StockSwiper />

      <div className="text-center mt-20">
        <p className="text-[2rem] font-semibold">
          Our Expert<span className="text-[#D04029]">Team Members</span>
        </p>
        <p className="my-[1rem] text-[1.2rem]">
          We have a great team including developers, designers, and Traders. The
          Team always working <br /> hard to give you the maximum profit.
        </p>
      </div>
      <StockCardsContainer />

      <div className="bg-[black] min-h-[50vh] py-10">
        <div className="text-center my-20 ">
          <p className="text-[2rem] font-semibold">
            Frequently Asked <span className="text-[#D04029]">Questions</span>
          </p>
          <p className="my-[1rem] text-[1.2rem] text-white">
            We answer some of your Frequently Asked Questions regarding our
            platform. If you have a <br />
            query that is not answered here, Please contact us.
          </p>
        </div>

        <OptionFAQDropdown />
      </div>
    </MainLayout>
  );
};

export default Stock;
