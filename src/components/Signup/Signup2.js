import React, { Component } from 'react';
import styles from './Signup.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Signup2 extends Component {

  render() {
    return (
      <div className={cx('positioner')}>
        <div className={cx('logoWrapper')}> 
          <p>
            PingPong
          </p>
        </div>
        <div className={cx('content')}>
          <h2>Sign up</h2>
          <label for="nation">Nation</label>
          <input type="text" id="nation" name="nation"/>
          <label for="state">State</label>
          <input type="text" id="state" name="state"/>
          <label for="birthDate">Birth Date</label>
          <input type="text" id="birthDate" name="birthDate" />
          <label for="nickname">Nickname</label>
          <input type="text" id="nickname" name="nickname" />
          <div>
          <button className={cx('btnSignup')}>SIGN UP</button>
        </div>
        </div>
      </div>
    );
  }
}

export default Signup2;