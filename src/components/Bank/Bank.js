import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../TextInput';
import Button from '../Button';
import api from '../../utils/api';
import { fetchUser } from '../../features/user/userSlice';
import Spinner from '../Spinner';

const Bank = () => {
  const dispatch = useDispatch();
  const {
    user,
    status,
  } = useSelector(state => state.user);
  const [credits, setCredits] = useState(user.credits);
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
  if (status === 'loading') return <Spinner />;
  return (
    <>
      <h2 className="page-header">The bank</h2>
      <h3>Add more credits while supplies last!</h3>
      <p>You currently have {user.credits.toLocaleString()} credits</p>
      <TextInput
        type="number"
        placeholder="Amount"
        label="Amount"
        onChange={e => setCredits(e.target.value)}
        id="credits"
        value={credits}
      />
      <Button
        type="primary"
        onClick={onClickHandler}
        disabled={!credits}
      >
        Save
      </Button>
    </>
  );
};

export default Bank;
