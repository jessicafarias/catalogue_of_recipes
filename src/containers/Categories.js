import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/Category';

const Categories = ({ categories }) => (
  <div>
    {/* Mapping to the list to display component */}
    {categories.map(obj => (
      <Category
        key={obj.strArea}
        name={obj.strArea}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  categories: state.categories,
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    strArea: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, null)(Categories);
