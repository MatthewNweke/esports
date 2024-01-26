import { useState } from 'react';
import PricingPlan from '../components/PricingPlan';

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userProfileData = {
      username:uername,
      email:email,
      country: country,
      
    };

    try {
      const response = await fetch('https://vaultcoin-production.up.railway.app/userprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userProfileData),
      });

      if (response.ok) {
        
        console.log('Profile successfully updated');
      } else {
      
        console.error('Failed to update profile');
      }
    } catch (error) {
      // Handle unexpected errors, e.g., show a generic error message
      console.error('Error updating profile', error);
    }
  };

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
        <form action="" onSubmit={handleSubmit} className="w-[60%] max-lg:w-[100%] shadow-xl">
          <div className=" flex flex-col  gap-2">
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-[100%] rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[100%] rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-[100%] rounded cursor-pointer"
            >
              <option value="">lorem</option>
              <option value="">lorem</option>
              <option value="">lorem</option>
            </select>
          </div>
        </form>
        
      </div>
      <PricingPlan />
    </div>
  );
};

export default Profile;
