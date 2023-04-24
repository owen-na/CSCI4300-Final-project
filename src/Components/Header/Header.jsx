import "../../styles/header.css";
import logo from "../../styles/CardWave.png";
import { Link, useLocation } from "react-router-dom";
import AuthDetails from "../../Pages/AuthDetails";

export default function Header({ isLoggedIn, handleLogout }) {
  const location = useLocation();

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      {isLoggedIn ? (
        <AuthDetails handleLogout={handleLogout} />
      ) : location.pathname !== "/Pages/Login" ? (
        <div className="links">
          <Link to="/Pages/SignUp">Sign Up</Link>
          <Link to="/Pages/Login">Login</Link>
        </div>
      ) : (
        <div className="links">
          <Link to="/Pages/SignUp">Sign Up</Link>
          <Link to="/Pages/Login">Login</Link>
        </div>
      )}
    </div>
  );
}
