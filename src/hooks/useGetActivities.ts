import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { Privacy } from "../constants/privacy";

export interface Activity {
  id: number;
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

export const useGetActivities = () => {
  return useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await api.get<Activity[]>("/activities");
      return response.data;
    },
  });
};
