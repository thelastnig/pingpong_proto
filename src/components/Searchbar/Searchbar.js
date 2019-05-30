import React, { Component } from 'react';
import styles from './Searchbar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Searchbar extends Component {
  render() {
    const placeholder = 'Search question';
    return (
      <div className={cx('positioner')}>
        <div className={cx('inputWrap')}>
          <input type="text" className={cx('search')} placeholder={placeholder}/>
          <button className={cx('button')}>Search</button>
        </div>
        <div className={cx('select')}>
          <div className={cx('recent')}>Most Recent
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;