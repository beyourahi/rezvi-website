import Image from "next/image";
import { Description } from "./description";

export const About: React.FC = () => (
  <div id="about" className="min-h-screen container mx-auto px-6 lg:px-28 flex flex-col-reverse gap-y-12 lg:flex-row items-center justify-between gap-x-28">
    {/* Description */}
    <Description />

    {/* Image */}
    <Image
      src="/images/woman.jpg"
      alt="woman"
      width={1500}
      height={1500}
      objectFit="contain"
      className="grayscale hover:grayscale-0 transition-all duration-150 ease-linear cursor-pointer"
    />
  </div>
);
