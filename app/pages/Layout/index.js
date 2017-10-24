import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import classNames from 'classnames';

import Modal from 'components/Modal';

import Guest from './Guest';
import Member from './Member';
import Navigation from './Navigation';
import styles from './index.sass';

@inject('user', 'settings') @observer
class Application extends React.Component {
  componentDidMount() {
    this.props.user.signIn();
  }

  setModal = (node) => {
    const { settings } = this.props;
    settings.layout.modal = node;
  }

  guestOrMember() {
    const { user } = this.props;

    if (user.signedIn) {
      return (<Member />);
    }

    return (<Guest />);
  }

  render() {
    return (
      <div id='Layout' className={styles.layout}>
        <div className={classNames('pure-menu', 'pure-menu-horizontal', 'pure-g', styles.mainNav)}>
          <div className='pure-u-2-24'>
            <Link to='/' className={classNames('pure-menu-heading', styles.heading)}>Invoiced</Link>
          </div>
          <div className='pure-u-18-24'>
            <Navigation />
          </div>
          <div className='pure-u-4-24 right'>
            {this.guestOrMember()}
          </div>
        </div>
        {this.props.children}
        <Modal ref={this.setModal} />
      </div>
    );
  }
}
 

export default { Application };
