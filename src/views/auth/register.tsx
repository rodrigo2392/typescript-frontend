import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/login.schema";
import { useRegister } from "../../services/auth.service";

export default function Register() {
  const navigate = useNavigate();
  const { mutate } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const doLogin = ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    mutate(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          alert("Tu cuenta ha sido creada, puedes iniciar sesión");
          navigate("/");
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
      <Typography variant="h4">Registrarse</Typography>
      <TextField {...register("name")} label="Nombre" variant="outlined" />
      {errors.name && (
        <Typography color="error">{errors.name.message}</Typography>
      )}

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
        Registrarse
      </Button>
      <Button color="primary" variant="outlined" onClick={() => navigate("/")}>
        Iniciar sesión
      </Button>
    </Box>
  );
}
