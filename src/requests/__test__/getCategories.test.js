import axios from 'axios';
import getCategories from '../getCategories';

jest.mock('axios');

test('should fetch a list of categories', () => {
  const meals = { meals: [{ strCategory: 'Beef' }, { strCategory: 'Breakfast' }, { strCategory: 'Chicken' }, { strCategory: 'Dessert' }, { strCategory: 'Goat' }, { strCategory: 'Lamb' }, { strCategory: 'Miscellaneous' }, { strCategory: 'Pasta' }, { strCategory: 'Pork' }, { strCategory: 'Seafood' }, { strCategory: 'Side' }, { strCategory: 'Starter' }, { strCategory: 'Vegan' }, { strCategory: 'Vegetarian' }] };
  const resp = { data: meals };
  axios.get.mockResolvedValue(resp);

  return getCategories().then(data => expect(data).toEqual(meals));
});
