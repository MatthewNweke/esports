import React, { useState } from 'react';
import TransactionTable from './TransactionTable';

const Table = (props) => {
  const [selectedOption, setSelectedOption] = useState('deposit');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const renderTableRows = () => {
    return (
      <>
      
        {selectedOption === 'deposit' ? (
          <>
          <p>Latest Deposit</p>
            {/* <p>pejfpjfpjpfj</p> */}
            <TransactionTable
             
            />
          </>
        ) : (
          <>
          <p>Latest Withdrawal</p>
             <TransactionTable
             
             />
             
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="flex gap-4 justify-center mt-10 max-sm:flex-col items-center max-sm:gap-10">
        <button
          className="text-[black] font-bold py-2 px-4 max-sm:text-[0.8rem] max-sm:w-[50%]"
          onClick={() => handleButtonClick('deposit')}
        >
          Latest Deposit
        </button>
        <button
          className="text-[white] bg-[black] font-bold py-2 px-4 border-[1px] border-[#D04029] max-sm:text-[0.8rem] max-sm:w-[50%]"
          onClick={() => handleButtonClick('withdrawal')}
        >
          Latest Withdrawal
        </button>
      </div>

      <div className="rounded-lg w-[80%] my-10 mx-auto pb-20 max-lg:w-[90%]  max-md:w-[100%]">
        <table className="w-[100%] h-[20rem]  max-sm:w-[100%] ">
          <thead>
            <tr className="bg-[#D04029] h-12 rounded-lg">
              {/* Add your table header cells here */}
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
