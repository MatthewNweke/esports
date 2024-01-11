import PricingPlan from '../components/PricingPlan';

const Profile = () => {
  return (
    <div>
      <div className="text-white bg-gradient-to-br from-gray-800 to-gray-900 rounded h-[8rem] w-[100%] m-0">
        <p className="px-3 py-5 font-semibold text-[1.2rem] text-white">
          My Profile
        </p>
      </div>
      <div className="px-3 bg-white relative bottom-6 py-3 w-[90%] translate-x-[-50%] left-1/2 m-0 rounded shadow-lg">
        <p className="px-3 py-5 border-b-[1px] border-[#00000010] mb-2 font-semibold text-[1.2rem] ">
        Edit Profile
        </p>
        .
      </div>
      <PricingPlan />
    </div>
  );
};

export default Profile;
