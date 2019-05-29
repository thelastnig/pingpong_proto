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
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}>
          <Menu closeCallback={this.closeMenu.bind(this)}/>
        </CheeseburgerMenu>
        
        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu.bind(this)}
          width={32}
          height={24}
          strokeWidth={3}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.5}
        />     

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