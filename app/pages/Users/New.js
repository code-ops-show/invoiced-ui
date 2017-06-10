import React from 'react';
import Page from 'components/Page';
import { Link } from 'react-router';

class New extends React.PureComponent {
  render() {
    const extras = <Link to='/users/sign_in'>Want to login?</Link>;

    return (
      <Page.Auth title='Sign Up' extras={extras}>
        blah
      </Page.Auth>
    );
  }
}

export default New;
