import { useState } from "react";
import { Activity } from "../hooks/useGetActivities";
import { useUpdateActivity } from "../hooks/useUpdateActivity";
import xIcon from "../assets/xIcon.svg";
import { Privacy } from "../constants/privacy";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const updateActivitySchema = z.object({
  name: z.string().min(3, { message: "Nome muito curto" }),
  description: z.string().min(3, { message: "Descrição muito curta" }),
  privacy: z.boolean(),
  cep: z.string().min(8, { message: "CEP inválido" }),
  streetNumber: z.string().min(1, { message: "Número inválido" }),
  address: z.string().min(3, { message: "Endereço inválido" }),
  additionalInfo: z.string().min(3, { message: "Complemento inválido" }),
  neighborhood: z.string().min(3, { message: "Bairro inválido" }),
  city: z.string().min(3, { message: "Cidade inválida" }),
  state: z.string().min(2, { message: "Estado inválido" }),
  initialDate: z.string().min(3, { message: "Data inválida" }),
  initialHour: z.string().min(3, { message: "Horário inválido" }),
});

type UpdateActivityForm = z.infer<typeof updateActivitySchema>;

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateActivityForm>({
    resolver: zodResolver(updateActivitySchema),
  });

  async function handleUpdateActivity(data: any) {
    console.log(typeof data);
    data.id = activityId;
    await mutateAsync(data);
    props.close();
  }

  return (
    <>
      {props.open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[#000000c9] flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg w-[50rem] sm:h-[100rem]  p-6 flex flex-col sm:grid justify-center items-center">
            <button
              className="absolute top-[4rem] right-[35rem] sm:top-2 sm:right-5"
              onClick={props.close}
            >
              <img
                src={xIcon}
                alt=""
                className="w-5 hover:scale-125 transition-transform"
              />
            </button>
            <form
              onSubmit={handleSubmit(handleUpdateActivity)}
              className="grid grid-cols-2 sm:grid-cols-1 font-roboto sm:h-[10rem] items-center justify-center sm:mb-[45rem]"
            >
              <label
                htmlFor="name"
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="text-[#171d35] text-[1.5rem] mb-[1rem] sm:mb-0"
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
                className="bg-[#FF6D00] rounded-md w-[10rem] h-[2.5rem] text-white text-[1rem] pl-4  hover:bg-[#5a2702] transition-all hover:scale-125"
              >
                <span className="mr-[1rem]">
                  {isLoading ? "Atualizando..." : "Atualizar"}
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
