import React from 'react';
import { inject, observer } from 'mobx-react';

import Spinner from 'components/Spinner';

import Welcome from './Welcome';
import Accounts from './Accounts';

@inject('account') @observer
class Dashboard extends React.PureComponent {
  componentDidMount() {
    const { account } = this.props;

    account.findAll();
  }

  renderDashboard() {
    const { collection, isLoading } = this.props.account;

    if (isLoading) return <Spinner />;
    if (collection.length === 0) return <Welcome />;

    return <Accounts.Collection />;
  }

  render() {
    return (
      <div>
        {this.renderDashboard()}
      </div>
    );
  }
}

export default Dashboard;
