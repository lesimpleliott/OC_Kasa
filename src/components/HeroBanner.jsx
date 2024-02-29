import PropTypes from 'prop-types';

const HeroBanner = ({ img, children }) => {
    return <section className="heroBanner">
        <img src={img} />
        {children}
    </section>;
};

HeroBanner.propTypes = {
    img: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default HeroBanner;
