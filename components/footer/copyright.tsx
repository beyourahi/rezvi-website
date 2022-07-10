let d = new Date();
let year = d.getFullYear();

export const Copyright: React.FC = () => (
  <div className="text-base lg:text-lg font-medium py-7 flex justify-center items-center text-white/40 lg:h-[20%]">
    <h3>Copyright &copy; {year} Raihana Rezvi.</h3>
  </div>
);
