import React from 'react';

export default function NavBar(props) {
  return (
    <header>
      <div className="container">
        <div className="row align-center">
          <div className="column-auto">
            <i className="fa-solid fa-bars" />
          </div>
          <div className="column-auto logo">
            <p>Storeasy</p>
          </div>
        </div>
      </div>
    </header>
  );
}
