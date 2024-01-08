import PricingPlan from '../components/PricingPlan';

const Transfer = () => {
  return (
    <div>
      <div className="px-3 bg-white relative bottom-6 shadow-xl h-[25rem] w-[90%] translate-x-[-50%] left-1/2 m-0 rounded">
        <p className="px-3 py-5 border-b-[1px] border-[#00000010] mb-2 font-semibold text-[1.2rem] ">
          Transfer Request
        </p>
        <form action="">
          <div>
            <label htmlFor="">Enter Receiver Username: *</label>
            <input type="text" name="" id="" className="w-[100%] rounded" />
          </div>
          <div className="mt-10">
            <label htmlFor="">Enter Amount: *</label>
            <input type="number" name="" id="" className="w-[100%] rounded" />
          </div>

          <input type="submit" name="" id="" className="cursor-pointer  mt-10 py-3 w-[100%] bg-gradient-to-br from-gray-800 to-gray-900 text-white font-semibold rounded" value={"Make Transfer"}/>
        </form>
      </div>
{/* <div className='h-[5rem] bg-white  w-[90%] translate-x-[-50%] left-1/2 relative rounded'>

</div> */}
      <PricingPlan />
    </div>
  );
};

export default Transfer;
