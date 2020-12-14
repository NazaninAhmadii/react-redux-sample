import { combineReducers } from 'redux';

import patientInfoReducer from './patients/patientReducer';

const rootReducer = combineReducers({
    patient: patientInfoReducer
})

export default rootReducer;