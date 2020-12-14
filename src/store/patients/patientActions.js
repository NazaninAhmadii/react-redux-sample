import { GET_PATIENTS_INFO, GET_PATIENTS_SUCCESS, GET_PATIENTS_FALIURE } from './patientTypes';
import axios from 'axios';
//action creator
export const requestPatientInfo = () => {
    return {
        type: GET_PATIENTS_INFO
    }
}

export const getPatientSuccess = (patientsInfo) => {
    return {
        type: GET_PATIENTS_SUCCESS,
        payload: patientsInfo
    }
}

export const getPatientFaliure = (error) => {
    return {
        type: GET_PATIENTS_FALIURE,
        payload: error
    }
}

export const fetchPatient = () => {
    return (dispatch) => {
        dispatch(requestPatientInfo)
        axios.get('https://jsonmock.hackerrank.com/api/medical_records')
            .then((res) => {
                const patients = res.data.data;
                dispatch(getPatientSuccess(patients));
            })
            .catch((err) => {
                const errMsg = err.message;
                dispatch(getPatientFaliure(errMsg));
            })
    }
}