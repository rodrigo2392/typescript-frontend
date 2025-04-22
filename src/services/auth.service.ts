import axiosClient from "./api.service";
import { useMutation } from "@tanstack/react-query";

function login(LoginPayload: { email: string; password: string }) {
  return axiosClient.post("auth/login", LoginPayload);
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
  });
}
