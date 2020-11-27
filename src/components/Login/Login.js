import React, { useState } from 'react';
import {
  Link,
  useHistory,
  Redirect,
} from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import { fetchUser } from '../../features/user/userSlice';
import Button from '../Button';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const email = useInput('flamer@aol.com');
  const password = useInput('flame123');

  const onClickHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
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
      console.error('something went wrong!', err);
    }
  };

  if (user.loggedIn) return <Redirect to="/home" />;

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
        <Button
          onClick={onClickHandler}
          type="primary"
          disabled={!email.value || !password.value}
        >
          Log in
        </Button>
        {loading && <p>loading...</p>}
        <hr />
        <Link to="/signup">Don't have an account? Create one</Link>
      </div>
    </section>
  )
};

export default Login;
