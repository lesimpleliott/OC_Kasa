import PropTypes from "prop-types";

const Banner = (props) => {
    return (
        <section className="heroBanner">
            <img src={props.bannerData.img} alt="image hero banner" />
            <p>{props.bannerData.text}</p>
        </section>
    );
};

Banner.propTypes = {
    bannerData: PropTypes.shape({
        img: PropTypes.string.isRequired,
        text: PropTypes.string,
    }).isRequired
};

export default Banner;
