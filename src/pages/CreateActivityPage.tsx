import CreateAcitivityForm from "../components/CreateAcitivityForm";
import CreateActivityHeader from "../components/CreateActivityHeader";

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
