import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Menu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Menu = () => {
  return (
    <div>
      <div className={cx('menu')}>
        <div className={cx('menu-item')}><NavLink style={{ textDecoration: 'none' }} exact to="/" ><p>HOME</p></NavLink></div>
        <div className={cx('menu-item')}><NavLink style={{ textDecoration: 'none' }} exact to="/signup1" ><p>SIGN UP</p></NavLink></div>
        <div className={cx('menu-item')}><NavLink style={{ textDecoration: 'none' }} to="/login" ><p>LOG IN</p></NavLink></div>
        <div className={cx('menu-item')}><NavLink style={{ textDecoration: 'none' }} to="/termAndPolicy" ><p>Terms of Use</p></NavLink></div>
      </div>
    </div>
  );
}

export default withRouter(Menu);