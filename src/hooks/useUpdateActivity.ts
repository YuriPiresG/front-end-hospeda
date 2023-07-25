import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api";
import { CreateActivity } from "./useCreateActivity";

function useUpdateActivity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateActivity & { id: number }) => {
      const response = await api.put(`/activities/${data.id}`, data);
      queryClient.refetchQueries(["activities"]);
      console.log(response);
    },
  });
}

export { useUpdateActivity };
