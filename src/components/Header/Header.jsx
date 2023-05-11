import React, { Component } from 'react';
import Logo from 'components/Logo/Logo';

export class Header extends Component {
  render() {
    return (
      <header class="header">
        <Logo />
        <button type="button" className="menu">
          Topics list
        </button>
        <button type="button" className="menu">
          Previos topic
        </button>
        <button type="button" className="menu">
          Next topic
        </button>
      </header>
    );
  }
}

export default Header;
