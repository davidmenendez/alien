import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../TextInput';
import Button from '../Button';
import api from '../../utils/api';
import { fetchUser } from '../../features/user/userSlice';

const Bank = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [credits, setCredits] = useState('');
  const onClickHandler = async () => {
    try {
      await api('user/bank', {
        method: 'PUT',
        body: JSON.stringify({
          credits,
        }),
      });
      dispatch(fetchUser());
    } catch (err) {
      console.error('something broke', err);
    }
  };
  return (
    <>
      <h2>The bank</h2>
      <h3>Add more credits while supplies last!</h3>
      <p>You currently have {user.credits.toLocaleString()} credits</p>
      <TextInput
        type="number"
        placeholder="Amount"
        label="Amount"
        onChange={e => setCredits(e.target.value)}
        id="credits"
        valie={credits}
      />
      <Button
        type="primary"
        onClick={onClickHandler}
        disabled={!credits}
      >
        Add
      </Button>
    </>
  );
};

export default Bank;
