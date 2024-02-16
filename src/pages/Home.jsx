import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const bannerData = {
    img: "src/assets/homeImage.jpg", 
    text: "Chez vous, partout et ailleurs"
};

const Home = () => {

    return (
        <div>
            <Header />
            <Banner bannerData={bannerData} />
            HOME
            <Footer />
        </div>
    );
};

export default Home;