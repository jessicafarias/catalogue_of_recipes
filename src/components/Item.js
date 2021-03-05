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
        <p>
          smnkalsdlaskdfnñsakldf
          ddfnadskfjnaldfjnsa
          asñldfljasdfljnasdf
          sdfnakdfjñasdf
          sfnsakdfasdf
          kfjlas
          ADKAJDFNAsfasdfkjsad
          elfjbñsdfjk
        </p>
      </div>
    </div>);
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

export default Item;
