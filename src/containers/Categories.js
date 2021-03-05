import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Category from '../components/Category';
import getCategories from '../requests/getCategories';
import { changeFilterAction, fetchCategoriesAction } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const Categories = ({
  fetch, categories, filtered, filter,
}) => {
  useEffect(() => {
    const array = [];
    getCategories().then(list => {
      list.meals.map(m => {
        array.push({ name: m.strCategory, url: '' });
        return true;
      });
      fetch(array);
    });
  }, []);

  const handleFilterChange = category => {
    filter(category);
  };

  const filteredCategories = categories.filter(category => (
    !!((filtered === null || filtered === category.name))));

  return (
    <div className="Categories">
      <CategoryFilter handleFilter={handleFilterChange} />
      {filteredCategories.map(obj => (
        <Category
          key={obj.name}
          name={obj.name}
          url={obj.url}
        />
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  fetch: PropTypes.func.isRequired,
  filtered: PropTypes.string,
  filter: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  filtered: null,
};

const mapStateToProps = state => ({
  categories: state.categories,
  filtered: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetch: categories => {
    dispatch(fetchCategoriesAction(categories));
  },
  filter: category => {
    dispatch(changeFilterAction(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
