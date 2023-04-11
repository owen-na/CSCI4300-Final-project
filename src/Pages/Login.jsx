import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div>
        <Link to="/">
          <button>
            <p> &lt; back</p>
          </button>
        </Link>
      </div>
      <div className="loginForm">
        <form>
          <h1>Login</h1>
          <label for="email">email</label>
          <input type="email" name="email" required></input>
          <label for="password">password</label>
          <input type="password" name="password" requried></input>
          <button type="submit">login</button>
        </form>
        <p>
          need an account? <a href="./SignIn.jsx">sign up</a>
        </p>
      </div>
    </>
  );
}

// need onSession checker
// need to make sure form connects to db later
