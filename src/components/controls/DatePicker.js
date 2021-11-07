import React from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function DatePicker(props) {
  const { name, value, label, onChange } = props;
  const converToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant='inline'
        inputVariant='outlined'
        format='yyyy/MM/dd'
        name={name}
        value={value}
        onChange={(date) => onChange(converToDefaultEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
