import React, { Component } from 'react';
import styles from './Signup.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Signup extends Component {
  state = {
    password: '',
    passwordConfirm: '',
    match: false,
  }

  handleChangePassword = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
    const { password, passwordConfirm } = this.state;
    if(password && passwordConfirm && (password !== passwordConfirm)) {
      this.passwordMatch.innerHTML = 'Don\'t Match';
      this.setState({
        match: false
      });
    } else if (password && passwordConfirm && (password === passwordConfirm)) {
      this.passwordMatch.innerHTML = 'Match';
      this.setState({
        match: true
      });
    } else {
      this.passwordMatch.innerHTML = '';
    }
  } 


  render() {
    const { password, passwordConfirm, match } = this.state;
    const { history } = this.props;
    return (
      <div className={cx('positioner')}>
        <div className={cx('logoWrapper')}> 
          <p>
            PingPong
          </p>
        </div>
        <div className={cx('content')}>
          <h2>Sign up</h2>
          <label for="email">E-mail</label>
          <button className={cx('btnCertification')}>E-mail Certification</button>
          <input type="text" id="email" name="email"/>
          <label for="certificationCode">Certification Code</label>
          <input type="text" id="certificationCode" name="certificationCode"/>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={this.handleChangePassword}/>

          <label for="passwordConfirm">Password Confirm</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" className={cx('last')} value={passwordConfirm} onChange={this.handleChangePassword}/>
          <p className={cx('passwordMatch', {isMatch: match})} ref={(ref) => {this.passwordMatch=ref}} ></p>
          <div>
          <button className={cx('btnSignup')} onClick={ () => {
            history.push('/signup2');
          }}>NEXT</button>
        </div>
        </div>
      </div>
    );
  }
}

export default Signup;