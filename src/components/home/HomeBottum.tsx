import { Link } from "react-router-dom";

export default function HomeBottum() {
  return (
    <div className="flex justify-between w-full px-4 sm:px-6 lg:px-10 pb-6 font-[font1]">

      <Link
        to="/projects"
        className="text-lg sm:text-3xl lg:text-5xl border-2 sm:border-4 border-white px-6 sm:px-10 lg:px-14 py-2 rounded-full transition-all duration-300 hover:border-[#D3FD50] hover:text-[#D3FD50]"
      >
        Projects
      </Link>

      <Link
        to="/agence"
        className="text-lg sm:text-3xl lg:text-5xl border-2 sm:border-4 border-white px-6 sm:px-10 lg:px-14 py-2 rounded-full transition-all duration-300 hover:border-[#D3FD50] hover:text-[#D3FD50]"
      >
        Agence
      </Link>

    </div>
  );
}