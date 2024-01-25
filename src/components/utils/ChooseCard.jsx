
const ChooseCard = (props) => {
  return (
    <div className='bg-[#bcbcbc80] cursor-pointer shadow-xl h-[15rem] w-[25rem] max-md:w-[80%] max-sm:w-[90%] p-5 flex flex-col gap-10 justify-center max-md:pb-20'>
      <p>{props.image}</p>
      <p className="text-[1.5rem] font-medium text-blue-700 ">{props.title}</p>
      <p className="text-gray-600">{props.description}</p>
    </div>
  )
}

export default ChooseCard;
