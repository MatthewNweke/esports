import CoinBg from '../components/common/CoinBg';
import MainLayout from '../components/MainLayout';
import AddressCard from '../components/utils/cards/AddressCard';

const Contact = () => {
  return (
    <div>
      <MainLayout>
        <CoinBg title="Contact Us" description="Contact Us" />
        <div
          className="flex  h-[100vh] w-[100%] flex-wrap"
          style={{ boxShadow: '0 3px 15px rgba(208, 64, 41, 0.5)' }}
        >
          <div
            className=" h-[100%] w-[50%]"
            style={{
              backgroundImage: 'url("/leftCoin_Bg.jpg") ',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className=" bg-black h-[100%] w-[50%] text-[white] flex flex-col  justify-center gap-[1.5rem] items-center px-5">
            <p className="text-[2.2rem] font-semibold">Contact Us</p>
            <p className="text-[1rem] text-center font-semibold">
              If you have any questions or queries that are not answered on our
              website, please feel free to contact us. We will try to respond to
              you as soon as possible. Thank you so much.
            </p>

            <form action="" className="w-[90%] flex flex-col gap-[2rem]">
              <div className="w-[100%] flex justify-center gap-[8%]">
                <div className="w-[46%] flex flex-col gap-4">
                  <label htmlFor="fullname" className="">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-2 border-solid border-[#D0402980] bg-black outline-none rounded-lg py-3 px-2 focus:border-[1px] focus:border-[#D04029]"
                  />
                </div>

                <div className="w-[46%] flex flex-col gap-4">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="border-2 border-solid border-[#D0402980] bg-black outline-none rounded-lg py-3 px-2 focus:border-[1px] focus:border-[#D04029]"
                  />
                </div>
              </div>
              <div className="w-[100%] flex flex-col gap-4">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-solid border-[#D0402980] bg-black outline-none rounded-lg py-3 px-2 focus:border-[1px] focus:border-[#D04029]"
                />
              </div>

              <input
                type="text"
                name=""
                id=""
                className="border-2 border-solid border-[#D0402980] bg-black outline-none rounded-lg py-3 px-2 h-[10rem] w-[100%]"
              />
              <button className="text-[black]  w-[25%] font-bold py-3  bg-[#D04029] rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className='flex justify-center gap-10 min-h-[70vh] bg-black items-center'>
          <AddressCard title={"Phone Number"} description={"+1 (331) 704-0512"}/>
          <AddressCard title={"Email Address"} description={"admin@fxtradingslimited.com"}/>
          <AddressCard title={"Office Address"} description={"3015 Suit pagla road, Singapore"}/>
        </div>
      </MainLayout>
    </div>
  );
};

export default Contact;
