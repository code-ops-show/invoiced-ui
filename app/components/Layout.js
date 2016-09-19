import React from 'react';

import Contact from './Contact';
import data from './data';

class Layout extends React.Component {
  addContact = (e) => {
    e.preventDefault();

    console.log('clicked!!');
  }

  render() {
    return (
      <div id='Layout'>
        <a href='#' className='pure-button' onClick={this.addContact}>Add Contact</a>
        <div className='pure-g'>
          {data.map(info =>
            <Contact key={info.id} {...info} />
          )}
        </div>
      </div>
    );
  }
}

export default Layout;
