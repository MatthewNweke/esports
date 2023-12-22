import account_icon from '../assets/account_icon.svg';
import fund_icon from '../assets/fund_icon.svg';
import trade_icon from '../assets/trade_icon.svg';
import StockStepsCard from './utils/cards/StockStepsCard';

const StockSteps = ({ title }) => {
  return (
    <div className="px-5 lg:px-10 xl:px-20 py-[3rem] my-[3rem] bg-gray-100">
      <p className="text-4xl font-bold tracking-wide text-[#1A2433] text-center">
        Available <span className="text-[#D04029]">Plans</span>
      </p>
      <p className='text-center mt-5'>
        To make a solid investment, you have to know where you are investing.
        Find a plan which is best for you.
      </p>
      <div className="flex flex-wrap gap-10 my-[4rem] justify-center items-center">
        <StockStepsCard
          daily={'For 30 day'}
          returns={'Return 7%'}
          title={'DEFI'}
          total={'Total 210%'}
          amount={'$50000 - $100000'}
        />
        <StockStepsCard
          daily={'For 10 day'}
          returns={'Return 2%'}
          title={'Stocks'}
          total={'Total 20%'}
          amount={'$200 - $10000'}
        />
        <StockStepsCard
          daily={'For 30 day'}
          returns={'Return 3.5%'}
          title={'Blockchain ETFs'}
          total={'Total 105%'}
          amount={'$2000 - $100000'}
        />
        <StockStepsCard
          daily={'For 30 day'}
          returns={'Return 5%'}
          title={'NFT'}
          total={'Total 150%'}
          amount={'$10000 - $100000'}
        />
      </div>

    </div>
  );
};

export default StockSteps;
