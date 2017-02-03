import React from 'react';
import { observer } from 'mobx-react';

import Contact from './Contact';

import styles from './Collection.sass';

@observer(['contacts'])
class Layout extends React.Component {
  componentWillMount() {
    this.props.contacts.fetchAll();
  }

  addContact = (e) => {
    e.preventDefault();

    this.props.contacts.add({
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
    });

    this.refs.first_name.value = null;
    this.refs.last_name.value = null;
    this.refs.email.value = null;
  };

  newContact = () =>
    <div className='pure-g'>
      <div className='pure-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <fieldset>
            <legend>New Contact</legend>

            <input ref='email' type='email' placeholder='example@example.com' />
            <input ref='first_name' type='text' placeholder='First Name' />
            <input ref='last_name' type='text' placeholder='Last Name' />

            <button type="submit" className="pure-button pure-button-primary">Add</button>
          </fieldset>
        </form>
      </div>
    </div>;

  render() {
    return (
      <div id='Collection' className={styles.main}>
        {this.newContact()}
        <div className='pure-g'>
          {this.props.contacts.all.slice().map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
