import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';
import React from 'react';

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  const converToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color='primary'
            checked={value}
            onChange={(e) =>
              onChange(converToDefaultEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
}
