import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <HeroBanner
                    title="Chez vous, partout et ailleurs"
                    img="./homeImage.jpg"
                />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
