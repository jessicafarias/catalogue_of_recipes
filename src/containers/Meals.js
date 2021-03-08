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
    try {
      getRecipes(category).then(res => {
        fetch(res.meals);
      });
    } catch {
      fetch([{
        idMeal: 1,
        strMealThumb: 'https://images.pexels.com/photos/4439423/pexels-photo-4439423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        strMeal: 'NOT FOUND',
      }]);
    }
  }, []);

  return (
    <div>
      <Slider input={meals} />
    </div>
  );
};

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.number,
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
