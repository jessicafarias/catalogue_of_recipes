import PropTypes from 'prop-types';
import Item from './Item';
import ListItem from './listItem';

const Slider = ({ input }) => (
  <div className="index">
    <div className="">
      <div id={`slide_in${input[0].idMeal}`} className="carousel slide center w-100 " data-ride="carousel" data-bs-interval="false" data-interval="false">
        <ol className="carousel-indicators">
          {input.map((obj, index) => (
            <ListItem
              key={obj.id}
              id={input[0].idMeal}
              order={index}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          {input.map((obj, index) => (
            <Item
              key={obj.id}
              url={obj.strMealThumb}
              title={obj.strMeal}
              order={index}
            />
          ))}
        </div>
        <a className="carousel-control-prev" href={`#slide_in${input[0].idMeal}`} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#slide_in${input[0].idMeal}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
);

Slider.propTypes = {
  input: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  })).isRequired,
};

export default Slider;
