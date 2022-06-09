import Typewriter from 'typewriter-effect';

export const Hero: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center">
    {/* Video background */}
    <video autoPlay loop playsInline muted className="w-full h-full object-cover absolute brightness-[.35]">
      <source src="/videos/masthead_video.mp4" type="video/mp4" />
      {/* <source src="/videos/masthead_video_2.mp4" type="video/mp4" /> */}
    </video>

    <div className="flex flex-col gap-9 text-white font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] w-[50vw]">
      {/* Masthead */}
      <h1 className="text-[5.5rem] leading-none tracking-wide">Need Quality Content <br /> For Your {" "}
        <span className="underline underline-offset-[10px] decoration-amber-600">
          <Typewriter options={{ strings: ["Website?", "Blog?", "Article?", "Product?"], autoStart: true, loop: true }} />
        </span>
      </h1>
      <h2 className="text-4xl tracking-wide">
        You're in the right place!
      </h2>

      {/* CTA Buttons */}
      <div className="flex gap-x-8 mt-5 text-xl tracking-wide">
        <a href="#" className="bg-amber-600 hover:bg-amber-700 hover:scale-105 active:scale-90 rounded-lg px-10 py-4 transition-all duration-200 ease-linear">Get a Quote</a>
        <a href="#" className="rounded-lg px-12 py-4 border hover:border-amber-600 hover:bg-amber-600 hover:scale-105 active:scale-90 transition-all duration-200 ease-linear">About me</a>
      </div>
    </div>

    {/* Scroll down arrow */}
    <div className="indicator w-8 h-8 absolute bottom-8">
      <a href="#">
        <div></div>
        <div></div>
      </a>
    </div>
  </section >)
