import { useState } from "react";
import PricingPlan from "../components/PricingPlan";

const Payment = () => {

  const [referralLink, setReferralLink] = useState('rnFXnrgpekdBa1dxR99QcUsdX6bmVLqhq4');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
      .then(() => {
        setCopied(true);
        console.log('Referral link copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying referral link: ', error);
      });
  };

  return (
    <div>
      <div className="bg-white py-10 px-5 shadow-xl min-h-[40vh]">
        <div className="">
          <img src="/check_img.png" alt="" className="w-[5rem] mx-auto my-0" />
          <p className="text-center">Deposit Successful</p>
          <div className="flex  px-5 items-center leading-8 flex-col">
            <ul>
              <li>Transaction </li>
              <li>Amount</li>
              <li>Transaction</li>
              <li>Date19</li>
              <li>Payment Method</li>
            </ul>

            <ul>
              <li>STPM2408</li>
              <li>$130.0 K</li>
              <li>$650.00</li>
              <li>19 Jan 2024 01:24:27 am</li>
              <li>Ripple</li>
            </ul>
          </div>
          <div className='text-center leading-9'>
            <p className='text-[#000020] text-[0.7rem]'>Total Amount </p>
            <p>$ 130.7 K </p>
            <p className='text-[#000020] text-[0.7rem]'>Pay the total amount to the Ripple wallet below.</p>
          </div>
        </div>
        <div className="shadow-xl py-10 px-5">
        <div className="mt-4 text-center">
          <input
            type="text"
            value={referralLink}
            onChange={(e) => setReferralLink(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded"
          />
          <button
            onClick={handleCopyLink}
            className={`mt-2 px-4 py-2 ${copied ? 'bg-green-300' : 'bg-green-500'} text-white rounded cursor-pointer w-[100%]`}
          >
            {copied ? 'Copied!' : 'Copy Referral Link'}
          </button>
        </div>
      </div>
      </div>


      <div className='p-5'>
      
      <PricingPlan/>
    </div>
    </div>
  );
};

export default Payment;
