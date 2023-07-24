import React, { useState } from "react";
import { Activity } from "../hooks/useGetActivities";
import { useDeleteActivity } from "../hooks/useDeleteActivity";
import xIcon from "../assets/xIcon.svg";

interface Props {
  activity: Activity;
  open: boolean;
  close: () => void;
}

export default function DeleteActivity(props: Props) {
  const [activityId] = useState(props.activity.id);
  const { mutateAsync, isLoading } = useDeleteActivity();
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await mutateAsync(activityId);
    props.close();
  };
  return (
    <>
      <div className="bg-[#000000c9] fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center">
        <div className="bg-white rounded-lg w-[40rem] h-[20rem] flex flex-col justify-center items-center">
          <button
            className="absolute top-[20.5rem] right-[39.5rem] "
            onClick={props.close}
          >
            <div>
              <img
                src={xIcon}
                alt=""
                className="w-5 hover:scale-125 transition-transform"
              />
            </div>
          </button>
          <p className="text-[#171d35] text-[2rem] mb-[2rem] text-center">
            Tem certeza que deseja excluir o evento:{" "}
            <span className="font-bold">{props.activity.name}</span>?
          </p>
          <form onSubmit={handleDelete}>
            <button
              type="submit"
              className="bg-[#FF6D00] rounded-md w-[10rem] h-[2.5rem] text-white text-[1rem] font-bold hover:bg-[#5a2702] transition-all hover:scale-125"
            >
              {isLoading ? "Excluindo..." : "Excluir"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
