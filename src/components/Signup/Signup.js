import React, { useState } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../features/user/userSlice';
import Select from '../Select';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import Button from '../Button';
import './Signup.scss';

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const name = useInput('flamer');
  const color = useInput('red');
  const email = useInput('flamer@aol.com');
  const password = useInput('flame123');
  const colors = ['red', 'green', 'blue', 'grey'];

  const onClickHandler = async () => {
    setLoading(true);
    if (error) setError('');
    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          color: color.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error);
      setLoading(false);
      const token = json.data;
      localStorage.setItem('alienToken', token);
      dispatch(fetchUser());
      history.push('/home');
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error('signup error!!', err.message);
    }
  };

  const buttonDisabled = (
    !name.value ||
    !color.value ||
    !email.value ||
    !password.value
  );

  return (
    <>
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
      <Button
        onClick={onClickHandler}
        type="primary"
        disabled={buttonDisabled}
      >
        Join
        </Button>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <hr />
      <Link to="/">Have an account? Log in</Link>
    </>
  );
};

export default Signup;
