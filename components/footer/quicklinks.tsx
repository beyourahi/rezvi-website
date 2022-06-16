export const Quicklinks: React.FC = () => (
  <>
    <h3 className="text-2xl font-bold">
      <span className="decoration-2 decoration-amber-600 underline underline-offset-8">
        Quick
      </span>{" "}
      Links
    </h3>

    <ul className="text-lg flex flex-col gap-y-2">
      <li className="hover:text-amber-600 transition-all duration-200 ease-linear">
        <a href="#about">About Me</a>
      </li>
      <li className="hover:text-amber-600 transition-all duration-200 ease-linear">
        <a href="#services">Services</a>
      </li>
      <li className="hover:text-amber-600 transition-all duration-200 ease-linear">
        <a href="#">Projects</a>
      </li>
      <li className="hover:text-amber-600 transition-all duration-200 ease-linear">
        <a href="#">Testimonials</a>
      </li>
      <li className="hover:text-amber-600 transition-all duration-200 ease-linear">
        <a href="#">Get a Quote</a>
      </li>
      <li className="hover:text-amber-600 transition-all duration-200 ease-linear">
        <a href="#">Contact</a>
      </li>
    </ul>
  </>
);
