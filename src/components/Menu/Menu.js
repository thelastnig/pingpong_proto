import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Menu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Menu = () => {
  return (
    <div>
      <div className={cx('menu')}>
        <div className={cx('menu-item')}><NavLink exact to="/" ><p>HOME</p></NavLink></div>
        <div className={cx('menu-item')}><NavLink exact to="/signup1" ><p>Sign Up</p></NavLink></div>
        <div className={cx('menu-item')}><NavLink to="/login" ><p>Log In</p></NavLink></div>
      </div>
    </div>
  );
}

export default withRouter(Menu);