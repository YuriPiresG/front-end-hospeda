import CreateAcitivityForm from "./CreateAcitivityForm";
import CreateActivityHeader from "./CreateActivityHeader";

export default function CreateActivityPage() {
  return (
    <>
      <body className="bg-[#ECEEF0] h-full ">
        <div className="grid justify-center">
          <CreateActivityHeader />
          <CreateAcitivityForm />
        </div>
      </body>
    </>
  );
}
