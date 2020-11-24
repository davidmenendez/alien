import React from 'react';
import { Link } from 'react-router-dom';
import Select from '../Select';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import './Signup.scss';

const Signup = () => {
  const name = useInput('test');
  const color = useInput('red');
  const email = useInput('test@aol.com');
  const password = useInput('test1234');
  const colors = ['red', 'green', 'blue', 'grey'];

  return (
    <section className="signup">
      <div className="signup-container">
        <h1>ALIEN!</h1>
        <h2>Welcome to the battle</h2>
        <h3>Sign up below</h3>
        <TextInput
          id="name"
          label="name"
          onChange={name.onChange}
          placeholder="name"
          type="text"
          value={name.value}
        />
        <Select
          id="color"
          label="color"
          onChange={color.onChange}
          options={colors}
          value={color.value}
        />
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
        <button className="button button--primary">Join</button>
        <hr />
        <Link to="/">Have an account? Log in</Link>
      </div>
    </section>
  );
};

export default Signup;
