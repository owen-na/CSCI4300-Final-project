import "../../styles/header.css";
import logo from '../../styles/CardWave.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <Link to="../Pages/SignIn">Sign Up</Link>
        <Link to="../Pages/Login">Login</Link>
      </div>
    </div>
  );
}
