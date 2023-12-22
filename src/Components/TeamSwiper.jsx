import { SwiperSlide } from 'swiper/react';
import team1_img from '../assets/team1_img.png';
import team2_img from '../assets/team2_img.png';
import team3_img from '../assets/team3_img.png';


import TeamSwiperCard from './utils/reusables/TeamSwiperCard';
import Swiperjs from './utils/reusables/Swiperjs';

const items = [
  '$0 commissions for stocks, ETFs, and options',
  'Intuitive tools and support for traders',
  'Discuss market trends with other investors',
];


const TeamSwiper = () => {
  return (
    <>
      <Swiperjs>
        <SwiperSlide>
          <TeamSwiperCard image={team1_img} items={items} />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperCard image={team2_img} items={items} />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSwiperCard image={team3_img} items={items} />
        </SwiperSlide>
      </Swiperjs>
    </>
  );
};

export default TeamSwiper;
