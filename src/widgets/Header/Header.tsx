
import Logo from '@/assets/icons/Logo.png';
import PhoneIcon from '@/assets/icons/phone-icon.svg';
export default function Header() {

  return (
<header className="bg-[#262424] overflow-visible">
  <nav className="container relative mx-auto px-2 py-4 flex justify-end">

    <img
      src={Logo}
      alt="Logo"
      className="absolute left-5 bottom-0 w-30 translate-y-1/2 z-50 lg:w-40" 
    />

 <ul className="text-white hidden md:flex md:flex-1 md:justify-center md:items-center md:space-x-8">
  <li className="cursor-pointer transition-colors duration-300 hover:text-[#f6ecbc]">
    <a className="text-[18px] lg:text-[18px]" href="#contacts">Контакты</a>
  </li>
  <li className="cursor-pointer transition-colors duration-300 hover:text-[#f6ecbc]">
    <a className="text-[18px] lg:text-[18px]" href="#about">О Нас</a>
  </li>
  <li className="cursor-pointer transition-colors duration-300 hover:text-[#f6ecbc]">
    <a className="text-[18px] lg:text-[18px]" href="#reviews">Отзывы</a>
  </li>
</ul>

    <div className="flex flex-col space-y-1 text-white">
      <div className="flex items-center gap-2">
        <img className="w-4 h-4 lg:w-6 lg:h-6" src={PhoneIcon} alt="Phone icon" />
        <a
          className="text-[13px] transition-colors duration-300 hover:text-[#fff6c9] lg:text-[16px]"
          href="tel:+375293703366"
        >
          +375 (29) 370-33-66
        </a>
      </div>

      <div className="flex items-center gap-2">
        <img className="w-4 h-4 lg:w-6 lg:h-6" src={PhoneIcon} alt="Phone icon" />
        <a
          className="text-[13px] transition-colors duration-300 hover:text-[#fff6c9] lg:text-[16px]"
          href="tel:+79938841003"
        >
          +7 (993) 884-10-03
        </a>
      </div>
    </div>

  </nav>
</header>
  );
}
