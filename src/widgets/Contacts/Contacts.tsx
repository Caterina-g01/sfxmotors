import React from 'react'

export default function Contacts() {
  const icons = [
    { name: 'YouTube', src: 'youtube-icon.svg', link: 'https://www.youtube.com/@sfxmotors' },
    { name: 'Instagram', src: 'insta-icon.svg', link: 'https://www.instagram.com/sfxmotors/' },
    { name: 'Telegram', src: 'telegram-icon.svg', link: 'https://t.me/sfxmoto' },
  ];

  return (
    <div>
      <p className='text-[#202020] text-2xl text-center mt-3'>Хотите задать вопрос? Связаться c нами просто!</p>

      <div className="w-auto h-0.5 bg-[#c7c7c74b] rounded-full mt-5"></div>

      <ul className='flex gap-8 py-6 justify-center'>
        {icons.map((icon) => (
          <li key={icon.name}>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-10 transition-all duration-300"
                src={`/src/assets/icons/${icon.src}`}
                alt={icon.name}
                onMouseOver={(e) =>
                  (e.currentTarget.src = `/src/assets/icons/${icon.src.replace('-icon', '-color')}`)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = `/src/assets/icons/${icon.src}`)
                }
              />
            </a>
          </li>
        ))} 
      </ul>
       <div className="w-35 h-0.5 bg-[#c7c7c74b] rounded-full mx-auto"></div>
       <div className="flex flex-col items-center py-6">
        <div className="flex flex-col gap-4">
            <a className="text-[#202020] hover:text-[#767676] flex flex-row gap-2" href="tel:+375293703366">
                <img className='w-7' src="/src/assets/icons/phone1.svg" alt="номер 1" />
              +375 (29) 370-33-66
            </a>
            <a className="text-[#202020] hover:text-[#767676] flex flex-row gap-2" href="tel:+79938841003">
                <img className='w-7' src="/src/assets/icons/phone1.svg" alt="номер 2" />
              +7 (993) 884-10-03
            </a>
            </div>
          </div>

      <div className="w-auto h-0.5 bg-[#c7c7c74b] rounded-full mb-13"></div>
    </div>
  )
}