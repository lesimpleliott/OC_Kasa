import PropTypes from 'prop-types';

const Card = ( {data} ) => {
    return (
        <div className="card" key={data.id}>
            <img src={data.cover} alt="" />
            <h3>{data.title}</h3>
        </div>
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