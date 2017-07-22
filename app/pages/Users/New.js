import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';

import Page from 'components/Page';
import buttons from 'styles/buttons.sass';

@inject('user') @observer
class New extends React.PureComponent {
  submitForm = (e) => {
    e.preventDefault();

    const { user } = this.props;

    user.create(
      this.email.value,
      this.password.value,
      this.password_confirm.value
    );
  }

  render() {
    const extras = <Link to='/users/sign_in'>Want to login?</Link>;

    return (
      <Page.Auth title='Sign Up' extras={extras}>
        <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
          <label>Email</label>
          <input type='email' ref={node => { this.email = node; }}
                placeholder='Email' className='pure-input-1' />
          <label>Password</label>
          <input type='password' ref={node => { this.password = node; }} className='pure-input-1' placeholder='Password' />
          <input type='password' ref={node => { this.password_confirm = node; }} className='pure-input-1' placeholder='Password Confirmation' />
          <button className={`pure-button pure-input-1 ${buttons.base}`}>
            Sign Up
          </button>
        </form>
      </Page.Auth>
    );
  }
}

export default New;
