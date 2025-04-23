import axiosClient from "./api.service";
import { useMutation } from "@tanstack/react-query";

function login(LoginPayload: { email: string; password: string }) {
  return axiosClient.post("auth/login", LoginPayload);
}

function register(RegisterPayload: {
  name: string;
  email: string;
  password: string;
}) {
  return axiosClient.post("auth/register", RegisterPayload);
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
    mutationKey: ["login"],
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: register,
    mutationKey: ["register"],
  });
}
