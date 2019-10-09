import React from "react";
import "./App.css";

// Components
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";
import SearchError from "../SearchError/SearchError";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      isError: false,
      error: {}
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    this.setState({ businesses: []});
    Yelp.search(term, location, sortBy).then(businesses => {
      if (businesses.error) {
        this.setState({ isError: true, error: businesses.error });
      } else {
        this.setState({ isError: false, error: {} });
        this.setState({ businesses: businesses });
      }
    });
  }

  render() {
    const isError = this.state.isError;
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {isError ? (
          <SearchError error={this.state.error} />
        ) : (
          <BusinessList businessList={this.state.businesses} />
        )}
      </div>
    );
  }
}

export default App;
