import React from 'react'

const PricingPlan = () => {
  return (
    <div className="flex gap-[5%] flex-wrap justify-center items-center mt-10 max-lg:flex-col">
        <div className="rounded shadow-xl min-h-[100vh] bg-white w-[30%] pb-10 max-lg:w-[70%] max-md:w-[100%]">
          <div class=" bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl before:w-full min-h-[40vh] ">
            <p className="text-[1.2rem] font-semibold text-white mb-3">
              Standard
            </p>
            <button className="text-black cursor-auto rounded-xl px-2 py-1">
              Real Estate
            </button>
          </div>

          <div className="flex justify-between p-5 items-center">
            <ul className="leading-10">
              <li>Min Deposit</li>
              <li>Max Deposit</li>
              <li>Daily Profit</li>
              <li>Referral Bonus</li>
              <li>Duration</li>
            </ul>
            <ul className="leading-10">
              <li>$10,000.00</li>
              <li>$19,999.00</li>
              <li>1.5%</li>
              <li>5%</li>
              <li>6 Month(s)</li>
            </ul>
          </div>
          <form action="" className="px-5">
            <label htmlFor="" className="text-center mb-3 block font-semibold">
              Enter Amount: <span className="text-[#F25961]">*</span>
            </label>
            <input type="number" className="w-[100%] " />
            <label htmlFor="" className="mt-5 text-center block font-semibold">
              Choose payment method
            </label>
          </form>
          <div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/btc.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/eth.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/ltc.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/xrp.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/usdt.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/bal.png" alt="" className="w-25 h-20" />
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br text-white relative left-[50%] -translate-x-1/2 from-gray-800 to-gray-900 w-[90%] rounded-lg py-3 px-10">
            Make Deposit
          </button>
        </div>
        <div className="rounded shadow-xl min-h-[100vh] bg-white w-[30%] pb-10 max-lg:w-[70%] max-md:w-[100%]">
          <div class=" bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl before:w-full min-h-[40vh] ">
            <p className="text-[1.2rem] font-semibold text-white mb-3">
              Legend
            </p>
            <button className="text-black cursor-auto rounded-xl px-2 py-1">
              Real Estate
            </button>
          </div>
          <div className="flex justify-between p-5 items-center">
            <ul className="leading-10">
              <li>Min Deposit</li>
              <li>Max Deposit</li>
              <li>Daily Profit</li>
              <li>Referral Bonus</li>
              <li>Duration</li>
            </ul>
            <ul className="leading-10">
              <li>$10,000.00</li>
              <li>$19,999.00</li>
              <li>1.5%</li>
              <li>5%</li>
              <li>6 Month(s)</li>
            </ul>
          </div>
          <form action="" className="px-5">
            <label htmlFor="" className="text-center mb-3 block font-semibold">
              Enter Amount:<span className="text-[#F25961]">*</span>
            </label>
            <input type="number" className="w-[100%] " />
            <label htmlFor="" className="mt-5 text-center block font-semibold">
              Choose payment method
            </label>
          </form>
          <div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/btc.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/eth.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/ltc.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/xrp.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/usdt.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/bal.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <button className="bg-gradient-to-br text-white relative left-[50%] -translate-x-1/2 from-gray-800 to-gray-900 w-[90%] rounded-lg py-3 px-10">
              Make Deposit
            </button>
          </div>
        </div>
        <div className="rounded shadow-xl min-h-[100vh] bg-white w-[30%] pb-10 max-lg:w-[70%] max-md:w-[100%]">
          <div class=" bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl before:w-full min-h-[40vh] ">
            <p className="text-[1.2rem] font-semibold text-white mb-3">
              Standard
            </p>
            <button className="text-black cursor-auto rounded-xl px-2 py-1">
              Crypto mining
            </button>
          </div>

          <div className="flex justify-between p-5 items-center">
            <ul className="leading-10">
              <li>Min Deposit</li>
              <li>Max Deposit</li>
              <li>Daily Profit</li>
              <li>Referral Bonus</li>
              <li>Duration</li>
            </ul>
            <ul className="leading-10">
              <li>$10,000.00</li>
              <li>$19,999.00</li>
              <li>1.5%</li>
              <li>5%</li>
              <li>6 Month(s)</li>
            </ul>
          </div>
          <form action="" className="px-5">
            <label htmlFor="" className="text-center mb-3 block font-semibold">
              Enter Amount: <span className="text-[#F25961]">*</span>
            </label>
            <input type="number" className="w-[100%] " />
            <label htmlFor="" className="mt-5 text-center block font-semibold">
              Choose payment method
            </label>
          </form>

          <div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/btc.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/eth.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/ltc.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/xrp.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <div className="flex justify-between p-5 gap-10">
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/usdt.png" alt="" className="w-25 h-20" />
              </div>
              <div className=" border-black border-[1px] p-5 rounded-lg cursor-pointer">
                <img src="/bal.png" alt="" className="w-25 h-20" />
              </div>
            </div>
            <button className="bg-gradient-to-br text-white relative left-[50%] -translate-x-1/2 from-gray-800 to-gray-900 w-[90%] rounded-lg py-3 px-10">
              Make Deposit
            </button>
          </div>
        </div>
      </div>
  )
}

export default PricingPlan
