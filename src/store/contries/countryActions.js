import { FETCH_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FALIURE } from './countryTypes';

import axios from 'axios';

export const fetchContriesrequest = () => {
    return {
        type: FETCH_COUNTRIES
    }
}

export const getCountriesSuccess = (countries) => {
    return {
        type: GET_COUNTRIES_SUCCESS,
        payload: countries
    }
}

export const getCountriesFaliure = (err) => {
    return {
        type: GET_COUNTRIES_FALIURE,
        payload: err
    }
}

export const fetchContriesData = () => {
    return (dispatch) => {
        dispatch(fetchContriesrequest);
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => dispatch(getCountriesSuccess(res.data)))
            .catch((err) => dispatch(getCountriesFaliure(err.message)))
    }
}