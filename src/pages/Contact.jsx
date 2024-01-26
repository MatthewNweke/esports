import CoinBg from '../components/common/CoinBg';
import MainLayout from '../components/MainLayout';
import AddressCard from '../components/utils/cards/AddressCard';
import { useState } from 'react';
import { API_URL } from '../constants/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError('All fields are required');
      return;
    }

    try {
      setLoading(true);
     // Modify the body of your fetch request
const response = await fetch(`https://vaultcoin-production.up.railway.app/contact-us`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.fullName,
    subject: formData.subject,
    email: formData.email,
    body: formData.message,
  }),
});


      if (response.ok) {
        setSuccessMessage('Message sent successfully');
        setError(null);
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Failed to send message');
        setSuccessMessage(null);
      }
    } catch (error) {
      setError('Error sending message');
      setSuccessMessage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <MainLayout>
        <CoinBg title="Contact Us" description="Contact Us" />
        <div
          className="flex flex-col xl:flex-row w-[100%] flex-wrap bg-black "
          style={{ boxShadow: '0 3px 15px rgba(208, 64, 41, 0.5)' }}
        >
          <div
            className=" h-[100vh] w-[50%] hidden xl:block"
            style={{
              backgroundImage: 'url("/team-stockbrokers-are.jpg") ',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className=" bg-gray-100 py-5 w-[50%] text-black flex flex-col  justify-center gap-[1.5rem] items-center px-5 max-xl:mx-auto max-xl:my-0 max-xl:w-[80%] max-md:w-[90%] max-sm:w-[100%] max-sm:py-10">
            <p className="text-[2.2rem] font-semibold">Contact Us</p>
            <p className="text-[1rem] text-center">
              If you have any questions or queries that are not answered on our
              website, please feel free to contact us. We will try to respond to
              you as soon as possible. Thank you so much.
            </p>

            <form
              action=""
              onSubmit={handleSubmit}
              className="w-[90%] flex flex-col gap-[2rem]"
            >
              <div className="w-[100%] flex justify-center gap-[8%] max-sm:flex-col max-sm:gap-8">
                <div className="w-[46%] flex flex-col gap-4 max-sm:w-[100%] ">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border-2 border-solid border-green-600 bg-white outline-none rounded-lg py-3 px-2 focus:border-[1px] focus:border-green-400 "
                  />
                </div>

                <div className="w-[46%] flex flex-col gap-4 max-sm:w-[100%]">
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-solid border-green-600 bg-white outline-none rounded-lg py-3 px-2 focus:border-[1px] focus:border-green-400 "
                  />
                </div>
              </div>
              <div className="w-[100%] flex flex-col gap-4">
                <label htmlFor="subject">subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-2 border-solid border-green-600 bg-white outline-none rounded-lg py-3 px-2 focus:border-[1px] focus:border-green-400 "
                />
              </div>
              <div>
                <label htmlFor="message"></label>
                <input
                  type="text"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border-2 border-solid border-green-600 bg-white outline-none rounded-lg py-3 px-2 h-[10rem] w-full focus:border-green-400"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {successMessage && (
                <p className="text-green-500">{successMessage}</p>
              )}
              <button
                type="submit"
                className="text-white w-[25%] font-bold py-3 bg-green-500 rounded-lg max-sm:w-[40%]"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center gap-10 py-10 min-h-[70vh] bg-white items-center flex-wrap max-sm:mt-10">
          <AddressCard
            title={'Phone Number'}
            description={'+1 (331) 704-0512'}
          />
          <AddressCard
            title={'Email Address'}
            description={'admin@fxtradingslimited.com'}
          />
          <AddressCard
            title={'Office Address'}
            description={'3015 Suit pagla road, Singapore'}
          />
        </div>
      </MainLayout>
    </div>
  );
};

export default Contact;
