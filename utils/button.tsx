interface ButtonProps {
    link: string;
    classNames?: string;
    text: string;
}

export const Button: React.FC<ButtonProps> = ({ link, classNames, text }) => (
    <a
        href={link}
        className={`${classNames} active:scale-90 rounded-lg py-4 transition-all duration-200 ease-linear`}
    >
        {text}
    </a>
);

Button.defaultProps = {
    classNames: "bg-amber-600 hover:bg-amber-700 px-10",
};
