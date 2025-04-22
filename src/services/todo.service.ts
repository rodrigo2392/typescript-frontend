import { useQuery } from "@tanstack/react-query";
import axiosClient from "./api.service";

function getAllTodos() {
  return axiosClient.get("todos");
}

export function useGetTodos() {
  return useQuery({
    queryFn: getAllTodos,
    queryKey: ["getAllTodos"],
  });
}
