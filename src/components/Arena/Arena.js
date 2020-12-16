import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from '../Select';
import useInput from '../../hooks/useInput';
import Button from '../Button';
import Spinner from '../Spinner';
import api from '../../utils/api';
import { fetchUser } from '../../features/user/userSlice';

const Arena = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState(null);
  const level = useInput(1);

  const getLevels = () => {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    };
    return arr;
  };

  const onClickHandler = async () => {
    setLoading(true);
    const response = await api('fight/bot', {
      method: 'POST',
      body: JSON.stringify({
        level: level.value,
      }),
    });
    const { data } = await response.json();
    setLog(data);
    setLoading(false);
    dispatch(fetchUser());
  };

  const dead = user.currentHp === 0;

  return (
    <>
      <h2 className="page-header">Welcome to the arena!</h2>
      <h3>Choose your challenge level</h3>
      {dead ? (
        <p>You appear to be dead. Better get on down to the <Link to="/hospital">hospital</Link>.</p>
      ) : (
          <>
            <Select
              id="level"
              label="Level"
              value={level.value}
              onChange={level.onChange}
              options={getLevels()}
            />
            <Button
              type="primary"
              onClick={onClickHandler}
            >
              Battle!
            </Button>
          </>
        )}
      {loading && <Spinner />}
      {log && log.map((row, id) => <p key={id}>{row}</p>)}
    </>
  );
};

export default Arena;
