import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatient } from '../store';

const uniqueObject = (arr, value) => {
    //get the values that we wan to do filter base on
    const newArr = arr.map((el) => el[value])
    //get the index of the uniqe object
    const iUniqueArr = newArr.map((e, i) => (newArr.indexOf(e) === i && i))
    const uniqueArr = iUniqueArr.filter((e) => arr[e]).map((e) => arr[e])
    return uniqueArr;
}


const Pateints = () => {
    const patientsData = useSelector(state => state.patient);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPatient());

    }, [])

    return (patientsData.loading) ? (<h3>Loading Data ...</h3>) :
        (<ul>
            {uniqueObject(patientsData.patientsInfo, 'userName').map((el) => {
                return <li key={el.id}>
                    <h3>{el.userName}</h3>
                    <h5>{el.userDob}</h5>
                </li>
            })}
        </ul>)

}

export default Pateints;