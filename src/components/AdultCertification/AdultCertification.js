import React, { Component } from 'react';
import styles from './AdultCertification.scss';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

class AdultCertification extends Component{
  render () {
    const { onClick, history, onLinkClick } = this.props;
    const countries = [
      { id: 'USA',
        text: 'United States'
      }, 
      { id: 'CND',
        text: 'Canada'
      }, 
    ];
    const countriesOption = countries.map(country => (
      <option>{country.text}</option>
    ));
    
    return (
      <div className={cx('positioner')}>
        <div className={cx('content')}>
          <p className={cx('logo')}>PingPong</p>
          <p className={cx('welcome')}>Welcome to Ping Pong, the best cannabis site.</p>
          <p>Where are you from?</p>
          <select>
              {countriesOption}
          </select>
          <p>Are you an adult in your state?</p>
          <button className={cx('btn')} value='true' onClick={() => onClick(this.buttonYes.value)} ref={(ref) => {this.buttonYes=ref}}>Yes</button>    
          <button className={cx('btn', {right: true})} value='false' onClick={() => onClick(this.buttonNo.value)} ref={(ref) => {this.buttonNo=ref}}>No</button>
          <div>
            <input type="checkbox" /><span>Remember me for 30 days. I confirm that this is not a shared device.</span>
          </div>
          <p>By accessing this site, you accept the <span className={cx('spanLink')} onClick={() => {
            onLinkClick();
            history.push('/termAndPolicy');
          }}>Terms of Use</span> and <span className={cx('spanLink')} onClick={() => {
            onLinkClick();
            history.push('/termAndPolicy');
          }}>Privacy Policy.</span></p>
        </div>
      </div>
    );
  }
}

export default withRouter(AdultCertification);