import FETCH_CATEGORIES from '../actions/index';

const initialState = [{ strArea: 'American', photo_url: '' }];
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return state;
    default:
      return state;
  }
};

export default categoriesReducer;
