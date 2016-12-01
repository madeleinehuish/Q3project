import React from 'react';

const History = React.createClass({
  render() {
    return (
      <section id="history-page">
        <div id="history-row" className="row">
          {/* <div> */}
            <h1 id="history-header">THE HISTORY OF BEARDS AND STACHES</h1>
          {/* </div> */}
        </div>

        <div id="youtube-history" className="row">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UHj1tm5xz6k" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
    )
  }
});

export default History;
