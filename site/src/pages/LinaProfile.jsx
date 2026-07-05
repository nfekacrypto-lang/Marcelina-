import React from 'react';

export default function LinaProfile() {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-8 pb-16 px-4 select-none overflow-hidden">
      
      {/* Фонові Y2K літаючі елементи */}
      <div className="absolute top-12 left-6 text-5xl md:text-7xl animate-float-slow opacity-60 z-0 pointer-events-none">🦇</div>
      <div className="absolute top-28 right-6 md:right-32 text-5xl md:text-7xl animate-float-med opacity-60 z-0 pointer-events-none">🎀</div>
      <div className="absolute bottom-20 left-8 md:left-32 text-5xl md:text-7xl animate-float-fast opacity-60 z-0 pointer-events-none">💀</div>

      <main className="w-full max-w-[450px] md:max-w-2xl flex flex-col items-center z-10 mt-4">
        
        {/* Блок Аватарки — Твоє нове фото */}
        <div className="relative mb-8">
          <div className="w-[260px] h-[340px] sm:w-[290px] sm:h-[380px] md:w-[340px] md:h-[440px] rounded-[36px] overflow-hidden neo-brutalism bg-white">
            <img 
              src="https://i.ibb.co/5WvBrVPy/photo.jpg" 
              alt="Lina_zxi avatar" 
              className="w-full h-full object-cover hd-img"
            />
          </div>
          {/* Іконка Sparkles */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF1493" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-4 -right-4 w-14 h-14 animate-pulse z-20 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
          </svg>
        </div>

        {/* Нікнейм */}
        <h1 className="font-fredoka text-5xl sm:text-6xl md:text-7xl text-[#1C1628] drop-shadow-[4px_4px_0px_#fff] mb-4 text-center tracking-wide w-full">
          Lina_zxi
        </h1>

        {/* Біо */}
        <div className="bg-white px-6 py-3 rounded-full neo-brutalism flex items-center justify-center gap-2 mb-10 w-auto max-w-full">
          <span className="font-bold text-base sm:text-lg md:text-xl text-[#1C1628] text-center">Welcome to my little world</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF1493" className="w-5 h-5 flex-shrink-0 animate-bounce">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div>

        {/* Контейнер з єдиною головною VIP-кнопкою Stacked */}
        <div className="w-full flex flex-col gap-6 px-2">
          
          <a href="https://www.stacked.com/@Lina_zxi/membership?lang=en" target="_blank" rel="noreferrer"
             className="w-full text-white py-5 sm:py-6 px-6 rounded-2xl neo-brutalism-btn flex items-center justify-center gap-4 group relative overflow-hidden no-underline animate-vip-flash">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 group-hover:rotate-12 transition-transform">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="font-fredoka text-2xl sm:text-3xl tracking-wide font-bold">Chat with me</span>
          </a>

        </div>

      </main>
    </div>
  );
}
