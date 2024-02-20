import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dataHosts from "../data/base.json";
import { useState, useEffect } from "react";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import DropdownMenu from "../components/DropdownMenu";

const Host = () => {
    const { id } = useParams();
    const [hostData, setHostData] = useState();

    useEffect(() => {
        const selectedHost = dataHosts.find((host) => host.id === id);
        setHostData(selectedHost);
    }, [id]);

    return (
        <div>
            <Header />

            {hostData && (
                <main className="host">
                    <Carousel pictures={hostData.pictures} />

                    <section className="content">
                        <div className="content__host">
                            <h2 className="title">{hostData.title}</h2>
                            <p className="city">{hostData.location}</p>
                            <div className="tags">
                                {hostData.tags.map((tag, index) => (
                                    <span className="tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="content__owner">
                            <div className="detail">
                                <p className="name">{hostData.host.name}</p>
                                <img src={hostData.host.picture} />
                            </div>
                            <Rating rating={parseInt(hostData.rating)} />
                        </div>
                    </section>

                    <section className="description">
                    <DropdownMenu item={"test"} />

                        <DropdownMenu title="Titre du Dropdown">
                            <p>Contenu du dropdown ici</p>
                            <p>contenu suite</p>
                        </DropdownMenu>
                    </section>
                </main>
            )}

            <Footer />
        </div>
    );
};

export default Host;
