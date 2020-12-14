import { GET_PATIENTS_INFO, GET_PATIENTS_SUCCESS, GET_PATIENTS_FALIURE } from './patientTypes';

const initialState = {
    loading: false,
    patientsInfo: [],
    error: ""
}

const patientInfoReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_PATIENTS_INFO: return {
            ...state,
            loaing: true,
            patientsInfo: [],
            error: ""
        }
        case GET_PATIENTS_SUCCESS: return {
            ...state,
            loading: false,
            patientsInfo: actions.payload,
            error: ""
        }
        case GET_PATIENTS_FALIURE: return {
            ...state,
            loading: false,
            patientsInfo: [],
            error: actions.payload
        }
        default: return state
    }
}

export default patientInfoReducer;