import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/api';
import MainLayout from '../components/MainLayout';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    username: '',
    is_active: false,
    referral_code: '',
    country: '',
  });

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error.message);
        setError('Error fetching countries');
      }
    };

    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password do not match');
      return;
    }

    // Password validation criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setError(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/user/auth/create/`,
        {
          email: formData.email,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
          username: formData.username,
          is_active: formData.is_active,
          referral_code: formData.referral_code,
          country: formData.country,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API Response:', response.data);
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
        username: '',
        is_active: false,
        referral_code: '',
        country: '',
      });
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);

      if (error.response) {
        console.error('Response Status:', error.response.status);

        if (Array.isArray(error.response.data?.Error)) {
          const serverError = error.response.data.Error[0];
          console.error('Server Error:', serverError);
          setError(serverError || 'An error occurred');
        } else {
          console.error('Response Data:', error.response.data);
          setError('An error occurred');
        }
      } else if (error.request) {
        console.error('No response received from the server.');
      } else {
        console.error('Error Details:', error);
        setError('An error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleTogglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
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
              onSubmit={handleSubmit}
              className="text-white flex flex-col p-10 w-[100%] rounded-lg justify-center items-center border-2 border-solid border-green-300 py-10 px-5"
              style={{ boxShadow: '0 3px 15px #D4B71680' }}
            >
              <div className="flex flex-col gap-4 mb-5 w-[100%]">
                <label htmlFor="first_name">First Name</label>
                <input
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-4 mb-5  w-[100%]">
                <label htmlFor="last_name">LastName</label>
                <input
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3  w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-4 mb-5 w-[100%]">
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  onChange={handleInputChange}
                  value={formData.country}
                  className="bg-green-500"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option
                      key={country.name.common}
                      value={country.name.common}
                    >
                      {country.name.common}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-4 mb-5  w-[100%]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />
              </div>
              <div className="flex flex-col gap-4 mb-5  w-[100%]">
                <label htmlFor="">User Name</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  type="text"
                  className="border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />
              </div>

              <p className='text-green-500 py-8'>
                {
                  'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
                }
              </p>
              <div className="flex flex-col gap-4 mb-5 relative w-[100%]">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword1 ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border-2 border-solid bg-[white] text-black border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility1}
                  className=" cursor-pointer absolute top-[3.2rem]  right-3"
                >
                  {showPassword1 ? <span>👁️</span> : <span>🔒</span>}
                </button>
              </div>
              <div className="flex flex-col gap-4 mb-5 relative w-[100%]">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  onChange={handleInputChange}
                  value={formData.confirmPassword}
                  required
                  name="confirmPassword"
                  className="border-2 border-solid bg-[white] text-black border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />

                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility2}
                  className="cursor-pointer absolute top-[3.2rem]  right-3"
                >
                  {showPassword2 ? <span>👁️</span> : <span>🔒</span>}
                </button>
              </div>
              {/* <div className="bg-[#003] h-[4rem] w-[100%] mb-5"></div> */}

              <div className="flex flex-col gap-4 mb-5  w-[100%]">
                <label htmlFor="referral_code"></label>
                <input
                  placeholder="Enter code"
                  type="text"
                  name="referral_code"
                  value={formData.referral_code}
                  onChange={handleInputChange}
                  required
                  className="text-white border-2 border-solid border-green-300 focus:border-green-500  bg-[transparent]  outline-none rounded-lg px-2 py-3 w-[100%]"
                />
              </div>
              <div className="flex items-center gap-3 ">
                <label htmlFor="is_active"></label>
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleInputChange}
                  required
                />
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

              <div className="w-[100%]">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white rounded text-green-500 px-3 py-2 text-center relative my-10 mx-5 hover:bg-green-500 hover:text-white ransition-all duration-300"
                >
                  {isLoading ? 'Creating...' : 'Sign Up'}
                </button>
                {error && (
                  <p style={{ color: 'red' }} className="p-2">
                    {error}
                  </p>
                )}
                <p className="text-center">
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
    </div>
  );
};

export default Register;
