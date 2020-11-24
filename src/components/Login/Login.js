import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const email = useInput('test@aol.com');
  const password = useInput('test1234');

  const onClickHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api');
      if (!response.ok) throw new Error(response.status);
      const { data } = await response.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error('something went wrong!', err);
    }
  };

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
        <button onClick={onClickHandler} className="button button--primary">Log in</button>
        {loading && <p>loading...</p>}
        {data && <p>{data}</p>}
        <hr />
        <Link to="/signup">Don't have an account? Create one</Link>
      </div>
    </section>
  )
};

export default Login;
