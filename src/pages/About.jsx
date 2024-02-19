import Header from "../components/Header";
import Banner from "../components/Banner";
import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import dataAbout from "../data/about.json";

const About = () => {
    return (
        <div>
            <Header />

            <main>
                <Banner image="src/assets/aboutImage.jpg" />
                <section className="aboutSection">
                    {dataAbout.map((item) => (
                        <DropdownMenu key={item.id} item={item} />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
