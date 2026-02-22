import s from './styles.module.css'
export default function AboutUs() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="w-full object-cover"
        src="/src/assets/images/sfx-background1.png"
        alt=""
      />

      <div className={s.overlay}></div>
      <div className="absolute top-1 left-1 w-90 text-[#e2e2e2] z-100 bg-[#33313165] bg-opacity-50 rounded-2xl p-3 sm:top-10 sm:left-10 lg:w-105">
      <p className='text-[16px] sm:text-2xl lg:text-3xl lg:pb-2'>О Нас</p>
      <p className='text-[13px] sm:text-[15px] lg:text-[16px]'>
        Мы - SFX Motors. 
        <br />
        Нашей истории положило начало творческое объединение близких по духу людей, увлечённых миром мотоциклов и авто, в последствии, и заложивших фундамент для создания Компании. Вместо 1000 слов, мы просто скажем - мы любим своё дело и вкладываем в него наше стремление сделать мир лучше.
      </p>
      </div>
    </div>
  );
}