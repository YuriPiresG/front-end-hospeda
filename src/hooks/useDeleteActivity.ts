import { api } from "../lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useDeleteActivity() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: number) => {
            const response = await api.delete(`/activities/${id}`);
            queryClient.refetchQueries(["activities"]);
            console.log(response);
        }
    });
}

export { useDeleteActivity };
