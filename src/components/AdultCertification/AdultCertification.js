import React, { Component } from 'react';
import styles from './AdultCertification.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class AdultCertification extends Component{
  render () {
    const { onClick } = this.props;
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
      <div className={cx('page-template')}>
        <h3>Ping Pong</h3>
        <p>Welcome to Ping Pong, the best cannabis site.</p>
        <div className={cx('content')}>
          <p>Where are you from?</p>
          <select>
              {countriesOption}
          </select>
          <p>Are you an adult in your state?</p>
          <button value='true' onClick={() => onClick(this.buttonYes.value)} ref={(ref) => {this.buttonYes=ref}}>Yes</button>    
          <button value='false' onClick={() => onClick(this.buttonNo.value)} ref={(ref) => {this.buttonNo=ref}}>No</button>
          <div>
            <input type="checkbox" />Remember me for 30 days. I confirm that this is not a shared device. 
          </div>
          <p>By accessing this site, you accept the Terms of Use and Privacy Policy.</p>
        </div>
      </div>
    );
  }
}

export default AdultCertification;