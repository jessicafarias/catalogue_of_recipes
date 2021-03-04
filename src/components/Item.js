import PropTypes from 'prop-types';
import '../styles/slider.css';

const Item = ({ url, title, order }) => {
  let stringclass = '';
  if (order === 0) {
    stringclass = 'active';
  }
  return (
    <div className={`carousel-item ${stringclass} relative_slide`}>
      <img src={url} className="d-block w-100 img_slider" alt="2585" />
      <h1 className="title_slider">{title}</h1>
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
