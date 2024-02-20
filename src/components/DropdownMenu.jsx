import PropTypes from "prop-types";
import { useState } from "react";

const DropdownMenu = ({ title, children }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <div className="dropdown">
            <div className="banner" onClick={toggleMenu}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-up ${menuIsOpen ? 'open' : ''}`} />
            </div>
            <div className={`content ${menuIsOpen ? 'open' : '' }`}>{children}</div>
        </div>
    );
};

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default DropdownMenu;
