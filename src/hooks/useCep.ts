import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
export const useCep = (cep: string) => {
  const enabled = !!cep && cep.length === 8;
  const query = useQuery({
    queryKey: ["cep", cep],
    enabled,
    staleTime: Infinity,
    queryFn: async () => {
      const response = await axios.get<AddressData>(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      return response.data;
    },
  });
  return { ...query, isLoading: enabled ? query.isLoading : false };
};
