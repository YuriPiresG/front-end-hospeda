import hospedaLogo from "../assets/hospedaLogo.svg";
import backBtn from "../assets/CaretLeft.svg";

export default function CreateActivityHeader() {
  return (
    <div>
      <header className="flex justify-between pt-[6rem] pb-[2rem] ">
        <h1 className="font-roboto text-[2rem] font-bold flex">
          <button>
            <img src={backBtn} alt="" className="mr-[1rem]" />
          </button>
          Criar evento
        </h1>
        <img src={hospedaLogo} alt="" />
      </header>
    </div>
  );
}
