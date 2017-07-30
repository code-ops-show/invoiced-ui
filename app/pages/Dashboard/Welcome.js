import React from 'react';

import buttons from 'styles/buttons.sass';

import styles from './Welcome.sass';

import cashRegister from './create-account.svg';

import Modal from './Modal';

class Welcome extends React.PureComponent {
  openModal = (e) => {
    e.preventDefault();

    this.modal.open();
  }

  render() {
    return (
      <div className={styles.box}>
        <img src={cashRegister} width='256' />
        <p className={styles.message}>
          Welcome to Invoiced! We need you to create an account before we can continue.

          Let's create our first account.
        </p>
        <a href='#' onClick={this.openModal} className={`pure-button ${buttons.gold}`}>
          Lets Get Started!
        </a>
        <Modal ref={(node) => { this.modal = node; }} />
      </div>
    );
  }
}

export default Welcome;
