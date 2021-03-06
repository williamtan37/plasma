import React from 'react';
import ExternalDatePicker from 'react-datepicker';
import Base from '../Base.jsx';

class DatePicker extends React.Component {
  render() {
    return (
      <ExternalDatePicker {...this.props} />
    );
  }
}

DatePicker.defaultProps = {};

DatePicker.propTypes = {};

DatePicker.displayName = 'DatePicker';

export default Base(DatePicker);
