import React from 'react';
import './CountrySelect.css';

function CountrySelect(props) {
  const { countryNamesList, selectedCountry, handleSelectCountry } = props;
  return (
    <div className="select-area">
      <select
        className="select-country"
        name="countryList"
        value={selectedCountry}
        onChange={handleSelectCountry}
      >
        <option className="option-disabled" value="" disabled>
          Select Country
        </option>
        {countryNamesList.map((country) => (
          <option
            className="option"
            key={country}
            value={country}
            label={country}
          >
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelect;
