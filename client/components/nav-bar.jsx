import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row align-center">
            <div className="column-auto">
              <a className="hamburger" >
                <i className="fa-solid fa-bars" />
              </a>
            </div>
            <div className="column-auto logo">
              <p>Storeasy</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
