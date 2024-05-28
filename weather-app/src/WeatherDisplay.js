import React from 'react';
import './WeatherDisplay.css';
import sunIcon from './assets/sun.png';
import { capitalizeWord } from './utils';

const WeatherDisplay = ({ weatherData }) => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    // return currentDate.toLocaleString('en-US', options).replace(/\//g, '-');
    // Generate the locale string
    let dateTimeString = currentDate.toLocaleString('en-US', options).replace(/\//g, '-');

    // Regex to find the time part
    dateTimeString = dateTimeString.replace(/(\d{1,2}):(\d{2})(:\d{2})? (AM|PM)/, (match, hour, minute, seconds, period) => {
      // Pad the hour with a leading zero if necessary
      hour = hour.padStart(2, '0');
      return `${hour}:${minute}${seconds ? seconds : ''} ${period}`;
    });

    return dateTimeString;
  };

  return (
    <div className='parent-container'>
      <div className='weather-box'>
        {weatherData && (
          <div className='weather-content'>
            <img src={sunIcon} alt="Weather Icon" className="weather-image" />
            <p className='todays-weather'>Today's Weather</p>
            <p className='mainTemp'>{Math.round(weatherData.main.temp)}°</p>
            <p className='high-low'>
              H: {Math.round(weatherData.main.temp_max)}° L: {Math.round(weatherData.main.temp_min)}°
            </p>
            <div className='weather-info'>
              <span className='weather-data-name'>
                {weatherData.name}, {weatherData.sys.country}
              </span>
              <span className='weather-small-info time'>
                {getCurrentDateTime()}
              </span>
              <span className='weather-small-info humidity'>
                Humidity: {weatherData.main.humidity}%
              </span>
              <span className='weather-small-info description'>{capitalizeWord(weatherData.weather[0].description)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;