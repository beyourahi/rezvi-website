let d = new Date();
let year = d.getFullYear();

export const Copyright: React.FC = () => (
    <div className="text-lg font-medium flex justify-center items-center text-white/40 h-[20%]">
        <h3>Copyright &copy; {year} Raihana Rezvi. All rights reserved.</h3>
    </div>
);
