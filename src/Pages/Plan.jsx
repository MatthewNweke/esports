import MainLayout from '../components/MainLayout';
import StockSteps from '../components/StockSteps';
import CoinBg from '../Components/common/CoinBg';

const Plan = () => {
  return (
    <div>
      <MainLayout>
      <CoinBg title="Investment Plan" description="Investment Plan"/>
        <StockSteps />
      </MainLayout>
    </div>
  );
};

export default Plan;
