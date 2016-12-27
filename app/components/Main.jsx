var React = require('react');
var Nav = require('Nav');

module.exports = ({children}) => (
  <div>
    <Nav/>
    <h2>Main component</h2>
    {children}
  </div>
);