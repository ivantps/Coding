import React from 'react';
import searchButton from './assets/searchButton.png';
import deleteButton from './assets/deleteButton.png';
import './SearchHistoryItem.css';
import { getCountryCode, capitalizeWord } from './utils';

const SearchHistoryItem = ({ city, index, handleSearch, handleDelete, getCurrentDateTime }) => (
    <li key={index} className='search-history-item'>
        <div className='search-history-item-content'>
            <span classname= 'item-name'>{capitalizeWord(city)}{getCountryCode(capitalizeWord(city)) ? `, ${getCountryCode(capitalizeWord(city))}` : ''}</span>
            <span className='item-info'>
                {getCurrentDateTime()}
            </span>
            <div className='search-history-actions'>
                <span className='search-button' onClick={() => handleSearch(city)}>
                    <img src={searchButton} alt="Search" />
                </span>
                <span className='delete-button' onClick={() => handleDelete(index)}>
                    <img src={deleteButton} alt="Delete" />
                </span>
            </div>
        </div>
    </li>
);

export default SearchHistoryItem;