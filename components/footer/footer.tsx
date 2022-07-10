import { Copyright } from "./copyright";
import { Socials } from "./socials";
import { Quicklinks } from "./quicklinks";
import { Info } from "./info";

export const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-white min-h-screen lg:min-h-[60vh]">
    <div className="container mx-auto px-8 pt-20 divide-y divide-white/20 flex flex-col gap-y-16 lg:px-60 lg:pt-28 lg:h-[60vh]">

      <div className="flex flex-col lg:flex-row lg:justify-between lg:h-[80%] gap-y-16">
        <div className="flex flex-col gap-y-16">
          <Info />
        </div>

        <div className="flex flex-col gap-y-9">
          <Quicklinks />
        </div>

        <div className="flex flex-col gap-y-9">
          <Socials />
        </div>
      </div>

      <Copyright />
    </div>
  </footer>
);
