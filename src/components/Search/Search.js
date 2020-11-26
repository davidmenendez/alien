import React, { useState } from 'react';
import Page from '../Page';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import api from '../../utils/api';

const Search = () => {
  const name = useInput('');
  const [results, setResults] = useState(null);
  const onClickHandler = async () => {
    if (!name.value) return;
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
      <h3>Search</h3>
      <p>Find other aliens</p>
      <TextInput
        id="name"
        label="name"
        onChange={name.onChange}
        placeholder="name"
        type="text"
        value={name.value}
      />
      <button onClick={onClickHandler} className="button button--primary">search</button>
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
