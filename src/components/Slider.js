// import { useState } from 'react';

const Slider = () => {
  const state = {
    id: 1,
    url1: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
    url2: 'https://www.themealdb.com/images/media/meals/1529443236.jpg',
    url3: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
    url4: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
  };
  return (
    <div className="max-200">
      <div className="bebidas slide">
        <div id={`slide_in${state.id}`} className="carousel slide center w-100 z-2" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target={`#slide_in${state.id}`} data-slide-to="0" className="active" />
            <li data-target={`#slide_in${state.id}`} data-slide-to="1" />
            <li data-target={`#slide_in${state.id}`} data-slide-to="2" />
            <li data-target={`#slide_in${state.id}`} data-slide-to="3" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={state.url1} className="d-block w-100" alt="2585" />
            </div>
            <div className="carousel-item">
              <img src={state.url2} className="d-block w-100" alt="smoothies" />
            </div>
            <div className="carousel-item">
              <img src={state.url3} className="d-block w-100" alt="jugo anarajado" />
            </div>
            <div className="carousel-item">
              <img src={state.url4} className="d-block w-100" alt="jugo energizante" />
            </div>
          </div>
          <a className="carousel-control-prev" href={`#slide_in${state.id}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#slide_in${state.id}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Slider;
