import CreateActivityBtn from "./CreateActivityBtn";
import SearchBar from "./SearchBar";

export default function ActivitiesDisplay() {
  return (
    <>
      <main className=" pl-[5.563rem] pt-[2rem] mr-[5rem]">
        <h1 className="font-roboto font-bold text-[2rem] ">Meus eventos</h1>
        <div className="mt-2 flex justify-between">
          <SearchBar />
          <CreateActivityBtn />
        </div>
      </main>
    </>
  );
}
