import React from "react";
import "./Business.css";
import PropTypes from "prop-types";

/**
 * Renders individual businesses as tiles
 */
class Business extends React.Component {
  render() {
    const business = this.props.business;
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.location.address}</p>
            <p>{business.location.city}</p>
            <p>
              {business.location.state} {business.location.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

Business.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imageSrc: PropTypes.string,
    location: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipCode: PropTypes.string
    }),
    category: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number
  }).isRequired
};

export default Business;
