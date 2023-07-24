import { api } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Activity } from "./useGetActivities";



function useUpdateActivity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Activity) => {
        const response = await api.put(`/activities/${data.id}`, data);
        queryClient.refetchQueries(["activities"]);
        console.log(response);
    }
});
}

export { useUpdateActivity };
