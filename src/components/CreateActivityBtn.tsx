import { Link } from "react-router-dom";

export default function CreateEventBtn() {
  return (
    <Link to="/create-activity">
      <button
        className="bg-[#2C68F4] mt-4 lg:mt-0 w-[6rem] lg:w-[14rem] h-[2.75rem] rounded-[32px] text-white font-roboto font-bold text[1rem]
      hover:bg-[#1254ee]  hover:scale-105 transition-all "
      >
        Criar evento
      </button>
    </Link>
  );
}
