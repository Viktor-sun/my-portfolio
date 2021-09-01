import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Logo.module.css';
import logo from '../../assets/icons/logo.png';

export default function Logo() {
  return (
    <NavLink to="/">
      <img className={s.logo} src={logo} alt="logo" />
    </NavLink>
  );
}
