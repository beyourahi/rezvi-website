import { Button } from "@/utils/button";
import { Arrow } from "./arrow";
import { Masthead } from "./masthead";
import { Video } from "./video";

export const Hero: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-red-500 text-white">
    {/* Video background */}
    <Video />

    <div className="flex flex-col gap-9 text-white font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] w-[50vw]">
      {/* Masthead */}
      <Masthead />

      {/* CTA Buttons */}
      <div className="flex gap-x-8 mt-5 text-xl tracking-wide">
        <Button link="#">Get a Quote</Button>
        <Button
          link="#about"
          classNames="bg-transparent hover:border-amber-500 hover:bg-amber-500 border px-12"
        >
          About Me
        </Button>
      </div>
    </div>

    {/* Scroll down arrow */}
    <Arrow />
  </section>
);
