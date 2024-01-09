const StockSwiperCard = ({ image, items, about }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="h-[20rem] max-md:h-[25rem] w-full md:w-[30rem] bg-green-500  border-green-700 rounded-xl p-5  flex flex-col justify-center">
        <div className=" md:text-xl  text-[white] w-[100%] h-[100%] relative">
          {items?.map((item, index) => (
            <div>
              <p key={index} className="text-[1.1rem] z-50 text-center leading-8 max-md:text-[1.2rem]">
                {item}
              </p>

              <img
                src={image}
                alt=""
                className=" h-[4rem] w-[4rem] z-20 rounded-[50%] absolute right-10 bottom-12"
              />
              <div className=" absolute bottom-0 h-20  border-[1px] border-[transparent] border-t-[black]  w-[100%] py-3">
                <p>{about[0]}</p>
                <p>{about[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockSwiperCard;
