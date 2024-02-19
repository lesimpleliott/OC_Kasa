import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ( {data} ) => {
    return (
        <Link className="card" key={data.id} to={`/host/${data.id}`}>
            <img src={data.cover} alt="" />
            <h3>{data.title}</h3>
        </Link>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        cover: PropTypes.string,
    }).isRequired,
}


export default Card;