import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div id='Layout' className='pure-g'>
        <div className='pure-u-1-3'>First</div>
        <div className='pure-u-1-3'>Second</div>
        <div className='pure-u-1-3'>Third</div>
      </div>
    );
  }
}

export default Layout;
