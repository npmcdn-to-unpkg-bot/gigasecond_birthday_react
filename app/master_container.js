var React = require('react');

var InputsContainer = require('./inputs_container');
var ResultsContainer = require('./results_container');

var MasterContainer = React.createClass({
  getInitialState: function() {
    return {
      birthday: {
        year: 1950,
        month: 1,
        day: 1,
        hour: 12,
        minute: 13,
        second: 14,
      },
    };
  },
  handleChange: function(timeUnit, event) {
    var newState = Object.assign({}, this.state);
    newState.birthday[timeUnit] = event.target.value;
    this.setState(newState);
  },
  render: function () {
    return (
      <div>
        <InputsContainer birthday={this.state.birthday} handleChange={this.handleChange}/>
        <ResultsContainer birthday={this.state.birthday}/>
      </div>
    );
  }
});

module.exports = MasterContainer;
