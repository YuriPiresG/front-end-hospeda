import { useState } from "react";
import { Activity } from "../hooks/useGetActivities";
import { useUpdateActivity } from "../hooks/useUpdateActivity";
import xIcon from "../assets/xIcon.svg";
import { Privacy } from "../constants/privacy";
import { useForm } from "react-hook-form";

interface Props {
  activity: Activity;
  open: boolean;
  close: () => void;
}

export default function UpdateActivity(props: Props) {
  const [activityId] = useState<number>(props.activity.id);
  const [name] = useState<string>(props.activity.name);
  const [privacy] = useState<Privacy>(props.activity.privacy);

  const [description] = useState<string>(props.activity.description);
  const [cep] = useState<string>(props.activity.cep);
  const [streetNumber] = useState<number>(props.activity.streetNumber);
  const [address] = useState<string>(props.activity.address);
  const [additionalInfo] = useState<string>(props.activity.additionalInfo);
  const [neighborhood] = useState<string>(props.activity.neighborhood);
  const [city] = useState<string>(props.activity.city);
  const [state] = useState<string>(props.activity.state);

  const { mutateAsync, isLoading } = useUpdateActivity();

  const { register, handleSubmit } = useForm();

  async function handleUpdateActivity(data: any) {
    data.id = activityId;
    data.privacy = data.privacy ? "Privado" : "Público";
    console.log(data);
    await mutateAsync(data);
    props.close();
  }

  return (
    <>
      {props.open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[#000000c9] flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg w-[50rem] h-[55rem] p-6 flex flex-col justify-center items-center">
            <button className="absolute top-10 right-[35rem]" onClick={props.close}>
              <img
                src={xIcon}
                alt=""
                className="w-5 hover:scale-125 transition-transform"
              />
            </button>
            <form
              onSubmit={handleSubmit(handleUpdateActivity)}
              className="grid grid-cols-2 font-roboto"
            >
              <label
                htmlFor="name"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Nome do evento
              </label>
              <input
                type="text"
                id="name"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={name}
                {...register("name")}
              />

              <label
                htmlFor="privacy"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Privacidade
              </label>
              <select
                id="privacy"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                defaultValue={privacy}
                {...register("privacy")}
              >
                <option value="Público">Público</option>
                <option value="Privado">Privado</option>
              </select>

              <label
                htmlFor="description"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Descrição
              </label>
              <textarea
                id="description"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[5rem] text-[1rem] pl-4 mt-[0.5rem] resize-none mb-2"
                placeholder={description}
                {...register("description")}
              />

              <label
                htmlFor="cep"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                CEP
              </label>
              <input
                type="text"
                id="cep"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={cep}
                {...register("cep")}
              />

              <label
                htmlFor="streetNumber"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Número
              </label>
              <input
                type="text"
                id="streetNumber"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={String(streetNumber)}
                {...register("streetNumber")}
              />

              <label
                htmlFor="address"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Endereço
              </label>
              <input
                type="text"
                id="address"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={address}
                {...register("address")}
              />

              <label
                htmlFor="additionalInfo"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Complemento
              </label>
              <input
                type="text"
                id="additionalInfo"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={additionalInfo}
                {...register("additionalInfo")}
              />

              <label
                htmlFor="neighborhood"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Bairro
              </label>
              <input
                type="text"
                id="neighborhood"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={neighborhood}
                {...register("neighborhood")}
              />

              <label
                htmlFor="city"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Cidade
              </label>
              <input
                type="text"
                id="city"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem]"
                placeholder={city}
                {...register("city")}
              />

              <label
                htmlFor="state"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Estado
              </label>
              <input
                type="text"
                id="state"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] pl-4 mt-[0.5rem] mb-[2rem]"
                placeholder={state}
                {...register("state")}
              />

              <label
                htmlFor="initialDate"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Data
              </label>
              <input
                type="date"
                id="initialDate"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] mb-[2rem]"
                {...register("initialDate")}
              />

              <label
                htmlFor="initialHour"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Hora
              </label>
              <input
                type="time"
                id="initialHour"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] mb-[2rem]"
                {...register("initialHour")}
              />

              <button
                type="submit"
                className="bg-[#FF6D00] rounded-md w-[10rem] h-[2.5rem] text-white text-[1rem] pl-4 mt-[0.5rem] mt-4 hover:bg-[#5a2702] transition-all hover:scale-125"
              >
                {isLoading ? "Atualizando..." : "Atualizar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
