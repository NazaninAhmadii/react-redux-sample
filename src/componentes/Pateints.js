import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatient } from '../store';


const Pateints = () => {
    const patientsData = useSelector(state => state.patient);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPatient())
    }, [])

    return (patientsData) ? (
        (patientsData.loading) ? (<h3>Loading Data ...</h3>) :
            (<ul>
                {/* {console.log('this is data : ', patientsData)} */}
                {patientsData.patientsInfo.map((el) => {
                    return <li key={el.id}>
                        <h3>{el.userName}</h3>
                        <h5>{el.userDob}</h5>
                    </li>
                })}
            </ul>)
    ) :
        (
            <h3>Loading Page ...</h3>
        )

}

export default Pateints;