import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { slide as Menu } from 'react-burger-menu'
import logo from "../../assets/encyclone-logo.png"


// import Auth from '../../utils/auth';

// const Burger = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (

//     <Menu>
//       {Auth.loggedIn() ? (
//         <>
//           <Link to="/">Home</Link>
//           <br />
//           <Link to="/login">Login</Link>
//           <br />
//           <Link to="/signup">Signup</Link>
//         </>
//       ) : (
//         <>
//           <Link to="/">Home</Link>
//           <br />
//           <Link onClick={logout}>Logout</Link>
//           <br />
//           <Link to="/me">Profile</Link>
//         </>
//       )}
//     </Menu>

//   )
// }

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  return (

    <header className="header-container bg-info text-dark mb-4 py-3 display-flex align-center">
      {/* <Burger></Burger> */}
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="home-link" to="/">
          <h1 className="encyclone-header m-0" style={{ fontSize: '3rem' }}>
            Encyclone
          </h1>
          <img className="logo" alt='booknado' src={logo}></img>

        </Link>


      </div>
    </header>
  );
};

export default Header;
