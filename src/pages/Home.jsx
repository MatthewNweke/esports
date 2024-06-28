import MainLayout from '../components/MainLayout';

import AboutUs from '../components/common/AboutUs';

const Home = () => {
  return (
    <MainLayout>
      <div className="relative w-full">
        <img
          src={'/esport-bg.jpeg'}
          alt=""
          className="w-full h-full object-cover brightness-50"
          // style={{ backgroundSize: 'cover' }}
        />
        <div className="absolute flex flex-col justify-center  gap-12 top-[5rem] bg-opacity-10 text-white pl-3 lg:pl-5 xl:pl-10 max-md:top-[4rem] max-sm:top-[3rem]">
          <div className="laviossa text-[3rem] font-bold  w-[40rem] max-lg:text-[2.4rem] max-lg:w-[100%] max-md:text-[2rem]  max-sm:text-[1.5rem] max-sm:m-0">
            NEXT-GENERATION <br />
            ESPORTS TEAM
          </div>
          <ul className="font-medium text-[2rem]  list-disc list-inside w-[100%] max-sm:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Et
            quis odio vestibulum nunc, neque integer purus.
          </ul>

          <div className="flex gap-5 items-center">
            <button className=" bg-[#f32c46] font-semibold p-5  text-[1.3rem] hover:scale-105">
              BUY MERCH
            </button>
            <button className="bg-black border-[#dfe2ef] border-2 font-semibold p-5  text-[1.3rem] hover:scale-105 hover:bg-[#f32c46]">
              MEET THE TEAM
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-[#111]">
        {/* <div className='relative w-full text-white' style={{backgroundImage:"url(./esport-bg.jpeg)",backgroundPosition:"left bottom"}}> */}

        <img
          src={'/esport-bg.jpeg'}
          alt=""
          className="w-full h-full object-cover brightness-50"
          style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
        />
        <AboutUs />

       


        
      </div>
    </MainLayout>
  );
};

export default Home;
