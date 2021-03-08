import * as actions from '../index';
import * as types from '../types';
 
  describe('actions', () => {
    it('should create an action to fetch categories', () => {
      const categories = [{
        name: 'Breakfast',
      }];
      
      const expectedAction = {
        type: types.FETCH_CATEGORIES,
        payload: categories,
      }
      expect(actions.fetchCategoriesAction(categories)).toEqual(expectedAction)
    })

    it('should create an action to fetch photos with given category', () => {
      const meals = [{
        idMeal: 1,
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
        strMeal: 'Title',
        strInstructions: 'Potatoes',
      }];
      const expectedAction = {
        type: types.FETCH_MEALS,
        payload: meals,
      }
      expect(actions.fetchMealsAction(meals)).toEqual(expectedAction)
    })
    it('should create an action to update photos url', () => {
      const photos = {
        name: 'Breakfast',
        url: 'https://'
      };
      const expectedAction = {
        type: types.GET_PHOTO,
        name: photos.name,
        url: photos.url,
      }
      expect(actions.getPhotoAction(photos)).toEqual(expectedAction)
    })

    it('should create an action to update filter', () => {
      const filter = 'Breakfast';
      const expectedAction = {
        type: types.CHANGE_FILTER,
        filter: filter,
      }
      expect(actions.changeFilterAction(filter)).toEqual(expectedAction)
    })

  })
