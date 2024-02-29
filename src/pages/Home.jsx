import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

import BaseDataContext from "../context/BaseDataContext";
import { useContext } from "react";

const Home = () => {
    const dataHosts = useContext(BaseDataContext);

    return (
        <div className="app">
            <Header />
            <main>
                <HeroBanner img="./homeImage.jpg">
                    <h1>Chez vous, partout et ailleurs</h1>
                </HeroBanner>

                <section className="cards">
                    {dataHosts.map((host) => (
                        <Card key={host.id} data={host} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
