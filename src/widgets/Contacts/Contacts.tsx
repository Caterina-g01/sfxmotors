import YouTubeIcon from '@/assets/icons/youtube-icon.svg';
import YouTubeColor from '@/assets/icons/youtube-color.svg';
import InstagramIcon from '@/assets/icons/insta-icon.svg';
import InstagramColor from '@/assets/icons/insta-color.svg';
import TelegramIcon from '@/assets/icons/telegram-icon.svg';
import TelegramColor from '@/assets/icons/telegram-color.svg';
import PhoneIcon from '@/assets/icons/phone1.svg';

export default function Contacts() {
  const icons = [
    {
      name: 'YouTube',
      src: YouTubeIcon,
      hover: YouTubeColor,
      link: 'https://www.youtube.com/@sfxmotors',
    },
    {
      name: 'Instagram',
      src: InstagramIcon,
      hover: InstagramColor,
      link: 'https://www.instagram.com/sfxmotors/',
    },
    {
      name: 'Telegram',
      src: TelegramIcon,
      hover: TelegramColor,
      link: 'https://t.me/sfxmoto',
    },
  ];

  return (
    <div>
      <p className="text-[#202020] text-2xl text-center mt-3">
        Хотите задать вопрос? Связаться c нами просто!
      </p>

      <div className="w-auto h-0.5 bg-[#c7c7c74b] rounded-full mt-5"></div>

      <ul className="flex gap-8 py-6 justify-center">
        {icons.map((icon) => (
          <li key={icon.name}>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-10 transition-all duration-300"
                src={icon.src}
                alt={icon.name}
                onMouseOver={(e) => (e.currentTarget.src = icon.hover)}
                onMouseOut={(e) => (e.currentTarget.src = icon.src)}
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="w-35 h-0.5 bg-[#c7c7c74b] rounded-full mx-auto"></div>

      <div className="flex flex-col items-center py-6">
        <div className="flex flex-col gap-4">
          <a
            className="text-[#202020] hover:text-[#767676] flex flex-row gap-2 lg:text-[20px]"
            href="tel:+375293703366"
          >
            <img className="w-7" src={PhoneIcon} alt="номер 1" />
            +375 (29) 370-33-66
          </a>

          <a
            className="text-[#202020] hover:text-[#767676] flex flex-row gap-2 lg:text-[20px]"
            href="tel:+79938841003"
          >
            <img className="w-7" src={PhoneIcon} alt="номер 2" />
            +7 (993) 884-10-03
          </a>
        </div>
      </div>

      <div className="w-auto h-0.5 bg-[#c7c7c74b] rounded-full mb-13"></div>
    </div>
  );
}