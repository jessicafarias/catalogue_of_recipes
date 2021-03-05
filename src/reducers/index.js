import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import filterReducer from './filter';
import mealsReducer from './meals';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  filter: filterReducer,
});

export default rootReducer;
