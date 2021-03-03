import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from '../components/Category';

const Categories = ({ categories }) => (
  <div>
    {/* Mapping to the list to display component */}
    {categories.map(obj => (
      <Category
        key={obj.name}
        name={obj.name}
        url={obj.url}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  categories: state.categories,
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, null)(Categories);
