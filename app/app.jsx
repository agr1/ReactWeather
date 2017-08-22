const React = require('react');
const ReactDOM = require('react-dom');
const{Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

// Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
