import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Category = ({ name }) => {
  /* const [image, setImage] = useState(
    {
      src: 'initial set',
    },
  ); */
  useEffect(() => {
    /*
    const search = 'food'+name;
    getPhoto(search).then(res => {
      try {
        console.log(res.photos[0]);
        console.log(res.photos[0].src);
        console.log(res.photos[0].src.medium);
        setImage(res.photos[0].src.medium);
        console.log(image);
      } catch (error) {
        console.log(error);
      }
    });
    */
  }, []);

  return (
    <div>
      <div>
        <p>Randome Image</p>
      </div>
      <div>
        <p>
          {name}
          overlapping a little bit and transparent backgorudn
        </p>
      </div>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.shape({
    strArea: PropTypes.string,
  }).isRequired,
};

export default Category;
