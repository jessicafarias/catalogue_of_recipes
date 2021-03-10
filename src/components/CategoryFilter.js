import PropTypes from 'prop-types';
import '../styles/filter.css';

const CategoryFilter = props => {
  const categories = ['All', 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb',
    'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian'];
  const { handleFilter } = props;

  const handleClick = event => {
    const { value } = event.target;
    if (value === 'All') {
      handleFilter(null);
    } else {
      handleFilter(value);
    }
  };

  return (
    <div className="container_filter sticky-top">
      <label htmlFor="w-100">
        <select className="select" name="category" id="select" onChange={handleClick}>
          <option disable="true" hidden>Search any keyword</option>
          {categories.map(
            category => <option value={category} key={category}>{category}</option>,
          )}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
