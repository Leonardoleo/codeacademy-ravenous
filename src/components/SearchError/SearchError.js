import React from "react";
import "./SearchError.css";

/**
 * Renders Search Errors as a message
 */
class SearchError extends React.Component {
  render() {
    return <p>{this.props.error.description}</p>;
  }
}

export default SearchError;
