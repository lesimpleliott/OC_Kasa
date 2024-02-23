import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Card = ({data}) => {
    return (
        <Link className="card" to={`/host/${data.id}`}>
            <h2>{data.title}</h2>
            <img src={data.cover} alt={`photo de ${data.title}`} />
        </Link>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
    }).isRequired,
}


export default Card;