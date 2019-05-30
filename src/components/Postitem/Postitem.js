import React, { Component } from 'react';
import styles from './Postitem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Postitem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.done !== nextProps.done;
  }
  render() {
    const { post } = this.props;
    return (
      <div className={cx('positioner')}>
        <div className={cx('title')}>
          {post.title}
        </div>
        <div className={cx('buttom')}>
          <span className={cx('state')}>★ In Progress</span>
          <span>{post.writer}</span>
          <span className={cx('answer')}>{post.answers} Answers</span>
        </div>
      </div>
    );
  }
}

export default Postitem;