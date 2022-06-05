import React from 'react';
import { Image } from 'react-bootstrap';

function Header() {
  return (
    <div id='header' className='d-flex justify-content-between align-items-center'>
      <div>
          <Image src='https://assets.website-files.com/5dd3f8176674eb0829f184d5/5dd41eb9049df81f8773946e_meteor-logo.svg' />
      </div>
        <h3 className='header_text'>To-Do</h3>
    </div>
  )
}

export default Header