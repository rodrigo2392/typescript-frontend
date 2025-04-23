import { Link } from "react-router";

export default function Page404() {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <Link to="/">Ir al inicio</Link>
    </div>
  );
}
