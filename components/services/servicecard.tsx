interface CardProps {
    icon: JSX.Element | string;
    title: string;
    text: string;
}

export const Servicecard: React.FC<CardProps> = ({ icon, title, text }) => (
    <div className="drop-shadow-2xl bg-white p-7 rounded-xl flex flex-col gap-y-4 hover:bg-amber-600 transition-all duration-150 ease-linear hover:text-white group">
        <div className="text-amber-600 text-5xl group-hover:text-white">{icon}</div>
        <h1 className="text-3xl font-bold text-neutral-800 group-hover:text-white">{title}</h1>
        <p className="text-neutral-500 group-hover:text-white text-lg">{text}</p>
    </div>
);
