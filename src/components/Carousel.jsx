import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Carousel = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 37) {
            // La touche de la flèche gauche
            prevSlide();
        } else if (e.keyCode === 39) {
            // La touche de la flèche droite
            nextSlide();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <section className="carousel">
        <img src={pictures[index]} alt="" />
        {pictures.length > 1 && ( 
            <>
                <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
                <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
                <p>{index + 1}/{pictures.length}</p>
            </>
        )}
    </section>
    );
};

Carousel.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default Carousel;
