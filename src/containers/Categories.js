import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Category from '../components/Category';
import getCategories from '../requests/getCategories';
import { changeFilterAction, fetchCategoriesAction } from '../actions';

const Categories = ({ fetch, categories, filtered }) => {
  useEffect(() => {
    const array = [];
    getCategories().then(list => {
      list.meals.slice(0, 4).map(m => {
        array.push({ name: m.strCategory, url: '' });
        return true;
      });
      fetch(array);
    });
  }, []);

  const filteredCategories = categories.filter(category => (
    !!((filtered === null || filtered === category.name))));

  return (
    <div className="Categories">
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
