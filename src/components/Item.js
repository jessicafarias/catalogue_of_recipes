import PropTypes from 'prop-types';

const Item = ({ url, title, order }) => {
  let stringclass = '';
  if (order === 0) {
    stringclass = 'active';
  }
  return (
    <div className={`carousel-item ${stringclass}`}>
      <img src={url} className="d-block w-100" alt="2585" />
      <h1>{title}</h1>
      <h1>{order}</h1>
    </div>
  );
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

export default Item;
