import React from 'react';
import Page from 'components/Page';
import { Link } from 'react-router';

import buttons from 'styles/buttons.sass';

class New extends React.PureComponent {
  submitForm = (e) => {
    e.preventDefault();
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
