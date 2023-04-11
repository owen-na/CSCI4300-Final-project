import "../../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="links">
        <Link to="../Pages/SignIn">Sign Up</Link>
        <Link to="../Pages/Login">Login</Link>
      </div>
    </div>
  );
}
