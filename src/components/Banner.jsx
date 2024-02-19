import PropTypes from "prop-types";

const Banner = ({ image, text }) => {
    return (
        <section className="heroBanner">
            <img src={image} alt="image hero banner" />
            <p>{text}</p>
        </section>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;
