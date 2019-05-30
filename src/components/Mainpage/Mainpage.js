import React, { Component } from 'react';
import styles from './Mainpage.scss';
import classNames from 'classnames/bind';
import Postlist from '../Postlist';
import Searchbar from '../Searchbar'

const cx = classNames.bind(styles);

class Mainpage extends Component {
  state = {
    posts : [ 
    {
      writer: 'JessieAultman',
      title: 'What is the best way to prepare for the Salesforce ADM 201 exam?',
      answers : 2,
    },
    {
      writer: 'Nithanxom',
      title: 'Where can I buy the best cannabis in my state?',
      answers : 8,
    },
    {
      writer: 'erichamm',
      title: 'I want to know the way to start enjoying cannabis',
      answers : 5
    },
    ],
  }
  render() {
    const { posts } = this.state;
    return (
      <div className={cx('positioner')}>
        <Searchbar />
        <Postlist posts={posts}/>
      </div>
    );
  }
}

export default Mainpage;