import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';

const Login = () => {
  const email = useInput('test@aol.com');
  const password = useInput('test1234');

  return (
    <section className="signup">
      <div className="signup-container">
        <h1>ALIEN!</h1>
        <h2>Welcome to the battle</h2>
        <h3>Login</h3>
        <TextInput
          id="email"
          label="email"
          onChange={email.onChange}
          placeholder="email"
          type="email"
          value={email.value}
        />
        <TextInput
          id="password"
          label="password"
          onChange={password.onChange}
          placeholder="password"
          type="password"
          value={password.value}
        />
        <button className="button button--primary">Log in</button>
        <hr />
        <Link to="/signup">Don't have an account? Create one</Link>
      </div>
    </section>
  )
};

export default Login;
