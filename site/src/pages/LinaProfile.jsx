import React from 'react';

export default function LinaProfile() {
  return (
    <div className="relative min-h-screen pb-12 flex flex-col items-center pt-6 px-4 select-none overflow-hidden">
      
      {/* Фонові Y2K літаючі елементи (делікатні, щоб не заважати на мобільних) */}
      <div className="absolute top-12 left-4 text-4xl animate-float-slow opacity-60 z-0 pointer-events-none">🦇</div>
      <div className="absolute top-24 right-4 text-4xl animate-float-med opacity-60 z-0 pointer-events-none">🎀</div>
      <div className="absolute bottom-24 left-6 text-4xl animate-float-fast opacity-60 z-0 pointer-events-none">💀</div>

      <main className="w-full max-w-md flex flex-col items-center z-10 mt-2">
        
        {/* Блок Аватарки */}
        <div className="relative mb-4">
          <div className="w-[170px] h-[220px] rounded-[28px] overflow-hidden neo-brutalism bg-white">
            <img 
              src="https://i.ibb.co/5XPWqZFM/photo-2026-06-15-17-51-30.jpg" 
              alt="Lina_zxi avatar" 
              className="w-full h-full object-cover hd-img"
            />
          </div>
          {/* Іконка Sparkles */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF1493" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-3 -right-3 w-10 h-10 animate-pulse z-20 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
          </svg>
        </div>

        {/* Нікнейм */}
        <h1 className="font-fredoka text-4xl text-[#1C1628] drop-shadow-[3px_3px_0px_#fff] mb-2 text-center tracking-wide">
          Lina_zxi
        </h1>

        {/* Біо */}
        <div className="bg-white px-5 py-2 rounded-full neo-brutalism flex items-center justify-center gap-2 mb-8 w-auto">
          <span className="font-bold text-sm md:text-base text-[#1C1628]">Welcome to my little world</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF1493" className="w-4 h-4 animate-bounce">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div>

        {/* Контейнер кнопок */}
        <div className="w-full flex flex-col gap-5 max-w-sm">
          
          {/* ГОЛОВНА ТАРГЕТ КНОПКА: Chat with me (Fanvue) */}
          <a href="https://www.fanvue.com/lina_zxi" target="_blank" rel="noreferrer"
             className="w-full text-white py-4 px-6 rounded-2xl neo-brutalism flex items-center justify-center gap-3 group relative overflow-hidden no-underline animate-vip-flash">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:rotate-12 transition-transform">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="font-fredoka text-xl tracking-wide">Chat with me</span>
          </a>

          {/* ВТОРИННА КНОПКА: My telegram */}
          <a href="https://t.me/+baJbJy9ycT05NGVi" target="_blank" rel="noreferrer"
             className="w-full bg-white text-[#1C1628] py-4 px-6 rounded-2xl neo-brutalism flex items-center justify-center gap-3 font-fredoka text-xl tracking-wide transition-all no-underline active:translate-x-[2px] active:translate-y-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#0088cc]">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>
            </svg>
            <span>My telegram</span>
          </a>

        </div>

      </main>
    </div>
  );
}
