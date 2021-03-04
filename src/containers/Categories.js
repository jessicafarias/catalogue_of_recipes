import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Category from '../components/Category';
import getCategories from '../requests/getCategories';
import { fetchCategoriesAction } from '../actions';

const Categories = ({ fetch, categories }) => {
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

  return (
    <div>
      {categories.map(obj => (
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
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  fetch: categories => {
    dispatch(fetchCategoriesAction(categories));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
