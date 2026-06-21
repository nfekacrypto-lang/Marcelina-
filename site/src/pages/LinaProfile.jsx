import React, { useEffect } from 'react';

export default function LinaProfile() {
  useEffect(() => {
    // Динамічно підвантажуємо Swiper для роботи 3D галереї
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    script.onload = () => {
      if (window.Swiper) {
        new window.Swiper('.swiper', {
          effect: 'cards',
          grabCursor: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen pb-20 flex flex-col items-center pt-12 px-4 select-none">
      
      {/* Фонові Y2K літаючі елементи */}
      <div className="absolute top-20 left-10 text-6xl animate-float-slow opacity-80 z-0 pointer-events-none">🦇</div>
      <div className="absolute top-40 right-10 md:right-32 text-6xl animate-float-med opacity-80 z-0 pointer-events-none">🎀</div>
      <div className="absolute bottom-40 left-10 md:left-32 text-6xl animate-float-fast opacity-80 z-0 pointer-events-none">💀</div>

      <main className="w-full max-w-2xl flex flex-col items-center z-10 mt-4">
        
        {/* Блок Аватарки */}
        <div className="relative mb-6">
          <div className="w-[200px] h-[260px] md:w-[220px] md:h-[290px] rounded-[36px] overflow-hidden neo-brutalism bg-white">
            <img 
              src="https://i.ibb.co/5XPWqZFM/photo-2026-06-15-17-51-30.jpg" 
              alt="Lina_zxi avatar" 
              className="w-full h-full object-cover hd-img"
            />
          </div>
          {/* Іконка Sparkles */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF1493" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-5 -right-5 w-12 h-12 animate-pulse z-20 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
          </svg>
        </div>

        {/* Нікнейм */}
        <h1 className="font-fredoka text-5xl md:text-6xl text-[#1C1628] drop-shadow-[4px_4px_0px_#fff] mb-4 text-center tracking-wide">
          Lina_zxi
        </h1>

        {/* Біо */}
        <div className="bg-white px-6 py-3 rounded-full neo-brutalism flex items-center justify-center gap-2 mb-10 w-auto">
          <span className="font-bold text-lg text-[#1C1628]">Welcome to my little world</span>
          {/* Іконка серця */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF1493" className="w-5 h-5 animate-bounce">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div>

        {/* Кнопки */}
        <div className="w-full flex flex-col gap-5 mb-14">
          
          {/* 1 КНОПКА: VIP КНОПКА (Fanvue) */}
          <a href="https://www.fanvue.com/lina_zxi" target="_blank" rel="noreferrer"
             className="w-full text-white py-5 px-6 rounded-2xl neo-brutalism-btn flex items-center justify-center gap-3 group relative overflow-hidden no-underline animate-vip-flash">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 group-hover:rotate-12 transition-transform">
              <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14a1 1 0 0 0 1-1v-1H4v1a1 1 0 0 0 1 1z"/>
            </svg>
            <span className="font-fredoka text-2xl tracking-wide">My Exclusive VIP Content</span>
          </a>

          {/* 2 КНОПКА: Chat with me (Fanvue) */}
          <a href="https://www.fanvue.com/lina_zxi" target="_blank" rel="noreferrer"
             className="w-full bg-[#FFD1E3] text-[#1C1628] py-5 px-6 rounded-2xl border-4 border-black font-fredoka text-2xl tracking-wide flex items-center justify-center gap-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>Chat with me</span>
          </a>

          {/* 3 КНОПКА: My telegram (Telegram) */}
          <a href="https://t.me/+baJbJy9ycT05NGVi" target="_blank" rel="noreferrer"
             className="w-full bg-white text-[#1C1628] py-5 px-6 rounded-2xl border-4 border-black font-fredoka text-2xl tracking-wide flex items-center justify-center gap-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#0088cc]">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>
            </svg>
            <span>My telegram</span>
          </a>

        </div>

        {/* Галерея */}
        <div className="w-full bg-[#FF9E9E]/90 p-6 md:p-10 rounded-[40px] neo-brutalism flex flex-col items-center">
          <h2 className="font-fredoka text-4xl text-[#1C1628] mb-8 flex items-center gap-3 drop-shadow-[2px_2px_0px_#fff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Gallery
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </h2>

          <div className="w-full flex justify-center">
            <div className="swiper swiper-cards">
              <div className="swiper-wrapper">
                <div className="swiper-slide rounded-2xl neo-brutalism bg-white overflow-hidden">
                  <img src="https://i.ibb.co/chzKGkGR/seedream-9524.jpg" className="w-full h-full object-cover hd-img" alt="Gallery 1" />
                </div>
                <div className="swiper-slide rounded-2xl neo-brutalism bg-white overflow-hidden">
                  <img src="https://i.ibb.co/R5MdRC4/IMG-9199.jpg" className="w-full h-full object-cover hd-img" alt="Gallery 2" />
                </div>
                <div className="swiper-slide rounded-2xl neo-brutalism bg-white overflow-hidden">
                  <img src="https://i.ibb.co/NgX00m8C/seedream-3742.jpg" className="w-full h-full object-cover hd-img" alt="Gallery 3" />
                </div>
                <div className="swiper-slide rounded-2xl neo-brutalism bg-white overflow-hidden">
                  <img src="https://i.ibb.co/SX30RYKQ/IMG-3526.jpg" className="w-full h-full object-cover hd-img" alt="Gallery 4" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
