import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul className="nav nav-pills p-3">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/HomePage">Homepage</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/posts">Lista delle ricette</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Contatti">Contatti</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
