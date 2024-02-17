import PropTypes from "prop-types";

const CollapseMenu = ({ title, description }) => {
    return (
        <div className="menu">
            <label className="menu__banner">
                <input type="checkbox" />
                <h3>{title}</h3>
                <i className="fa-solid fa-chevron-down"></i>
            </label>
            <div className="menu__content">
                <p>{description}</p>
            </div>
        </div>
    );
};

CollapseMenu.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CollapseMenu;
