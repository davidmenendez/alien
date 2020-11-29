import React, { useState } from 'react';
import Page from '../Page';
import Select from '../Select';
import useInput from '../../hooks/useInput';
import Button from '../Button';
import Spinner from '../Spinner';
import api from '../../utils/api';

const Arena = () => {
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState(null);
  const level = useInput(1);
  const getLevels = () => {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    };
    return arr;
  }
  const levels = getLevels();
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
  };
  return (
    <Page withSidebar>
      <h2>Welcome to the arena!</h2>
      <h3>Choose your challenge level</h3>
      <Select
        id="level"
        label="Level"
        value={level.value}
        onChange={level.onChange}
        options={levels}
      />
      <Button
        type="primary"
        onClick={onClickHandler}
      >
        Battle!
      </Button>
      {loading && <Spinner />}
      {log && log.map((row, id) => <p key={id}>{row}</p>)}
    </Page>
  );
};

export default Arena;
