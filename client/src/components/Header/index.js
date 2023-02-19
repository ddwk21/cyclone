import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'


import Auth from '../../utils/auth';

const Burger =() => {
  return (
    <Menu>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/signup">Signup</Link>
     </Menu>
  )
}

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center" id='header-container'>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Encyclone
          </h1>
          
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
