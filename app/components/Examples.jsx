var React = require('react');
var {Link} = require('react-router');

module.exports = () => (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here are few example location to try out: </p>
    <ol>
      <li>
        <Link to="/?location=Gdańsk">Gdańsk</Link>
      </li>
      <li>
        <Link to="/?location=Warszawa">Warszawa, Poland</Link>
      </li>
    </ol>
  </div>
);