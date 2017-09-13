import React from 'react';
import classNames from 'classnames';
import { extendObservable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router';

import buttons from 'styles/buttons.sass';

import Spinner from 'components/Spinner';
import Page from 'components/Page';

import stores from 'stores';

import Contact from './Contact';

import styles from './Collection.sass';

@withRouter @inject('endpoint') @observer
class Collection extends React.Component {
  constructor(props) {
    super(props);

    const { endpoint, params } = props;
    const { accountId } = params;


    extendObservable(this, {
      contacts: new stores.Contact(endpoint, `v1/${accountId}`),
    });
  }

  componentDidMount() {
    this.contacts.findAll();
  }

  addContact = (e) => {
    e.preventDefault();

    this.contacts.create({}, {
      contact: {
        first_name: this.refs.first_name.value,
        last_name: this.refs.last_name.value,
        email: this.refs.email.value,
      },
    }, {
      201: (response) => {
        this.contacts.appendToCollection(response.data.contact);
      },
    });

    this.refs.first_name.value = null;
    this.refs.last_name.value = null;
    this.refs.email.value = null;
  };

  newContact = () =>
    <div className={classNames('pure-g', styles.newContact)}>
      <div className='pure-u-12-24'>
        <form className='pure-form' onSubmit={this.addContact}>
          <input ref='email' type='email' placeholder='example@example.com' />
          <input ref='first_name' type='text' placeholder='First Name' />
          <input ref='last_name' type='text' placeholder='Last Name' />

          <button type="submit" className="pure-button pure-button-primary">Add</button>
        </form>
      </div>
    </div>;

  render() {
    const { collection, isLoading } = this.contacts;

    if (isLoading) { return <Spinner />; }

    return (
      <Page.Actionable title='Contacts' action={this.newContact()}>
        <div className='pure-g'>
          {collection.slice().map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </Page.Actionable>
    );
  }
}

export default Collection;
