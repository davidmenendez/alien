import React from 'react';
import Page from '../Page';
import Select from '../Select';
import useInput from '../../hooks/useInput';
import Button from '../Button';

const Arena = () => {
  const level = useInput(1);
  const getLevels = () => {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    };
    return arr;
  }
  const levels = getLevels();
  const onClickHandler = () => {
    console.log(level.value);
  };
  return (
    <Page withSidebar>
      <h2>Welcome to the arena!</h2>
      <p>Choose your challenge level</p>
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
    </Page>
  );
};

export default Arena;
