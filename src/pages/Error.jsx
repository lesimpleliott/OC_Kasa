import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <div className="error">
                    <h1>404</h1>
                    <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
                    <NavLink to="/">
                        Retourner sur la page d&apos;accueil
                    </NavLink>
                </div>
            </main>
        </div>
    );
};

export default Error;
