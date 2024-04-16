import axios from "axios";

const http = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
});

export class CountryApiService {
    getContries() {
        return http.get("all");
    }
    getCountryByName(name) {
        return http.get(`name/${name}`);
    }
    getCountryByCode(code) {
        return http.get(`alpha/${code}`);
    }
}