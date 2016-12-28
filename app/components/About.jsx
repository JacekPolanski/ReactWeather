var React = require('react');

module.exports = () => (
  <div>
    <h1 className="text-center">About</h1>
    <div className="callout">
      <p>
        This is a weather application build on React.
        I have build it for <b>The Complete React Web App Developer Course</b>.
      </p>
      <p>
        Here are a some of the tools is used:
      </p>
    </div>
    <div className="stacked button-group">
      <a href="https://github.com/polakj/ReactWeather" className="button">GitHub project page</a>
      <a href="https://facebook.github.io/react/" className="button">React documentation</a>
      <a href="http://foundation.zurb.com/index.html" className="button">Foundation documentation</a>
      <a href="http://openweathermap.org/" className="button">OpenWeatherMap </a>
    </div>
  </div>
);