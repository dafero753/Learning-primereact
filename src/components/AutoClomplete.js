import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../service/CountryService';

export default function AutoComplete () {
    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let filteredCountries;
            if (!event.query.trim().length) {
                filteredCountries = [...countries];
            }
            else {
                filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(filteredCountries);
        }, 250);
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={`showcase/demo/images/flag_placeholder.png`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    }

    return (
        <div className="card">
            <h5>Basic</h5>
            <AutoComplete value={selectedCountry1} suggestions={filteredCountries} completeMethod={searchCountry} field="name" onChange={(e) => setSelectedCountry1(e.value)} />

            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection itemTemplate={itemTemplate} onChange={(e) => setSelectedCountry2(e.value)} />

            <h5>Multiple</h5>
            <span className="p-fluid">
                <AutoComplete value={selectedCountries} suggestions={filteredCountries} completeMethod={searchCountry} field="name" multiple onChange={(e) => setSelectedCountries(e.value)} />
            </span>
        </div>
    )
}