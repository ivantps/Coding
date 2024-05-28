import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import SearchHistory from './SearchHistory';
import { getWeatherData, getCurrentDateTime } from './utils';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (searchHistory.length > 0) {
      const lastSearchedCity = searchHistory[0];
      getWeatherData(lastSearchedCity, setWeatherData);
    }
  }, [searchHistory]);

  const handleSearch = (city) => {
    setSearchHistory([city, ...searchHistory.slice(0, 4)]);
    getWeatherData(city, setWeatherData);
  };

  const handleDelete = (index) => {
    const updatedHistory = [...searchHistory];
    updatedHistory.splice(index, 1);
    setSearchHistory(updatedHistory);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className='app-container'>
        <div className="weather-container">
          {weatherData ? (
            <>
              <WeatherDisplay weatherData={weatherData} />
              <SearchHistory
                searchHistory={searchHistory}
                handleSearch={handleSearch}
                handleDelete={handleDelete}
                getCurrentDateTime={getCurrentDateTime}
              />
            </>
          ) : (
            weatherData === null && <>
              <WeatherDisplay weatherData={weatherData} />
              <SearchHistory
                searchHistory={searchHistory}
                handleSearch={handleSearch}
                handleDelete={handleDelete}
                getCurrentDateTime={getCurrentDateTime}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;