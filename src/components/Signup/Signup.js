import React, { useState } from 'react';
import TextInput from '../TextInput';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('test');
  const [email, setEmail] = useState('test@aol.com');
  const [password, setPassword] = useState('test1234');

  return (
    <section className="signup">
      <div className="signup-container">
        <h1>ALIEN</h1>
        <h2>Welcome to the battle!</h2>
        <h3>Sign up below</h3>
        <TextInput
          id="name"
          label="name"
          onChange={setName}
          placeholder="name"
          type="text"
          value={name}
        />
        <TextInput
          id="email"
          label="email"
          onChange={setEmail}
          placeholder="email"
          type="email"
          value={email}
        />
        <TextInput
          id="password"
          label="password"
          onChange={setPassword}
          placeholder="password"
          type="password"
          value={password}
        />
        <button>join</button>
      </div>
    </section>
  );
};

export default Signup;
