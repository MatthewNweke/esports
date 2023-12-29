import { SwiperSlide } from 'swiper/react';
import slider_image1 from '../assets/slider_image1.jpg';
import slider_image2 from '../assets/slider_image2.jpg';
import slider_image3 from '../assets/slider_image3.jpg';
import StockSwiperCard from './utils/reusables/StockSwiperCard';
import Swiperjs from './utils/reusables/Swiperjs';

const item1 = [
  `I have invested money in this platform and gotten my 
  money in my account.This is legit and safe.Great doing business with them`
];
const item2 = [
  `legit .... and legit although the payment was processed manually,
  I have received my first payment within a very short time.,i think 
  it is nice to invest on this platform
  `
];
const item3 = [
  `I have invested with this platform and gotten money to in my account.This is legit and safe.Great doing business with them`
];
const aboutMe__1 =[
`Donald I `, 
`User from Texas`
]
const aboutMe__2 =[
`Sundax Ezma `,
`User from USA`
]
const aboutMe__3 =[
`Monalis Thakur `,
`User from India`
]

const StockSwiper = () => {
  return (
    <>
      <Swiperjs>
        <SwiperSlide>
          <StockSwiperCard about={aboutMe__1} image={slider_image1 } items={item1} />
        </SwiperSlide>
        <SwiperSlide>
          <StockSwiperCard about={aboutMe__2} image={slider_image2} items={item2} />
        </SwiperSlide>
        <SwiperSlide>
          <StockSwiperCard about={aboutMe__3} image={slider_image3} items={item3} />
        </SwiperSlide>
      </Swiperjs>
    </>
  );
};

export default StockSwiper;
