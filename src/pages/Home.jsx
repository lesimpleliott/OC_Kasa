import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

import BaseDataContext from "../hooks/BaseDataContext";
import { useContext } from "react";

const Home = () => {

    const dataHosts = useContext(BaseDataContext)

    return (
        <div>
            <Header />
            <main>
                <HeroBanner
                    title="Chez vous, partout et ailleurs"
                    img="./homeImage.jpg"
                />
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
