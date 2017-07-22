import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('account') @observer
class Dashboard extends React.PureComponent {
  componentDidMount() {
    const { account } = this.props;

    account.findAll();
  }

  render() {
    const { collection, isLoading } = this.props.account;

    console.log(collection);

    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default Dashboard;
