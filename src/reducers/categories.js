import { FETCH_CATEGORIES, GET_PHOTO } from '../actions/index';

const updateurl = (state, category) => {
  const index = state.map(e => e.name).indexOf(category.name);
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  const objectUpdate = state[index];
  objectUpdate.url = category.url;
  return [...newState, objectUpdate];
};

const initialState = [];
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return [...action.payload];
    case GET_PHOTO:
      return updateurl(state, action);
    default:
      return state;
  }
};

export default categoriesReducer;
