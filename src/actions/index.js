import * as types from './types';

export const fetchCategoriesAction = categories => ({
  type: types.FETCH_CATEGORIES,
  payload: categories,
});

export const getPhotoAction = category => ({
  type: types.GET_PHOTO,
  name: category.name,
  url: category.url,
});

export const fetchMealsAction = meals => ({
  type: types.FETCH_MEALS,
  payload: meals,
});

export const changeFilterAction = category => ({
  type: types.CHANGE_FILTER,
  filter: category,
});
