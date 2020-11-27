import React, { useState } from 'react';
import Page from '../Page';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import api from '../../utils/api';
import Button from '../Button';

const Search = () => {
  const name = useInput('');
  const [results, setResults] = useState(null);
  const onClickHandler = async () => {
    try {
      const response = await api(`user/findUser?name=${name.value}`);
      const json = await response.json();
      setResults(json.results);
    } catch (err) {
      console.error('something broke', err);
    }
  };
  return (
    <Page>
      <h2>Search</h2>
      <h3>Find other aliens</h3>
      <TextInput
        id="name"
        label="name"
        onChange={name.onChange}
        placeholder="name"
        type="text"
        value={name.value}
      />
      <Button
        onClick={onClickHandler}
        type="primary"
        disabled={!name.value}
      >
        search
      </Button>
      <h3>results</h3>
      {results && (
        <div className="search-results">
          {results.length ? (
            <ul>
              {results.map(user => (
                <li key={user.id}>
                  {user.name}
                </li>
              ))}
            </ul>
          ) : (
              <p>no results</p>
            )}
        </div>
      )}
    </Page>
  );
};

export default Search;
