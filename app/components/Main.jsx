const React = require('react');
const Nav = require('Nav');

const Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="medium-6 large-4 small-centered columns">
            {props.children}
        </div>
      </div>
    </div>
  );

};

module.exports = Main;
