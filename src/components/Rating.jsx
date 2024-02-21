import PropTypes from "prop-types";

const Rating = ({ rating }) => {
    return (
        <div className="rating">
            <i className={`fa-solid fa-star ${rating > 1 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 2 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 3 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 4 ? "active" : ""}`}></i>
            <i className={`fa-solid fa-star ${rating > 5 ? "active" : ""}`}></i>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
