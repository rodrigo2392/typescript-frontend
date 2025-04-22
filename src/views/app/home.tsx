import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth.slice";
import { Link } from "react-router";

export default function Home() {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Bienvenido</h1>
      <button onClick={doLogout}>Logout</button>
      <Link to="/hello">Go hello</Link>
    </>
  );
}
