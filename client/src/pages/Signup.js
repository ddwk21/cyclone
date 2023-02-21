import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="">
      <div className="">
        <div className="signup-container">
          <h4 className="signup-header">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form>
                <div className="signup-box">
                  <input
                    className="signup-username"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <label>Username</label>
                </div>
                <div className="signup-box">
                  <input
                    className="signup-email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <label>Email</label>
                </div>
                <div className="signup-box">
                  <input className="signup-password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange} />
                  <label>Password</label>
                </div>
                <button
                  className="signup-btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};


export default Signup;
