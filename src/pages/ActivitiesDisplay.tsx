import ActivitiesTable from "../components/ActivitiesTable";
import CreateActivityBtn from "../components/CreateActivityBtn";
import SearchBar from "../components/SearchBar";

export default function ActivitiesDisplay() {
  return (
    <>
      <main className="px-4 sm:pl-4 pt-8 pl-32">
        <h1 className="font-roboto font-bold text-[2rem]">Meus eventos</h1>
        <div className="mt-2 flex justify-between sm:grid">
          <SearchBar />
          <CreateActivityBtn />
        </div>
        <div className="flex flex-col">
          <ActivitiesTable />
        </div>
      </main>
    </>
  );
}
