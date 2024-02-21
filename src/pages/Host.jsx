import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DropdownMenu from "../components/DropdownMenu";
import BaseDataContext from "../hooks/BaseDataContext";
import { useContext, useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";


const Host = () => {
    const { id } = useParams(); // récupère l'id présent dans l'URL
    const dataHosts = useContext(BaseDataContext); // import des dataHosts (base.json)
    const [hostData, setHostData] = useState(null); // initialise avec null
    const navigate = useNavigate();

    useEffect(() => {
        const selectedHost = dataHosts.find((host) => host.id === id);
        if (!selectedHost) {
            navigate("/error"); // Redirige vers la page d'erreur si aucun hôte correspondant n'est trouvé
        } else {
            setHostData(selectedHost);
        }
    }, [id, dataHosts, navigate]);

    if (!hostData) {
        return null; 
    }

    return (
        <div>
            <Header />
            {hostData && (
                <main className="hostMain">
                    <Carousel pictures={hostData.pictures} />

                    <section className="description">
                        <div className="description__property">
                            <h1>{hostData.title}</h1>
                            <p className="location">{hostData.location}</p>
                            <div className="tags">
                                {hostData.tags.map((tag, index) => {
                                    return (
                                        <p key={index} className="tag">
                                            {tag}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="description__owner">
                            <Rating rating={parseInt(hostData.rating)} />
                            <div className="ownerDetail">
                                <p>{hostData.host.name}</p>
                                <img
                                    src={hostData.host.picture}
                                    alt={`Photo de ${hostData.host.name}`}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="details">
                        <DropdownMenu title="Description">
                            <p>{hostData.description}</p>
                        </DropdownMenu>
                        <DropdownMenu title="Équipements">
                            <ul>
                                {hostData.equipments.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </DropdownMenu>
                    </section>
                </main>
            )}
            <Footer />
        </div>
    );
};

export default Host;
