
import Logo from '@/assets/icons/Logo.png';
import PhoneIcon from '@/assets/icons/phone-icon.svg';
export default function Header() {

  return (
    <header className="bg-[#262424]">
      <nav className="container mx-auto px-5 py-2 flex justify-between items-center">
        <img className="h-20 w-20" src={Logo} alt="Logo" />
        <ul className="space-x-6 hidden md:flex">
          <li className="cursor-pointer transition-colors duration-300 hover:text-[#f6ecbc]">
            <a href="#contacts">Контакты</a>
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-[#f6ecbc]">
            <a href="#about">О Нас</a>
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-[#f6ecbc]">
            <a href="#reviews">Отзывы</a>
          </li>
        </ul>
        <div className="flex flex-col space-y-2">
          <img
            className="hidden w-6"
            src={PhoneIcon}
            alt="Phone icon"
          />

          <a
            className="transition-colors duration-300 hover:text-[#fff6c9] text-[13px]"
            href="tel:+375293703366"
          >
            +375 (29) 370-33-66
          </a>

          <a
            className="transition-colors duration-300 hover:text-[#fff6c9] text-[13px]"
            href="tel:+79938841003"
          >
            +7 (993) 884-10-03
          </a>
        </div>
      </nav>
    </header>
  );
}
