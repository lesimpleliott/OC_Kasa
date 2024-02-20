import PropTypes from "prop-types";

const Rating = ({ rating }) => {
    return (
        <div className="rating">
            <i
                className="fa-solid fa-star"
                style={rating > 1 ? { color: "#ff6060" } : {}}
            ></i>
            <i
                className="fa-solid fa-star"
                style={rating > 2 ? { color: "#ff6060" } : {}}
            ></i>
            <i
                className="fa-solid fa-star"
                style={rating > 3 ? { color: "#ff6060" } : {}}
            ></i>
            <i
                className="fa-solid fa-star"
                style={rating > 4 ? { color: "#ff6060" } : {}}
            ></i>
            <i
                className="fa-solid fa-star"
                style={rating >= 5 ? { color: "#ff6060" } : {}}
            ></i>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
