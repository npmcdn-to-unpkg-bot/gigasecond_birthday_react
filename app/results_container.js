var React = require('react');

class ResultsContainer extends React.Component {
  birthdayAndTime (year, month, day, hour, minute, second) {
    return new Date(year, month - 1, day, hour, minute, second);
  }

  calculateGigasecondBirthday (birthdayAndTime) {
    return new Date(Date.parse(birthdayAndTime) + Math.pow(10,12));
  }

  render () {
    var birthday = this.birthdayAndTime(this.props.birthday.year,
                                        this.props.birthday.month,
                                        this.props.birthday.day,
                                        this.props.birthday.hour,
                                        this.props.birthday.minute,
                                        this.props.birthday.second);
    return (
      <div>
        Your birthday: {birthday.toString()}
        <br/>
        Your gigasecond birthday: {this.calculateGigasecondBirthday(birthday).toString()}
      </div>
    );
  }
};

module.exports = ResultsContainer;
