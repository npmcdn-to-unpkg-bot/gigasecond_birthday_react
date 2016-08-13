var React = require('react');

var InputsContainer = require('./inputs_container');
var ResultsContainer = require('./results_container');

class MasterContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      birthday: {
        year: 1950,
        month: 1,
        day: 1,
        hour: 12,
        minute: 13,
        second: 14,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (timeUnit, event) {
    var newState = Object.assign({}, this.state);
    newState.birthday[timeUnit] = event.target.value;
    this.setState(newState);
  }

  render () {
    return (
      <div>
        <InputsContainer birthday={this.state.birthday} handleChange={this.handleChange}/>
        <ResultsContainer birthday={this.state.birthday}/>
      </div>
    );
  }
};

module.exports = MasterContainer;
