import React from 'react';

const TransactionTable = () => {
  return (
    <div>
      <div>
        <div className="rounded-lg w-[80%] my-10 mx-auto pb-20 max-lg:w-[90%] px-5 max-md:w-[100%]">
          <table className="w-[100%] h-[20rem]  max-sm:w-[100%] max-sm:text-center">
            <tr className="bg-[#D04029] h-12 rounded-lg ">
              <td className="text-black text-[1rem] font-medium max-sm:text-[0.8rem]">
                Name
              </td>
              <td className="text-black text-[1rem] font-medium max-sm:text-[0.8rem]">
                Date
              </td>
              <td className="text-black text-[1rem] font-medium max-sm:text-[0.8rem]">
                Amount
              </td>
              <td className="text-black text-[1rem] font-medium max-sm:text-[0.8rem]">
                To Close
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className="text-[1rem] max-sm:text-[0.8rem]">Pat Fale</p>{' '}
              </td>
              <td>
                {' '}
                <span className="decorate-2px font-bold line-through text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className=" text-[1rem] max-sm:text-[0.8rem]">
                  David Rothberg
                </p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className="decorate-2px font-bold line-through text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr>
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className=" text-[1rem] max-sm:text-[0.8rem]">
                  David Rothberg
                </p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className="decorate-2px font-bold line-through text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>

            <tr className="h-12">
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className="text-[1rem] max-sm:text-[0.8rem]">Dean Morse</p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className=" decorate-2px font-bold line-through text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>

            <tr className="h-12 ">
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className=" text-[1rem] max-sm:text-[0.8rem]">Avlin Josh</p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className=" decorate-2px font-bold line-through text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className=" text-[1rem] max-sm:text-[0.8rem]">Ashley Vivi</p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className=" decorate-2px font-bold line-through text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff] max-sm:text-[0.8rem]">
                <p className=" text-[1rem] max-sm:text-[0.8rem]">
                  Fallon Mc Elligot
                </p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className=" decorate-2px font-bold line-through max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff]">
                <p className="text-[1rem] max-sm:text-[0.8rem]">Edgar Pepito</p>{' '}
              </td>
              <td className="max-sm:text-[0.8rem]">
                <span className=" decorate-2px font-bold text-[1rem] max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className=" font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff]">
                <p className="text-[1rem] max-sm:text-[0.8rem]">
                  Sandra Batson
                </p>{' '}
              </td>
              <td>
                <span className="text-[1.3rem] decorate-2px font-bold line-through max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className="font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
              <td className="font-bold text-[1rem] max-sm:text-[0.8rem]">
                US$0
              </td>
            </tr>
            <tr className="h-12">
              <td className="text-[#fff]">
                <p className="text-[1rem] max-sm:text-[0.8rem]">
                  Sandra Batson
                </p>{' '}
              </td>
              <td>
                <span className="text-[1rem] decorate-2px font-bold line-through max-sm:text-[0.8rem]">
                  US$20
                </span>
              </td>
              <td className="text-[1rem] max-sm:text-[0.8rem]">US$0</td>
              <td className="text-[1rem] max-sm:text-[0.8rem]">US$0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
