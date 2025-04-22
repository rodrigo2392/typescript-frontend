import { useSelector } from "react-redux";
import { selectToken } from "../store/slices/auth.slice";
import AuthRoutes from "./Auth";
import AppRoutes from "./App";

export default function Navigation() {
  const token = useSelector(selectToken);

  if (token) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
}
