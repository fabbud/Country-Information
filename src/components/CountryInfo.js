import React from 'react';
import './CountryInfo.css';
import NumberFormat from 'react-number-format';

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedCountryInfo, getCodeName, getCodeFlag } = this.props;
    if (this.props.selectedCountry === '') {
      return '';
    } else {
      return (
        <div className="ext">
          <div className="country-card">
            <div className="country-flag">
              <img src={selectedCountryInfo.flag} alt="country flag" />
            </div>
            <div className="country-name">
              <div>
                <h2>{selectedCountryInfo.name}</h2>
                <p className="subtitle">{selectedCountryInfo.nativeName}</p>
              </div>
            </div>
            <div className="region-sub-region">
              <p>
                {selectedCountryInfo.region} | {selectedCountryInfo.subregion}
              </p>
            </div>
            <div className="cap-den-area-pop">
              <div className="cap-den-area-pop-div">
                <p>Capital: {selectedCountryInfo.capital}</p>
                <p>Demonym: {selectedCountryInfo.demonym}</p>
                <p>
                  Area:{' '}
                  <NumberFormat
                    value={selectedCountryInfo.area}
                    displayType={'text'}
                    thousandSeparator={true}
                  />{' '}
                  km<sup className="super">2</sup>
                </p>
                <p>
                  Population:{' '}
                  <NumberFormat
                    value={selectedCountryInfo.population}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </p>
              </div>
            </div>
            <div className="lang-title">
              <p>Languages</p>
            </div>
            <div className="lang">
              <ul>
                {selectedCountryInfo.languages.map((language) => (
                  <li>{language.name}</li>
                ))}
              </ul>
            </div>
            <div className="currencies-title">
              <p>Currencies</p>
            </div>
            <div className="currencies">
              <ul>
                {selectedCountryInfo.currencies.map((currency) => (
                  <li>
                    {currency.symbol} {currency.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="borders-title">
              <p>Borders</p>
            </div>
            <div className="borders">
              <ul>
                {selectedCountryInfo.borders.map((border) => (
                  <li>
                    {getCodeName(border)}{' '}
                    <img
                      className="border-flag"
                      src={getCodeFlag(border)}
                      alt="border country flag"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CountryInfo;
