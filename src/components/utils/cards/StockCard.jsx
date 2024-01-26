
const StockCard = ({ image, title, description }) => {
  return (
    <div className=" w-[20rem] cursor-pointer  max-[400px]:w-[100%] lg:w-[13rem] shadow-lg xl:w-[15rem] min-[1440px]:w-[18rem]  rounded-lg text-black bg-gray-50 hover:bg-blue-500   transform hover:scale-200 transition-transform duration-300">
      <img
        src={image}
        alt=""
        className="w-[80%] relative left-[50%] top-8 translate-x-[-50%]"
      />
      <div className="w-full  flex flex-col gap-5 justify-center p-5  min-h-[10rem]">
        <p className="text-lg xl:text-xl   font-semibold text-black">
          {title}
        </p>
        <p className="text-lg font-semibold tracking-wide">{description}</p>
      </div>
    </div>
  );
};

export default StockCard;
