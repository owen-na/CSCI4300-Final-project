import "../../styles/header.css";
import logo from '../../styles/CardWave.png';
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLoggedIn, handleLogout }) {
  const location = useLocation();

  if (location.pathname === "/Pages/Login") {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="links">
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="links">
          <Link to="../Pages/SignIn">Sign Up</Link>
          <Link to="../Pages/Login">Login</Link>
        </div>
      )}
    </div>
  );
}
