import { object, string } from "yup";

export const loginSchema = object({
  email: string().required("Ingresa tu email").email("Ingresa un email válido"),
  password: string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Ingresa tu contraseña"),
});

export const registerSchema = object({
  email: string().required("Ingresa tu email").email("Ingresa un email válido"),
  password: string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Ingresa tu contraseña"),
  name: string().required("Ingresa tu nombre"),
});
