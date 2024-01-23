import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/api';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // Get the history object
 

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/user/auth/login/`, {
        email: email,
        password: password,
      });

      // Successful login, handle the response accordingly
      console.log('Login successful!', response.data);
      setError(null); // Clear any previous error


      
    } catch (error) {
      // Handle error
      console.error(
        'Login failed:',
        error.response ? error.response.data : error.message
      );
      setError(
        error.response
          ? error.response.data.non_field_errors[0] // Adjust for your backend response
          : 'An error occurred during login.'
      );
    }
  };

  return (
    <div className="mx-auto mt-40 fixed inset-0">
      <h2 className="text-[2rem] font-semibold mb-4 text-center text-green-600 ">
        SignIn
      </h2>
      <form className="max-w-md mx-auto relative" onSubmit={handleSignIn}>
        {/* ... Your existing form fields ... */}

        <button
          type="submit"
          className="bg-green-500 absolute left-1/2 translate-x-[-50%] text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          SignIn
        </button>

        {error && (
          <p style={{ color: 'red' }} className="p-2">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
