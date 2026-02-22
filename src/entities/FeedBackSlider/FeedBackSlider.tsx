import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function FloatingCarousel() {
  const images = [
    '/src/assets/images/feedback/feedback1.jpg',
    '/src/assets/images/feedback/feedback2.jpg',
    '/src/assets/images/feedback/feedback3.jpg',
    '/src/assets/images/feedback/feedback4.jpg',
    '/src/assets/images/feedback/feedback5.jpg',
    '/src/assets/images/feedback/feedback6.jpg',
    '/src/assets/images/feedback/feedback7.jpg',
    '/src/assets/images/feedback/feedback8.jpg',
    '/src/assets/images/feedback/feedback9.jpg',
    '/src/assets/images/feedback/feedback10.jpg',
    '/src/assets/images/feedback/feedback11.jpg',
    '/src/assets/images/feedback/feedback12.jpg',
    '/src/assets/images/feedback/feedback13.jpg',
    '/src/assets/images/feedback/feedback15.jpg',
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
        640: {
          slidesPerView: 2,  
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3, 
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,   
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 5,   
          spaceBetween: 20,
        },
      }}        
      className="mySwiper bg-[#504C4C]"
    >
      {images.map((img, i) => (
<SwiperSlide key={i}>
  <div className="bg-[#ffffff] h-[400px] overflow-hidden rounded-2xl overflow-hidden my-5">
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