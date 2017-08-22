const React = require('react');

const About = (props) =>{
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
        </li>
        <li>
          <a href="https://openweathermap/react">Open Weather Map</a> - This was the Open Weather Map framework used
        </li>
      </ul>

    </div>
  );
};

module.exports = About;
