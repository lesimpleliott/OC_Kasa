import Banner from "../components/Banner";
import CollapseMenu from "../components/CollapseMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const bannerData = {
    img: "src/assets/aboutImage.jpg",
};

import dataAbout from "../data/about.json";

const About = () => {


    return (
        <div>
            <Header />
            <Banner bannerData={bannerData} />

            <section className="aboutSection">
                {dataAbout.map((item) => (
                    <CollapseMenu
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </section>

            <Footer />
        </div>
    );
};

export default About;
