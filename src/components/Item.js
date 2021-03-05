import PropTypes from 'prop-types';
import '../styles/slider.scss';
import Style from 'style-it';

const Item = ({ url, title, order }) => {
  let stringclass = '';

  if (order === 0) {
    stringclass = 'active';
  }
  return Style.it(`
  #uberuns:after {
    content:'';
    background: url("${url}");
    background-attachment:fixed;
    background-size:cover;
  }`,
    <div className={`carousel-item ${stringclass}`}>

      <div className="image" style={{ backgroundImage: `url(${url})` }} />
      <div className="section" id="uberuns" data={`url(${url})`}>
        <p className="text_slider">
          {title}
        </p>
        <p className="span_title pb-2">By Themealdb</p>
        <div className="row m-2 p-2">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="tag_slider">FAVORITE</p>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <p className="tag_slider">RECOMMEND</p>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-share-fill" viewBox="0 0 16 16">
              <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg>
            <p className="tag_slider">SHARE</p>
          </div>
        </div>
      </div>
    </div>);
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

export default Item;
