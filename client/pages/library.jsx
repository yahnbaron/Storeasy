import React from 'react';
import NavBar from '../components/nav-bar';

export default function Library(props) {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <h2>Welcome to The Library</h2>
      </div>
    </div>
  );
}
