import SearchBar from "./SearchBar";

export default function ActivitiesDisplay() {
  return (
    <>
      <main className=" pl-[5.563rem] pt-[2rem]">
        <h1 className="font-roboto font-bold text-[2rem] ">Meus eventos</h1>
        <div className="mt-2">
          <SearchBar />
        </div>
      </main>
    </>
  );
}
