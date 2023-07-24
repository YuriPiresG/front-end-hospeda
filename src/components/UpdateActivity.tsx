import { useState } from "react";
import { Activity } from "../hooks/useGetActivities";
import { useUpdateActivity } from "../hooks/useUpdateActivity";
import xIcon from "../assets/xIcon.svg";

interface Props {
  activity: Activity;
  open: boolean;
  close: () => void;
}

export default function UpdateActivity(props: Props) {
  const [name, setName] = useState(props.activity.name);
  const [privacy, setPrivacy] = useState(props.activity.privacy);
  const [description, setDescription] = useState(props.activity.description);
  const [cep, setCep] = useState(props.activity.cep);
  const [streetNumber, setStreetNumber] = useState(props.activity.streetNumber);
  const [address, setAddress] = useState(props.activity.address);
  const [additionalInfo, setAdditionalInfo] = useState(
    props.activity.additionalInfo
  );
  const [neighborhood, setNeighborhood] = useState(props.activity.neighborhood);
  const [city, setCity] = useState(props.activity.city);
  const [state, setState] = useState(props.activity.state);
  const [initialDate, setInitialDate] = useState(props.activity.initialDate);
  const [initialHour, setInitialHour] = useState(props.activity.initialHour);

  const { mutateAsync, isLoading } = useUpdateActivity();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await mutateAsync({
      id: props.activity.id,
      name,
      privacy,
      description,
      cep,
      streetNumber,
      address,
      additionalInfo,
      neighborhood,
      city,
      state,
      initialDate,
      initialHour,
    });
    props.close();
  };

  return (
    <>
      {props.open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[#000000c9] flex justify-center items-center overflow-y-auto">
          <div className="bg-white rounded-lg w-[50rem] h-[55rem] p-6 flex flex-col justify-center items-center">
            <button className="absolute top-4 right-4" onClick={props.close}>
              <img
                src={xIcon}
                alt=""
                className="w-5 hover:scale-125 transition-transform"
              />
            </button>
            <form onSubmit={handleSubmit} className="grid grid-cols-2">
              <label
                htmlFor="name"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Nome do evento
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              
              <label
                htmlFor="privacy"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Privacidade
              </label>
              <select
                name="privacy"
                id="privacy"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={privacy}
                onChange={(event) => setPrivacy(event.target.value)}
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
                name="description"
                id="description"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[5rem] text-[1rem] font-bold"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />

              <label
                htmlFor="cep"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                CEP
              </label>
              <input
                type="text"
                name="cep"
                id="cep"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
              />

              <label
                htmlFor="streetNumber"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Número
              </label>
              <input
                type="text"
                name="streetNumber"
                id="streetNumber"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={streetNumber}
                onChange={(event) => setStreetNumber(event.target.value)}
              />

              <label
                htmlFor="address"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Endereço
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />

              <label
                htmlFor="additionalInfo"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Complemento
              </label>
              <input
                type="text"
                name="additionalInfo"
                id="additionalInfo"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={additionalInfo}
                onChange={(event) => setAdditionalInfo(event.target.value)}
              />

              <label
                htmlFor="neighborhood"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Bairro
              </label>
              <input
                type="text"
                name="neighborhood"
                id="neighborhood"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
              />

              <label
                htmlFor="city"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Cidade
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />

              <label
                htmlFor="state"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Estado
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] text-[1rem] font-bold mb-[2rem]"
                value={state}
                onChange={(event) => setState(event.target.value)}
              />

              <label
                htmlFor="initialDate"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Data
              </label>
              <input
                type="date"
                name="initialDate"
                id="initialDate"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] mb-[2rem]"
                value={initialDate}
                onChange={(event) => setInitialDate(event.target.value)}
              />

              <label
                htmlFor="initialHour"
                className="text-[#171d35] text-[1.5rem] mb-[1rem]"
              >
                Hora
              </label>
              <input
                type="time"
                name="initialHour"
                id="initialHour"
                className="border-[1px] border-[#171d35] rounded-md w-[20rem] h-[2.5rem] mb-[2rem]"
                value={initialHour}
                onChange={(event) => setInitialHour(event.target.value)}
              />

              <button
                type="submit"
                className="bg-[#FF6D00] rounded-md w-[10rem] h-[2.5rem] text-white text-[1rem] font-bold mt-4 hover:bg-[#5a2702] transition-all hover:scale-125"
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
