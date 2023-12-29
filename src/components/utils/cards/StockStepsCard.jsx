import plan_bg from '../../../assets/plan_bg.png';

const StockStepsCard = ({ title, returns, daily, total, amount }) => {
  return (
    <div
      className="w-[18rem]  shadow-md rounded-lg px-7 py-5 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${plan_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '2px solid #D04029',
        height: '30rem',
      }}
    >
      <div className="mb-[1rem] text-center">
        <p className="font-semibold text-[2.2rem] mb-3  text-[#D4B716] ">
          {title}
        </p>
        <p className="font-medium text-lg text-[#fff]  border-t-[1px] border-b-[1px] py-2 px-5 border-[#D0402959]">
          {returns}
        </p>
        <p className="font-medium text-lg text-[#fff] border-t-[1px] border-b-[1px] py-2 px-5 border-[#D0402959]">
          Everyday
        </p>
        <p className="font-medium text-lg text-[#fff] border-t-[1px] border-b-[1px] py-2 px-5 border-[#D0402959]">
          {daily}
        </p>
        <p className="font-medium text-lg text-[#fff] border-t-[1px] border-b-[1px] py-2 px-5 border-[#D0402959]">
          {total}
        </p>
        <div className='mt-10 text-center flex flex-col gap-5 items-center'>
          <p className="font-medium  text-[#D4B716]  text-[1.5rem]">{amount}</p>
          <button className="bg-[#D4B716]   py-2 rounded-[0.4rem] w-[50%]">Invest now</button>
        </div>
      </div>
    </div>
  );
};

export default StockStepsCard;
