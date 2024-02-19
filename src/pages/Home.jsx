import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import dataHosts from "../data/base.json";
import Card from "../components/Card";

const Home = () => {

    return (
        <div>
            <Header />

            <main>
                <Banner
                    image="src/assets/homeImage.jpg"
                    text="Chez vous, partout et ailleurs"
                />

                <section className="cards">

                    {dataHosts.map((host) => (
                        <Card key={host.id} data={host}/>
                    ))}

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
