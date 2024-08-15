import React from 'react';
import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const AppBar = () => {
  const user = useSelector(selectUser);
  const isLogedIn = useSelector(selectIsLogedIn);
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      <h2 className={s.mainTitle}>Auth</h2>
      {isLogedIn && <h3 className={s.userName}>Welcome back, {user.name}</h3>}
      {!isLogedIn && <h3 className={s.userName}>Welcome</h3>}
      <ul className={s.linksList}>
        <li className={s.linksItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        {isLogedIn && (
          <li className={s.linksItem}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
        {!isLogedIn && (
          <>
            <li className={s.linksItem}>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className={s.linksItem}>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}

        {isLogedIn && (
          <li>
            <button
              className={s.logoutBtn}
              onClick={() => dispatch(logoutThunk())}
            >
              LogOut
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default AppBar;
