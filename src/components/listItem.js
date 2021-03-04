import PropTypes from 'prop-types';

const ListItem = ({ id, order }) => {
  let stringclass = 'active';
  if (order === 0) {
    stringclass = 'active';
  }
  return (
    <li data-target={`#slide_in${id}`} data-slide-to={order} className={`${stringclass}`} />
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
};

export default ListItem;
