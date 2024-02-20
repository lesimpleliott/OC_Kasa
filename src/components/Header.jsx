import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Logo color="#ff6060" />
            <div className="navbar">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>À propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;
