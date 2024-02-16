import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
    return (
        <div>
            <Header />
            <div className="error">
                <h1>404</h1>
                <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
                <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink> 
            </div>
        </div>
    );
};

export default Error;