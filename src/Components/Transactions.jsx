import React from 'react'

const Transactions = () => {
  return (
    <div className=''>
       <tr>
          <td className="text-[#2B3240]">
            <p className="text-[1.3rem] max-sm:text-[1rem]">20 Puts/Calls</p>{' '}
            <span> single leg</span>
          </td>
          <td>
            {' '}
            <span
             
              className="text-[1.3rem] decorate-2px font-bold line-through max-sm:text-[1rem]"
            >
              US$20
            </span>
          </td>
          <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">US$0</td>
          <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">US$0</td>
        </tr>
    </div>
  )
}

export default Transactions
