// import finance_vid from '../assets/finance-1.mp4';
import finance_vid from '../../assets/finance-1.mp4'

const AboutUs = () => {
  return (
    <div>
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
          <p className="mb-10 text-center text-[2rem] font-bold max-sm:text-[1.5rem]">
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

      <div className="text-[1rem] my-20 pl-5 lg:pl-10 xl:pl-20">
        <div>
          <p className="mb-10 text-[1.4rem] font-bold max-sm:text-[1.2rem] max-sm:mb-5">Legal Information</p>
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
          <p className="mb-10 text-[1.4rem] font-bold max-sm:text-[1.2rem] max-sm:mb-5">
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
    </div>
  );
};

export default AboutUs;
