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

var birthdayAndTime = function(year, month, day, hour, minute, second) {
  return new Date(year, month - 1, day, hour, minute, second);
}

var calculateGigasecondBirthday = function(birthdayAndTime) {
  return new Date(Date.parse(birthdayAndTime) + Math.pow(10,12));
}

var ResultsContainer = React.createClass({
  render: function() {
    var birthday = birthdayAndTime(this.props.birthday.year,
                                   this.props.birthday.month,
                                   this.props.birthday.day,
                                   this.props.birthday.hour,
                                   this.props.birthday.minute,
                                   this.props.birthday.second);
    return (
      <div>
        Your birthday: {birthday.toString()}
        <br/>
        Your gigasecond birthday: {calculateGigasecondBirthday(birthday).toString()}
      </div>
    );
  }
});

ReactDOM.render(
  <MasterContainer />,
  document.getElementById('content')
);
