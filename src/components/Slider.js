import Item from './Item';
import ListItem from './listItem';

const Slider = () => {
  const input = [{
    idMeal: 1,
    strMealTumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
    strMeal: 'Title',
    strIndredient1: 'Potatoes',
    strIngredient2: 'strIngredient2',
  },
  {
    idMeal: 2,
    strMealTumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
    strMeal: 'Title',
    strIndredient1: 'Potatoes',
    strIngredient2: 'strIngredient2',
  }, {
    idMeal: 3,
    strMealTumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
    strMeal: 'Title',
    strIndredient1: 'Potatoes',
    strIngredient2: 'strIngredient2',
  },
  {
    idMeal: 4,
    strMealTumb: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
    strMeal: 'Title',
    strIndredient1: 'Potatoes',
    strIngredient2: 'strIngredient2',
  }];

  return (
    <div className="max-200">
      <div className="bebidas slide">
        <div id={`slide_in${input[0].idMeal}`} className="carousel slide center w-100 z-2" data-ride="carousel">
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
                url={obj.strMealTumb}
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
};
export default Slider;
