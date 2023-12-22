import bg_fxtrad from '../assets/bg_fxtrad.jpg';
import finance_vid from '../assets/finance-1.mp4';
import MainLayout from '../components/MainLayout';
import StockSteps from '../components/StockSteps';
import ChooseCard from '../Components/utils/ChooseCard';
import StockCardsContainer from '../components/utils/StockCardsContainer';
import StockSwiper from '../Components/StockSwiper';
import OptionFAQDropdown from '../Components/OptionFAQDropdown';

const Stock = () => {
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh]">
        <img src={bg_fxtrad} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col justify-center items-start gap-12 top-0 right-0 bottom-0 left-0  bg-opacity-10 text-white pl-5 lg:pl-10 xl:pl-20">
          <p className="laviossa text-[2.6rem] font-bold w-[30rem]">
            Invest for Future in a Stable Platform <br />
            <p className="text-[#D04029]">
              Rely on us for a <br /> better future
            </p>
          </p>
          <ul className="font-medium text-[1.2rem] list-disc list-inside">
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
          <button className="text-[black] font-bold py-3 px-5 bg-[#D04029] rounded-lg">
            Start learning
          </button>
        </div>
      </div>

      <div className="px-5 lg:px-10 xl:px-32 py-[2rem] my-[2rem] flex flex-col lg:flex-row justify-center items-center gap-7">
        <video
          className="h-[20rem]  w-[50rem] lg:w-[40rem] xl:w-[50rem]"
          muted
          autoPlay
          controls={true}
          loop
        >
          <source src={finance_vid} />
        </video>

        <div>
          <p className="mb-10 text-center text-[2rem] font-bold">
            About <span className="text-[#D04029] ">Us</span>
          </p>
          <p className="md:text-lg text-gray-700">
            {`We are an international financial company engaged in investment activities, which are related to trading
           on financial markets and cryptocurrency exchanges performed by qualified professional traders.`}
            <br />
            <br />
            {` Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service, allowing us to automate and simplify the relations between the investors and the trustees. We work towards increasing your profit margin by profitable investment. We look forward to you being part of our community.`}
          </p>
        </div>
      </div>

      <div className="text-[1.2rem] my-20 pl-5 lg:pl-10 xl:pl-20">
        <div>
          <p className="mb-10 text-[1.4rem] font-bold">Legal Information</p>
          Fxtradings is one of the most reliable diversified financial
          investment service provider in the world. Our fundamental mission is
          to help customers and clients achieve their financial objectives. With
          offices locate in the United States, Australia,Canada and
          headquartered in Uk, Fxtradings have staffs with over 30 years’
          experience in combining financial development and trades. We are
          committed to pushing the boundaries of what constitutes the highest
          standards in trades and asset management.
        </div>
        <div className="mt-10">
          <p className="mb-10 text-[1.4rem] font-bold">
            Safety & Fraud Protection
          </p>
          With over $5.3 Trillion traded daily in the market, we are dedicated
          to giving our clients their own share of the profit daily. As a
          leading global market maker, Fxtradings has one of the World’s Largest
          Independent traders and fund managers with clients from different
          parts of the World. Today, as a successful trade investment and asset
          management company, we are trusted by thousands of clients. Our
          sterling reputation, dedication to meeting our clients’ needs and
          innovative approach to business development are some driving forces
          behind our success.
        </div>
        <button className="text-[black]  py-3 px-5 bg-[#D04029] rounded-lg mt-5">
          View document
        </button>
      </div>

      {/* <StockSwiper /> */}

      <StockSteps />

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
        <div className="text-center">
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
        <p className="text-center text-[1.2rem]">
          Here is the log of the most recent transactions including withdraw and
          deposit made by our <br /> users.
        </p>

        <div className="flex gap-4 justify-center mt-10">
          <button className="text-[black] font-bold py-2 px-4 ">
            Latest Deposit
          </button>
          <button className="text-[white] bg-[black] font-bold py-2 px-4 border-[1px] border-[#D04029]">
            Latest Withdrawal
          </button>
        </div>

        <table className="w-[80%] h-[20rem] my-10 mx-auto max-sm:w-[100%] pb-20">
          <tr className="bg-[#D04029] h-12 rounded-lg ">
            <td className="text-black text-[1rem] font-medium">Name</td>
            <td className="text-black text-[1rem] font-medium">Date</td>
            <td className="text-black text-[1rem] font-medium">Amount</td>
            <td className="text-black text-[1rem] font-medium">To Close</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className="text-[1rem]">Pat Fale</p>{' '}
            </td>
            <td>
              {' '}
              <span className="decorate-2px font-bold line-through text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className=" text-[1rem]">David Rothberg</p>{' '}
            </td>
            <td>
              <span className="decorate-2px font-bold line-through text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>
          <tr>
            <td className="text-[#fff]">
              <p className=" text-[1rem]">David Rothberg</p>{' '}
            </td>
            <td>
              <span className="decorate-2px font-bold line-through text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>

          <tr className="h-12">
            <td className="text-[#fff]">
              <p className="text-[1rem]">Dean Morse</p>{' '}
            </td>
            <td>
              <span className=" decorate-2px font-bold line-through text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>

          <tr className="h-12">
            <td className="text-[#fff]">
              <p className=" text-[1rem]">Avlin Josh</p>{' '}
            </td>
            <td>
              <span className=" decorate-2px font-bold line-through text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className=" text-[1rem]">Ashley Vivi</p>{' '}
            </td>
            <td>
              <span className=" decorate-2px font-bold line-through text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className=" text-[1rem]">Fallon Mc Elligot</p>{' '}
            </td>
            <td>
              <span className=" decorate-2px font-bold line-through max-sm:text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className="text-[1rem]">Edgar Pepito</p>{' '}
            </td>
            <td>
              <span className=" decorate-2px font-bold  text-[1rem]">
                US$20
              </span>
            </td>
            <td className=" font-bold text-[1rem]">US$0</td>
            <td className=" font-bold text-[1rem]">US$0</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className="text-[1rem]">Sandra Batson</p>{' '}
            </td>
            <td>
              <span className="text-[1.3rem] decorate-2px font-bold line-through max-sm:text-[1rem]">
                US$20
              </span>
            </td>
            <td className="font-bold text-[1rem]">US$0</td>
            <td className="font-bold text-[1rem]">US$0</td>
          </tr>
          <tr className="h-12">
            <td className="text-[#fff]">
              <p className="text-[1rem]">Sandra Batson</p>{' '}
            </td>
            <td>
              <span className="text-[1rem] decorate-2px font-bold line-through ">
                US$20
              </span>
            </td>
            <td className="text-[1rem]">US$0</td>
            <td className="text-[1rem]">US$0</td>
          </tr>
        </table>
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
          <p className="my-[1rem] text-[1.2rem]">
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
