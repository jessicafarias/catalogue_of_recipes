import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import mealsReducer from './meals';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
});

export default rootReducer;
