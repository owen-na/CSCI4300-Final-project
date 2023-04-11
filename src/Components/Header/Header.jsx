import "../../styles/header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="links">
                <a href="../App.js">MainPage</a>
                <a href="./Header/Header.jsx">Sign Up</a>
                <p className="spacer"> // </p>
                <button className="login-button">Login</button>
            </div>
        </div>
    )
}