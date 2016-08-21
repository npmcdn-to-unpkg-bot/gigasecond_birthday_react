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
      <div className='results-container'>
        <div className='birthday-container'>
          <div className='form-element-label'>Your birthday:</div>
          <div>{birthday.toString()}</div>
        </div>
        <div className='birthday-container gigasecond-birthday-container'>
          <div className='form-element-label'>Your gigasecond birthday:</div>
          <div>{this.calculateGigasecondBirthday(birthday).toString()}</div>
        </div>
      </div>
    );
  }
};

module.exports = ResultsContainer;
