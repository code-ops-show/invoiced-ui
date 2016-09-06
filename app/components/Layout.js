import React from 'react';

const data = [
  { name: 'Zack Siri', email: 'zack@codemy.net' },
  { name: 'Savika', email: 'savika@example.com' },
  { name: 'Chad', email: 'chad@example.com' },
];

const Contact = props =>
  <div className='pure-u-1-3'>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>;

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        {data.map(info =>
          <Contact {...info} />
        )}
      </div>
    );
  }
}

export default Layout;
