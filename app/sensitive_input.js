var React = require('react');

var SensitiveInput = React.createClass({
  render: function () {
    return (
      <div>
      <label>{this.props.timeUnit}</label>
      <input onChange={this.props.handleChange.bind(this, this.props.timeUnit)}
             defaultValue={this.props.timeValue}></input>
      <span>{this.props.timeValue}</span>
      </div>
    );
  }
});

module.exports = SensitiveInput;
