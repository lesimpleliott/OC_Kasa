import PropTypes from "prop-types";

const Banner = (props) => {
    return (
        <div className="heroBanner">
            <img src={props.bannerData.img} alt="image hero banner" />
            <p>{props.bannerData.text}</p>
        </div>
    );
};

Banner.propTypes = {
    bannerData: PropTypes.shape({
        img: PropTypes.string.isRequired,
        text: PropTypes.string,
    }).isRequired
};

export default Banner;
