import React from 'react';

export default function LinaProfile() {
  const telegramLink = "https://t.me/+baJbJy9ycT05NGVi";

  return (
    <div className="min-h-screen bg-[#0D0C10] text-white flex flex-col items-center pb-12 select-none antialiased">
      
      {/* Контейнер адаптований під мобільні екрани */}
      <main className="w-full max-w-md flex flex-col items-center">
        
        {/* 1. ТОП ФОТО (Твій новий фон у високій якості) */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-950">
          <img 
            src="https://i.ibb.co/hFTvctcJ/image-4.jpg" 
            alt="Lina_zxi profile background" 
            className="w-full h-full object-cover"
          />
          {/* Темний градієнт знизу для чіткості тексту */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C10] via-black/20 to-transparent" />
          
          {/* Нікнейм поверх фону */}
          <div className="absolute bottom-6 w-full text-center px-4">
            <h1 className="font-fredoka text-4xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Lina_zxi
            </h1>
            <p className="text-zinc-300 text-sm mt-2 font-medium drop-shadow-sm">Welcome to my little world ✨</p>
          </div>
        </div>

        {/* Блок із ДВОМА кнопками */}
        <div className="w-full px-4 flex flex-col gap-5 mt-6">
          
          {/* 🔥 КНОПКА 1: З КАРТИНКОЮ */}
          <a href={telegramLink} target="_blank" rel="noreferrer"
             className="relative w-full h-48 rounded-3xl overflow-hidden block group active:scale-[0.98] transition-transform border border-zinc-800/50 shadow-xl">
            <img 
              src="https://i.ibb.co/bMkk6BZs/D23-AB150-4-A94-4-C17-A100-36-DFC4-EB9-F11.png" 
              alt="VIP Chat Preview" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Тінь поверх картинки, щоб текст світився */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-5 left-5">
              <span className="text-xl font-bold tracking-wide flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                💬 Chat with me 💋
              </span>
            </div>
          </a>

          {/* 🔥 КНОПКА 2: ТЕКСТОВА КНОПКА ТЕЛЕГРАМ */}
          <a href={telegramLink} target="_blank" rel="noreferrer"
             className="w-full bg-white text-black py-4 rounded-2xl font-bold text-xl text-center shadow-md active:scale-[0.99] transition-transform block no-underline tracking-wide">
            ✈️ My Telegram
          </a>

        </div>

      </main>
    </div>
  );
}
