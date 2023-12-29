import React from 'react'

const AddressCard = (props) => {
  return (
    <div>
      <div className='flex gap-3 flex-col justify-center px-5 rounded-lg h-[12rem] w-[20rem] bg-[#D04029]' style={{boxShadow:'0 5px 15px #D0402980'}}>
      <p className='font-semibold text-[1.3rem]'>{props.title}</p>
      <p className='cursor-pointer'>{props.description}</p>
      </div>
    </div>
  )
}

export default AddressCard
