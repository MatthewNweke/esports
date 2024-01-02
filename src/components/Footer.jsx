import data from '../data/footer.json';
import { Link } from 'react-router-dom';

export default function Footer() {
  console.log({ data });
  return (
    <section
      className="w-full h-[50vh] mx-auto py-9 px-5 lg:px-10 xl:px-20"
      style={{ backgroundImage: 'url("/bg_carpet.jpg")' }}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <img src="/FxLogo.png" alt="" className="text-center " />
        <div className="flex gap-5">
          <Link to="/privacy-policy">
            <button className="bg-[transparent] text-[white]">
              Privacy $ Policy
            </button>{' '}
          </Link>
          <Link to="/terms&condition">
            <button className="bg-[transparent] text-[white]">
              Terms $ Condition
            </button>
          </Link>
        </div>
      </div>

      <div className="flex px-5 justify-between text-[#fff]  items-center h-[100%] max-sm:flex-col max-sm:justify-center max-sm:gap-10">
        <p className="text-sm">
          © 2019 FxTradingsLimited. All rights reserved
        </p>
        <p>160 Bovet Road San Mateo California 94402</p>
      </div>
    </section>
  );
}
