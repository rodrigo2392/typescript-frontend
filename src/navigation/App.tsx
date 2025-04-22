import { Route, Routes } from "react-router";
import Home from "../views/app/home";
import Hello from "../views/app/hello";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello />} />
    </Routes>
  );
}
