import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

export default function Notification(props) {
  const { notify, setNotify } = props;
  return (
    <Snackbar open={notify.isOpen} autoHideDuration={3000} anchorOrigin={{veri}}>
      <Alert security={notify.type}>{notify.message}</Alert>
    </Snackbar>
  );
}
