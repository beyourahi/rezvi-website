import { Button } from "@/utils/button";
import { Arrow } from "./arrow";
import { Masthead } from "./masthead";
import { Video } from "./video";

export const Hero: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center">
    {/* Video background */}
    <Video />

    <div className="flex flex-col gap-9 text-white font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] w-full px-6 lg:px-0 lg:w-[50vw]">
      {/* Masthead */}
      <Masthead />

      {/* CTA Buttons */}
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6 mt-5 text-lg lg:text-xl text-center tracking-wide">
        <Button link="#">Get a Quote</Button>
      </div>
    </div>

    {/* Scroll down arrow */}
    <Arrow />
  </section>
);
