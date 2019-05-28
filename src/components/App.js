import React, { Component } from 'react';
import AdultCertification from './AdultCertification';
import Mainpage from './Mainpage';
import Signup from './Signup';
import Modal from 'react-awesome-modal';


class App extends Component {
  state = {
    visible : true,
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
  render() {
  const { 
    handleClick
  } = this;
    return (
      <div>
        <Mainpage/>
        <Signup/>
        <Modal 
          visible={this.state.visible}
          effect="fadeInUp"
        >
          <AdultCertification onClick={handleClick}/>
        </Modal>
      </div>
    );
  }
}

export default App;