import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
    return (
        <header>
            <Logo color="#ff6060" />
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