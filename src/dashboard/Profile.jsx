import PricingPlan from '../components/PricingPlan';

const Profile = () => {
  return (
    <div>
      <div className="text-center rounded h-[8rem] w-[100%] m-0">
        <p className="px-3 py-5 font-semibold text-[1.2rem] max-md:py-10">
          My Profile
        </p>
      </div>
      <div className="px-3 bg-white relative bottom-6 py-3 w-[90%] translate-x-[-50%] left-1/2 m-0 rounded shadow-lg">
        <p className="px-3 py-5 border-b-[1px] border-[#00000010] mb-2 font-semibold text-[1.2rem] ">
          Edit Profile
        </p>
      </div>
      <div className="bg-white py-10 min-h-[50vh] shadow-xl px-16 justify-between flex items-center gap-[10%] max-lg:flex-col max-lg:px-5">
        <form action="" className="w-[60%] max-lg:w-[100%] shadow-xl">
          <div className=" flex flex-col  gap-2">
            <label htmlFor="">UserName</label>
            <input type="text" className="w-[100%] rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input type="email" className="w-[100%] rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Country</label>
            <select name="" id="" className="w-[100%] rounded cursor-pointer">
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
            </select>
          </div>
        </form>
        <form action="" className="w-[30%] max-lg:w-[100%] shadow-xl">
          <div>
            <label htmlFor="">jiiihehoehor</label>
            <input type="text" className="w-[100%] rounded" />
          </div>
          <div>
            <label htmlFor="">jiiihehoehor</label>
            <input type="text" className="w-[100%] rounded" />
          </div>
          <div>
            <label htmlFor="">jiiihehoehor</label>
            <input type="text" className="w-[100%] rounded" />
          </div>
        </form>
      </div>
      <PricingPlan />
    </div>
  );
};

export default Profile;
