import React from 'react';

export default function LinaProfile() {
  // Твоє єдине посилання для всіх кнопок
  const telegramLink = "https://t.me/+baJbJy9ycT05NGVi";

  return (
    <div className="min-h-screen bg-[#0D0C10] text-white flex flex-col items-center pb-12 select-none antialiased">
      
      {/* Контейнер адаптований під мобільні екрани */}
      <main className="w-full max-w-md flex flex-col items-center">
        
        {/* 1. ТОП ФОТО (Новий фон з твого посилання https://ibb.co/gbYVnwP6) */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-950">
          <img 
            src="ВСТАВ_СЮДИ_ПРЯМЕ_ПОСИЛАННЯ_НА_ФОН_З_IMGBB" 
            alt="Lina_zxi profile background" 
            className="w-full h-full object-cover"
          />
          {/* Темний градієнт знизу для чіткості тексту */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C10] via-black/10 to-transparent" />
          
          {/* Нікнейм поверх фону */}
          <div className="absolute bottom-6 w-full text-center px-4">
            <h1 className="font-fredoka text-4xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Lina_zxi
            </h1>
            <p className="text-zinc-300 text-sm mt-2 font-medium drop-shadow-sm">Welcome to my little world ✨</p>
          </div>
        </div>

        {/* Блок кнопок */}
        <div className="w-full px-4 flex flex-col gap-4 mt-6">
          
          {/* ========================================================== */}
          {/* 2. ГОЛОВНА КНОПКА З КАРТИНКОЮ (З твого посилання https://ibb.co/67kkyPxH) */}
          {/* ========================================================== */}
          <a href={telegramLink} target="_blank" rel="noreferrer"
             className="relative w-full h-48 rounded-3xl overflow-hidden block group active:scale-[0.98] transition-transform border border-zinc-800/50 shadow-xl">
            <img 
              src="ВСТАВ_СЮДИ_ПРЯМЕ_ПОСИЛАННЯ_НА_КНОПКУ_З_IMGBB" 
              alt="VIP Preview" 
              /* 
                💡 object-[50%_50%] (або object-center) центрує картинку ідеально по середині.
                Якщо треба опустити фокус (показати більше верху) — став наприклад 50% 40%.
                Якщо треба підняти фокус (показати більше низу) — став 50% 60%.
              */
              className="w-full h-full object-cover object-[50%_50%] group-hover:scale-105 transition-transform duration-500"
            />
            {/* Градієнтна підкладка всередині кнопки */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            {/* Текст на кнопці-картці */}
            <div className="absolute bottom-5 left-5">
              <span className="text-xl font-bold tracking-wide flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                💬 Chat with me 💋
              </span>
            </div>
          </a>

          <div className="my-1" />

          {/* ========================================================== */}
          {/* 3. ТЕКСТОВІ КНОПКИ (Усі ведуть в той самий Telegram)        */}
          {/* ========================================================== */}
          
          <a href={telegramLink} target="_blank" rel="noreferrer"
             className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg text-center shadow-md active:scale-[0.99] transition-transform block no-underline">
            👑 VIP Membership
          </a>

          <a href={telegramLink} target="_blank" rel="noreferrer"
             className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg text-center shadow-md active:scale-[0.99] transition-transform block no-underline">
            🔗 Instagram
          </a>

          <a href={telegramLink} target="_blank" rel="noreferrer"
             className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg text-center shadow-md active:scale-[0.99] transition-transform block no-underline">
            🔗 TikTok
          </a>

        </div>

      </main>
    </div>
  );
}
