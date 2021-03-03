export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const GET_PHOTO = 'GET_PHOTO';

export const fetchCategoriesAction = categories => ({
  type: FETCH_CATEGORIES,
  payload: categories,
});

export const getPhotoAction = category => ({
  type: GET_PHOTO,
  name: category.name,
  url: category.url,
});
