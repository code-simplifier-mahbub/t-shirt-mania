import React, { useContext } from 'react';
import { HouseContext } from '../Grandpa/Grandpa';

const AuntyChild = () => {
    const [house,setHouse] = useContext(HouseContext)
    
    return (
        <div>
            <h2>AuntyChild</h2>
            <p><small>House : {house}</small></p>
        </div>
    );
};

export default AuntyChild;