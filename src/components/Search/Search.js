import React, { useState, useEffect, useCallback } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import Page from '../Page';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import api from '../../utils/api';
import Button from '../Button';
import Table from '../Table';
import Spinner from '../Spinner';
import { getUrlParameterValue } from '../../utils/url';

const Search = () => {
  const history = useHistory();
  const name = useInput(getUrlParameterValue('query') || '');
  const [previouslySearched, setPreviouslySearched] = useState(getUrlParameterValue('query'));
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasResults = Boolean(results.length);
  const hasPreviousSearch = previouslySearched !== null;
  const cols = ['name', 'id', 'level'];

  const formattedResults = results.reduce((acc, cur) => {
    const obj = {
      ...cur,
      name: <Link to={`/profile/${cur.id}`}>{cur.name}</Link>,
    };
    acc.push(obj);
    return acc;
  }, []);

  const searchUsers = useCallback(
    async query => {
      try {
        setResults([]);
        setLoading(true);
        const response = await api(`user/search?query=${query}`);
        const json = await response.json();
        setResults(json.results);
        setLoading(false);
        setPreviouslySearched(query);
        history.push(`search?query=${query}`);
      } catch (err) {
        setLoading(false);
        console.error('something broke', err);
      }
    },
    [history]
  );

  const onClickHandler = () => {
    searchUsers(name.value);
  };

  useEffect(() => {
    const initialQuery = getUrlParameterValue('query');
    if (window.location.search && initialQuery !== null) {
      searchUsers(initialQuery);
    }
  }, [searchUsers]);

  return (
    <>
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
      >
        search
      </Button>
      {loading && <Spinner />}
      {hasPreviousSearch && (
        <div className="search-results">
          <h3>search results for "{previouslySearched}"</h3>
          {hasResults ? (
            <Table
              cols={cols}
              rows={formattedResults}
            />
          ) : (
              <p>Nothing found. Try again!</p>
            )}
        </div>
      )}
    </>
  );
};

export default Search;
