import axios from 'axios'

export default class CountryService {

    getCountries() {
        return axios.get('../data/country.json')
            .then(res => res.data.data);
    }
}