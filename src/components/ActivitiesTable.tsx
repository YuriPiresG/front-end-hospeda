import hotelsImg from "../assets/hotels.jpeg";
import { useGetActivities } from "../hooks/useGetActivities";
import calendarBlueIcon from "../assets/CalendarBlankBlue.svg";
import mapPinIcon from "../assets/MapPin.svg";
import dotIcon from "../assets/DotsThree.svg";

export default function ActivitiesTable() {
  const { data: activities, isLoading } = useGetActivities();
  console.log(activities);

  return (
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
                    {activity?.initialDate}
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
            <td className="border-gray-300 px-4 py-2">{activity?.privacy}</td>
            <td className="border-gray-300 px-4 py-2 rounded-br-md">
              <img src={dotIcon} alt="" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
