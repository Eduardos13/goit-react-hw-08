import React from 'react';
import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className={s.header}>
      <h2 className={s.mainTitle}>Auth</h2>
      <h3 className={s.userName}>Some temporarly title</h3>
      <ul className={s.linksList}>
        <li className={s.linksItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.linksItem}>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className={s.linksItem}>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className={s.linksItem}>
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
