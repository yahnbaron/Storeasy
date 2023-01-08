import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Storeasy</Link>
              </div>
            </div>
          </div>
        </header>
        <div className={`menu-drawer ${this.state.isOpen ? 'open' : 'closed'}`}>
          <div className='container'>
            <div className='row'>
              <div className='column-20 menu'>
                <h2>Menu</h2>
                <a onClick={this.closeMenu}>Home</a>
                <a onClick={this.closeMenu}>Library</a>
                <a onClick={this.closeMenu}>About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
