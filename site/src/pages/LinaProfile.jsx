import React from 'react';

export default function LinaProfile() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f43f5e] font-mono flex flex-col items-center justify-center p-4 selection:bg-[#f43f5e] selection:text-black">
      
      {/* Головний ретро-контейнер */}
      <div className="w-full max-w-md border-2 border-[#f43f5e] bg-black p-6 shadow-[6px_6px_0px_0px_rgba(244,63,94,1)] relative overflow-hidden">
        
        {/* Декоративні Y2K елементи по кутах */}
        <div className="absolute top-2 left-2 text-[10px] opacity-40 uppercase tracking-widest">✦ lina_system_v1.0</div>
        <div className="absolute top-2 right-2 flex gap-1.5 text-sm">
          <span className="animate-pulse">🦇</span>
          <span>🎀</span>
          <span>💀</span>
        </div>

        {/* Шапка профілю */}
        <div className="text-center mt-6 mb-8">
          <h1 className="text-3xl font-black uppercase tracking-widest text-white border-b-2 border-[#f43f5e] pb-2 inline-block">
            MARCELINA
          </h1>
          <p className="text-xs text-zinc-400 mt-2 tracking-wider">welcome to the digital void</p>
        </div>

        {/* Блок з Біо / Статусом */}
        <div className="space-y-3 border-2 border-dashed border-zinc-800 p-4 mb-6 bg-zinc-950/60">
          <p className="text-sm text-zinc-300 leading-relaxed">
            <span className="text-white font-bold">INFO:</span> Текст твоєї біографії. Естетика 2000-х, шматочки коду, віртуальний простір та атмосфера нічного інтернету.
          </p>
          <div className="text-[11px] text-zinc-500 flex justify-between border-t border-zinc-900 pt-2">
            <span>STATUS: ONLINE</span>
            <span>MOOD: CRYPTIC 🌐</span>
          </div>
        </div>

        {/* Кнопки-посилання (можеш змінити href на свої реальні лінки) */}
        <div className="space-y-3">
          <a 
            href="https://instagram.com/" 
            target="_blank" 
            rel="noreferrer"
            className="block text-center border-2 border-[#f43f5e] py-2.5 text-sm uppercase font-bold tracking-wider hover:bg-[#f43f5e] hover:text-black transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(244,63,94,1)] hover:shadow-none translate-x-0 hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            ✦ INSTAGRAM
          </a>
          
          <a 
            href="https://t.me/" 
            target="_blank" 
            rel="noreferrer"
            className="block text-center border-2 border-[#f43f5e] py-2.5 text-sm uppercase font-bold tracking-wider hover:bg-[#f43f5e] hover:text-black transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(244,63,94,1)] hover:shadow-none translate-x-0 hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            ✦ TELEGRAM
          </a>

          <a 
            href="https://github.com/nfekacrypto-lang" 
            target="_blank" 
            rel="noreferrer"
            className="block text-center border-2 border-[#f43f5e] py-2.5 text-sm uppercase font-bold tracking-wider hover:bg-[#f43f5e] hover:text-black transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(244,63,94,1)] hover:shadow-none translate-x-0 hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            ✦ GITHUB
          </a>
        </div>

        {/* Футер */}
        <div className="text-center text-[9px] text-zinc-600 mt-8 tracking-widest uppercase">
          © 2026 LINAZXI. ALL RIGHTS RESERVED.
        </div>

      </div>
    </div>
  );
}
