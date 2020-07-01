import React from 'react';
import axios from 'axios';
import CountrySelect from './components/CountrySelect';
import CountryInfo from './components/CountryInfo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: '',
      selectedCountryInfo: [],
      namesCodes: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          countries: data,
        });
      });
  }

  handleSelectCountry = (event) => {
    const selectedCountry = event.target.value;
    this.setState({ selectedCountry });
    this.getSelectedCountryInfo(selectedCountry);
  };

  getSelectedCountryInfo(selectedCountry) {
    const selectedCountryInfo = this.state.countries.find(
      (country) => selectedCountry === country.name && country,
    );
    this.setState({ selectedCountryInfo });
  }

  getCodeName = (border) => {
    const { countries } = this.state;
    const countryBorder = countries.filter((country) =>
      border === country.alpha3Code ? country.name : '',
    );
    return countryBorder[0].name;
  };

  getCodeFlag = (border) => {
    const { countries } = this.state;
    const countryBorder = countries.filter((country) =>
      border === country.alpha3Code ? country.flag : '',
    );
    return countryBorder[0].flag;
  };

  render() {
    const { countries } = this.state;
    return (
      <div>
        <CountrySelect
          countryNamesList={countries.map((country) => country.name)}
          selectedCountry={this.state.selectedCountry}
          handleSelectCountry={this.handleSelectCountry}
        />
        <CountryInfo
          selectedCountryInfo={this.state.selectedCountryInfo}
          getSelectedCountryInfo={this.getSelectedCountryInfo}
          selectedCountry={this.state.selectedCountry}
          getCodeName={this.getCodeName}
          getCodeFlag={this.getCodeFlag}
        />
      </div>
    );
  }
}

export default App;
