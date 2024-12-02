import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <div className="slider-heading">
          <h2 className="slider-h2">YTÜ FUTBOL SAHASI İÇİN</h2>
          <button
            href="a"
            className="btn btn-lg btn-primary slider-button slider-heading"
          >
            RANDEVU AL
          </button>
        </div>
        {/* <h2 className="slider-heading">YTÜ FUTBOL SAHASI İÇİN</h2> */}
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};
