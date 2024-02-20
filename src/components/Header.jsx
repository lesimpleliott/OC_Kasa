import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
    return (
        <header>
            <NavLink to="/" className="logoLink">
                <Logo color="#ff6060" />
            </NavLink>
            <ul>
                <NavLink to="/" >
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" >
                    <li>À propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;