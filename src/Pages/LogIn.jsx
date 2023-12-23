import MainLayout from '../components/MainLayout';

const LogIn = () => {
  return (
    <div>
      <MainLayout>
        <div className="bg-black p-10 rounded-lg">
          <form
            action=""
            className="text-white w-[35%] flex flex-col p-10 rounded-lg justify-center items-center border-2 border-solid border-[#D0402980] py-10 px-5 my-0 mx-auto"
            style={{ boxShadow: '0 3px 15px rgba(208, 64, 41, 0.5)' }}
          >
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">FirstName</label>
              <input
                type="text"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">LastName</label>
              <input
                type="text"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Country</label>
              <select
                name="country"
                id="country"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              >
                <option value="country">Nigeria</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Mobile</label>
              <div className="flex ">
                <button className="relative  w-[5rem] rounded-lg bg-[#D04029] rounded-r-none text-white">
                  +234
                </button>
                <input
                  type="text"
                  className="rounded-l-none border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[20rem]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <label htmlFor="">Confirm Password</label>
              <input
                type="text"
                className="border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="bg-[#003] h-[4rem] w-[25rem] mb-5"></div>

            <div className="flex flex-col gap-4 mb-5">
              <input
                placeholder="Enter code"
                type="text"
                className="text-white border-2 border-solid border-[#D0402980] focus:border-[#D04029] bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[25rem]"
              />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" name="" id="" />
              <p>
                I agree with{' '}
                <span className="text-[#D04029] cursor-pointer">
                  Privacy & Policy
                </span>{' '}
                ,{' '}
                <span className="text-[#D04029] cursor-pointer">
                  Terms & Condition
                </span>
              </p>
            </div>
            <div className=' w-[25rem]'>
              <button className="text-black font-bold my-5 py-3 px-4 rounded-lg bg-[#D04029]">
                SignUp Now
              </button>
              <p>
                Have an account? <span className='text-[#D04029] cursor-pointer'>Login</span>{' '}
              </p>
            </div>
          </form>
        </div>
      </MainLayout>
    </div>
  );
};

export default LogIn;
