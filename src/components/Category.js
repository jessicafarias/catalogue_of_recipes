import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPhotoAction } from '../actions/index';
// import getPhoto from '../requests/getPhotos';

const Category = ({ name, url, updateUrl }) => {
  useEffect(() => {
    const obj = {
      name,
      url,
    };
    updateUrl(obj);
    /* const search = `${name} food`;
    getPhoto(search).then(res => {
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
        <img src={url} alt={name} />
      </div>
      <div>
        <p>
          {name}
          overlapping a little bit and transparent background
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateUrl: category => {
    dispatch(getPhotoAction(category));
  },
});

Category.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  updateUrl: PropTypes.func.isRequired,
};

Category.defaultProps = {
  url: 'https://images.pexels.com/photos/923182/pexels-photo-923182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

export default connect(null, mapDispatchToProps)(Category);
