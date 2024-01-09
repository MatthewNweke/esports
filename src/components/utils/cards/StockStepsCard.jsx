import { useState } from 'react';
import plan_bg from '../../../assets/courses-2318037_1280.jpg';
import Modal from './Modal';

const StockStepsCard = ({ title, returns, daily, total, amount }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div
      className="w-[18rem] shadow-md rounded-lg px-7 py-5 flex flex-col justify-between"
      style={{
        backgroundImage: `url(${plan_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        border: '4px solid #31c48d',
        height: '30rem',
      }}
    >
      <div className="mb-[1rem] text-center">
        <p className="font-semibold text-[2.2rem] mb-3  text-green-400 max-md:text-[2rem] max-sm:text-[1.5rem]">
          {title}
        </p>
        <p className="font-medium text-lg text-[#fff]  border-t-[1px] border-b-[1px] py-2 px-5 border-green-300">
          {returns}
        </p>
        <p className="font-medium text-lg text-[#fff] border-t-[1px] border-b-[1px] py-2 px-5 border-green-303">
          Everyday
        </p>
        <p className="font-medium text-lg text-[#fff] border-t-[1px] border-b-[1px] py-2 px-5 border-green-300">
          {daily}
        </p>
        <p className="font-medium text-lg text-[#fff] border-t-[1px] border-b-[1px] py-2 px-5 border-green-300">
          {total}
        </p>
        <div className='mt-10 text-center flex flex-col gap-5 items-center'>
          <p className="font-medium  text-green-300  text-[1.5rem]">{amount}</p>
          <button className="bg-green-500 text-white   py-2 rounded-[0.4rem] w-[50%]" onClick={openModal}>Invest now</button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default StockStepsCard;
