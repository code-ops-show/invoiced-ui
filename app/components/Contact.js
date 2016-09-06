import React from 'react';

const Contact = props =>
  <div className='pure-u-1-3'>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>;

export default Contact;
