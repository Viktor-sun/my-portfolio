import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import {
  TextField,
  InputAdornment,
  Typography,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Email, EmojiEmotions, Phone, Message } from '@material-ui/icons';
import styles from './FormSubmit.module.css';
import formSubmit from '../../helpers/formSubmit';

const CssTextField = withStyles({
  root: {
    marginBottom: '40px',
    '& .MuiInputBase-input': {
      fontFamily: 'Caveat, sans-serif',
      fontSize: '1.7rem',
      lineHeight: '1.5',
    },
    '& label': {
      fontFamily: 'Caveat, sans-serif',
      fontSize: '2rem',
    },
    '& label.Mui-focused': {
      color: '#1f4063',
      fontFamily: 'Caveat, sans-serif',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1f4063',
    },
    // '& .MuiInput-underline:before': {
    //   borderBottomColor: '#bdbdbd',
    // },
    '& .MuiInput-underline.Mui-error:after': {
      borderBottomColor: 'red',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontFamily: 'Caveat, sans-serif',
      fontSize: '1.5rem',
    },
  },
})(TextField);

export default function FormSubmit() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      phoneNumber: Yup.string().optional(),
      message: Yup.string().max(150, 'Maximum 150 characters').optional(),
    }),
    onSubmit: ({ email, name, message, phoneNumber }) => {
      formSubmit({ email, name, message, phoneNumber });
      formik.resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        Simple way to contac me
      </Typography>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <CssTextField
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <CssTextField
          fullWidth
          id="name"
          name="name"
          type="text"
          label="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmojiEmotions className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <InputMask
          mask="+38 (999) 999-99-99"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          disabled={false}
          maskChar=" "
        >
          {props => (
            <CssTextField
              {...props}
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              label="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone className={styles.form__icon} />
                  </InputAdornment>
                ),
              }}
              placeholder="your number"
            />
          )}
        </InputMask>

        <CssTextField
          fullWidth
          id="message"
          name="message"
          type="text"
          label="Message"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Message className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="enter your message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          className={styles.button}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
