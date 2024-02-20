import PropTypes from 'prop-types';

const HeroBanner = ({ title, img }) => {
    return <section className="heroBanner">
        <img src={img} />
        <h1>{title}</h1>
    </section>;
};

HeroBanner.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string.isRequired,
}

export default HeroBanner;
