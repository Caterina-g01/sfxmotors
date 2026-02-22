import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import feedback1 from '@/assets/images/feedback/feedback1.jpg';
import feedback2 from '@/assets/images/feedback/feedback2.jpg';
import feedback3 from '@/assets/images/feedback/feedback3.jpg';
import feedback4 from '@/assets/images/feedback/feedback4.jpg';
import feedback5 from '@/assets/images/feedback/feedback5.jpg';
import feedback6 from '@/assets/images/feedback/feedback6.jpg';
import feedback7 from '@/assets/images/feedback/feedback7.jpg';
import feedback8 from '@/assets/images/feedback/feedback8.jpg';
import feedback9 from '@/assets/images/feedback/feedback9.jpg';
import feedback10 from '@/assets/images/feedback/feedback10.jpg';
import feedback11 from '@/assets/images/feedback/feedback11.jpg';
import feedback12 from '@/assets/images/feedback/feedback12.jpg';
import feedback13 from '@/assets/images/feedback/feedback13.jpg';
import feedback15 from '@/assets/images/feedback/feedback15.jpg';

export default function FeedBackSlider() {
  const images = [
    feedback1,
    feedback2,
    feedback3,
    feedback4,
    feedback5,
    feedback6,
    feedback7,
    feedback8,
    feedback9,
    feedback10,
    feedback11,
    feedback12,
    feedback13,
    feedback15,
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={6000}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: 5, spaceBetween: 20 },
      }}
      className="mySwiper bg-[#504C4C]"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[#ffffff] h-[400px] overflow-hidden rounded-2xl my-5">
            <img
              src={img}
              alt=""
              className="w-auto h-full object-contain object-top"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}