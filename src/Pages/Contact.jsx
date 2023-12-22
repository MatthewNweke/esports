import CoinBg from '../Components/common/CoinBg';
import MainLayout from '../components/MainLayout';

const Contact = () => {
  return (
    <div>
      <MainLayout>
        <CoinBg title="Contact Us" description="Contact Us" />
        <div
          className="flex  h-[100vh] w-[100%]"
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

          <div className=" bg-black h-[100%] w-[50%] text-[white] flex flex-col justify-center gap-[10px]">
            <p className='text-[2.2rem]'>Contact Us</p>
            <p className='text-[1rem]'>
              If you have any questions or queries that are not answered on our
              website, please feel free to contact us. We will try to respond to
              you as soon as possible. Thank you so much.
            </p>

            <form action="" className="w-[90%] flex flex-col ">
              <div className='w-[100%] flex justify-center gap-[8%]'>
                <div className='w-[46%] flex flex-col'>
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" name="" id="" className='focus:border-[1px] focus:border-[#D04029]'/>
                </div>

                <div className='w-[46%] flex flex-col'>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="" id="" className='focus:border-[1px] focus:border-[#D04029]'/>
                </div>
              </div>
              <div className='w-[100%] flex flex-col'>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="" id="" className='focus:border-[1px] focus:border-[#D04029]'/>
              </div>

              <input type="text" name="" id="" className='h-[10rem] w-[100%]'/>
            </form>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Contact;
