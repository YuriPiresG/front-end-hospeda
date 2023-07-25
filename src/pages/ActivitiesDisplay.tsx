import ActivitiesTable from "../components/ActivitiesTable";
import CreateActivityBtn from "../components/CreateActivityBtn";
import SearchBar from "../components/SearchBar";

export default function ActivitiesDisplay() {
  return (
    <>
      <main className=" pl-[5.563rem] sm:pl-1 pt-[2rem] mr-[5rem]">
        <h1 className="font-roboto font-bold text-[2rem] ">Meus eventos</h1>
        <div className="mt-2 flex justify-between sm:grid">
          <SearchBar />
          <CreateActivityBtn />
        </div>
        <div className="flex justify-center">
          <ActivitiesTable />
        </div>
      </main>
    </>
  );
}
