import React, { Component } from 'react';
import AdultCertification from './AdultCertification';
import Mainpage from './Mainpage';
import Signup from './Signup/Signup';
import Signup2 from './Signup/Signup2';
import Login from './Login';
import Menu from './Menu';
import TermAndPolicy from '../components/TermAndPolicy'
import { Route } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import styles from './App.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class App extends Component {
  state = {
    visible : true,
    menuOpen: false,
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  handleClick = (bool) => {
    if (bool === 'false') {
      alert("You have to be an adult to use this website!");
    } else {
      this.closeModal();
    }
  }
  
  handleTermAndPolicy = () => {
    this.closeModal();
  }

  handleSlideToggle = () => {
    this.setState({
      ...this.state,
      showSlider: !this.state.showSlider,
    });
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
  const { 
    handleClick,
    handleTermAndPolicy,
  } = this;
    return (
      <div>
        <Modal 
          visible={this.state.visible}
          effect="fadeInUp"
        >
          <AdultCertification onClick={handleClick} onLinkClick={handleTermAndPolicy}/>
        </Modal>
        <div className={cx('upperWapper')}>
          <div className={cx('upperInner')}>
            <div className={cx('upperInnerLeft')}>
              <div>
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
              <div className={cx('logo')}>PingPong</div>
            </div>
            <div>
              <button className={cx('login')} >Log In</button>
              <button>Sign Up</button>
            </div>
          </div>     
        </div>
        <Route exact path='/' component={Mainpage}/>
        <Route path='/signup1' component={Signup}/>
        <Route path='/signup2' component={Signup2}/>
        <Route path='/login' component={Login}/>
        <Route path='/termAndPolicy' component={TermAndPolicy}/>
      </div>
    );
  }
}

export default App;