import { combineReducers } from 'redux';

import patientInfoReducer from './patients/patientReducer';
import countryReducer from './contries/countryReducer';

const rootReducer = combineReducers({
    patient: patientInfoReducer,
    country: countryReducer
})

export default rootReducer;