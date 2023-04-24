import "../styles/signIn.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div className="loginForm signInForm">
        <form>
          <h1>Sign Up</h1>
          <label htmlFor="email">email</label>
          <input type="email" name="email" required />
          <label htmlFor="password">password</label>
          <input type="password" name="password" required />
          <button type="submit">sign up</button>
        </form>
        <p>
          already a user? <Link to="/Pages/Login">Login</Link>
        </p>
      </div>
    </>
  );
}
