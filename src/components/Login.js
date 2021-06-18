import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory();

  const [state, setState] = useState({
    credentials: {
      username: 'Lambda',
      password: 'School',
    }
  });

  const [error, setError] = useState('');
  //replace with error state

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  const login = e => {
    e.preventDefault();
    if (state.credentials.username === ''|| state.credentials.password === '') {
      setError('Username or Password is not valid.')
      console.log(error.error);
    }
  }

  useEffect(
    axios.post('http://localhost:5000/api/login', state.credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/bubblepage')
    })
    .catch(err =>{
      console.log(err)
    })
  );

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={login}>
        <input type='text'
          name='username'
          placeholder='Username'
          value={state.credentials.username}
          onChange={handleChange}
          data-testid='username'/>

          <input type='text'
            name='password'
            placeholder='Password'
            value={state.credentials.password}
            onChange={handleChange}
            data-testid='password' />
            <button>Login</button>
      </form>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.