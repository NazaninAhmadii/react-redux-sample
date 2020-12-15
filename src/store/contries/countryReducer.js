import { FETCH_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FALIURE } from './countryTypes';


const initialState = {
    loading: false,
    countries: [],
    error: ""
}

const countryReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_COUNTRIES: return {
            ...state,
            loading: true,
            countries: [],
            error: ""
        }
        case GET_COUNTRIES_SUCCESS: return {
            ...state,
            loading: false,
            countries: actions.payload,
            error: ""
        }
        case GET_COUNTRIES_FALIURE: return {
            ...state,
            loading: false,
            countries: [],
            error: actions.payload
        }
        default: return state
    }
}

export default countryReducer;