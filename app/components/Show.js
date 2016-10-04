import React from 'react';

import data from './data';

class Show extends React.Component {
  componentWillMount() {
    this.setState({
      contact: data.filter(c => c.id === parseInt(this.props.params.contactId, 10))[0],
    });
  }

  render() {
    return (
      <div id='Show'>
        <h1>{this.state.contact.name}</h1>
      </div>
    );
  }
}

export default Show;
