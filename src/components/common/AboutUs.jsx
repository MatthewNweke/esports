// import finance_vid from '../assets/finance-1.mp4';

const AboutUs = () => {
  return (
    <div className="text-white">
      <div className="px-5 lg:px-10 xl:px-32 py-[2rem]  flex gap-7 flex-col lg:flex-row justify-center items-center ">
        <div className="w-[40%]">
          <p className="mb-10  text-[2.4rem] font-bold max-sm:text-[1.5rem]">
            ABOUT THE DRAGON <br /> ESPORTS TEAM
          </p>
          <p className="md:text-lg w-[100%]  mb-10">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Quis convallis tortor, malesuada vitae tortor. Dignissim ac 
              aliquam ut sed eu. Eget nulla elit, ac habitant.`}
            <br />
          </p>

          <button className=" border-[#dfe2ef] text-white border-2 font-semibold p-5  text-[1.3rem] hover:scale-105 bg-[#f32c46]">
          MEET THE TEAM
        </button>
        </div>

     
        <div
          className="relative play_btn--container flex justify-center items-center  w-[60%] h-[80vh]"
          style={{ backgroundImage: 'url(/vid_img.jpeg)' }}
        >
          <div className="relative   flex justify-center items-start rounded-[50%] py-5">
            <img
              src={'/play_btn.svg'}
              alt=""
              className=" play_btn  object-cover brightness-50 cursor-pointer h-[10rem] w-[10rem] hover:scale-110"
              style={{ backgroundSize: 'cover' }}
            />
          </div>

          
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
