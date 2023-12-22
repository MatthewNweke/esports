import MainLayout from '../components/MainLayout';
import WhoWeAre_bg from '../assets/whoWeAre_bg.png';
import TeamSwiper from '../components/TeamSwiper';
import checked_icon from '../assets/checked_icon.png';
// #30022ECC
const WhoWeAre = (props) => {
  return (
    <div>
      <MainLayout>
        <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh] mb-10">
          <img
            src={WhoWeAre_bg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-10 xl:pl-20">
            <p className="text-[3rem] font-bold  text-center max-lg:text-[2.5rem] max-md:text-[2rem]">
              KNOW MORE ABOUT BULLOAK
            </p>
          </div>
        </div>

        <div className="mx-5">
          <div className="text-center mb-20">
            <div className="flex gap-10 items-center justify-center">
              <img src={checked_icon} alt="" />
              <p className="text-[2rem] font-semibold mb-5">WHO WE ARE</p>
            </div>
            <p className="text-[1.5rem]">
              At Bulloak, we are dedicated to helping individuals and families
              secure their financial future and achieve their life's financial
              aspirations. Our mission is clear: to provide expert, personalized
              wealth management services that empower our clients to make
              informed financial decisions.
            </p>
          </div>
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-10">
              <img src={checked_icon} alt="" />
              <p className="text-[2rem] font-semibold mb-5">OUR CORE VALUE</p>
            </div>

            <p className="text-[1.5rem]">
              Integrity: We hold ourselves to the highest ethical standards,
              always putting our clients' interests first. Trust is the
              foundation of our relationships. Transparency: We believe in open
              and honest communication. You'll always know where you stand with
              us, from fees to investment strategies. Excellence: Our team is
              comprised of experienced professionals who are passionate about
              what they do. We continually strive for excellence in every aspect
              of our work.
            </p>
          </div>
          <div className="text-center mb-20">
            <div className='flex items-center justify-center gap-10'>
              <img src={checked_icon} alt="" />
              <p className="text-[2rem] font-semibold mb-5">MEET OUR TEAM</p>
            </div>

            <p className="text-[1.5rem]">
              Our team of dedicated experts is the heart of Bulloak. With
              decades of combined experience in financial planning, investment
              management, tax strategy, and estate planning, they are committed
              to guiding you on your financial journey.
            </p>
          </div>
        </div>
        <TeamSwiper images={props.image} />

        <div className="bg-[#8E0789FF] h-[5rem] flex justify-center items-center text-white text-center my-20 py-14">
          <p className="text-[1.5rem]">
            We specialize in comprehensive wealth <br /> management services
          </p>
        </div>
      </MainLayout>
    </div>
  );
};

export default WhoWeAre;
