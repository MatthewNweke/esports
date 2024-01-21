// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';


// const SignIn = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });

//   // State for handling errors
//   const [error, setError] = useState(null);

//   // useHistory hook to programmatically navigate
//   const history = useHistory();

//   // Function to handle input changes
//   const handleInputChange = (e) => {
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Function to handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to the login API
//       const response = await axios.post('API_ENDPOINT_URL', credentials, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Check if the response is successful (HTTP status 2xx)
//       if (response.status === 200) {
//         // Redirect the user to the dashboard
//         history.push('/dashboard');
//       } else {
//         // Handle other status codes if needed
//         setError('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       // Handle API errors
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div
//       className=" relative  top-[10rem] left-[50%] 
//      -translate-x-1/2   max-lg:px-5"
//     >
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <h2 className="text-[2rem] font-semibold mb-4 text-center text-green-600 ">
//         SignIn
//       </h2>
//       <form onSubmit={handleLogin} className="max-w-md mx-auto relative">
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={credentials.email}
//             onChange={handleInputChange}
//             required
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-600"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <Link to="/dashboard">
//           <button
//             type="submit"
//             className="bg-green-500 absolute left-1/2 translate-x-[-50%] text-white px-4 py-2 rounded-md hover:bg-green-600"
//           >
//             SignIn
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default SignIn;


import React from 'react'

const SignIn = () => {
  return (
    <div>
      lorem
    </div>
  )
}

export default SignIn

