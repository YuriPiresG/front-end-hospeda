import React, { useState } from "react";
import hotelsImg from "../assets/hotels.jpeg";
import { Activity, useGetActivities } from "../hooks/useGetActivities";
import calendarBlueIcon from "../assets/CalendarBlankBlue.svg";
import mapPinIcon from "../assets/MapPin.svg";
import dotIcon from "../assets/DotsThree.svg";
import DeleteActivity from "./DeleteActivity";

export default function ActivitiesTable() {
  const { data: activities } = useGetActivities();
  console.log(activities);
  const [isMenuOpen, setIsMenuOpen] = useState(
    Array(activities?.length).fill(false)
  );
  const [selectedActivityToDelete, setSelectedActivityToDelete] =
    useState<Activity | null>(null);

  const handleMenuClick = (activityId: number) => {
    setIsMenuOpen((prevMenuState) => ({
      ...prevMenuState,
      [activityId]: !prevMenuState[activityId],
    }));
  };
  return (
    <>
      <table className="min-w-[350px] text-left mt-[2rem] w-[120rem] font-roboto">
        <thead>
          <tr className="text-[#171d357a]">
            <th className="bg-[#eee] px-4 py-2 rounded-tl-md">Evento</th>
            <th className="bg-[#eee] px-4 py-2">Hospedagens</th>
            <th className="bg-[#eee] px-4 py-2">Privacidade</th>
            <th className="bg-[#eee] px-4 py-2 rounded-tr-md">Ações</th>
          </tr>
        </thead>
        <tbody>
          {activities?.map((activity) => (
            <tr className="border" key={activity.id}>
              <td className="border-gray-300 px-4 py-2 flex">
                <img
                  src={hotelsImg}
                  alt=""
                  className="w-[6.65rem] h-[5rem] rounded mr-2"
                />
                <div>
                  <p className="font-bold text-[1rem] text-[#171D35]">
                    {activity?.name}
                  </p>
                  <div className="flex mt-[1rem]">
                    <p className="flex">
                      <img
                        src={calendarBlueIcon}
                        alt="ícone de calendário"
                        className=""
                      />
                      {activity?.initialHour} |{" "}
                      {new Date(activity?.initialDate).toDateString()}
                    </p>
                    <p className="flex ml-[1rem]">
                      <img
                        src={mapPinIcon}
                        alt="ícone de ponteiro de mapa"
                        className="w-30 h-30"
                      />
                      {activity?.city} / {activity?.state}
                    </p>
                  </div>
                </div>
              </td>
              <td className="border-gray-300 px-4 py-2">00/500</td>
              <td className="border-gray-300 px-4 py-2 relative">
                <p
                  className={`text-center pt-1 w-[6rem] h-[2.2rem] ${
                    activity?.privacy === "Público"
                      ? "bg-[#C2ED79] rounded-[1.125rem] border-[2px] border-[#498D12] "
                      : "bg-[#ED9C79] rounded-[1.125rem] border-[2px] border-[#8D3012]"
                  }`}
                >
                  {activity?.privacy}
                </p>
              </td>
              <td className="border-gray-300 px-4 py-2 relative">
                <img
                  src={dotIcon}
                  alt=""
                  className={`cursor-pointer mt-1 mr-1 ${
                    isMenuOpen[activity.id] &&
                    "bg-[#e3e4e7] rounded-[0.5rem] transform rotate-180 transition-all"
                  }`}
                  onClick={() => handleMenuClick(activity.id)}
                />
                {isMenuOpen[activity.id] && (
                  <div className="absolute right-[7rem] grid justify-center w-[5rem] h-[5rem] mt-1 mr-1 bg-[#e3e4e7] rounded-[0.5rem]">
                    <button className="border-b-[1px] border-black">
                      <p className="text-[#171D35] text-[0.875rem] hover:scale-110">
                        Editar
                      </p>
                    </button>
                   
                    <button
                      onClick={() => setSelectedActivityToDelete(activity)}
                    >
                      <p className="text-[#171D35] text-[0.875rem] hover:scale-110">
                        Excluir
                      </p>
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedActivityToDelete && (
        <DeleteActivity
          open={true}
          close={() => {
            setSelectedActivityToDelete(null);
          }}
          activity={selectedActivityToDelete}
        />
      )}
    </>
  );
}
