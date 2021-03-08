import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhotoAction } from '../actions/index';
import getPhoto from '../requests/getPhotos';
import '../styles/Category.css';

const Category = ({ name, url, updateUrl }) => {
  useEffect(() => {
    const search = `${name}`;
    try {
      getPhoto(search).then(res => {
        const obj = {
          name,
          url: res.photos[0].src.medium,
        };
        updateUrl(obj);
      });
    } catch {
      const obj = {
        name,
        url: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      };
      updateUrl(obj);
    }
  }, []);

  return (
    <Link className="regular" to={`/show/${name}`}>
      <div className="relative_space">
        <div>
          <img src={url} alt={name} className="img_category" />
        </div>
        <div>
          <div className="text_container">
            <p className="text_category">{name}</p>
            <p className="text_quantity">10 recipes</p>
          </div>
        </div>
      </div>
    </Link>
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
