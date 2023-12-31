import hospedaLogo from "../assets/hospedaLogo.svg";
import userIcon from "../assets/userIcon.svg";
import homeIcon from "../assets/House.svg";
import calendarIcon from "../assets/CalendarBlankWhite.svg";
import moneyIcon from "../assets/CurrencyDollar.svg";
import chartIcon from "../assets/ChartPie.svg";
import tagIcon from "../assets/Tag.svg";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="bg-[#ECEEF0] h-[6rem]">
        <div className="flex justify-between mx-[2rem] py-[1.5rem]">
          <img src={hospedaLogo} alt="Logo da Hospeda Eventos" />
          <img
            src={userIcon}
            alt="Ícone do usuário logado"
            className="w-[2.5rem] h-[2.5rem]"
          />
        </div>
        <Outlet />
      </nav>
      <div className="bg-[#F5F7F8] w-[3rem] h-screen flex justify-center sm:absolute sm:hidden">
        <ul className="">
          <li>
            <img
              src={homeIcon}
              alt=""
              className=" mt-[1.75rem] hover:cursor-pointer"
            />
          </li>
          <li className="rounded-lg w-[2rem] h-[2rem] bg-[#2C68F4]">
            <img
              src={calendarIcon}
              alt=""
              className="pl-1 pt-1 mt-[2rem] hover:cursor-pointer rounded-lg"
            />
          </li>
          <li>
            <img
              src={moneyIcon}
              alt=""
              className="mt-[2rem] hover:cursor-pointer"
            />
          </li>
          <li>
            <img
              src={chartIcon}
              alt=""
              className="mt-[2.5rem] hover:cursor-pointer"
            />
          </li>
          <li>
            <img
              src={tagIcon}
              alt=""
              className="mt-[2.5rem] hover:cursor-pointer"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
