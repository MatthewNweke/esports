import community from '../../assets/community.png';
import teamA from '../../assets/teamA.jpeg';
import teamB from '../../assets/teamB.jpeg';
import teamC from '../../assets/teamC.jpeg';
import teamD from '../../assets/teamD.jpeg';
import StockCard from './cards/StockCard';

const StockCardsContainer = () => {
  return (
    <div className="px-5 my-[1rem] w-full flex justify-center mb-10 gap-[10px] flex-wrap ">
      <StockCard
        image={teamA}
        title={'Jennifer Kingery'}
        description={'CEO'}
      />
      <StockCard
        image={teamB}
        title={'Justin Miller'}
        description={'CTO'}
        
      />
      <StockCard
        image={teamC}
        title={'Jane Beller'}
        description={
          'Marketing Head'
        }
      />
      <StockCard
        image={teamD}
        title={'Seth Heritage'}
        description={
          'Top Trader'
        }
      />
    </div>
  );
};

export default StockCardsContainer;
