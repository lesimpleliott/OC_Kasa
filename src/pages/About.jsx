import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const bannerData = {
    img: "src/assets/aboutImage.jpg"
};

const About = () => {
    return (
        <div>
            <Header />
            <Banner bannerData={bannerData} />
            ABOUT
            <Footer />
        </div>
    );
};

export default About;