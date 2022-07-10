import { Button } from "@/utils/button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const CTA: React.FC = () => (
  <div className="container mx-auto lg:px-28 text-center h-[60vh] flex flex-col gap-y-14 justify-center items-center">
    <h1 className="text-4xl lg:text-5xl font-bold leading-normal">Turn your traffic into loyal customers <br /> and return visitors.</h1>
    <Button
      link=""
      classNames="bg-amber-500 hover:bg-amber-600 flex gap-x-2.5 items-center font-bold group text-base lg:text-xl"
    >
      <span>Get Started</span>{" "}
      <BsFillArrowRightCircleFill className="group-hover:translate-x-1 transition-all duration-150 ease-linear" />
    </Button>
  </div>
)
