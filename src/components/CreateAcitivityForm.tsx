import { useForm } from "react-hook-form";
import { useCreateActivity } from "../hooks/useCreateActivity";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Privacy } from "../constants/privacy";
import { useCep } from "../hooks/useCep";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./Spinner";

const createAcitivtySchema = z.object({
  name: z.string().min(3, { message: "Nome muito curto" }),
  description: z.string().min(3, { message: "Descrição muito curta" }),
  privacy: z.boolean(),
  cep: z.string().min(8, { message: "CEP inválido" }),
  streetNumber: z.string().min(1, { message: "Número inválido" }),
  address: z.string().min(3, { message: "Endereço inválido" }),
  additionalInfo: z.string().optional(),
  neighborhood: z.string().min(3, { message: "Bairro inválido" }),
  city: z.string().min(3, { message: "Cidade inválida" }),
  state: z.string().min(2, { message: "Estado inválido" }),
  initialDate: z.string().min(3, { message: "Data inválida" }),
  initialHour: z.string().min(3, { message: "Horário inválido" }),
});

export type CreateActivityFormData = z.infer<typeof createAcitivtySchema>;

interface Props {
  defaultValues?: CreateActivityFormData;
  onSubmit?: (data: CreateActivityFormData) => void;
}

export default function CreateAcitivityForm({
  defaultValues,
  onSubmit,
}: Props) {
  const { mutateAsync } = useCreateActivity();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateActivityFormData>({
    resolver: zodResolver(createAcitivtySchema),
    defaultValues,
  });
  const navigate = useNavigate();
  const cep = watch("cep");

  async function handleCreateActivity(data: CreateActivityFormData) {
    if (onSubmit) return onSubmit(data);

    await mutateAsync({
      ...data,
      privacy: data.privacy ? Privacy.PRIVATE : Privacy.PUBLIC,
      streetNumber: Number(data.streetNumber),
    });

    navigate("/");
  }

  const { data: addressData, isLoading: isCepLoading } = useCep(cep);
  useEffect(() => {
    if (!addressData) return;
    setValue("address", addressData?.logradouro);
    setValue("neighborhood", addressData?.bairro);
    setValue("city", addressData?.localidade);
    setValue("state", addressData?.uf);
  }, [addressData]);
  return (
    <>
      <div className="w-[57rem] sm:w-[25rem] bg-white rounded-xl shadow-lg font-roboto pb-[10rem]">
        <div className="mt-[3rem] ml-[3rem] sm:ml-[1rem]">
          <form onSubmit={handleSubmit(handleCreateActivity)} className="">
            <fieldset>
              <legend className="text-[#171D35] font-bold text-[1.5rem]">
                Informações do evento
              </legend>
            </fieldset>

            <div className="mt-[2rem] block sm:grid">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                Nome do evento
              </label>
              <input
                type="text"
                placeholder="Nome do evento"
                id="name"
                className="pl-4 mt-[0.5rem] sm:w-[20rem] w-[48.5rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                {...register("name")}
              />
              <br />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mt-[1rem]">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                Privacidade do evento
              </label>
              <br />
              <label className="relative inline-flex items-center cursor-pointer mt-[0.875rem]">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  {...register("privacy")}
                />
                {errors.privacy && (
                  <span className="text-red-500">{errors.privacy.message}</span>
                )}

                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-base text-gray-900">
                  O evento será privado?
                </span>
              </label>
            </div>
            <div className="mt-[1rem] grid">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                Descrição
              </label>
              <textarea
                placeholder="Descrição"
                id="description"
                className="pl-4 pt-4 mt-[0.5rem] sm:w-[23rem] w-[48.5rem] h-[10rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent resize-none"
                {...register("description")}
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>

            <hr className="my-[2rem] w-[50rem] sm:w-[23rem]" />
            <fieldset>
              <legend className="text-[#171D35] font-bold text-[1.5rem]">
                Local do evento
              </legend>
            </fieldset>

            <div className="mt-[2rem] flex sm:grid gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  CEP
                </label>
                <input
                  type="text"
                  placeholder="12345-678"
                  id="cep"
                  disabled={isCepLoading}
                  className="pl-4 mt-[0.5rem] sm:w-[20rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                  {...register("cep")}
                />
                {errors.cep && (
                  <span className="text-red-500">{errors.cep.message}</span>
                )}
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Número
                </label>
                <input
                  type="number"
                  placeholder="123"
                  id="streetNumber"
                  className="pl-4 mt-[0.5rem] sm:w-[20rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                  {...register("streetNumber")}
                />
                {errors.streetNumber && (
                  <span className="text-red-500">
                    {errors.streetNumber.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-[2rem] grid">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem] ">
                Endereço
              </label>
              <input
                type="text"
                placeholder="Endereço do evento"
                id="address"
                className="pl-4 mt-[0.5rem] sm:w-[20rem] w-[48.5rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                {...register("address")}
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>

            <div className="mt-[2rem] flex sm:grid gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Complemento
                </label>
                <input
                  type="text"
                  placeholder="Complemento(não obrigatório)"
                  id="additionalInfo"
                  className="pl-4 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent sm:w-[20rem]"
                  {...register("additionalInfo")}
                />
                {errors.additionalInfo && (
                  <span className="text-red-500">
                    {errors.additionalInfo.message}
                  </span>
                )}
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Bairro
                </label>
                <input
                  type="text"
                  placeholder="Bairro onde ocorrerá o evento"
                  id="neighborhood"
                  className="pl-4 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent sm:w-[20rem]"
                  {...register("neighborhood")}
                />
                {errors.neighborhood && (
                  <span className="text-red-500">
                    {errors.neighborhood.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-[1.75rem] flex sm:grid gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Cidade
                </label>
                <input
                  type="text"
                  placeholder="Cidade onde acontecerá o evento"
                  id="city"
                  className="pl-4 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent sm:w-[20rem]"
                  {...register("city")}
                />
                {errors.city && (
                  <span className="text-red-500">{errors.city.message}</span>
                )}
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Estado
                </label>
                <input
                  type="text"
                  placeholder="Estado onde acontecerá o evento"
                  id="state"
                  className="pl-4 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent sm:w-[20rem]"
                  {...register("state")}
                />
                {errors.state && (
                  <span className="text-red-500">{errors.state.message}</span>
                )}
              </div>
            </div>

            <hr className="my-[2rem] w-[50rem] sm:w-[23rem]" />

            <fieldset>
              <legend className="text-[#171D35] font-bold text-[1.5rem]">
                Data e horário
              </legend>
            </fieldset>

            <div className="mt-[2rem] flex sm:grid gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Data
                </label>
                <input
                  type="date"
                  placeholder="Data do evento"
                  id="date"
                  className="mt-[0.5rem] p-2 w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171d35] focus:border-transparent appearance sm:w-[20rem]"
                  {...register("initialDate")}
                />
                {errors.initialDate && (
                  <span className="text-red-500">
                    {errors.initialDate.message}
                  </span>
                )}
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Horário
                </label>
                <input
                  type="time"
                  id="time"
                  className="mt-[0.5rem] p-2 w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171d35] focus:border-transparent sm:w-[20rem]"
                  {...register("initialHour")}
                />
                {errors.initialHour && (
                  <span className="text-red-500">
                    {errors.initialHour.message}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2C68F4] text-[#FFFFFF] rounded-[2rem] w-[14rem] h-[3.5rem] ml-[35rem] mt-[3rem] sm:ml-0 flex justify-center items-center"
            >
              {isSubmitting ? (
                <Spinner />
              ) : onSubmit ? (
                "Atualizar evento"
              ) : (
                "Criar evento"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
