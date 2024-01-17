import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    console.log('Submitted:', formData);
    // Here you can add logic to send the data to the server for authentication
  };

  return (
    <div className="mx-auto mt-40 fixed inset-0">
      <h2 className="text-[2rem] font-semibold mb-4 text-center text-green-600 ">
        SignIn
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <Link to="/dashboard">
          <button
            type="submit"
            className="bg-green-500 absolute left-1/2 translate-x-[-50%] text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            SignIn
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
