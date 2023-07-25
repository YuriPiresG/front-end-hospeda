import xIcon from "../assets/xIcon.svg";
import { Privacy } from "../constants/privacy";
import { Activity } from "../hooks/useGetActivities";
import { useUpdateActivity } from "../hooks/useUpdateActivity";
import CreateAcitivityForm, {
  CreateActivityFormData,
} from "./CreateAcitivityForm";

interface Props {
  activity: Activity;
  open: boolean;
  close: () => void;
}

export default function UpdateActivity(props: Props) {
  const { mutateAsync } = useUpdateActivity();

  async function handleUpdateActivity(data: CreateActivityFormData) {
    await mutateAsync({
      id: props.activity.id,
      ...data,
      privacy: data.privacy ? Privacy.PRIVATE : Privacy.PUBLIC,
      streetNumber: Number(data.streetNumber),
    });

    props.close();
  }

  return (
    <>
      {props.open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[#000000c9] flex">
          <div className="flex flex-col bg-white mx-auto overflow-y-auto">
            <button
              className="flex ml-auto pt-8 pr-8 sm:top-2 sm:right-5"
              onClick={props.close}
            >
              <img
                src={xIcon}
                alt=""
                className="w-5 hover:scale-125 transition-transform"
              />
            </button>
            <div>
              <CreateAcitivityForm
                onSubmit={handleUpdateActivity}
                defaultValues={{
                  name: props.activity.name,
                  description: props.activity.description,
                  streetNumber: props.activity.streetNumber.toString(),
                  city: props.activity.city,
                  state: props.activity.state,
                  neighborhood: props.activity.neighborhood,
                  privacy: props.activity.privacy === Privacy.PRIVATE,
                  additionalInfo: props.activity.additionalInfo,
                  address: props.activity.address,
                  cep: props.activity.cep,
                  initialDate: props.activity.initialDate,
                  initialHour: props.activity.initialHour,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
