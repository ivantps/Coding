import React from 'react';
import SearchHistoryItem from './SearchHistoryItem';
import NoRecord from './NoRecord';
import './SearchHistory.css'

const SearchHistory = ({ searchHistory, handleSearch, handleDelete, getCurrentDateTime }) => (
    <div className='search-history-box'>
      <h1 className='search-history'>Search History</h1>
      {searchHistory.length === 0 ? (
        <NoRecord />
      ) : (
        <ul>
          {searchHistory.map((city, index) => (
            <SearchHistoryItem
              key={index}
              city={city}
              index={index}
              handleSearch={handleSearch}
              handleDelete={handleDelete}
              getCurrentDateTime={getCurrentDateTime}
            />
          ))}
        </ul>
      )}
    </div>
  );

export default SearchHistory;