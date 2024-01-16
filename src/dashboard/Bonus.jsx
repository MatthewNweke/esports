import PricingPlan from '../components/PricingPlan';

const Bonus = () => {
  return (
    <div>
      <div className="px-3 bg-white relative bottom-6 max-sm:bottom-0 text-center max-sm:py-5 shadow-xl mb-20 h-[5rem] w-[90%] translate-x-[-50%] left-1/2 m-0 rounded">
        <p className="px-3 py-5 mb-2 font-semibold text-[1.2rem] ">History</p>
        <p className="px-3 py-5 border-b-[1px] border-[#00000010] mb-2 font-semibold text-[1.2rem] ">
          All Bonus
        </p>
      </div>

      <PricingPlan />
    </div>
  );
};

export default Bonus;
