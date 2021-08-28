import React from 'react';
import Typography from '@material-ui/core/Typography';
import s from './Address.module.css';

export default function Address() {
  return (
    <address className={s.address}>
      <Typography variant="h4" className={s.title}>
        Address
      </Typography>
      <p className={s.text}>Ukraine, Kharkiv</p>
      <Typography variant="h4" className={s.title}>
        Email
      </Typography>
      <p className={s.text}>
        <a href="mailto: viktortsolka4@gmail.com">viktortsolka4@gmail.com</a>
      </p>
      <Typography variant="h4" className={s.title}>
        Telegram
      </Typography>
      <p className={s.text}>
        <a href="https://t.me/viktor_tsk">@viktor_tsk</a>
      </p>
    </address>
  );
}
