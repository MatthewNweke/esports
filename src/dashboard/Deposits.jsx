import React from 'react';
import PricingPlan from '../components/PricingPlan';


const Deposits = () => {
  return (
    <div className=" ">
      <div className="text-white bg-gradient-to-br  bg-green-500 rounded h-[8rem] my-0 mx-auto ">
        <p className="px-3 py-5 font-semibold text-[1.2rem] text-white max-2xl:text-center max-xl:py-10">
          Deposit
        </p>
      </div>
      <div className="px-3 bg-white relative bottom-6 h-[10rem] w-[90%] translate-x-[-50%] left-1/2 m-0 rounded shadow-lg max-xl:w-[100%]">
        <p className="px-3 py-5 border-b-[1px] border-[#00000010] mb-2 font-semibold text-[1.2rem] ">
          Make Deposit
        </p>
        <select name="deposit" id="" className="w-[100%] cursor-pointer">
          <option value="deposit" className="py-5">
            Choose type of deposit
          </option>
          <option value="deposit">Real estate</option>
          <option value="deposit">Crypto Minning</option>
        </select>
      </div>

      <div className="px-3 mt-5111 bg-white relative bottom-6 h-[10rem] w-[90%] translate-x-[-50%] left-1/2 m-0 rounded shadow-lg max-xl:w-[100%]">
        <p className=" py-5  font-semibold text-[1.2rem] ">Deposit History</p>
        <div className="bg-[#00000020] rounded h-[35%] py-8 flex justify-around items-center cursor-pointer hover:bg-[#00000010]  ">
          <div>
            <p>Deposit#STPM2398</p>{' '}
            <p className="text-[0.5rem]">05 Jan 2024 04:27:47 pm</p>
          </div>
          <p>$20,000.00</p>
          <p className=" font-bold">pending</p>
        </div>
      </div>

      {/* Hot pricing plans */}

      <PricingPlan/>
    </div>
  );
};

export default Deposits;
