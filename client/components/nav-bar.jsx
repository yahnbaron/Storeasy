import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeMenu = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <div>
        <div className={`overlay ${this.state.isOpen ? 'visible' : 'hidden'}`} onClick={this.closeMenu} />
        <header>
          <div className="container">
            <div className="row align-center">
              <div className="column-auto">
                <a className="hamburger" onClick={this.toggleMenu}>
                  <i className="fa-solid fa-bars" />
                </a>
              </div>
              <div className="column-auto logo">
                <a className='logo-text' href='#'>Storeasy</a>
              </div>
            </div>
          </div>
        </header>
        <div className={`menu-drawer ${this.state.isOpen ? 'open' : 'closed'}`}>
          <div className='container'>
            <div className='row'>
              <div className='column-20 menu'>
                <h2>Menu</h2>
                <a href='#' onClick={this.closeMenu}>Home</a>
                <a href='#library' onClick={this.closeMenu}>Library</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
