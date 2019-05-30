import React, { Component } from 'react';
import styles from './Upperbar.scss';
import classNames from 'classnames/bind';
import Menu from '../Menu';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(styles);

class Upperbar extends Component {
  state = {
    menuOpen: false,
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    const { history } = this.props;
    const style = {
      cursor: 'pointer',
    }
    return (
      <div className={cx('upperWapper')}>
        <div className={cx('upperInner')}>
          <div className={cx('upperInnerLeft')}>
            <div style={style}>
            <CheeseburgerMenu
              isOpen={this.state.menuOpen}
              closeCallback={this.closeMenu.bind(this)}>
              <Menu closeCallback={this.closeMenu.bind(this)}/>
            </CheeseburgerMenu>
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={this.openMenu.bind(this)}
              width={24}
              height={16}
              strokeWidth={3}
              rotate={0}
              color='#087f5b'
              borderRadius={0}
              animationDuration={0.5}
            />
            </div>
            <div className={cx('logo')} onClick={ () => {
              history.push('/');
            }}>PingPong</div>
          </div>
          <div>
            <button className={cx('login')} onClick={ () => {
              history.push('/login');
            }}>Log In</button>
            <button onClick={ () => {
              history.push('/signup1');
            }}>Sign Up</button>
          </div>
        </div>     
      </div>
    );
  }
}

export default withRouter(Upperbar);