import React, { useContext } from "react";
import { HouseContext } from "../Grandpa/Grandpa";

const Myself = () => {
  const [house, setHouse] = useContext(HouseContext);
  const newHouse = parseFloat(house);
  return (
    <div>
      <h2>Myself</h2>
      <p>
        <small>House: {newHouse}</small>
      </p>
      <button onClick={() => setHouse(newHouse + 1)}>Increase House</button>
    </div>
  );
};

export default Myself;
