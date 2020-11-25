import React, { useState } from 'react';
import Page from '../Page';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';

const Search = () => {
  const name = useInput('');
  const [results, setResults] = useState(null);
  const onClickHandler = async () => {
    if (!name.value) return;
    try {
      const token = localStorage.getItem('alienToken');
      const response = await fetch(`/api/user/findUser?name=${name.value}`, {
        headers: {
          'authorization': `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setResults(json.results);
    } catch (err) {
      console.error('something broke', err);
    }
  };
  return (
    <Page>
      <h3>search</h3>
      <p>find other aliens</p>
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
