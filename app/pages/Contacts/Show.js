import React from 'react';
import { observer } from 'mobx-react';

@observer(['contacts'])
class Show extends React.Component {
  componentWillMount() {
    const contact = this.props.contacts.find(this.props.params.contactId);
    this.setState({ contact });
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
