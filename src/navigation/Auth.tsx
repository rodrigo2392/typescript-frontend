import { Route, Routes } from "react-router";
import Login from "../views/auth/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
