import Image from "next/image";

export const Review: React.FC = () => (
  <div className="drop-shadow-xl bg-white rounded-2xl p-8 flex flex-col gap-6 mx-4 hover:bg-coolBg hover:text-white transition-all duration-300 ease-out lg:mx-8">
    <div className="flex items-center gap-3">
      <Image
        src="/images/lead_team/Nipun.jpg"
        className="rounded-full"
        alt="icon"
        width={70}
        height={70}
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Random Person</h1>
        <h2 className="text-gray-400">Full Stack Developer</h2>
      </div>
    </div>

    <span>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
      suscipit.
    </span>
  </div>
);

