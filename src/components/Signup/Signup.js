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
    return (
      <div className={cx('sign-template')}>
        <div>
          <label for="email">E-mail</label>
          <input type="text" id="email" name="email"/>
          <button>E-mail Certification</button>
        </div>
        <div>
          <label for="certificationCode">Certification Code</label>
          <input type="text" id="certificationCode" name="certificationCode"/>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={this.handleChangePassword}/>
        </div>
        <div>
          <label for="passwordConfirm">Password Confirm</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={this.handleChangePassword}/>
          <p className={cx('passwordMatch', {isMatch: match})} ref={(ref) => {this.passwordMatch=ref}} ></p>
        </div>
        <h3>
          <button>SIGN UP</button>
        </h3>
      </div>
    );
  }
}

export default Signup;