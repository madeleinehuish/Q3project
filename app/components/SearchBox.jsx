import React from 'react';
import Products from './Products';

const SearchBox = React.createClass({
  // handleSearch(event) {
  //   this.props.handleSearch(event.target.value);
  // },

  render() {
    return (
      <form id="search-box">
        <div id="search-options" className="twelve columns">
          <input
            onChange={this.props.handleSearch}
            type='text'
            value={this.props.value}
          />
        </div>
      </form>
    )
  }
});

export default SearchBox;
