import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const Info: React.FC = () => (
  <>
    <h2 className="text-3xl font-bold">
      Raihana <span className="underline underline-offset-8 decoration-amber-600">Rezvi</span>
    </h2>

    <div className="flex flex-col gap-3 text-lg">
      <h4 className="flex items-center gap-3">
        <span className="text-amber-600 text-2xl">
          <MdLocationOn />
        </span>
        <span>Uttara, Dhaka, Bangladesh</span>
      </h4>
      <h4 className="flex items-center gap-3">
        <span className="text-amber-600 text-2xl">
          <MdEmail />
        </span>
        <a href="mailto:raihana.rezvi@gmail.com">raihana.rezvi@gmail.com</a>
      </h4>
      <h4 className="flex items-center gap-3">
        <span className="text-amber-600 text-2xl">
          <FaPhoneAlt />
        </span>
        <span>+880 1873146334</span>
      </h4>
    </div>
  </>
);
