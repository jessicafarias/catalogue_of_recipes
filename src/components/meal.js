import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Slider from './Slider';

const Meals = () => {
  const { category } = useParams();

  useEffect(() => {
    /* const obj = {
      /*updateUrl(obj);
      /* const search = `${name} food`;
      getPhoto(search).then(res => {
      getRecipes().the(res => {

      })
      try {
        console.log(res);
        const obj = {
          name,
          url: res.photos[0].src.medium,
        };
        updateUrl(obj);
      } catch (error) {
        console.log(error);
      }
    }); */
  }, []);

  return (
    <div>
      <div>
        <p>
          {category}
          <Slider />
        </p>
      </div>
      <div>
        <p>
          receip mapping throw the api
        </p>
      </div>
    </div>
  );
};

export default Meals;
