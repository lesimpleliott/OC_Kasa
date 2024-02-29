import PropTypes from "prop-types";

const Tag = ({ tag }) => {
    return <p className="tag">{tag}</p>;
};

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
};

export default Tag;

