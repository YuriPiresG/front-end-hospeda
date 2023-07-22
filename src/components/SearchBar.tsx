import searchBtn from "../assets/MagnifyingGlass.svg";

export default function SearchBar() {
  return (
    <form action="" className="flex">
      <button type="submit" className="bg-searchColor rounded-s-[0.75rem] pl-[0.75rem] border-y border-l border-searchColor">
        <img src={searchBtn} alt="" />
      </button>
      <input
        type="text"
        placeholder="Buscar eventos"
        className="bg-searchColor w-[30rem] h-[2.5rem] text-black placeholder-[#A4A4A4] text-[1rem] font-roboto font-normal pl-[1rem] rounded-e-[0.75rem] border-y border-r border-searchColor "
 
      />
    </form>
  );
}
