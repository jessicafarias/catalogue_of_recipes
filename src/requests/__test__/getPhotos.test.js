import axios from 'axios';
import getPhotos from '../getPhotos';

jest.mock('axios');

test('should fetch a photo', () => {
  const meals = "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=350"
  const resp = {data: meals};
  axios.get.mockResolvedValue(resp.photos);

  return getPhotos('breakfast food italian sydney troxel').then(data => expect(data.photos[0].src.medium).toEqual(meals));
});