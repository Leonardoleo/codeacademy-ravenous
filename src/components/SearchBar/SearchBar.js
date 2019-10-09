import React from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnterKeyPressed = this.handleEnterKeyPressed.bind(this);
  }

  /**
   * Sets the selected sort option class to 'active' for styling
   *
   * @param {string} sortByOption
   * @returns {string} 'active'
   */
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  /**
   * Executes a Yelp search utilising the following state values
   * - this.state.term
   * - this.state.location
   * - this.state.sortBy
   */
  searchYelp() {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
  }

  /**
   * Modifies the sortBy state of the SearchBar to the value of sortByOption
   *
   * @param {string} sortByOption
   */
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
    this.searchYelp();
  }

  /**
   * Modifies the 'term' state of the SearchBar to the event value
   *
   * @param {Event} event
   */
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  /**
   * Modifies the 'location' state of the SearchBar to the event value
   *
   * @param {Event} event
   */
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  /**
   * Executes a Yelp search on Button press
   *
   * @param {Event} event
   */
  handleSearch(event) {
    this.searchYelp();
    event.preventDefault();
  }

  /**
   * Executes a Yelp search on Enter Key press
   *
   * @param {Event} event
   */
  handleEnterKeyPressed(event) {
    if (event.key === "Enter") {
      this.searchYelp();
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      const sortByOptionValue = this.sortByOptions[sortByOption];

      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
            onKeyPress={this.handleEnterKeyPressed}
          />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}
            onKeyPress={this.handleEnterKeyPressed}
          />
        </div>
        <div className="SearchBar-submit" onClick={this.handleSearch}>
          <button>Let&apos;s Go</button>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchYelp: PropTypes.func.isRequired
};

export default SearchBar;
