import React from 'react';

const SearchBox = React.createClass({
  // handleSearch(event) {
  //   this.props.handleSearch(event.target.value);
  // },

  render() {
    return (
      <section id="search-box">
        <div id="search-options" className="twelve columns">
          <input
            onChange={this.props.handleSearch}
            type='text'
            value={this.props.inputValue}
          />
        </div>
      </section>
    )
  }
});

export default SearchBox;
