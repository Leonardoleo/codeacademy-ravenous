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
        this.props.businessList.map((item, idx) => {
          /**
           * @todo: replace 'idx' with a truely unique value. Using IDX can cause issues
           * https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
           */
          return <Business key={idx} business={item} />;
        })}
      </div>
    );
  }
}

BusinessList.propTypes = {
  businessList: PropTypes.array.isRequired
};

export default BusinessList;
