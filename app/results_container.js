var React = require('react');

class ResultsContainer extends React.Component {

  birthdayAndTime (year, month, day, hour, minute, second) {
    return new Date(year, month - 1, day, hour, minute, second);
  }

  calculateGigasecondBirthday (birthdayAndTime) {
    // return new Date(Date.parse(birthdayAndTime) + Math.pow(10,12)); // original, bizarre native JS way

    let copiedDate = new Date(birthdayAndTime.getTime());
    return copiedDate.addSeconds(Math.pow(10,9));
  }

  prettyDate (date) {
    return date.toString('dddd, MMMM d, yyyy');
  }

  prettyTime (date) {
    return date.toString('h:mm:ss tt');
  }

  render () {
    var birthday = this.birthdayAndTime(this.props.birthday.year,
                                        this.props.birthday.month,
                                        this.props.birthday.day,
                                        this.props.birthday.hour,
                                        this.props.birthday.minute,
                                        this.props.birthday.second);

    var gigasecondBirthday = this.calculateGigasecondBirthday(birthday);

    return (
      <div className='results-container'>
        <div className='birthday-container'>
          <div className='form-element-label'>Your birthday:</div>
          <div>{this.prettyDate(birthday)}</div>
          <div>{this.prettyTime(birthday)}</div>
        </div>
        <div className='birthday-container gigasecond-birthday-container'>
          <div className='form-element-label'>Your gigasecond birthday:</div>
          <div>{this.prettyDate(gigasecondBirthday)}</div>
          <div>{this.prettyTime(gigasecondBirthday)}</div>
        </div>
      </div>
    );
  }
};

module.exports = ResultsContainer;
