export default function FloatingCharacters() {
  return (
    <>
      <div className="absolute top-20 left-10 text-6xl opacity-80 animate-float-slow z-0 pointer-events-none select-none">🦇</div>
      <div className="absolute top-40 right-10 md:right-32 text-6xl opacity-80 animate-float-med z-0 pointer-events-none select-none">🎀</div>
      <div className="absolute bottom-40 left-10 md:left-32 text-6xl opacity-80 animate-float-fast z-0 pointer-events-none select-none">💀</div>
    </>
  );
}