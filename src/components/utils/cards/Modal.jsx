// Modal.js
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose }) => {
  const modalClass = isOpen ? 'block' : 'hidden';

  return (
    <div
      className={`fixed overflow-hidden z-30 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${modalClass}`}
      onClick={onClose}
    >
      <div className="fixed top-[4.5rem] left-1/2 transform -translate-x-1/2  bg-[#000000] px-3 py-5 w-[40%] border-[white] border-b-2 text-white rounded shadow-lg max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%]">
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-4">At your first sign in</p>
          <button
            className="bg-[#D4B71680] text-white font-bold px-4 py-2 rounded hover:bg-[#D4B716] focus:outline-none"
            onClick={onClose}
          >
            &#x2715;
          </button>
        </div>

        <Link to="/login">
          <input
            type="submit"
            className="rounded w-[100%] mt-5 bg-[#28a745] text-white py-2 hover:text-[] cursor-pointer"
            value={'At first Sign in your account'}
          />
        </Link>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
