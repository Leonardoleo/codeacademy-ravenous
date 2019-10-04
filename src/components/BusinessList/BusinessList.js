import React from "react";
import "./BusinessList.css";
import PropTypes from "prop-types";

// Components
import Business from "../Business/Business";

/**
 * A list of business tiles
 */
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {// Pass through all fetched businesses to render individually
        this.props.businessList.map(item => {
          return <Business key={item.id} business={item} />;
        })}
      </div>
    );
  }
}

BusinessList.propTypes = {
  businessList: PropTypes.array.isRequired
};

export default BusinessList;
