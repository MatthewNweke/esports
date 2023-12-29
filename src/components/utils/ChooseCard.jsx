
const ChooseCard = (props) => {
  return (
    <div className='bg-[#00000080] h-[15rem] w-[25rem] max-md:w-[80%] max-sm:w-[90%] p-5 flex flex-col gap-10 justify-center'>
        <p>{props.image}</p>
        <p className="text-[1.5rem] text-[#D04029]">{props.title}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default ChooseCard;
