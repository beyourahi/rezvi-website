interface ButtonProps {
  link?: string;
  classNames?: string;
  children: React.ReactNode | string;
}

export const Button: React.FC<ButtonProps> = ({ link, classNames, children }) => (
  <a
    href={link}
    className={`px-12 py-4 lg:py-5 text-white active:scale-90 rounded-xl transition-all duration-150 ease-linear ${classNames}`}
  >
    {children}
  </a>
);

Button.defaultProps = {
  classNames: "bg-amber-500 hover:bg-amber-600"
}
