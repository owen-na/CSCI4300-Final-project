import "../styles/signIn.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <div>
        <Link to="/">
          <button>
            <p> &lt; back</p>
          </button>
        </Link>
      </div>
      <div className="signInForm">
        <form>
          <h1>Sign Up</h1>
          <label for="email">email</label>
          <input type="email" name="email" required></input>
          <label for="password">password</label>
          <input type="password" name="password" requried></input>
          <button type="submit">sign up</button>
        </form>
        <p>
          already a user? <Link to="/Pages/Login">Login</Link>
        </p>
      </div>
    </>
  );
}
