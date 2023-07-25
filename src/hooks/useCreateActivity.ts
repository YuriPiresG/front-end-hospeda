import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";
import { Privacy } from "../constants/privacy";

interface CreateActivity {
  name: string;
  privacy: Privacy;
  description: string;
  cep: string;
  streetNumber: number;
  address: string;
  additionalInfo: string;
  neighborhood: string;
  city: string;
  state: string;
  initialDate: string;
  initialHour: string;
}

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateActivity) => {
      const response = await api.post("/activities", data);
      queryClient.refetchQueries(["activities"]);
      console.log(response);
    },
  });
};
