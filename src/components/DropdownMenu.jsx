// import PropTypes from "prop-types";
// import { useState } from "react";

// const DropdownMenu = ({ item }) => {
//     const [menuIsOpen, setMenuIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen);
//     };

//     return (
//         <div className="menu">
//             <div className="menu__banner" onClick={toggleMenu}>
//                 <h3>{item.title}</h3>
//                 <i className={`fa-solid fa-chevron-down ${menuIsOpen ? 'open' : ''}`}></i>
//             </div>
//             <div className={`menu__content ${menuIsOpen ? 'open' : ''}`}>
//                 <p>{item.description}</p>
//             </div>
//         </div>
//     );
// };

// DropdownMenu.propTypes = {
//     item: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//     }).isRequired,
// };

// export default DropdownMenu;
