import React, { useContext } from 'react';
import { HouseContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const [house, setHouse] = useContext(HouseContext)

    return (
        <div>
            <h2>cousin : </h2>
            <p><small>House : {house}</small></p>
        </div>
    );
};

export default Cousin;