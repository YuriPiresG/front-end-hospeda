import hotelsImg from "../assets/hotels.jpeg";

export default function ActivitiesTable() {
  return (
    <table className="min-w-[350px] text-left mt-[2rem] w-[120rem] font-roboto">
      <tr className=" text-[#171d357a]">
        <th className="bg-[#eee] px-4 py-2 rounded-tl-md">Evento</th>
        <th className="bg-[#eee] px-4 py-2">Hospedagens</th>
        <th className="bg-[#eee] px-4 py-2">Privacidade</th>
        <th className="bg-[#eee] px-4 py-2 rounded-tr-md"></th>
      </tr>
      
      <tr className="border">
        <td className="border-gray-300 px-4 py-2 flex ">
          <img src={hotelsImg} alt="" className="w-[6.65rem] h-[5rem] rounded mr-2" />
          <div>
            <p>Nome do evento</p>
            <div className="flex">
              <p>Data</p>
              <p>Hora</p>
            </div>
          </div>
        </td>
        <td className="border-gray-300 px-4 py-2">item2</td>
        <td className="border-gray-300 px-4 py-2">item1</td>
        <td className="border-gray-300 px-4 py-2 rounded-br-md">
          item2
        </td>
      </tr>

      <tr className="border">
        <td className="border-gray-300 px-4 py-2 flex ">
          <img src={hotelsImg} alt="" className="w-[6.65rem] h-[5rem] rounded mr-2" />
          <div>
            <p>Nome do evento</p>
            <div className="flex">
              <p>Data</p>
              <p>Hora</p>
            </div>
          </div>
        </td>
        <td className="border-gray-300 px-4 py-2">item2</td>
        <td className="border-gray-300 px-4 py-2">item1</td>
        <td className="border-gray-300 px-4 py-2 rounded-br-md">
          item2
        </td>
      </tr>

      
    </table>
  );
}
