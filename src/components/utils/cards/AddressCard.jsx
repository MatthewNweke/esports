import React from 'react'

const AddressCard = (props) => {
  return (
    <div>
      <div className='flex gap-3 flex-col justify-center px-5 rounded-lg h-[8rem] w-[20rem] bg-blue-700 text-white  ' style={{ boxShadow: '0 5px 15px gray' }}>
        <p className='font-semibold text-base md-text-[1.5rem]'>{props.title}</p>
        <p className='cursor-pointer text-sm'>{props.description}</p>
      </div>
    </div>
  )
}

export default AddressCard
