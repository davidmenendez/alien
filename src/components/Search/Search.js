import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Page';
import TextInput from '../TextInput';
import useInput from '../../hooks/useInput';
import api from '../../utils/api';
import Button from '../Button';
import Table from '../Table';
import Spinner from '../Spinner';

const Search = () => {
  const name = useInput('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasResults = Boolean(results.length);
  const cols = ['name', 'id', 'level'];
  const formattedResults = results.reduce((acc, cur) => {
    const obj = {
      ...cur,
      name: <Link to={`/profile/${cur.id}`}>{cur.name}</Link>,
    };
    acc.push(obj);
    return acc;
  }, []);
  const onClickHandler = async () => {
    try {
      setResults([]);
      setLoading(true);
      const response = await api(`user/search?name=${name.value}`);
      const json = await response.json();
      setResults(json.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error('something broke', err);
    }
  };
  return (
    <Page withSidebar>
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
      {hasResults && (
        <div className="search-results">
          <h3>results</h3>
          {results.length ? (
            <Table
              cols={cols}
              rows={formattedResults}
            />
          ) : (
              <p>no results</p>
            )}
        </div>
      )}
    </Page>
  );
};

export default Search;
