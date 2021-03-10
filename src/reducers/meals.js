import { FETCH_MEALS } from '../actions/types';

const initialState = [{
  idMeal: 1,
  strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
  strMeal: 'Title',
  strInstructions: 'Potatoes',
}];
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return [...action.payload];
    default:
      return state;
  }
};

export default mealsReducer;
