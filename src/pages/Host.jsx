import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dataHosts from "../data/base.json";
import { useState, useEffect } from "react";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";

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
                        <h2 className="title">{hostData.title}</h2>
                        <p className="city">{hostData.location}</p>
                        <div className="tags">
                            {hostData.tags.map((tag, index) => (
                                <span className="tag" key={index}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="profil">
                            <p className="profil__name">{hostData.host.name}</p>
                            <img
                                src={hostData.host.picture}
                                alt=""
                                className="profil__img"
                            />
                        </div>

                        <Rating rating={parseInt(hostData.rating)}/>
                                
                    </section>

                    <section className="description"></section>

                    {/* <h2>{hostData ? hostData.title : ""}</h2> */}
                </main>
            )}

            <Footer />
        </div>
    );
};

export default Host;
