import React from 'react';
import { inject, observer } from 'mobx-react';

import buttons from 'styles/buttons.sass';

import styles from './Welcome.sass';

import cashRegister from './create-account.svg';

const Example = props =>
  <p>{props.hello} inserted Content!</p>;


@inject('settings') @observer
class Welcome extends React.PureComponent {
  openModal = (e) => {
    e.preventDefault();

    const { settings } = this.props;

    settings.layout.modal.setContent(
      <Example hello="It's Me" />
    );
    settings.layout.modal.open();
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
      </div>
    );
  }
}

export default Welcome;
