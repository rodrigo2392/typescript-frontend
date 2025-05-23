import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth.slice";
import { useLogin } from "../../services/auth.service";
import { useNavigate } from "react-router";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/login.schema";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const doLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          dispatch(login({ token: data?.data?.token }));
        },
      }
    );
  };
  return (
    <Box
      sx={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        textAlign: "center",
      }}
      component="form"
      onSubmit={handleSubmit(doLogin)}
    >
      <Typography variant="h4">Iniciar sesión</Typography>
      <TextField {...register("email")} label="Email" variant="outlined" />
      {errors.email && (
        <Typography color="error">{errors.email.message}</Typography>
      )}
      <TextField
        {...register("password")}
        type="password"
        label="Contraseña"
        variant="outlined"
      />
      {errors.password && (
        <Typography color="error">{errors.password.message}</Typography>
      )}
      <Button variant="contained" type="submit">
        Iniciar sesión
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/register")}
      >
        Registrarse
      </Button>
    </Box>
  );
}
