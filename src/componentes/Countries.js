import React, { useEffect } from 'react';
import { fetchContriesData } from '../store';
import { useSelector, useDispatch } from 'react-redux';


const Countries = () => {
    const countriesData = useSelector(state => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContriesData());
    }, [])

    return (countriesData.loading ? <h3>Countries are loading ...</h3> :
        (
            countriesData.countries.map((el, index) => {
                return <div key={index}>
                    <h3>{el.name}</h3>
                    <img style={{ width: '200px' }} src={el.flag} alt="the country flag" />
                </div>
            })
        )
    )
}

export default Countries;
