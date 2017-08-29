import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('account') @observer
class Collection extends React.PureComponent {
  render() {
    const { account } = this.props;
    const { collection, isLoading } = account;

    if (isLoading) return null;

    console.log(collection);

    return (
      <div>
        {collection.map((acc) =>
          <div key={acc.id}>{acc.name}</div>
        )}
      </div>
    );
  }
}

export default Collection;
