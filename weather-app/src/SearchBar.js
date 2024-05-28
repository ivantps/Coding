import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchIcon from './assets/searchIcon.png';
import './SearchBar.css';
import { getCountryCode, capitalizeWord } from './utils';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    // onSearch(city); // comment off to exclude blank and invalid entries in search history
    // setCity(''); // comment off to exclude blank and invalid entries in search history
  
    const capatalizedTrimmed = capitalizeWord(city.trim());

    // Check if the city input is valid
    if (!capatalizedTrimmed) {
      toast.error('Not found');
    } else if (!getCountryCode(capatalizedTrimmed)) {
      toast.error('Not found');
    } else {
      onSearch(capatalizedTrimmed);
    }

    // Clear the city input in all cases
    setCity('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='searchbar'>
      <input type="text" value={city} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Country"
      />
      <button className='searchButton' onClick={handleSearch}>
        <ToastContainer position='top-center' toastClassName='custom-toast' />
        <img src={searchIcon} alt="Search" className="searchIcon" />
      </button>
    </div>
  );
};

export default SearchBar;