import { Button } from "@/utils/button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Servicecard } from "./servicecard";
import { ServicesHeader } from "./servicesheader";

const servicesData = [
  {
    icon: "",
    title: "Website Content",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "SEO Content",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "Social Media Post",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "Blog Content",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "Slogans & Phrases",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "Product Description",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "Article Writing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
  {
    icon: "",
    title: "Caption Writing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti? Rem dolore perferendis eius itaque molestias eos non, dicta ab saepe in, cum cumque nam sint inventore quam, consequatur quod?",
  },
];

export const Services: React.FC = () => (
  <div
    id="services"
    className="min-h-screen container mx-auto px-6 lg:px-28 flex flex-col items-center justify-center gap-y-24"
  >
    {/* Services Header */}
    <ServicesHeader />

    {/* Service Card grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {servicesData.map((service, index) => (
        <Servicecard
          key={index}
          icon={service.icon}
          title={service.title}
          text={service.text}
        />
      ))}
    </div>

    {/* CTA button */}
    <Button
      link=""
      classNames="bg-amber-500 hover:bg-amber-600 flex gap-x-2.5 items-center font-bold group text-base lg:text-xl"
    >
      <span>Get Started</span>{" "}
      <BsFillArrowRightCircleFill className="group-hover:translate-x-1 transition-all duration-150 ease-linear" />
    </Button>
  </div>
);
