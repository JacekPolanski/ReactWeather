var React = require('react');
var Nav = require('Nav');

module.exports = ({children}) => (
  <div>
    <Nav/>
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        {children}
      </div>
    </div>
  </div>
);