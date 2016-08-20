var React = require('react');

class SensitiveInput extends React.Component {
  render () {
    return (
      <div className='sensitive-input'>
        <label>{this.props.timeUnit}</label>
        <input onChange={this.props.handleChange.bind(this, this.props.timeUnit)}
               defaultValue={this.props.timeValue}
               autoFocus={this.props.reactKey === 1}
        />
      </div>
    );
  }
};

module.exports = SensitiveInput;
