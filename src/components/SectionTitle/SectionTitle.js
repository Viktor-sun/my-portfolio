import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title }) {
  return (
    <Typography variant="h2" className={styles.title}>
      {title}
    </Typography>
  );
}
