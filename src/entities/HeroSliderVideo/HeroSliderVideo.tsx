export default function HeroSliderVideo() {
  return (
    <div className="relative w-full  overflow-hidden">
      <video
        src="/src/assets/images/heroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-6xl font-bold drop-shadow-lg">
          
        </h1>
      </div>
    </div>
  );
}