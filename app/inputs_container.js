var React = require('react');

var SensitiveInput = require('./sensitive_input');

var InputsContainer = React.createClass({
  render: function() {
    var birthday = this.props.birthday;
    var handleChange = this.props.handleChange;
    var inputs = Object.keys(birthday).map(function(unit, idx){
      return <SensitiveInput key={idx + 1} timeUnit={unit} timeValue={birthday[unit]} handleChange={handleChange}/>
    });

    return <div>{inputs}</div>;
  }
});

module.exports = InputsContainer;
