const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    const location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
      return(
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" placeholder="Enter city name" ref="location"/>
            <button>Get Weather</button>
          </form>
        </div>
      );
  }
});

module.exports = WeatherForm;
