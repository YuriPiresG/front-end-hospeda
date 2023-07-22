import { Link } from "react-router-dom";

export default function CreateEventBtn() {
  return (
    <Link to="/create-activity">
      <button className="bg-[#2C68F4] w-[14rem] h-[2.75rem] rounded-[32px] text-white font-roboto font-bold text[1rem] ">
        Criar evento
      </button>
    </Link>
  );
}
