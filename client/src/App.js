import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./components/css/App.css"

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import { slide as Menu } from 'react-burger-menu'
import  { Link } from 'react-router-dom'
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Burger = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <Menu className='burger-container'>
      {Auth.loggedIn() ? (
        <>
        <Link to="/">Home</Link>
        <br />
        <br />
        <Link onClick={logout}>Logout</Link>
        <br />
        <br />
        <Link to="/me">Profile</Link>
      </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <br />
          <br />
          <Link to="/login">Login</Link>
          <br />
          <br />
          <Link to="/signup">Signup</Link>
        </>
      )}
    </Menu>

  )
}



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <Burger></Burger>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/me"
                element={<Profile />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
