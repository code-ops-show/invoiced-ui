import React from 'react';
import { observer } from 'mobx-react';

import { Link } from 'react-router';

import styles from './Contact.sass';

@observer(['contacts'])
class Contact extends React.Component {
  removeContact = (e) => {
    e.preventDefault();
    this.props.contacts.remove(this.props.id);
  }

  render() {
    return (
      <div className={`${styles.contact} pure-u-1-3`}>
        <h2>
          <Link to={`/contacts/${this.props.id}`}>
            {this.props.first_name} {this.props.last_name}
          </Link>
        </h2>
        <p>{this.props.email}</p>
        <a href='#'
           className={`${styles.removeButton} pure-button`}
           onClick={this.removeContact}>
           Remove
        </a>
      </div>
    );
  }
}

export default Contact;
