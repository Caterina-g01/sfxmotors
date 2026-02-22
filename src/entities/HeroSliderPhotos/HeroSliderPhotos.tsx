import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import s from './styles.module.css';
import 'swiper/css';

export default function App() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [active, setActive] = useState(0);

  const slides = [
    '/src/assets/images/1.jpeg',
    '/src/assets/images/2.jpeg',
    '/src/assets/images/3.jpeg',
  ];

  const isStart = active === 0;
  const isEnd = active === slides.length - 1;

  return (
    <div className={s.wrapper}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        className={s.mySwiper}
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* стрелки */}
      <button
        className={`${s.arrow} ${s.prev} ${isStart ? s.disabled : ''}`}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isStart}
      >
        <svg viewBox="0 0 24 24">
          <path d="M15 5L8 12L15 19" />
        </svg>
      </button>

      <button
        className={`${s.arrow} ${s.next} ${isEnd ? s.disabled : ''}`}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
      >
        <svg viewBox="0 0 24 24">
          <path d="M9 5L16 12L9 19" />
        </svg>
      </button>

      {/* пагинация */}
      <div className={s.pagination}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${s.dot} ${active === i ? s.active : ''}`}
            onClick={() => swiperRef.current?.slideTo(i)}
          />
        ))}
      </div>
    </div>
  );
}