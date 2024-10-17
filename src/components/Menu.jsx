import { Link } from "react-router-dom";

const Sidebar = ({ title, d, onClick, link }) => {
  return (
    <div
      className="w-32 h-10 flex justify-between gap-x-6 items-center cursor-pointer"
      onClick={onClick}
    >
      <Link to={link} className="flex gap-x-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-[#313b65]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
        <p className="text-[#313b65] font-bold mx-auto">{title}</p>
      </Link>
      
    </div>
  );
};

export default Sidebar;
