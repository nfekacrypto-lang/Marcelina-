import { Sparkles, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-[200px] h-[260px] md:w-[220px] md:h-[290px] rounded-[36px] overflow-hidden border-[4px] border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] bg-white">
          <img src="https://i.ibb.co/5XPWqZFM/photo-2026-06-15-17-51-30.jpg" alt="Lina_zxi avatar" className="w-full h-full object-cover" />
        </div>
        <Sparkles className="absolute -top-5 -right-5 w-12 h-12 text-[#FF1493] animate-pulse z-20" fill="currentColor" />
      </div>
      <h1 className="font-fredoka text-5xl md:text-6xl text-[#1C1628] mb-4 text-center">Lina_zxi</h1>
      <div className="bg-white px-6 py-3 rounded-full border-[4px] border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a] flex items-center gap-2 mb-10">
        <span className="font-bold text-lg text-[#1C1628]">Welcome to my little world</span>
        <Heart className="w-5 h-5 fill-[#FF1493] text-[#FF1493]" />
      </div>
    </div>
  );
}