import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';
import { fetchMealsAction } from '../actions';
import getRecipes from '../requests/getRecipes';

const Meals = ({ meals, fetch }) => {
  const { category } = useParams();

  useEffect(() => {
    getRecipes(category).then(res => {
      fetch(res.meals);
    });
  }, []);

  return (
    <div>
      <Slider input={meals} />
    </div>
  );
};

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  })).isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  fetch: meals => {
    dispatch(fetchMealsAction(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
