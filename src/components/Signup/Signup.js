import React, { Component } from 'react';
import styles from './Signup.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Signup extends Component {
  state = {
    password: '',
    match: false,
    email: '',
    emailOk: false,
  }

  handleChangePassword = (e) => {
    this.setState({
      ...this.state,
      password : e.target.value
    });
  } 

  handleChangePasswordConfirm = (e) => {
    const tempPassword = e.target.value;
    const { password } = this.state;
    if(password && tempPassword && (password !== tempPassword)) {
      this.setState({
        ...this.state,
        match: false
      });
      this.passwordMatch.innerHTML = 'Don\'t Match';
    } else if (password && tempPassword && (password === tempPassword)) {
      this.setState({
        ...this.state,
        match: true
      });
      this.passwordMatch.innerHTML = 'Match';
    } 
  } 

  handleVerificationEmail = (e) => {
    const regExp =  /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const tempEmail = e.target.value;

    if (tempEmail.match(regExp) != null) {
      this.verificationEmail.innerHTML = 'Valid E-mail';  
      this.setState({
        ...this.state,
        email: tempEmail,
        emailOk: true,
      });   
    } else {
      this.verificationEmail.innerHTML = 'Not Valid E-mail';
      this.setState({
        ...this.state,
        email: '',
        emailOk: false,
      });   
    }
  }


  render() {
    const { password, match, emailOk } = this.state;
    const { history } = this.props;
    return (
      <div className={cx('positioner')}>
        <div className={cx('logoWrapper')}> 
          <p>
            PingPong
          </p>
        </div>
        <div className={cx('content')}>
          <h2>Sign Up</h2>
          <label for="email">E-mail</label>
          <button className={cx('btnCertification')}>E-mail Certification</button>
          <input type="text" id="email" name="email" onChange={this.handleVerificationEmail}/>
          <p className={cx('verificationEmail', {isOK: emailOk})} ref={(ref) => {this.verificationEmail=ref}} ></p>
          <label for="certificationCode">Certification Code</label>
          <input type="text" id="certificationCode" name="certificationCode"/>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={this.handleChangePassword}/>

          <label for="passwordConfirm">Password Confirm</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" className={cx('last')} onChange={this.handleChangePasswordConfirm}/>
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