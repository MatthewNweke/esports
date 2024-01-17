import { useEffect, useState } from 'react';
import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../constants/api';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [referralCode, setReferralCode] = useState('');


  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetching countries from the REST Countries API
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryData = response.data.map((country) => country.name.common);
        setCountries(countryData);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);



  useEffect(() => {
    // Fetching users from the API (if needed)
    axios
      .get(`${API_URL}/auth/create/`)
      .then((response) => console.log(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);


  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage('');  
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/auth/create/`, {
        firstName,
        lastName,
        country,
        mobile,
        email,
        userName,
        password,
        confirmPassword,
        verificationCode,
        agreeTerms,
      });

      setSuccessMessage('User registered successfully');
      console.log('User registered successfully:', response.data);
    } catch (error) {
      setError('Error registering user. Please try again.');
      console.error('Error registering user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <MainLayout>
        <div className="flex flex-col bg-black p-10 rounded-lg my-32 mx-auto w-[40%] max-xl:w-[60%] max-lg:w-[70%] max-sm:w-[100%] max-sm:p-1">
          <div className="h-[15rem] px-5 flex flex-col justify-center gap-5 text-white border-2 border-solid border-green-300 border-b-0 rounded-lg rounded-bl-0 rounded-br-0">
            <p className="text-[2rem] max-sm:text-[1.5rem]">
              Welcome To <br />{' '}
              <span className="text-green-500  ">VaultCoinLimited</span>{' '}
            </p>
            <p>
              Our goal is to provide our investors with a reliable source of
              high income, join us today.
            </p>
          </div>
          <form
            onSubmit={handleSignUp}
            className="text-white flex flex-col p-10 w-[100%] rounded-lg justify-center items-center border-2 border-solid border-green-300 py-10 px-5"
            style={{ boxShadow: '0 3px 15px #D4B71680' }}
          >
            <div className="flex flex-col gap-4 mb-5 w-[100%]">
              <label htmlFor="">FirstName</label>
              <input
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                required
                className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5  w-[100%]">
              <label htmlFor="">LastName</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                required
                type="text"
                className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3  w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5  w-[100%] ">
              <label htmlFor="">Country</label>
              <select
                onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
              required
              name="country"
              id="country"
              className="border-2 border-solid bg-green-500 text-white border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              >
               <option value="" disabled>Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
              </select>
            </div>
            <div className="flex flex-col gap-4 mb-5 w-[100%]">
              <label htmlFor="">Mobile</label>
              <div className="flex ">
                <button className="relative  w-[5rem] rounded-lg bg-green-500  rounded-r-none text-white">
                  +234
                </button>
                <input
                  type="tel"
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  value={mobile}
                  required
                  className="rounded-l-none border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-5  w-[100%]">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
                className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5  w-[100%]">
              <label htmlFor="">User Name</label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
                required
                type="text"
                className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5  w-[100%]">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
                type="password"
                className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              />
            </div>
            <div className="flex flex-col gap-4 mb-5  w-[100%]">
              <label htmlFor="">Confirm Password</label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
                required
                type="password"
                className="border-2 border-solid border-green-300 focus:border-green-500 bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              />
            </div>

            <div className="bg-[#003] h-[4rem] w-[100%] mb-5"></div>

            <div className="flex flex-col gap-4 mb-5  w-[100%]">
              <input
                placeholder="Enter code"
                type="text"
                id="referralCode"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="text-white border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
              />
            </div>
            <div className="flex items-center gap-3 ">
              <input type="checkbox" name="" id="" />
              <p>
                I agree with{' '}
                <span className="text-green-500  cursor-pointer">
                  Privacy & Policy
                </span>{' '}
                ,{' '}
                <span className="text-green-500  cursor-pointer">
                  Terms & Condition
                </span>
              </p>
            </div>
            {/* Your existing form inputs with updated values and onChange handlers */}
            {/* ... (other form inputs) */}
            <div className="w-[100%]">
              <button
                type="submit"
                className="text-white font-bold my-5 py-3 px-4 rounded-lg bg-green-500"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'SignUp Now'}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              <p>
                Have an account?{' '}
                <Link to="/SignIn">
                  {' '}
                  <span className="text-green-500  cursor-pointer">
                    Login
                  </span>{' '}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </MainLayout>
    </div>
  );
};

export default Register;
