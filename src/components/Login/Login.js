import React, { Component } from 'react';
import styles from './Login.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Login extends Component {
  render() {
    return (
      <div className={cx('positioner')}>
        <div className={cx('logoWrapper')}> 
          <p>
            PingPong
          </p>
        </div>
        <div className={cx('content')}>
          <h2>Log In</h2>
          <label for="email">E-mail</label>
          <input type="text" id="email" name="email"/>
          <label for="password">Password</label>
          <input type="password" id="password" name="password"/>
          <div>
            <button className={cx('btnLogin')}>LOG IN</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;