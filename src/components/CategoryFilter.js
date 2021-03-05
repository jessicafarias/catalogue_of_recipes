import PropTypes from 'prop-types';

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
    <div>
      <div>
        <div>
          <label htmlFor="select">
            <select className="select" name="category" id="select" onChange={handleClick}>
              <option disable="true" hidden>CATEGORIES</option>
              {categories.map(
                category => <option value={category} key={category}>{category}</option>,
              )}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
