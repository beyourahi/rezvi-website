interface ButtonProps {
  link?: string;
  classNames?: string;
  children: React.ReactNode | string;
}

export const Button: React.FC<ButtonProps> = ({ link, classNames, children }) => (
  <a
    href={link}
    className={`px-10 text-white active:scale-90 rounded-lg py-4 transition-all duration-150 ease-linear ${classNames}`}
  >
    {children}
  </a>
);

Button.defaultProps = {
  classNames: "bg-amber-500 hover:bg-amber-600"
}
