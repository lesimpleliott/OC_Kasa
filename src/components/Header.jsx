import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="./kasa-logo.svg" alt="Logo Kasa" />
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