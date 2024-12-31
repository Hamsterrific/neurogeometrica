import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <div className='content'>
        <div className='content-block'>
          <h2>Address:</h2>
          <p>Armenia, Yerevan 0001, str. Moskovyan 3a</p>
        </div>
        <div className='content-block'>
          <h2>Legal entity:</h2>
          <p>Micromoment Software LLC</p>
        </div>
        <div className='content-block'>
          <h2>Email:</h2>
          <p>
            <a className='link-mail' href='mailto:neurogeometrica@gmail.com'>
              neurogeometrica@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
