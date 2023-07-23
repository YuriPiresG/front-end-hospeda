export default function CreateAcitivityForm() {
  return (
    <>
      <div className="w-[57rem] bg-white rounded-xl shadow-lg font-roboto pb-[10rem]">
        <div className="mt-[3rem] ml-[3rem]">
          <form>
            <fieldset>
              <legend className="text-[#171D35] font-bold text-[1.5rem]">
                Informações do evento
              </legend>
            </fieldset>

            <div className="mt-[2rem] block">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                Nome do evento
              </label>
              <input
                type="text"
                placeholder="Nome do evento"
                name="name"
                id="name"
                className="placeholder:pl-2 mt-[0.5rem] w-[50rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
              />
            </div>
            <div className="mt-[1rem]">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                Descrição do evento
              </label>
              <br />
              <label className="relative inline-flex items-center cursor-pointer mt-[0.875rem]">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">
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
                name="description"
                id="description"
                className="placeholder:pl-2 mt-[0.5rem] w-[50rem] h-[10rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent resize-none"
              />
            </div>

            <hr className="my-[2rem] w-[50rem]" />
            <fieldset>
              <legend className="text-[#171D35] font-bold text-[1.5rem]">
                Local do evento
              </legend>
            </fieldset>

            <div className="mt-[2rem] flex gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  CEP
                </label>
                <input
                  type="text"
                  placeholder="12345-678"
                  name="cep"
                  id="cep"
                  className="placeholder:pl-2 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                />
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Número
                </label>
                <input
                  type="number"
                  placeholder="123"
                  name="streetNumber"
                  id="streetNumber"
                  className="placeholder:pl-2 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-[2rem] grid">
              <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                Endereço
              </label>
              <input
                type="text"
                placeholder="Endereço do evento"
                name="address"
                id="address"
                className="placeholder:pl-2 mt-[0.5rem] w-[50rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
              />
            </div>

            <div className="mt-[2rem] flex gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Complemento
                </label>
                <input
                  type="text"
                  placeholder="Complemento(não obrigatório)"
                  name="additionalInfo"
                  id="additionalInfo"
                  className="placeholder:pl-2 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                />
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Bairro
                </label>
                <input
                  type="text"
                  placeholder="Bairro onde ocorrerá o evento"
                  name="streetNumber"
                  id="streetNumber"
                  className="placeholder:pl-2 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mt-[1.75rem] flex gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Cidade
                </label>
                <input
                  type="text"
                  placeholder="Cidade onde acontecerá o evento"
                  name="city"
                  id="city"
                  className="placeholder:pl-2 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                />
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Estado
                </label>
                <input
                  type="text"
                  placeholder="Estado onde acontecerá o evento"
                  name="state"
                  id="state"
                  className="placeholder:pl-2 mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171D35] focus:border-transparent"
                />
              </div>
            </div>

            <hr className="my-[2rem] w-[50rem]" />

            <fieldset>
              <legend className="text-[#171D35] font-bold text-[1.5rem]">
                Data e horário
              </legend>
            </fieldset>

            <div className="mt-[2rem] flex gap-2">
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Data
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Data do evento"
                  id="date"
                  className="mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171d35] focus:border-transparent appearance"
                />
              </div>
              <div className="grid">
                <label className="font-roboto text-[#171d35a3] text-[0.875rem]">
                  Horário
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="mt-[0.5rem] w-[24rem] h-[3rem] rounded-xl border-[0.2px] border-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#171d35] focus:border-transparent"
                />
              </div>
            </div>
            <button type="submit"className="bg-[#2C68F4] text-[#FFFFFF] rounded-[2rem] w-[14rem] h-[3.5rem] ml-[35rem] mt-[3rem]">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
