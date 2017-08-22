const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Denver'>Denver, CO</Link>
        </li>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia, CO</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Examples;
