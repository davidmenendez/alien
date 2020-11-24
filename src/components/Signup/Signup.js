import React from 'react';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import './Signup.scss';

const Signup = () => {
  const name = useInput('test');
  const email = useInput('test@aol.com');
  const password = useInput('test1234');

  return (
    <section className="signup">
      <div className="signup-container">
        <h1>ALIEN</h1>
        <h2>Welcome to the battle!</h2>
        <h3>Sign up below</h3>
        <TextInput
          id="name"
          label="name"
          onChange={name.onChange}
          placeholder="name"
          type="text"
          value={name.value}
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
        <button>join</button>
      </div>
    </section>
  );
};

export default Signup;
